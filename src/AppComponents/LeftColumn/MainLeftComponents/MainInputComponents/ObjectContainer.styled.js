import styled from 'styled-components/macro';

export const ObjectBox = styled.div`
  border: 1px solid ${(props) => (props.isArray ? '#9ec2a6' : '#72b9be')};
  border-left: 3px solid ${(props) => (props.isArray ? '#9ec2a6' : '#72b9be')};
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
  padding-left: 5px;
`;
