import React from 'react';

import ObjectContainer from './MainInputComponents/ObjectContainer';
import StringContainer from './MainInputComponents/StringContainer';

import { MainInputContainer } from './MainInput.styled';

function MainInput({ data, onInputDelete, onInputSave, onInputAdd }) {
  return (
    <MainInputContainer>
      {Object.keys(data).map((key, index) => {
        if (typeof data[key] === 'string') {
          return <StringContainer key={index} name={key} value={data[key]} reference={''} onInputDelete={onInputDelete} onInputSave={onInputSave} onInputAdd={onInputAdd} />;
        } else {
          return <ObjectContainer key={index} name={key} value={data[key]} reference={''} onInputDelete={onInputDelete} onInputSave={onInputSave} onInputAdd={onInputAdd} />;
        }
      })}
    </MainInputContainer>
  );
}

export default MainInput;
