import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components/macro';

import { CancelIcon } from './Icons';

const BackDrop = styled.div`
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: absolute;
`;

const ModalOverlay = styled.div`
  background-color: white;
  padding: 10px;
  margin: 10px;
  box-shadow: 2px 2px 5px;
  border-radius: 3px;
  z-index: 1001;
  min-width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalBody = styled.div`
  margin: 20px;
`;

const Modal = ({ children, closeModal }) => {
  return (
    <Fragment>
      {createPortal(<BackDrop onClick={closeModal} />, document.getElementById('backdrop-root'))}
      {createPortal(
        <ModalOverlay>
          <ModalCloseContainer>
            <div onClick={closeModal}>
              <CancelIcon />
            </div>
          </ModalCloseContainer>
          <ModalBody>{children}</ModalBody>
        </ModalOverlay>,
        document.getElementById('modal-root')
      )}
    </Fragment>
  );
};

export default Modal;
