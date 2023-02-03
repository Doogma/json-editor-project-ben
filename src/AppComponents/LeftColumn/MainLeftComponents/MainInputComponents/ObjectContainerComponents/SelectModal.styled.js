import styled from 'styled-components/macro';

export const ModalHeader = styled.h3`
  text-align: center;
`;

export const SelectOptions = styled.div`
  margin: 5px;
  padding: 10px;
  background-color: #fcd3c9;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #f5846c;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export const InputName = styled.div`
  background-color: #fcd3c9;
  display: flex;
  padding: 8px;
  width: 130px;
  justify-content: end;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const InputField = styled.input`
  padding: 6px;
  border: 1px solid #fcd3c9;
  width: 100%;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
