import React, { useState } from 'react';

import StringContainer from './StringContainer';
import SelectModal from './ObjectContainerComponents/SelectModal';
import ActionIcons from './ObjectContainerComponents/ActionIcons';

import { ObjectBox, ObjectHead, ObjectHeadText, ObjectBody } from './ObjectContainer.styled';

function ObjectContainer({ name, value, isArray, reference, onInputDelete, onInputSave, onInputAdd }) {
  const [isAdd, setIsAdd] = useState(false);
  const [type, setType] = useState('');
  const [newInputName, setNewInputName] = useState('New Input Name');
  const [newInputValue, setNewInputValue] = useState('New Input Value');
  const [newItemType, setNewItemType] = useState('STRING');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSaveNewHandler = (value) => {
    console.log('I AM GROOT!: ', value);
    setIsAdd(false);
    onInputAdd({ type, name: newInputName, value: newInputValue });
  };

  const onSelectHandler = (itemType, name) => {
    setModalIsOpen(false);
    setIsAdd(true);
    setNewInputName(name);
    setNewItemType(itemType);
    console.log(itemType, name);
  };

  const onCancelHandler = () => {
    setModalIsOpen(false);
    setIsAdd(false);
  };

  const onDeleteHandler = () => {
    onInputDelete(reference + '♣' + name);
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
        <ActionIcons isAdd={isAdd} onSave={onSaveNewHandler} onCancel={onCancelHandler} onDelete={onDeleteHandler} onAdd={onAddHandler} />
      </ObjectHead>
      <ObjectBody>
        {typeof value === 'object' && (
          <>
            {Object.keys(value).map((key, index) => {
              return (
                <div key={index}>
                  {typeof value[key] === 'string' && <StringContainer name={key} value={value[key]} reference={reference + '♣' + name} onInputDelete={onInputDelete} onInputSave={onInputSave} onInputAdd={onSaveNewHandler} />}
                  {typeof value[key] === 'object' && (
                    <ObjectContainer
                      name={key}
                      value={value[key]}
                      isArray={typeof value[key] === 'object' && value[key] instanceof Array}
                      reference={reference + '♣' + name}
                      onInputDelete={onInputDelete}
                      onInputSave={onInputSave}
                      onCancel={onCancelHandler}
                      onInputAdd={onSaveNewHandler}
                    />
                  )}
                </div>
              );
            })}
            {isAdd && newItemType === 'OBJECT' && <StringContainer name={newInputName} value={'INPUT FROM OBJECT'} isNew={true} onInputAdd={onSaveNewHandler} />}
          </>
        )}
        {typeof value === 'string' && <StringContainer name={name} value={value} onInputDelete={onInputDelete} onInputSave={onInputSave} />}
        {isAdd && newItemType === 'STRING' && <StringContainer name={newInputName} value={'INPUT FROM STRING'} isNew={true} onCancel={onCancelHandler} onInputAdd={onSaveNewHandler} />}
      </ObjectBody>
    </ObjectBox>
  );
}

export default ObjectContainer;
