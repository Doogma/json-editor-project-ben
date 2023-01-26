import React, { useEffect, useState, useCallback } from 'react';
import { Container, LeftContainer, Divider, RightContainer } from './App.styled';

function App() {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [previousX, setPreviousX] = useState();
  const [leftContainerWidth, setLeftContainerWidth] = useState(localStorage.getItem('leftContainerWidth') || 50);

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

  return (
    <Container>
      <LeftContainer style={{ width: `${leftContainerWidth}%` }}></LeftContainer>
      <Divider onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
      <RightContainer style={{ width: `${100 - leftContainerWidth}%` }}></RightContainer>
    </Container>
  );
}

export default App;
