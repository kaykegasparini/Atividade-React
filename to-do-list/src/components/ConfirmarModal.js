import React from 'react';
import { ModalContainer, ModalContent, ContainerButton } from './styles';
import { toast } from 'react-toastify'; // Importar o toast

const ConfirmarModal = ({ isOpen, onConfirm, onCancel, message }) => {

    const handleConfirm = () => {
        onConfirm();  // Executa a função de exclusão da tarefa
        toast.success('Tarefa excluída com sucesso!'); // Exibe a mensagem de sucesso
    };

    return (
        <ModalContainer style={{ display: isOpen ? 'flex' : 'none' }}>
            <ModalContent>
                <p>{message}</p>
                <ContainerButton>
                    <button className='delete-button' onClick={handleConfirm}>Sim</button>
                    <button className='edit-button' onClick={onCancel}>Cancelar</button>
                </ContainerButton>
            </ModalContent>
        </ModalContainer>
    );
};

export default ConfirmarModal;
