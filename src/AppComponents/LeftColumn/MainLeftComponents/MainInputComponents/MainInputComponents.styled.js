import styled from 'styled-components/macro';

export const ObjectBox = styled.div`
  border: 1px solid #72b9be;
`;

export const ObjectHead = styled.div`
  background-color: ${(props) => (props.isArray ? '#9ec2a6' : '#72b9be')};
  padding: 6px 10px;
  display: flex;
  justify-content: space-between;
`;

export const ObjectHeadText = styled.div`
  padding: 6px 10px;
`;

export const ObjectBody = styled.div`
  padding: 3px;
  min-height: 10px;
`;

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

export const Actions = styled.div`
  padding: 5px 10px;
  margin-left: 3px;
  text-align: center;
  border: 1px solid #f8aa97;
  width: 80px;
  background-color: ${(props) => (props.isEdit ? '#f83333' : '#f8aa97')};
  cursor: pointer;
`;
