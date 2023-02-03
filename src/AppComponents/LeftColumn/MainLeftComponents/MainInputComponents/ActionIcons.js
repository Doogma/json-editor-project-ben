import React from 'react';

import { IconsContainer, DeleteIcon, AddData, EditIcon, CancelIcon, CheckIcon } from '../../../../assets/Icons';

export const ObjectActionIcons = ({ onDelete, onAdd, isAdd }) => {
  return (
    <IconsContainer>
      {!isAdd && (
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

export const StringActionIcons = ({ onSave, onCancel, onEdit, onDelete, isNew, isEdit }) => {
  return (
    <IconsContainer>
      {isEdit || isNew ? (
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
          <div title={'edit'} onClick={onEdit}>
            <EditIcon />
          </div>
          <div title={'delete'} onClick={onDelete}>
            <DeleteIcon />
          </div>
        </>
      )}
    </IconsContainer>
  );
};
