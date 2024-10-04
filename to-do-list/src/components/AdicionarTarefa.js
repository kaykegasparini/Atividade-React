import React, { useState, useEffect } from 'react';
import { ContainerForm } from './styles';
import { toast } from 'react-toastify'; // Para exibir mensagens amigáveis (se não tiver, pode instalar com npm install react-toastify)

function AdicionarTarefa({ onAdicionar }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [hora, setHora] = useState('');

    // Função para capturar a hora atual no formato HH:mm
    const obterHoraAtual = () => {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        return `${horas}:${minutos}`;
    };

    // Atualiza o estado da hora com a hora atual quando o componente é montado
    useEffect(() => {
        setHora(obterHoraAtual());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        if (titulo.trim() === '' || descricao.trim() === '' || data.trim() === '' || responsavel.trim() === '' || hora.trim() === '') {
            // Exibe uma mensagem de erro
            toast.error('Todos os campos são obrigatórios!');  // Exemplo com react-toastify
            return;
        }

        // Se tudo estiver preenchido, envia a tarefa
        onAdicionar({ titulo, descricao, data, responsavel, hora });

        // Limpa os campos após o envio
        setTitulo('');
        setDescricao('');
        setData('');
        setResponsavel('');
        setHora(obterHoraAtual());  // Reinicializa a hora com o horário atual
    };

    return (
        <>
            <h1>Cadastrar Tarefa</h1>
            <ContainerForm onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    placeholder="Título"
                />
                <textarea
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                    placeholder="Descrição"
                />
                <input
                    type="date"
                    value={data}
                    onChange={e => setData(e.target.value)}
                    placeholder="Data"
                />
                <input
                    type="text"
                    value={responsavel}
                    onChange={e => setResponsavel(e.target.value)}
                    placeholder="Responsável"
                />
                <input
                    type="time"
                    value={hora}
                    onChange={e => setHora(e.target.value)}
                    placeholder="Hora"
                />
                <button type="submit">Adicionar</button>
            </ContainerForm>
        </>
    );
}

export default AdicionarTarefa;
