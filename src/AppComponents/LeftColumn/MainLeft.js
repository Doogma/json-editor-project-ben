import React, { useState } from 'react';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';

import jsonFile from './oreoTest.json';

import { LeftContainer, LeftHeaderBar, Selector, LeftBody } from './MainLeft.styled';

function MainLeft() {
  const [isActive, setIsActive] = useState('input');
  const [data, setData] = useState(jsonFile);

  console.log(data);

  const onChange = (newValue) => {
    setData(newValue);
  };

  const formatJSON = (val = {}) => {
    try {
      const res = JSON.parse(val);
      return JSON.stringify(res, null, 2);
    } catch {
      const errorJson = {
        error: `非法返回${val}`,
      };
      return JSON.stringify(errorJson, null, 2);
    }
  };

  const editorDidMount = (editor, monaco) => {
    setTimeout(function () {
      editor.getAction('editor.action.formatDocument').run();
    }, 300);
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
        <Selector isActive={isActive === 'json2'} onClick={() => setIsActive('json2')}>
          JSON 2
        </Selector>
      </LeftHeaderBar>
      <LeftBody>
        {isActive === 'json' && <AceEditor defaultValue={formatJSON(data)} showPrintMargin={false} minLines={100} mode="json" theme="github" onChange={onChange} name="UNIQUE_ID_OF_DIV" editorProps={{ $blockScrolling: true }} />}
        {isActive === 'input' && <h2>Coming Soon!</h2>}
        {isActive === 'json2' && <Editor defaultValue={formatJSON(data)} height={'90vh'} defaultLanguage="json" onChange={onChange} />}
      </LeftBody>
    </LeftContainer>
  );
}

export default MainLeft;
