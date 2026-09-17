import { useState } from "react";
import "./App.css";
import Painel from "./components/Painel";
import ListaTarefas from "./components/ListaTarefas";
import FormularioTarefa from "./components/FormularioTarefa";

export default function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: "t1",
      titulo: "Limpar a praça",
      categoria: "Limpeza",
      voluntarios: 5,
      descricao: "Categoria: Limpeza | Voluntários: 5",
      concluida: true,
    },
    {
      id: "t2",
      titulo: "Pintar o muro",
      categoria: "Pintura",
      voluntarios: 2,
      descricao: "Categoria: Pintura | Voluntários: 2",
      concluida: false,
    },
  ]);

  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

  // Ações no estado
  const handleAdicionarTarefa = (novaTarefa) => {
    setTarefas((prev) => [...prev, novaTarefa]);
  };

  const handleAlternarStatus = (id) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  };

  const handleExcluirTarefa = (id) => {
    setTarefas((prev) => prev.filter((t) => t.id !== id));
  };

  // VALORES DERIVADOS: Filtro e contagem visível
  const tarefasFiltradas =
    categoriaFiltro === "Todas"
      ? tarefas
      : tarefas.filter((t) => t.categoria === categoriaFiltro);

  const totalConcluidas = tarefasFiltradas.filter((t) => t.concluida).length;

  return (
    <div className="app-container">
      <Painel titulo="Cadastrar Nova Tarefa">
        <FormularioTarefa onAdicionarTarefa={handleAdicionarTarefa} />
      </Painel>

      <Painel titulo="Painel de Tarefas">
        <div className="filtro-container">
          <label htmlFor="filtro">Filtrar por Categoria: </label>
          <select
            id="filtro"
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Geral">Geral</option>
            <option value="Limpeza">Limpeza</option>
            <option value="Pintura">Pintura</option>
            <option value="Jardinagem">Jardinagem</option>
          </select>
        </div>

        <p className="resumo-contagem">
          Concluídas: <strong>{totalConcluidas}</strong> de{" "}
          <strong>{tarefasFiltradas.length}</strong> visíveis
        </p>

        <ListaTarefas
          tarefas={tarefasFiltradas}
          onAlternarStatus={handleAlternarStatus}
          onExcluirTarefa={handleExcluirTarefa}
        />
      </Painel>
    </div>
  );
}