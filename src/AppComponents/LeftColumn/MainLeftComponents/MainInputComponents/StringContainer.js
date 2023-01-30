import React, { useState } from 'react';

import { StringBox, StringName, StringValue, StringInput } from './MainInputComponents.styled';
import { IconsContainer, EditIcon, DeleteIcon, CheckIcon } from './Icons';

function StringContainer({ name, value, reference, onInputChange, onInputDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <StringBox>
      <StringName isEdit={isEdit}>{name}:</StringName>
      {isEdit ? <StringInput type="text" defaultValue={value} name={reference + '♣' + name} onChange={onInputChange} /> : <StringValue>{value}</StringValue>}

      <IconsContainer>
        {isEdit ? (
          <div onClick={() => setIsEdit(false)}>
            <CheckIcon />
          </div>
        ) : (
          <div onClick={() => setIsEdit(true)}>
            <EditIcon />
          </div>
        )}
        <div onClick={() => onInputDelete(reference + '♣' + name)}>
          <DeleteIcon />
        </div>
      </IconsContainer>
    </StringBox>
  );
}

export default StringContainer;
