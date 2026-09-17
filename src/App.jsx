import { useState, useEffect } from "react";
import "./App.css";
import Painel from "./components/Painel";
import ListaTarefas from "./components/ListaTarefas";
import FormularioTarefa from "./components/FormularioTarefa";

const DADOS_INICIAIS = [
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
];

export default function App() {
  // 1. Inicialização preguiçosa (Lazy Initial State): executa uma vez para ler o localStorage sem quebrar por dados corrompidos (try/catch)
  const [tarefas, setTarefas] = useState(() => {
    try {
      const tarefasSalvas = localStorage.getItem("tarefas_mutirao");
      return tarefasSalvas ? JSON.parse(tarefasSalvas) : DADOS_INICIAIS;
    } catch (erro) {
      console.error("Erro ao carregar do localStorage, voltando ao estado inicial:", erro);
      return DADOS_INICIAIS;
    }
  });

  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

  // 2. Efeito de Persistência: salva no localStorage toda vez que 'tarefas' mudar
  useEffect(() => {
    localStorage.setItem("tarefas_mutirao", JSON.stringify(tarefas));
  }, [tarefas]);

  // 3. Efeito de Título da Aba com Função de Limpeza (Cleanup)
  useEffect(() => {
    const tituloOriginal = document.title;
    const pendentes = tarefas.filter((t) => !t.concluida).length;

    document.title = `(${pendentes}) Mutirão do Bairro`;

    return () => {
      document.title = tituloOriginal;
    };
  }, [tarefas]);

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

  // Valores derivados
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