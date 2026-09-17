import { NavLink, Outlet } from "react-router-dom";

export default function LayoutMain() {
  // Função auxiliar para evitar repetição de código
  const linkClass = ({ isActive }) => (isActive ? "ativo" : "");

  return (
    <div className="app-container">
      <nav className="menu-navegacao">
        <NavLink to="/" end className={linkClass}>
          Painel
        </NavLink>
        <NavLink to="/nova" className={linkClass}>
          Nova
        </NavLink>
        <NavLink to="/tarefas" className={linkClass}>
          Tarefas
        </NavLink>
        <NavLink to="/relatorio" className={linkClass}>
          Relatório
        </NavLink>
        <NavLink to="/sugestoes" className={linkClass}>
          Sugestões
        </NavLink>
        <NavLink to="/sobre" className={linkClass}>
          Sobre
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}