import React, { useEffect, useState } from 'react';

import { StringBox, StringName, StringValue, StringInput } from './MainInputComponents.styled';
import { IconsContainer, EditIcon, DeleteIcon, CheckIcon, CancelIcon } from './Icons';

function StringContainer({ name, value, reference, onInputDelete, onInputSave }) {
  const [isEdit, setIsEdit] = useState(false);
  const [payload, setPayload] = useState({});

  const onChangeHandler = (e) => {
    let nameArray = e.target.name.split('♣');
    setPayload({ nameArray, value: e.target.value });
  };

  useEffect(() => {
    let tempName = reference + '♣' + name;
    let nameArray = tempName.split('♣');
    setPayload({ nameArray, value });
  }, [name, reference, value]);

  return (
    <StringBox>
      <StringName isEdit={isEdit}>{name}:</StringName>
      {isEdit ? <StringInput type="text" defaultValue={value} name={reference + '♣' + name} onChange={onChangeHandler} /> : <StringValue>{value}</StringValue>}

      <IconsContainer>
        {isEdit ? (
          <>
            <div
              onClick={() => {
                setIsEdit(false);
                onInputSave(payload);
              }}
            >
              <CheckIcon />
            </div>
            <div
              onClick={() => {
                setIsEdit(false);
              }}
            >
              <CancelIcon />
            </div>
          </>
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
