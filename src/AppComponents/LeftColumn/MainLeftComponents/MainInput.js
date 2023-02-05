import React, { useState } from 'react';

import ObjectContainer from './MainInputComponents/ObjectContainer';
import StringContainer from './MainInputComponents/StringContainer';

import SelectModal from './MainInputComponents/ObjectContainerComponents/SelectModal';
import { AddData } from '../../../assets/Icons';

import { MainInputContainer, FloatingIconContainer } from './MainInput.styled';

function MainInput({ data, onInputDelete, onInputSave, onInputAdd }) {
  const [isAdd, setIsAdd] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newInputName, setNewInputName] = useState('');
  const [newInputValue, setNewInputValue] = useState('');
  const [newItemType, setNewItemType] = useState('STRING');
  const type = 'OBJECT';

  const onCancelHandler = () => {
    setModalIsOpen(false);
    setIsAdd(false);
  };

  const onSelectHandler = (itemType, itemName) => {
    if (itemType === 'STRING') {
      setIsAdd(true);
      setNewInputName(itemName);
      setNewItemType(itemType);
    }

    if (itemType === 'OBJECT' || itemType === 'ARRAY') {
      let path = ['', itemName];
      onInputAdd({ type, name: itemName, newItemType: itemType, path });
    }
    setModalIsOpen(false);
  };

  const onSaveNewHandler = (value, path) => {
    onInputAdd({ type, name: newInputName, value: value, newItemType, path });
    setIsAdd(false);
    setNewInputValue('');
  };

  return (
    <MainInputContainer>
      {modalIsOpen && <SelectModal closeModal={onCancelHandler} type={type} onSelect={onSelectHandler} />}

      {!isAdd && (
        <FloatingIconContainer>
          <div title={'add'} onClick={() => setModalIsOpen(true)}>
            <AddData />
          </div>
          <span>Add New Item</span>
        </FloatingIconContainer>
      )}

      {Object.keys(data).map((key, index) => {
        if (typeof data[key] === 'string') {
          return <StringContainer key={index} name={key} value={data[key]} reference={''} onInputDelete={onInputDelete} onInputSave={onInputSave} onInputAdd={onInputAdd} />;
        } else {
          return <ObjectContainer key={index} name={key} value={data[key]} reference={''} onInputDelete={onInputDelete} onInputSave={onInputSave} onInputAdd={onInputAdd} />;
        }
      })}
      {isAdd && newItemType === 'STRING' && <StringContainer name={newInputName} value={newInputValue} isNew={true} onCancel={onCancelHandler} onInputAdd={onSaveNewHandler} />}
    </MainInputContainer>
  );
}

export default MainInput;
