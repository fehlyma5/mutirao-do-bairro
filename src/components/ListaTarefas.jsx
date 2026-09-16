import CartaoTarefa from "./CartaoTarefa";

export default function ListaTarefas({ tarefas }) {
  if (!tarefas || tarefas.length === 0) {
    return <p className="mensagem-vazia">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <section className="lista-tarefas">
      {tarefas.map((tarefa) => (
        <CartaoTarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </section>
  );
}