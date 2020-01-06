import styled from 'styled-components';

export const FilterBlock = styled.div`
  padding: 1rem 0;
  margin: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-height: 240px;
`;

export const Header = styled.h3`
  font-size: 0.75rem;
  padding: 0 20px 0.5rem;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
  color: #4a4a4a;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
`;

export const Label = styled.label`
  padding: 0.5rem 0;
  padding-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f1fcff;
  }
`;
