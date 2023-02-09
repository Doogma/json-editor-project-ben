import React, { useEffect, useState, useCallback } from 'react';
import { Container, LeftContainer, Divider, RightContainer } from './App.styled';
import jsonFile from './oreoTest.json';

import MainLeft from './AppComponents/LeftColumn/MainLeft';

import { handleSaveFunction, handleDeleteFunction, handleAddFunction } from './AppFunctions';

function App() {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [previousX, setPreviousX] = useState();
  const [leftContainerWidth, setLeftContainerWidth] = useState(localStorage.getItem('leftContainerWidth') || 50);
  const [data, setData] = useState(jsonFile);

  const JSONChangeHandler = (newValue) => {
    setData(JSON.parse(newValue));
  };

  const INPUTSaveHandler = (payload) => {
    setData((prevData) => handleSaveFunction(prevData, payload.nameArray, payload.value));
  };

  const INPUTDeleteHandler = (payload) => {
    let array = payload.split('♣');
    setData((prevData) => handleDeleteFunction(prevData, array));
  };

  const INPUTAddHandler = (payload) => {
    setData((prevData) => handleAddFunction(prevData, payload));
  };

  // Draggable divider starts here

  const onMouseDown = (e) => {
    setPreviousX((pageWidth * leftContainerWidth) / 100);
    setIsMouseDown(true);
  };

  const onMouseMove = useCallback(
    (e) => {
      isMouseDown && setLeftContainerWidth(((previousX + (e.clientX - previousX)) / pageWidth) * 100);
    },
    [isMouseDown, pageWidth, previousX]
  );

  const onMouseUp = useCallback(() => {
    setIsMouseDown(false);
    localStorage.setItem('leftContainerWidth', leftContainerWidth);
  }, [leftContainerWidth]);

  useEffect(() => {
    window.addEventListener('resize', () => setPageWidth(window.innerWidth));
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('resize', () => setPageWidth(window.innerWidth));
      window.removeEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  // JSX starts here

  return (
    <Container>
      <LeftContainer style={{ width: `${leftContainerWidth}%` }}>
        <MainLeft data={data} onEditorChange={JSONChangeHandler} onInputDelete={INPUTDeleteHandler} onInputSave={INPUTSaveHandler} onInputAdd={INPUTAddHandler} />
      </LeftContainer>
      <Divider onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
      <RightContainer style={{ width: `${100 - leftContainerWidth}%` }}></RightContainer>
    </Container>
  );
}

export default App;
