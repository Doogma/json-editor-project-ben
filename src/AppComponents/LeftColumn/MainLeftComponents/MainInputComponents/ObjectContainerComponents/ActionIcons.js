import React from 'react';

import { IconsContainer, DeleteIcon, AddData, CheckIcon, CancelIcon } from '../../../../../assets/Icons';

const ActionIcons = ({ onSave, onCancel, onDelete, onAdd, isAdd }) => {
  return (
    <IconsContainer>
      {isAdd ? (
        <>
          <div title={'save'} onClick={onSave}>
            <CheckIcon />
          </div>
          <div title={'cancel'} onClick={onCancel}>
            <CancelIcon />
          </div>
        </>
      ) : (
        <>
          <div title={'delete'} onClick={onDelete}>
            <DeleteIcon />
          </div>
          <div title={'add'} onClick={onAdd}>
            <AddData />
          </div>
        </>
      )}
    </IconsContainer>
  );
};

export default ActionIcons;
