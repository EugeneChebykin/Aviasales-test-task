import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxContainer, VisibleCheckbox, HiddenCheckbox, Icon } from './styles';

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <VisibleCheckbox checked={checked}>
      <Icon viewBox="0 0 12 8">
        <path d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" />
      </Icon>
    </VisibleCheckbox>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
};

Checkbox.defaultProps = {
  className: '',
};

export default Checkbox;
