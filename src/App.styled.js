import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: #2283c9;
  margin: 10px;
`;

export const LeftContainer = styled.div`
  background-color: #1d7b92;
  border-right: 2px solid white;
  padding: 5px;
`;

export const Divider = styled.div`
  cursor: ew-resize;
  width: 2px;
  background-color: black;
`;

export const RightContainer = styled.div`
  background-color: #9ba2ea;
  height: 500px;
  border-left: 2px solid white;
`;
