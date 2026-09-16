export default function CartaoTarefa({ tarefa, onAlternarStatus }) {
  return (
    <article className={`cartao ${tarefa.concluida ? "concluida" : "pendente"}`}>
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descricao}</p>
      <span>Status: {tarefa.concluida ? "Concluída" : "Pendente"}</span>
      
      {/* Ação nasce aqui e chama o callback via arrow function */}
      <button type="button" onClick={() => onAlternarStatus(tarefa.id)}>
        Alternar Status
      </button>
    </article>
  );
}