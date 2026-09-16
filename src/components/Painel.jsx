import ListaTarefas from "./ListaTarefas";

export default function Painel() {
  const tarefasExemplo = [
    { id: "t1", titulo: "Limpar a praça", descricao: "Mutirão às 09h", concluida: true },
    { id: "t2", titulo: "Pintar o muro", descricao: "Trazer tintas", concluida: false },
    { id: "t3", titulo: "Plantio de mudas", descricao: "Na horta comunitária", concluida: false }
  ];

  return (
    <main>
      <h2>Painel de Tarefas</h2>
      <ListaTarefas tarefas={tarefasExemplo} />
    </main>
  );
}