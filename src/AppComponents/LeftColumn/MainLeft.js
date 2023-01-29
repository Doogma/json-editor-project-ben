import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

import { LeftContainer, LeftHeaderBar, Selector, LeftBody } from './MainLeft.styled';

import MainInput from './MainLeftComponents/MainInput';

function MainLeft({ data, onEditorChange, onInputChange }) {
  const [isActive, setIsActive] = useState('input');

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
        {isActive === 'input' && <MainInput data={data} onInputChange={onInputChange} />}
        {isActive === 'json' && <Editor defaultValue={JSON.stringify(data, null, 2)} height={'90vh'} defaultLanguage="json" onChange={onEditorChange} options={{ minimap: { enabled: false } }} />}
      </LeftBody>
    </LeftContainer>
  );
}

export default MainLeft;
