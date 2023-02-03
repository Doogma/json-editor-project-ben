import React, { useEffect, useState } from 'react';
import { StringActionIcons } from './ActionIcons';

import { StringBox, StringName, StringValue, StringInput } from './StringContainer.styled';

function StringContainer({ name, value, reference, onInputDelete, onInputSave, isNew, onCancel, onInputAdd, inputComponent }) {
  const [isEdit, setIsEdit] = useState(false);
  const [payload, setPayload] = useState({});

  const onChangeHandler = (e) => {
    let nameArray = e.target.name.split('♣');
    setPayload({ nameArray, value: e.target.value });
  };

  const onSaveHandler = () => {
    setIsEdit(false);
    isEdit && onInputSave(payload);
    isNew && onInputAdd(payload.value, payload.nameArray);
  };

  const onCancelHandler = () => {
    setIsEdit(false);
    onCancel();
  };

  const onEditHandler = () => {
    setIsEdit(true);
  };

  const onDeleteHandler = () => {
    if (window.confirm('Are you sure you want to delete this entry?') === true) {
      onInputDelete(reference + '♣' + name);
    }
  };

  useEffect(() => {
    let tempName = reference + '♣' + name;
    let nameArray = tempName.split('♣');
    setPayload({ nameArray, value });
  }, [name, reference, value]);

  return (
    <StringBox>
      <StringName isEdit={isEdit || isNew}>{name}:</StringName>
      {isEdit || isNew ? <StringInput type="text" defaultValue={value} name={reference + '♣' + name} onChange={onChangeHandler} ref={inputComponent} /> : <StringValue>{value}</StringValue>}
      <StringActionIcons onSave={onSaveHandler} onCancel={onCancelHandler} onEdit={onEditHandler} onDelete={onDeleteHandler} isNew={isNew} isEdit={isEdit} />
    </StringBox>
  );
}

export default StringContainer;
