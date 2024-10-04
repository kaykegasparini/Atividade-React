import React from 'react';
import { ModalContainer, ModalContent } from './styles'

const Modal = ({ isOpen, onRequestClose, children }) => {
    return (
        <ModalContainer style={{ display: isOpen ? 'block' : 'none' }}>
            <ModalContent>
                <button className="close-button" onClick={onRequestClose} style={{ float: 'right' }}>X</button>
                {children}
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;