import ListaTarefas from "./ListaTarefas";

export default function Painel({ titulo, children }) {
  return (
    <main className="painel">
      <h2>{titulo}</h2>
      {children}
    </main>
  );
}