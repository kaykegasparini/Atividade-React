import React, { useState } from 'react';
import { TarefaStyle, ContainerButton } from './styles';
import ConfirmarModal from './ConfirmarModal';
import Modal from './Modal';
import BotaoExcluir from './BotaoExcluir';
import { toast } from 'react-toastify';

function Tarefa({ tarefa, onEditar, onExcluir, onConcluir }) {
    const [modalIsOpen, setIsModalOpen] = useState(false);
    const [editInputValue, setEditInputValue] = useState(tarefa.titulo);
    const [editDescValue, setEditDesctValue] = useState(tarefa.descricao);
    const [editDataValue, setEditDataValue] = useState(tarefa.data);
    const [editRespValue, setEditRespValue] = useState(tarefa.responsavel);
    const [editTimeValue, setEditTimeValue] = useState(tarefa.hora);
    const [confirmarModalIsOpen, setConfirmarModalIsOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const openConfirmarModal = () => setConfirmarModalIsOpen(true);
    const closeConfirmarModal = () => setConfirmarModalIsOpen(false);

    const handleEditInputChange = (event) => setEditInputValue(event.target.value);
    const handleEditDescChange = (event) => setEditDesctValue(event.target.value);
    const handleEditDataChange = (event) => setEditDataValue(event.target.value);
    const handleEditRespChange = (event) => setEditRespValue(event.target.value);
    const handleEditTimeChange = (event) => setEditTimeValue(event.target.value);

    const handleEditSubmit = (event) => {
        event.preventDefault();
        onEditar({
            ...tarefa,
            titulo: editInputValue,
            descricao: editDescValue,
            data: editDataValue,
            responsavel: editRespValue,
            tempo: editTimeValue
        });
        closeModal();
    };

    const handleExcluir = async () => {
        closeConfirmarModal();  // Close modal first
        try {
            await onExcluir(tarefa.id); // Wait for the delete operation
            toast.success('Tarefa excluída com sucesso!');
        } catch (error) {
            // Handle error, e.g., display an error toast
            toast.error('Erro ao excluir tarefa.');
            console.error("Error deleting task:", error);
        }
    };

    const handleConcluir = async (id) => {
        if (!tarefa.concluida) {
            try {
                await onConcluir(id);
                toast.success('Tarefa concluída com sucesso!');
            } catch (error) {
                toast.error('Erro ao concluir tarefa.');
                console.error("Error completing task:", error);
            }
        }
    };

    return (
        <TarefaStyle className={tarefa.concluida ? 'concluida' : ''}>
            <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => handleConcluir(tarefa.id)}
            />

            {tarefa.concluida ? (
                <>
                    <del>Tarefa: {tarefa.titulo}</del>
                    <br />
                    <del>Descrição: {tarefa.descricao}</del>
                    <br />
                    <del>Data: {tarefa.data ? new Date(tarefa.data).toLocaleDateString('pt-BR') : 'Sem data'}</del>
                    <br />
                    <del>Responsável: {tarefa.responsavel || 'Sem responsável'}</del>
                    <br />
                    <del>Tempo: {tarefa.hora || 'Sem tempo'}</del>
                </>
            ) : (
                <>
                    {tarefa.titulo} - {tarefa.descricao}
                    <br />
                    Data: {tarefa.data ? new Date(tarefa.data).toLocaleDateString('pt-BR') : 'Sem data'}
                    <br />
                    Responsável: {tarefa.responsavel || 'Sem responsável'}
                    <br />
                    Tempo: {tarefa.hora || 'Sem tempo'}
                </>
            )}

            <ContainerButton>
                {!tarefa.concluida && <button className="edit-button" onClick={openModal}>Editar</button>}
                <BotaoExcluir onExcluir={openConfirmarModal} id={tarefa.id} />
            </ContainerButton>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Editar Tarefa">
                <h2>Editar Tarefa</h2>
                <form onSubmit={handleEditSubmit}>
                    <label htmlFor="editInput">Título</label>
                    <input
                        id="editInput"
                        type="text"
                        value={editInputValue}
                        onChange={handleEditInputChange}
                        required
                    />

                    <label htmlFor="editDesc">Descrição</label>
                    <input
                        id="editDesc"
                        type="text"
                        value={editDescValue}
                        onChange={handleEditDescChange}
                        required
                    />

                    <label htmlFor="editData">Data</label>
                    <input
                        type="date"
                        value={editDataValue}
                        onChange={handleEditDataChange}
                    />

                    <label htmlFor="editResp">Responsável</label>
                    <input
                        type="text"
                        value={editRespValue}
                        onChange={handleEditRespChange}
                    />

                    <ContainerButton>
                        <button className="edit-button" type="submit" style={{ marginTop: '15px' }}>Salvar</button>
                        <button className="delete-button" style={{ marginTop: '15px', marginLeft: '8px' }} onClick={closeModal}>Cancelar</button>
                    </ContainerButton>
                </form>
            </Modal>

            <ConfirmarModal
                isOpen={confirmarModalIsOpen}
                onConfirm={handleExcluir}
                onCancel={closeConfirmarModal}
                message="Tem certeza que deseja excluir esta tarefa?"
            />
        </TarefaStyle>
    );
}

export default Tarefa;
