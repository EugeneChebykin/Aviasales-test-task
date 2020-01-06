import React from 'react';
import LogoContainer from './styles';
import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo} alt="logo" />
    </LogoContainer>
  );
};

export default Logo;
