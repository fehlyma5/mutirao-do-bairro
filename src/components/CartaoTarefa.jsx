export default function CartaoTarefa({ tarefa, onAlternarStatus, onExcluirTarefa }) {
  return (
    <article className={`cartao ${tarefa.concluida ? "concluida" : "pendente"}`}>
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descricao}</p>
      
      <div className="cartao-rodape">
        <span>Status: {tarefa.concluida ? "Concluída" : "Pendente"}</span>
        
        <div className="acoes">
          <button type="button" onClick={() => onAlternarStatus(tarefa.id)}>
            Alternar Status
          </button>
          
          <button type="button" onClick={() => onExcluirTarefa(tarefa.id)}>
            Excluir
          </button>
        </div>
      </div>
    </article>
  );
}