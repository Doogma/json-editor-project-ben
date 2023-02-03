import React, { useEffect, useState, useCallback } from 'react';
import { Container, LeftContainer, Divider, RightContainer } from './App.styled';
import jsonFile from './oreoTest.json';

import MainLeft from './AppComponents/LeftColumn/MainLeft';

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
    const updateObjectState = (state, array, value) => {
      let newState = { ...state };
      let currentObject = newState;

      for (let i = 1; i < array.length; i++) {
        const key = array[i];
        if (i !== array.length - 1) {
          currentObject[key] = { ...currentObject[key] };
          currentObject = currentObject[key];
        } else {
          currentObject[key] = value;
        }
      }
      return newState;
    };

    setData((prevData) => {
      return updateObjectState(prevData, payload.nameArray, payload.value);
    });
  };

  const INPUTDeleteHandler = (path) => {
    let array = path.split('♣');
    let newData = { ...data };
    let currentObject = newData;

    for (let i = 1; i < array.length; i++) {
      const key = array[i];
      if (i !== array.length - 1) {
        currentObject[key] = { ...currentObject[key] };
        currentObject = currentObject[key];
      } else {
        delete currentObject[key];
      }
    }
    setData(newData);
  };

  const INPUTAddHandler = (payload) => {
    console.log(payload);
    let newData = { ...data };
    let currentObject = newData;

    let array = payload.path;

    for (let i = 1; i < array.length; i++) {
      const key = array[i];
      if (i !== array.length - 1) {
        currentObject[key] = { ...currentObject[key] };
        currentObject = currentObject[key];
      } else {
        if (payload.type === 'OBJECT' && payload.newItemType === 'STRING') {
          currentObject[payload.name] = payload.value;
        }
        if (payload.type === 'OBJECT' && payload.newItemType === 'OBJECT') {
          currentObject[payload.name] = {};
        }
        if (payload.type === 'OBJECT' && payload.newItemType === 'ARRAY') {
          currentObject[payload.name] = [];
        }
        if (payload.type === 'ARRAY' && payload.newItemType === 'STRING') {
          currentObject = [...currentObject, payload.value];
        }
        if (payload.type === 'ARRAY' && payload.newItemType === 'OBJECT') {
          currentObject = [...currentObject, {}];
        }
        if (payload.type === 'ARRAY' && payload.newItemType === 'ARRAY') {
          currentObject = [...currentObject, []];
        }
      }
    }
    setData(newData);
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
