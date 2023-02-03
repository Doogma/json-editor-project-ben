import React, { useEffect, useState } from 'react';

import { StringBox, StringName, StringValue, StringInput } from './StringContainer.styled';
import { IconsContainer, EditIcon, DeleteIcon, CheckIcon, CancelIcon } from '../../../../assets/Icons';

function StringContainer({ name, value, reference, onInputDelete, onInputSave, isNew, onCancel, onInputAdd }) {
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
      <StringName isEdit={isEdit || isNew}>{name}:</StringName>
      {isEdit || isNew ? <StringInput type="text" defaultValue={value} name={reference + '♣' + name} onChange={onChangeHandler} /> : <StringValue>{value}</StringValue>}

      <IconsContainer>
        {isEdit || isNew ? (
          <>
            <div
              title={'save'}
              onClick={() => {
                setIsEdit(false);
                onInputSave(payload);
                isNew && onInputAdd(payload.value);
              }}
            >
              <CheckIcon />
            </div>
            <div
              title={'cancel'}
              onClick={() => {
                setIsEdit(false);
                onCancel();
              }}
            >
              <CancelIcon />
            </div>
          </>
        ) : (
          <>
            <div title={'edit'} onClick={() => setIsEdit(true)}>
              <EditIcon />
            </div>
            <div title={'delete'} onClick={() => onInputDelete(reference + '♣' + name)}>
              <DeleteIcon />
            </div>
          </>
        )}
      </IconsContainer>
    </StringBox>
  );
}

export default StringContainer;
