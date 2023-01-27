import React from 'react';

import StringContainer from './StringContainer';

import { ObjectBox, ObjectHead, ObjectBody } from './MainInputComponents.styled';

function ObjectContainer({ name, value, isArray }) {
  return (
    <ObjectBox>
      <ObjectHead isArray={isArray}>{name}</ObjectHead>
      <ObjectBody>
        {typeof value === 'object' && (
          <>
            {Object.keys(value).map((key, index) => {
              return (
                <div key={index}>
                  {typeof value[key] === 'string' && <StringContainer name={key} value={value[key]} />}
                  {typeof value[key] === 'object' && <ObjectContainer name={key} value={value[key]} isArray={typeof value[key] === 'object' && value[key] instanceof Array} />}
                  {/* {typeof value[key] === 'object' && <>{value[key] instanceof Array ? <ArrayContainer name={key} value={value[key]} /> : <ObjectContainer name={key} value={value[key]} />}</>} */}
                </div>
              );
            })}
          </>
        )}
        {typeof value === 'string' && <StringContainer name={name} value={value} />}
      </ObjectBody>
    </ObjectBox>
  );
}

export default ObjectContainer;
