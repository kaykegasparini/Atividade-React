// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListaTarefas from './components/ListaTarefas';
import AdicionarTarefa from './components/AdicionarTarefa';
import { ContainerApp } from './components/styles';
import ReactModal from 'react-modal';
import PaginaInicial from './components/Home';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from './components/styles';
import { GlobalStyle } from './components/styles';

function App() {
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.getItem('tarefas')) || []);
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false);


  useEffect(() => {
    ReactModal.setAppElement('#root');
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, { ...novaTarefa, id: Date.now(), concluida: false }]);
    setMostrarNotificacao(true);
  };

  const editarTarefa = (tarefaEditada) => {
    setTarefas(tarefas.map(tarefa => (
      tarefa.id === tarefaEditada.id ? tarefaEditada : tarefa
    )));
  };

  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const concluirTarefa = (id) => {
    setTarefas(tarefas.map(tarefa => (
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    )));
  };

  const tarefasConcluidas = tarefas.filter(tarefa => tarefa.concluida);
  const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida);

  useEffect(() => {
    if (mostrarNotificacao) {
      toast.success('Tarefa adicionada com sucesso!', {
        onClose: () => setMostrarNotificacao(false),
      });
    }
  }, [mostrarNotificacao, tarefas]);

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/cadastrar" element={
            <ContainerApp>
              <NavBar>
                <Link to="/">Página Inicial</Link>| {" "}
                <Link to="/pendentes">Tarefas Pendentes ({tarefasPendentes.length})</Link>  | {" "}
                <Link to="/concluidas">Tarefas Concluídas</Link>
              </NavBar>

              <div className="container">
                <AdicionarTarefa onAdicionar={adicionarTarefa} />
                <ToastContainer />
              </div>
            </ContainerApp>
          } />

          <Route path="/pendentes" element={
            <ContainerApp>
              <NavBar>
                <Link to="/">Página Inicial</Link>| {" "}
                <Link to="/cadastrar"> Cadastrar Tarefa </Link> | {" "}
                <Link to="/concluidas">Tarefas Concluídas</Link>
              </NavBar>

              <div className="container">
                <h2>Tarefas Pendentes</h2>
                <ListaTarefas
                  tarefas={tarefasPendentes}
                  onEditar={editarTarefa}
                  onExcluir={excluirTarefa}
                  onConcluir={concluirTarefa}
                />
                <ToastContainer />
              </div>
            </ContainerApp>
          } />

          <Route
            path="/concluidas"
            element={
              <ContainerApp>
                <NavBar>
                  <Link to="/">Página Inicial</Link>| {" "}
                  <Link to="/cadastrar"> Cadastrar Tarefa </Link> | {" "}
                  <Link to="/pendentes">Tarefas Pendentes ({tarefasPendentes.length})</Link>
                </NavBar>

                <div className="container">
                  <h2>Tarefas Concluídas</h2>
                  <ListaTarefas
                    tarefas={tarefasConcluidas}
                    onEditar={editarTarefa}
                    onExcluir={excluirTarefa}
                    onConcluir={concluirTarefa}
                  />
                </div>
              </ContainerApp>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;