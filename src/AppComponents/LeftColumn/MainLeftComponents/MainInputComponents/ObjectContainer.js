import React, { useState } from 'react';

import StringContainer from './StringContainer';

import { ObjectBox, ObjectHead, ObjectHeadText, ObjectBody } from './MainInputComponents.styled';
import { IconsContainer, DeleteIcon, AddData, CheckIcon, CancelIcon } from './Icons';

function ObjectContainer({ name, value, isArray, reference, onInputDelete, onInputSave, onInputAdd }) {
  const [isAdd, setIsAdd] = useState(false);
  const [type, setType] = useState('');
  const [newInputName, setNewInputName] = useState('New Input Name');
  const [newInputValue, setNewInputValue] = useState('New Input Value');

  const onAddHandler = () => {
    typeof value === 'string' && setType('STRING');
    typeof value === 'object' && setType('OBJECT');
    value instanceof Array && setType('ARRAY');
    onInputAdd({ type, name: newInputName, value: newInputValue });
  };

  return (
    <ObjectBox isArray={isArray}>
      <ObjectHead isArray={isArray}>
        <ObjectHeadText>{name}</ObjectHeadText>
        <IconsContainer>
          {isAdd ? (
            <>
              <div
                onClick={() => {
                  setIsAdd(false);
                }}
              >
                <CheckIcon />
              </div>
              <div
                onClick={() => {
                  setIsAdd(false);
                }}
              >
                <CancelIcon />
              </div>
            </>
          ) : (
            <>
              <div onClick={() => onInputDelete(reference + '♣' + name)}>
                <DeleteIcon />
              </div>
              <div
                onClick={() => {
                  setIsAdd(true);
                  onAddHandler();
                }}
              >
                <AddData />
              </div>
            </>
          )}
        </IconsContainer>
      </ObjectHead>
      <ObjectBody>
        {typeof value === 'object' && (
          <>
            {Object.keys(value).map((key, index) => {
              return (
                <div key={index}>
                  {typeof value[key] === 'string' && <StringContainer name={key} value={value[key]} reference={reference + '♣' + name} onInputDelete={onInputDelete} onInputSave={onInputSave} />}
                  {typeof value[key] === 'object' && (
                    <ObjectContainer name={key} value={value[key]} isArray={typeof value[key] === 'object' && value[key] instanceof Array} reference={reference + '♣' + name} onInputDelete={onInputDelete} onInputSave={onInputSave} />
                  )}
                </div>
              );
            })}
            {isAdd && type === 'OBJECT' && <StringContainer name={'I am goot!'} value={'INPUT FROM OBJECT'} />}
          </>
        )}
        {typeof value === 'string' && <StringContainer name={name} value={value} onInputDelete={onInputDelete} onInputSave={onInputSave} />}
        {isAdd && type === 'STRING' && <StringContainer name={'I am goot!'} value={'INPUT FROM STRING'} />}
      </ObjectBody>
    </ObjectBox>
  );
}

export default ObjectContainer;
