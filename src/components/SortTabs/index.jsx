import React from 'react';
import PropTypes from 'prop-types';
import { SortTabsContainer, Tab } from './styles';

const SortTabs = props => {
  const { active, onClick } = props;
  return (
    <SortTabsContainer>
      <Tab label="cheap" active={active} onClick={onClick('cheap')}>
        самый дешевый
      </Tab>
      <Tab label="fast" active={active} onClick={onClick('fast')}>
        самый быстрый
      </Tab>
    </SortTabsContainer>
  );
};

SortTabs.propTypes = {
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SortTabs;
