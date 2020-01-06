import styled from 'styled-components';

export const TicketContainer = styled.div`
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
`;

export const Header = styled.div`
  color: ${props => props.theme.primary};
  display: flex;
  h2 {
    margin: 0;
    flex-grow: 1;
    align-self: left;
  }
`;

export const Logo = styled.div`
  flex-grow: 1;
`;

export const Body = styled.div`
  margin-top: 0.5rem;
`;
