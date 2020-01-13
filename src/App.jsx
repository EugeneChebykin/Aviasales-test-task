import React, { Component } from 'react';
import axios from 'axios';
import { orderBy } from 'lodash';
import { ThemeProvider } from 'styled-components';
import { Main, Content } from './styles';
import './App.css';
import FilterPanel from './components/FilterPanel';
import TicketsList from './components/TicketsList';
import SortTabs from './components/SortTabs';
import Logo from './components/Logo';
import Loader from './components/Loader';

const theme = {
  primary: '#2196F3',
  checkbox: 'rgba(33, 150, 243, 0.3)',
};

class App extends Component {
  state = {
    activeTab: 'cheap',
    isLoading: true,
    tickets: [],
    filters: [
      { name: 'all', text: 'Все', isActive: false },
      { name: 'withoutTransfer', text: 'Без пересадок', isActive: true, stops: 0 },
      { name: 'oneTransfer', text: '1 пересадка', isActive: false, stops: 1 },
      { name: 'twoTransfers', text: '2 пересадки', isActive: false, stops: 2 },
      { name: 'threeTransfers', text: '3 пересадки', isActive: false, stops: 3 },
    ],
  };

  async componentDidMount() {
    const {
      data: { searchId },
    } = await this.getSearchKey();
    this.getTickets(searchId);
  }

  sortTickets = (tickets, label = 'cheap') => {
    const field =
      label === 'cheap' ? 'price' : obj => obj.segments.reduce((acc, cur) => acc + cur.duration, 0);
    return orderBy(tickets, [field], ['asc']);
  };

  filterTickets = tickets => {
    const { filters } = this.state;
    const activeStops = filters.filter(item => item.isActive).map(filter => filter.stops);
    const byStops = (obj, stops) =>
      obj.segments.every(segment => stops.includes(segment.stops.length));
    return tickets.filter(ticket => byStops(ticket, activeStops));
  };

  getSearchKey = () => axios.get('https://front-test.beta.aviasales.ru/search');

  getTickets = key => {
    const { tickets } = this.state;
    axios
      .get('https://front-test.beta.aviasales.ru/tickets', { params: { searchId: key } })
      .then(({ data }) => {
        this.setState({ tickets: [...tickets, ...data.tickets] });
        if (data.stop) {
          this.setState({ isLoading: false });
          return;
        }
        this.getTickets(key);
      })
      .catch(() => this.getTickets(key));
  };

  handleCheckbox = (name, isActive) => () => {
    if (name === 'all') {
      this.resetCheckboxes();
      return;
    }
    const { filters } = this.state;
    const newFilters = filters.map(elem => {
      return elem.name === name ? { ...elem, isActive } : elem;
    });
    this.setState({ filters: newFilters });
  };

  resetCheckboxes = () => {
    const { filters } = this.state;
    const { isActive } = filters.find(({ name }) => name === 'all');
    const newFilters = filters.map(elem => ({ ...elem, isActive: !isActive }));
    this.setState({ filters: newFilters });
  };

  handleTabChange = label => () => {
    this.setState({ activeTab: label });
  };

  render() {
    const { tickets, filters, activeTab, isLoading } = this.state;
    const filtered = this.filterTickets(tickets);
    const sorted = this.sortTickets(filtered, activeTab);
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Logo />
          <Main>
            <FilterPanel items={filters} onChange={this.handleCheckbox} />
            <Content>
              <SortTabs active={activeTab} onClick={this.handleTabChange} />
              {isLoading && <Loader />}
              <TicketsList items={sorted} isLoading={isLoading} />
            </Content>
          </Main>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
