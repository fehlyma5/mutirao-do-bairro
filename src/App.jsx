import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { TarefasProvider, useTarefas } from "./context/TarefasContext";
import LayoutMain from "./layouts/LayoutMain";
import FormularioTarefa from "./components/FormularioTarefa";
import ListaTarefas from "./components/ListaTarefas";
import DetalheTarefa from "./pages/DetalheTarefa";
import Relatorio from "./pages/Relatorio";
import Sugestoes from "./pages/Sugestoes";
import "./App.css";
import Sobre from "./pages/Sobre";

function PainelDia() {
  const { tarefas, alternarStatus, excluirTarefa } = useTarefas();
  return <ListaTarefas tarefas={tarefas} onAlternarStatus={alternarStatus} onExcluirTarefa={excluirTarefa} />;
}

function NovaWrapper() {
  const { adicionarTarefa } = useTarefas();
  const navigate = useNavigate();
  return (
    <FormularioTarefa
      onAdicionarTarefa={(nova) => {
        adicionarTarefa(nova);
        navigate("/");
      }}
    />
  );
}

function LayoutTarefas() {
  const { tarefas, alternarStatus, excluirTarefa } = useTarefas();
  return (
    <div>
      <h2>Lista Completa de Tarefas</h2>
      <ListaTarefas tarefas={tarefas} onAlternarStatus={alternarStatus} onExcluirTarefa={excluirTarefa} />
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <TarefasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<PainelDia />} />
            <Route path="nova" element={<NovaWrapper />} />
            <Route path="tarefas" element={<LayoutTarefas />}>
              <Route path=":tarefaId" element={<DetalheTarefa />} />
            </Route>
            <Route path="relatorio" element={<Relatorio />} />
            <Route path="sugestoes" element={<Sugestoes />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="*" element={<h2>404 - Página Não Encontrada</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TarefasProvider>
  );
}