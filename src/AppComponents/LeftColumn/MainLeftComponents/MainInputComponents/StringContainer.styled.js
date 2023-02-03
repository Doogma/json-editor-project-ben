import styled from 'styled-components/macro';

export const StringBox = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export const StringName = styled.div`
  background-color: ${(props) => (props.isEdit ? '#f83333' : '#f8aa97')};
  display: flex;
  padding: 6px 10px;
  min-width: 200px;
  justify-content: end;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const StringValue = styled.div`
  padding: 6px;
  border: 1px solid #f8aa97;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const StringInput = styled.input`
  padding: 6px;
  border: 1px solid #f83333;
  width: 100%;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
