export default function CartaoTarefa({ tarefa }) {
  return (
    <article className={`cartao ${tarefa.concluida ? "concluida" : "pendente"}`}>
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descricao}</p>
      <span>Status: {tarefa.concluida ? "Concluída" : "Pendente"}</span>
    </article>
  );
}