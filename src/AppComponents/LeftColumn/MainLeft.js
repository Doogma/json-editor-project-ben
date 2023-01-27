import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
// import AceEditor from 'react-ace';

// import 'ace-builds/src-noconflict/mode-json';
// import 'ace-builds/src-noconflict/theme-github';
// import 'ace-builds/src-noconflict/ext-language_tools';

import jsonFile from './oreoTest.json';

import { LeftContainer, LeftHeaderBar, Selector, LeftBody } from './MainLeft.styled';

function MainLeft() {
  const [isActive, setIsActive] = useState('input');
  const [data, setData] = useState(jsonFile);

  const onChange = (newValue) => {
    setData(JSON.parse(newValue));
  };
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
        {isActive === 'input' && <h2>Coming Soon!</h2>}
        {isActive === 'json' && <Editor defaultValue={JSON.stringify(data, null, 2)} height={'90vh'} defaultLanguage="json" onChange={onChange} options={{ minimap: { enabled: false } }} />}
        {/* {isActive === 'json2' && <AceEditor defaultValue={JSON.stringify(data, null, 2)} showPrintMargin={false} minLines={100} mode="json" theme="github" onChange={onChange} name="UNIQUE_ID_OF_DIV" editorProps={{ $blockScrolling: true }} />} */}
      </LeftBody>
    </LeftContainer>
  );
}

export default MainLeft;
