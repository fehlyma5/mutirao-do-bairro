import { Navigate } from "react-router-dom";
import { useTarefas } from "../context/TarefasContext";
import Painel from "../components/Painel";

export default function Relatorio() {
  const { tarefas } = useTarefas();

  if (tarefas.length === 0) {
    return <Navigate to="/" replace />;
  }

  const concluidas = tarefas.filter((t) => t.concluida).length;
  const porcentagem = tarefas.length > 0 ? Math.round((concluidas / tarefas.length) * 100) : 0;

  return (
    <Painel titulo="Relatório de Progresso">
      <p>Concluídas: <strong>{concluidas}</strong> de <strong>{tarefas.length}</strong></p>
      <p>Progresso: <strong>{porcentagem}%</strong></p>
    </Painel>
  );
}