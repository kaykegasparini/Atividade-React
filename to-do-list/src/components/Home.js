import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column; /* Alinha itens em coluna (título e cards) */
    align-items: center;      /* Centraliza horizontalmente */
    justify-content: center; /* Centraliza verticalmente */
    height: 100vh;
    text-align: center;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const CardWrapper = styled.div`
    display: flex;
    gap: 100px;
    margin-top: 40px; /* Para dar um espaço depois do título */
`;

const Card = styled.div`
    box-sizing: border-box;
    padding: 30px;
    height: 254px;  /*tamanho card*/
    background: rgba(217, 217, 217, 0.58);
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;
    text-decoration: none;
    &:hover{
        border: 1px solid black;
        transform: scale(1.05);
    }
    &:active{
        transform: scale(0.95) rotateZ(1.7deg);
    }
`;

function PaginaInicial() {
    return (
        <Container>
            <Title>Bem-vindo ao seu gerenciador de tarefas!</Title>
            <CardWrapper>
                <Link to="/cadastrar">
                    <Card>Cadastrar Tarefa</Card>
                </Link>

                <Link to="/pendentes">
                    <Card>Tarefas Pendentes</Card>
                </Link>

                <Link to="/concluidas">
                    <Card>Tarefas Concluídas</Card>
                </Link>
            </CardWrapper>
        </Container>
    );
}

export default PaginaInicial;