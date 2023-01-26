import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border;
  background-color: #2283c9;
`;

export const LeftContainer = styled.div`
  background-color: rebeccapurple;
  border-right: 2px solid white;
  height: 500px;
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
