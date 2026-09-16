import CartaoTarefa from "./CartaoTarefa";

export default function ListaTarefas({ tarefas, onAlternarStatus }) {
  if (!tarefas || tarefas.length === 0) {
    return <p className="mensagem-vazia">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <section className="lista-tarefas">
      {tarefas.map((tarefa) => (
        <CartaoTarefa 
          key={tarefa.id} 
          tarefa={tarefa} 
          onAlternarStatus={onAlternarStatus} 
        />
      ))}
    </section>
  );
}