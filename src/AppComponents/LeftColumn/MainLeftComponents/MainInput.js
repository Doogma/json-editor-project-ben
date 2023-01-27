import React from 'react';

import ObjectContainer from './MainInputComponents/ObjectContainer';

import { MainInputContainer } from './MainInput.styled';

function MainInput({ data }) {
  return (
    <MainInputContainer>
      {Object.keys(data).map((key, index) => {
        return <ObjectContainer key={index} name={key} value={data[key]} />;
      })}
    </MainInputContainer>
  );
}

export default MainInput;
