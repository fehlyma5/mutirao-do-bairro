import "./App.css";
import { useState } from "react";
import Painel from "./components/Painel";
import ListaTarefas from "./components/ListaTarefas";

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: "t1", titulo: "Limpar a praça", descricao: "Mutirão às 09h", concluida: true },
    { id: "t2", titulo: "Pintar o muro", descricao: "Trazer tintas", concluida: false },
  ]);

  const handleAlternarStatus = (id) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  };

  return (
    <div className="app-container">
      {/* Painel 1: Renderiza a lista de tarefas */}
      <Painel titulo="Painel de Tarefas">
        <ListaTarefas tarefas={tarefas} onAlternarStatus={handleAlternarStatus} />
      </Painel>

      {/* Painel 2: Reutilizado com conteúdo diferente */}
      <Painel titulo="Informações do Mutirão">
        <p>Próximo encontro comunitário: Sábado às 08:00.</p>
      </Painel>
    </div>
  );
}
