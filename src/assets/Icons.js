import styled from 'styled-components/macro';

import { RiEdit2Line, RiDeleteBin4Line, RiCheckFill, RiSaveLine, RiPlayListAddFill } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

export const IconsContainer = styled.div`
  display: flex;
  margin: 5px 0px 5px 5px;
`;

const IconContainer = styled.div`
  cursor: pointer;
  font-size: 1rem;
  padding: 5px 5px 0px 5px;
  color: #282829;
  border-radius: 5px;
  margin-right: 5px;
  border: 1px solid #282829;
  background-color: #fcd3c9; //#f8aa97;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 5px;

  &:hover {
    background-color: #f5846c;
    color: ${({ theme }) => theme.CardFontLight};
  }
`;

const RedIconContainer = styled.div`
  cursor: pointer;
  font-size: 1rem;
  padding: 5px 5px 0px 5px;
  color: #282829;
  border-radius: 5px;
  margin-right: 5px;
  border: 1px solid #282829;
  background-color: #ee5959;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 5px;

  &:hover {
    background-color: #ef2d2d;
    color: ${({ theme }) => theme.CardFontLight};
  }
`;

const GreenIconContainer = styled.div`
  cursor: pointer;
  font-size: 1rem;
  padding: 5px 5px 0px 5px;
  color: #282829;
  border-radius: 5px;
  margin-right: 5px;
  border: 1px solid #282829;
  background-color: #52ef44;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 1px 5px;

  &:hover {
    background-color: #2ecb20;
    color: ${({ theme }) => theme.CardFontLight};
  }
`;

export function EditIcon() {
  return (
    <IconContainer>
      <RiEdit2Line />
    </IconContainer>
  );
}

export const DeleteIcon = () => {
  return (
    <IconContainer>
      <RiDeleteBin4Line />
    </IconContainer>
  );
};

export const CheckIcon = () => {
  return (
    <GreenIconContainer>
      <RiCheckFill />
    </GreenIconContainer>
  );
};

export const SaveIcon = () => {
  return (
    <IconContainer>
      <RiSaveLine />
    </IconContainer>
  );
};

export function AddData() {
  return (
    <IconContainer>
      <RiPlayListAddFill />
    </IconContainer>
  );
}

export const CancelIcon = () => {
  return (
    <RedIconContainer>
      <MdOutlineCancel />
    </RedIconContainer>
  );
};
