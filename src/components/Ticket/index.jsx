import React from 'react';
import PropTypes from 'prop-types';
import Segment from '../Segment';
import { TicketContainer, Header, Logo } from './styles';

const Ticket = props => {
  const { carrier, price, segments } = props;
  const [departure, destination] = segments;
  return (
    <TicketContainer>
      <Header>
        <h2>{`${price.toLocaleString()} Р`}</h2>
        <Logo>
          <img
            style={{ display: 'block', marginLeft: 'auto', marginRight: '2rem' }}
            alt="logo"
            src={`//pics.avs.io/99/36/${carrier}.png`}
          />
        </Logo>
      </Header>
      <Segment key="1" {...departure} />
      <Segment key="2" {...destination} />
    </TicketContainer>
  );
};

Ticket.propTypes = {
  carrier: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  segments: PropTypes.instanceOf(Array).isRequired,
};

export default Ticket;
