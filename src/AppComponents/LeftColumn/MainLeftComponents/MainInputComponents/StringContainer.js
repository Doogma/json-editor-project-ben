import React, { useState } from 'react';

import { StringBox, StringName, StringValue, StringInput, Actions } from './MainInputComponents.styled';
import { FaEdit } from 'react-icons/fa';

function StringContainer({ name, value, reference, onInputChange }) {
  const [isEdit, setIsEdit] = useState(false);

  const enableEditHandler = () => {
    setIsEdit((prev) => !prev);
  };
  return (
    <StringBox>
      <StringName isEdit={isEdit}>{name}:</StringName>
      {isEdit ? <StringInput type="text" defaultValue={value} name={reference + '♣' + name} onChange={onInputChange} /> : <StringValue>{value}</StringValue>}

      <Actions onClick={enableEditHandler} isEdit={isEdit}>
        <FaEdit />
      </Actions>
    </StringBox>
  );
}

export default StringContainer;
