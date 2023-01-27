import styled from 'styled-components/macro';

export const ObjectBox = styled.div`
  border: 1px solid #72b9be;
`;

export const ObjectHead = styled.div`
  background-color: ${(props) => (props.isArray ? '#9ec2a6' : '#72b9be')};
  padding: 3px 10px;
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
  background-color: #f8aa97;
  display: flex;
  padding: 5px 10px;
  min-width: 200px;
  justify-content: end;
  font-size: 14px;
`;

export const StringValue = styled.input`
  padding: 5px;
  border: 1px solid #f8aa97;
  width: 100%;
`;
