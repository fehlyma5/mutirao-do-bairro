import { createContext, useContext, useState, useEffect } from "react";

const TarefasContext = createContext();

const DADOS_INICIAIS = [
  { id: "t1", titulo: "Limpar a praça", categoria: "Limpeza", voluntarios: 5, concluida: true, descricao: "Mutirão na praça central" },
  { id: "t2", titulo: "Pintar o muro", categoria: "Pintura", voluntarios: 2, concluida: false, descricao: "Muro da associação de moradores" }
];

export function TarefasProvider({ children }) {
  const [tarefas, setTarefas] = useState(() => {
    try {
      const salvas = localStorage.getItem("tarefas_mutirao");
      return salvas ? JSON.parse(salvas) : DADOS_INICIAIS;
    } catch {
      return DADOS_INICIAIS;
    }
  });

  useEffect(() => {
    localStorage.setItem("tarefas_mutirao", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (nova) => setTarefas((prev) => [...prev, nova]);
  const alternarStatus = (id) => setTarefas((prev) => prev.map((t) => t.id === id ? { ...t, concluida: !t.concluida } : t));
  const excluirTarefa = (id) => setTarefas((prev) => prev.filter((t) => t.id !== id));

  return (
    <TarefasContext.Provider value={{ tarefas, adicionarTarefa, alternarStatus, excluirTarefa }}>
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  const context = useContext(TarefasContext);
  if (!context) {
    throw new Error("useTarefas deve ser usado dentro de um TarefasProvider");
  }
  return context;
}