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
      <SelectOptions onClick={() => onSelect('OBJECT', itemName)}>Object</SelectOptions>
      <SelectOptions onClick={() => onSelect('ARRAY', itemName)}>Array</SelectOptions>
      <SelectOptions onClick={() => onSelect('STRING', itemName)}>String</SelectOptions>
    </Modal>
  );
};

export default SelectModal;
