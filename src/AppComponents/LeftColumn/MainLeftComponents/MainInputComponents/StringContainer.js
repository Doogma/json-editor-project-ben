import React from 'react';

import { StringBox, StringName, StringValue } from './MainInputComponents.styled';

function StringContainer({ name, value, reference, onInputChange }) {
  return (
    <StringBox>
      <StringName>{name}:</StringName>
      <StringValue type="text" defaultValue={value} name={reference + '♣' + name} onChange={onInputChange} />
    </StringBox>
  );
}

export default StringContainer;
