import React, { useState } from 'react';
import ReactJson from 'react-json-view';

import jsonFile from './oreoTest.json';

import { LeftContainer, LeftHeaderBar, Selector, LeftBody } from './MainLeft.styled';

function MainLeft() {
  const [isActive, setIsActive] = useState('json');
  return (
    <LeftContainer>
      <LeftHeaderBar>
        <Selector isActive={isActive === 'input'} onClick={() => setIsActive('input')}>
          INPUT
        </Selector>
        <Selector isActive={isActive === 'json'} onClick={() => setIsActive('json')}>
          JSON
        </Selector>
      </LeftHeaderBar>
      <LeftBody>
        <ReactJson src={jsonFile} onEdit={true} onAdd={true} onDelete={true} />
      </LeftBody>
    </LeftContainer>
  );
}

export default MainLeft;
