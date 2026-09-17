import { useState, useEffect } from "react";
import { buscarSugestoes } from "../services/api";
import Painel from "../components/Painel";

export default function Sugestoes() {
  const [status, setStatus] = useState("carregando");
  const [sugestoes, setSugestoes] = useState([]);

  const carregar = (signal) => {
    setStatus("carregando");
    buscarSugestoes(signal)
      .then((data) => {
        setSugestoes(data);
        setStatus("sucesso");
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setStatus("erro");
        }
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    carregar(controller.signal);
    return () => controller.abort();
  }, []);

  if (status === "carregando") {
    return (
      <Painel titulo="Sugestões">
        <p>Carregando sugestões...</p>
      </Painel>
    );
  }

  if (status === "erro") {
    return (
      <Painel titulo="Sugestões">
        <p>Erro ao carregar sugestões do servidor.</p>
        <button onClick={() => carregar()}>Tentar novamente</button>
      </Painel>
    );
  }

  if (sugestoes.length === 0) {
    return (
      <Painel titulo="Sugestões">
        <p>Nenhuma sugestão encontrada.</p>
      </Painel>
    );
  }

  return (
    <Painel titulo="Sugestões">
      <ul>
        {sugestoes.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>
    </Painel>
  );
}