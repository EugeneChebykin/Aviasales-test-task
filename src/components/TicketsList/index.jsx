import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import Ticket from '../Ticket';
import TicketsContainer from './styles';

const TicketsList = props => {
  const { items, isLoading } = props;
  const tickets = items.slice(0, 5).map(item => <Ticket key={uniqueId()} {...item} />);
  return tickets.length > 0 || isLoading ? (
    <TicketsContainer>{tickets}</TicketsContainer>
  ) : (
    <div style={{ textAlign: 'center' }}>Не найдено билетов</div>
  );
};

TicketsList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default TicketsList;
