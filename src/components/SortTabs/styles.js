import styled from 'styled-components';

export const SortTabsContainer = styled.div`
  margin-bottom: 1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  overflow: hidden;
`;

export const Tab = styled.div`
  font-size: 0.725rem;
  padding: 1.25rem;
  flex-grow: 1;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s;
  color: ${({ label, active }) => (label === active ? '#fff' : '#000')};
  background-color: ${({ label, active, theme }) => (label === active ? theme.primary : '#fff')};
`;
