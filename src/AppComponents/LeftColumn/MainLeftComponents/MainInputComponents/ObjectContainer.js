import React from 'react';

import StringContainer from './StringContainer';

import { ObjectBox, ObjectHead, ObjectHeadText, ObjectBody } from './MainInputComponents.styled';
import { IconsContainer, DeleteIcon } from './Icons';

function ObjectContainer({ name, value, isArray, reference, onInputChange, onInputDelete }) {
  return (
    <ObjectBox>
      <ObjectHead isArray={isArray}>
        <ObjectHeadText>{name}</ObjectHeadText>
        <IconsContainer>
          <div onClick={() => onInputDelete(reference + '♣' + name)}>
            <DeleteIcon />
          </div>
        </IconsContainer>
      </ObjectHead>
      <ObjectBody>
        {typeof value === 'object' && (
          <>
            {Object.keys(value).map((key, index) => {
              return (
                <div key={index}>
                  {typeof value[key] === 'string' && <StringContainer name={key} value={value[key]} reference={reference + '♣' + name} onInputChange={onInputChange} onInputDelete={onInputDelete} />}
                  {typeof value[key] === 'object' && (
                    <ObjectContainer name={key} value={value[key]} isArray={typeof value[key] === 'object' && value[key] instanceof Array} reference={reference + '♣' + name} onInputChange={onInputChange} onInputDelete={onInputDelete} />
                  )}
                </div>
              );
            })}
          </>
        )}
        {typeof value === 'string' && <StringContainer name={name} value={value} onInputDelete={onInputDelete} />}
      </ObjectBody>
    </ObjectBox>
  );
}

export default ObjectContainer;
