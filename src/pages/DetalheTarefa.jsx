import { useParams, useNavigate } from "react-router-dom";
import { useTarefas } from "../context/TarefasContext";

export default function DetalheTarefa() {
  const { tarefaId } = useParams();
  const navigate = useNavigate();
  const { tarefas } = useTarefas();

  const tarefa = tarefas.find((t) => t.id === tarefaId);

  if (!tarefa) {
    return (
      <div>
        <p>Tarefa não encontrada.</p>
        <button onClick={() => navigate("/tarefas")}>Ir para Lista (Fixo)</button>
      </div>
    );
  }

  return (
    <div>
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descricao}</p>
      <p>Status: {tarefa.concluida ? "Concluída" : "Pendente"}</p>
      <button onClick={() => navigate(-1)}>Voltar no Histórico</button>
    </div>
  );
}