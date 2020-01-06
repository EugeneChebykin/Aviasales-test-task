import React from 'react';
import LoaderContainer from './styles';

const Loader = () => {
  return (
    <LoaderContainer>
      <div className="lds-ellipsis" style={{ marginTop: '-30px' }}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoaderContainer>
  );
};

export default Loader;
