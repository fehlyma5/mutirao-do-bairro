import { useState } from "react";
import "./App.css";
import Painel from "./components/Painel";
import ListaTarefas from "./components/ListaTarefas";

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: "t1", titulo: "Limpar a praça", descricao: "Mutirão às 09h", concluida: true },
    { id: "t2", titulo: "Pintar o muro", descricao: "Trazer tintas", concluida: false },
    { id: "t3", titulo: "Plantio de mudas", descricao: "Na horta comunitária", concluida: false },
  ]);

  // Alterna o status gerando um novo array/objeto (sem mutar os originais)
  const handleAlternarStatus = (id) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  // Remove apenas a tarefa clicada usando .filter()
  const handleExcluirTarefa = (id) => {
    setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
  };

  // VALOR DERIVADO: Calculado na renderização (sem useState extra)
  const totalConcluidas = tarefas.filter((t) => t.concluida).length;

  return (
    <div className="app-container">
      <Painel titulo="Painel de Tarefas">
        <p>
          Concluídas: <strong>{totalConcluidas}</strong> de <strong>{tarefas.length}</strong>
        </p>
        
        <ListaTarefas
          tarefas={tarefas}
          onAlternarStatus={handleAlternarStatus}
          onExcluirTarefa={handleExcluirTarefa}
        />
      </Painel>
    </div>
  );
}