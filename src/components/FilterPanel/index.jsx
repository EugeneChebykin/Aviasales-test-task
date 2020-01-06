import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import { FilterBlock, Header, Body, Label } from './styles';

const TransferSort = props => {
  const { items, onChange } = props;
  return (
    <div style={{ flexGrow: 1 }}>
      <FilterBlock>
        <Header>Количество пересадок</Header>
        <Body>
          {items.map(({ name, text, isActive }) => (
            <Label key={name}>
              <Checkbox checked={isActive} onChange={onChange(name, !isActive)} />
              <span style={{ fontWeight: 'normal' }}>{text}</span>
            </Label>
          ))}
        </Body>
      </FilterBlock>
    </div>
  );
};

TransferSort.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TransferSort;
