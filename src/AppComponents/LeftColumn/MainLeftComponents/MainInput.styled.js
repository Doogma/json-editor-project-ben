import styled from 'styled-components/macro';

export const MainInputContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 1px solid #66bcd2;
  margin: 3px;
  padding: 3px;
  flex-direction: column;
`;

export const FloatingIconContainer = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  flex-direction: row;
  border: 1px solid green;
  width: 150px;
  background-color: #7ed07e;
  border-radius: 3px;

  & span {
    padding: 4px;
  }
`;
