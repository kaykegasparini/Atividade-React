import React, { useState } from 'react';
import Tarefa from './Tarefa';
import { ContainerButton, LiPaginacao } from './styles';

function ListaTarefas({ tarefas, onEditar, onExcluir, onConcluir }) {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const tarefasPorPagina = 5;

    const indiceUltimaTarefa = paginaAtual * tarefasPorPagina;
    const indicePrimeiraTarefa = indiceUltimaTarefa - tarefasPorPagina;
    const tarefasAtuais = tarefas.slice(indicePrimeiraTarefa, indiceUltimaTarefa);

    const numeroPaginas = Math.ceil(tarefas.length / tarefasPorPagina);

    // Funções para mudar de página
    const irParaPagina = (numeroPagina) => {
        setPaginaAtual(numeroPagina);
    };

    const irParaProximaPagina = () => {
        if (paginaAtual < numeroPaginas) {
            setPaginaAtual(paginaAtual + 1);
        }
    };

    const irParaPaginaAnterior = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1);
        }
    };

    const renderizarBotoesPaginacao = () => {
        const botoes = [];

        // Adiciona o botão de "voltar" se a página atual for maior que 1
        if (paginaAtual > 1) {
            botoes.push(
                <button
                    key="anterior"
                    onClick={irParaPaginaAnterior}
                    className="nav-button"
                >
                    {"<"} {/* Ícone de seta para voltar */}
                </button>
            );
        }

        // Renderiza até 3 páginas no máximo (para visualização)
        for (let i = 1; i <= numeroPaginas; i++) {
            // Exibe apenas 3 páginas por vez
            if (i === paginaAtual || i === paginaAtual - 1 || i === paginaAtual + 1) {
                botoes.push(
                    <button
                        key={i}
                        onClick={() => irParaPagina(i)}
                        className={i === paginaAtual ? 'active' : ''}
                    >
                        {i}
                    </button>
                );
            }
        }

        // Adiciona o botão de "avançar" se houver mais páginas
        if (paginaAtual < numeroPaginas) {
            botoes.push(
                <button
                    key="proximo"
                    onClick={irParaProximaPagina}
                    className="nav-button"
                >
                    {">"} {/* Ícone de seta para avançar */}
                </button>
            );
        }

        return botoes;
    };

    return (
        <div>
            <ul>
                {tarefasAtuais.map((tarefa) => (
                    <LiPaginacao key={tarefa.id}>
                        <Tarefa
                            tarefa={tarefa}
                            onEditar={onEditar}
                            onExcluir={onExcluir}
                            onConcluir={onConcluir}
                        />
                    </LiPaginacao>
                ))}
            </ul>
            <ContainerButton>
                {renderizarBotoesPaginacao()}
            </ContainerButton>
        </div>
    );
}

export default ListaTarefas;
