import React, { useState } from 'react';
import Modal from '../../../../../assets/Modal';

import { InputContainer, InputName, InputField, ModalHeader, SelectOptions } from './SelectModal.styled';

const SelectModal = ({ closeModal, type, onSelect }) => {
  const [itemName, setItemName] = useState();
  return (
    <Modal closeModal={closeModal}>
      {type !== 'ARRAY' && (
        <>
          <ModalHeader>Give new Item a Name</ModalHeader>
          <InputContainer>
            <InputName>Item Name</InputName>
            <InputField onChange={(e) => setItemName(e.target.value)} />
          </InputContainer>
        </>
      )}
      <ModalHeader>Click to Add Item of Type</ModalHeader>
      <SelectOptions onClick={() => (itemName || type === 'ARRAY' ? onSelect('OBJECT', itemName) : window.alert('Please enter an item name'))}>Object</SelectOptions>
      <SelectOptions onClick={() => (itemName || type === 'ARRAY' ? onSelect('ARRAY', itemName) : window.alert('Please enter an item name'))}>Array</SelectOptions>
      <SelectOptions onClick={() => (itemName || type === 'ARRAY' ? onSelect('STRING', itemName) : window.alert('Please enter an item name'))}>String</SelectOptions>
    </Modal>
  );
};

export default SelectModal;
