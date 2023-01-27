import React from 'react';

import { StringBox, StringName, StringValue } from './MainInputComponents.styled';

function StringContainer({ name, value }) {
  return (
    <StringBox>
      <StringName>{name}:</StringName>
      <StringValue type="text" defaultValue={value} />
    </StringBox>
  );
}

export default StringContainer;
