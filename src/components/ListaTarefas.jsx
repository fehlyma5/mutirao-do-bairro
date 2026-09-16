import CartaoTarefa from "./CartaoTarefa";

export default function ListaTarefas({ tarefas, onAlternarStatus, onExcluirTarefa }) {
  if (!tarefas || tarefas.length === 0) {
    return <p className="mensagem-vazia">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <section className="lista-tarefas">
      {tarefas.map((tarefa) => (
        <CartaoTarefa
          key={tarefa.id} // ID estável (previne quebras ao deletar do meio da lista)
          tarefa={tarefa}
          onAlternarStatus={onAlternarStatus}
          onExcluirTarefa={onExcluirTarefa}
        />
      ))}
    </section>
  );
}