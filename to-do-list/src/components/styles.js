import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize} /* Isso remove as diferenças de estilo padrão entre navegadores */

    /* Importa a fonte Poppins do Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: #f8f9fa;
        color: #333;
        line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        color: #222;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button.active {
        background-color: #000;
        color: #fff;
    }

    button {
        margin: 0 5px;
        padding: 5px 10px;
        cursor: pointer;
    }


    input, textarea {
        font-family: 'Poppins', sans-serif;
    }
`;

export const LiPaginacao = styled.li`
    list-style: none;
`;

export const TarefaStyle = styled.li`
    list-style: none;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.concluida ? '#e0e0e0' : '#fff'};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    
    del {
        opacity: 0.6;
    }

    button {
        margin-left: 10px;
        border: none;
        color: white;
        padding: 8px 12px;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 0.8;
        }
    }
`;

export const ListaTarefasStyle = styled.ul`
    padding: 0;
    width: 700px;
    margin: 0 auto;
`;


export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px; /* Largura ajustada */
    margin: 20px auto;
    padding: 20px; /* Adiciona padding */
    border: 1px solid #ddd; /* Adiciona borda */
    border-radius: 8px; /* Borda arredondada */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
    input[type="text"],
    input[type="date"],
    input[type="time"],  /* Inclui input type time */
    textarea {
        margin-bottom: 15px;  /* Aumenta o espaçamento */
        padding: 10px;        /* Aumenta o padding */
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }

    textarea {
        height: 80px;   /* Altura da textarea */
        resize: vertical; /* Permite redimensionamento vertical */
    }

    button[type="submit"] {
        background-color: #007bff;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button[type="submit"]:hover {
        background-color: #0056b3;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #f0f0f0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    a {
        color: #333;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover {
            color: #007bff;
        }
    }
`;

export const ContainerApp = styled.div`
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    background-color: transparent;
`;


export const ModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #ddd;
    width: 400px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    position: relative;

    h2 {
        margin-bottom: 15px;
    }

    input, textarea {
        width: 95%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 10px 20px;
        margin-top: 15px;
        font-size: 14px;
        cursor: pointer;
    }

    .edit-button {
        background-color: #28a745;
        color: white;
    }

    .delete-button {
        background-color: #dc3545;
        color: white;
        margin-left: 8px;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
            color: #dc3545; /* Cor vermelha ao passar o mouse */
        }
    }
`;

export const InputModal = styled.input`
   width: 100%; /* Input ocupa toda a largura */
   padding: 12px 20px;
   margin: 8px 0;
   box-sizing: border-box;
   border: 2px solid #ccc;
   border-radius: 4px;
   background-color: #f8f8f8; /* Cor de fundo para input */
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
   .edit-button, .delete-button {
        padding: 8px 16px;
        border: none;
        cursor: pointer;
   }

    .edit-button {
        background-color: green;
        margin-right: 5px;
        color: white;
        border-radius: 5px;
    }

    .delete-button{
        background-color: red;
        color: white;
        border-radius: 5px;
   }
`;