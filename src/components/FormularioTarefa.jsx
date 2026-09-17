import { useState } from "react";

export default function FormularioTarefa({ onAdicionarTarefa }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Geral");
  const [voluntarios, setVoluntarios] = useState(1);
  const [concluida, setConcluida] = useState(false);
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação
    if (!titulo.trim()) {
      setErro("O título é obrigatório.");
      return;
    }

    if (Number(voluntarios) <= 0) {
      setErro("O número de voluntários deve ser maior que zero.");
      return;
    }

    // Cria nova tarefa com id único baseado em timestamp
    const novaTarefa = {
      id: String(Date.now()),
      titulo,
      categoria,
      voluntarios: Number(voluntarios),
      concluida,
      descricao: `Categoria: ${categoria} | Voluntários: ${voluntarios}`,
    };

    onAdicionarTarefa(novaTarefa);

    // Limpa o formulário e os erros
    setTitulo("");
    setCategoria("Geral");
    setVoluntarios(1);
    setConcluida(false);
    setErro("");
  };

  return (
    <form className="formulario-tarefa" onSubmit={handleSubmit}>
      <h3>Nova Tarefa</h3>

      {erro && <p className="mensagem-erro">{erro}</p>}

      <div className="campo">
        <label htmlFor="titulo">Título:</label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="categoria">Categoria:</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Geral">Geral</option>
          <option value="Limpeza">Limpeza</option>
          <option value="Pintura">Pintura</option>
          <option value="Jardinagem">Jardinagem</option>
        </select>
      </div>

      <div className="campo">
        <label htmlFor="voluntarios">Voluntários necessários:</label>
        <input
          id="voluntarios"
          type="number"
          value={voluntarios}
          onChange={(e) => setVoluntarios(e.target.value)}
        />
      </div>

      <div className="campo-checkbox">
        <label htmlFor="concluida">
          <input
            id="concluida"
            type="checkbox"
            checked={concluida}
            onChange={(e) => setConcluida(e.target.checked)}
          />
          Já concluída
        </label>
      </div>

      <button type="submit">Cadastrar Tarefa</button>
    </form>
  );
}