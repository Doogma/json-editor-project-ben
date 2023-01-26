import styled from 'styled-components/macro';

export const LeftContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: #66bcd2;
  flex-direction: column;
`;

export const LeftHeaderBar = styled.div`
  background-color: #1d7b92;
  width: 100%;
`;

export const Selector = styled.button`
  cursor: pointer;
  width: 150px;
  height: 30px;
  margin-top: 6px;
  background-color: ${(props) => (props.isActive ? 'white' : '#1d7b92')};
  border-radius: 10px 10px 0px 0px;
  border: 1px solid white;
`;

export const LeftBody = styled.div`
  background-color: white;
  width: 100%;
  min-height: 600px;
`;
