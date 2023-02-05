import React, { useState } from 'react';

import StringContainer from './StringContainer';
import SelectModal from './ObjectContainerComponents/SelectModal';
import { ObjectActionIcons } from './ActionIcons';

import { ObjectBox, ObjectHead, ObjectHeadText, ObjectBody } from './ObjectContainer.styled';

function ObjectContainer({ name, value, isArray, reference, onInputDelete, onInputSave, onInputAdd, onCancel }) {
  const [isAdd, setIsAdd] = useState(false);
  const [type, setType] = useState('');
  const [newInputName, setNewInputName] = useState('');
  const [newInputValue, setNewInputValue] = useState('');
  const [newItemType, setNewItemType] = useState('STRING');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSaveNewHandler = (value, path) => {
    onInputAdd({ type, name: newInputName, value: value, newItemType, path });
    setIsAdd(false);
    setNewInputValue('');
  };

  const onSelectHandler = (itemType, itemName) => {
    if (itemType === 'STRING') {
      setIsAdd(true);
      setNewInputName(itemName);
      setNewItemType(itemType);
    }

    if (itemType === 'OBJECT' || itemType === 'ARRAY') {
      let path = (reference + '♣' + name + '♣' + itemName).split('♣');
      onInputAdd({ type, name: itemName, newItemType: itemType, path });
    }
    setModalIsOpen(false);
  };

  const onCancelHandler = () => {
    setModalIsOpen(false);
    setIsAdd(false);
  };

  const onDeleteHandler = () => {
    if (window.confirm('Are you sure you want to delete this entry?') === true) {
      onInputDelete(reference + '♣' + name);
    }
  };

  const onAddHandler = () => {
    typeof value === 'string' && setType('STRING');
    typeof value === 'object' && setType('OBJECT');
    value instanceof Array && setType('ARRAY');
    setModalIsOpen(true);
  };

  return (
    <ObjectBox isArray={isArray}>
      {modalIsOpen && <SelectModal closeModal={onCancelHandler} type={type} onSelect={onSelectHandler} />}
      <ObjectHead isArray={isArray}>
        <ObjectHeadText>{name}</ObjectHeadText>
        <ObjectActionIcons isAdd={isAdd} onDelete={onDeleteHandler} onAdd={onAddHandler} />
      </ObjectHead>
      <ObjectBody>
        {typeof value === 'object' && (
          <>
            {Object.keys(value).map((key, index) => {
              return (
                <div key={index}>
                  {typeof value[key] === 'string' && (
                    <StringContainer name={key} value={value[key]} reference={reference + '♣' + name} onInputDelete={onInputDelete} onInputSave={onInputSave} onCancel={onCancelHandler} onInputAdd={onSaveNewHandler} />
                  )}
                  {typeof value[key] === 'object' && (
                    <ObjectContainer
                      name={key}
                      value={value[key]}
                      isArray={typeof value[key] === 'object' && value[key] instanceof Array}
                      reference={reference + '♣' + name}
                      onInputDelete={onInputDelete}
                      onInputSave={onInputSave}
                      onInputAdd={onInputAdd}
                      onCancel={onCancel}
                    />
                  )}
                </div>
              );
            })}
          </>
        )}
        {typeof value === 'string' && <StringContainer name={name} value={value} onInputDelete={onInputDelete} onInputSave={onInputSave} />}
        {isAdd && newItemType === 'STRING' && <StringContainer name={newInputName} value={newInputValue} isNew={true} onCancel={onCancelHandler} onInputAdd={onSaveNewHandler} reference={reference + '♣' + name} />}
      </ObjectBody>
    </ObjectBox>
  );
}

export default ObjectContainer;
