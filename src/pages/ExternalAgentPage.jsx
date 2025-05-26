import React from "react";
import { FaTools, FaStar, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ExternalAgentPage.css";

export default function ExternalAgentPage() {
  const navigate = useNavigate();
  function handleLogout() {
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <div className="agente-externo-bg">
      <div className="agente-externo-container">
        <header className="agente-externo-header">
          <div className="agente-externo-logoarea">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#456789" viewBox="0 0 24 24">
              <path d="M19.434 8.08L22 6.735 20.265 2l-2.668 1.114a7.997 7.997 0 0 0-2.124-.885L15 0h-6l-.473 2.229a7.997 7.997 0 0 0-2.124.885L2.735 2 1 6.735l2.566 1.345c-.085.426-.141.867-.158 1.319A7.983 7.983 0 0 0 3 12c0 .543.058 1.069.158 1.585l-2.566 1.355L2.735 22l2.668-1.125c.655.36 1.363.663 2.124.887L9 24h6l.473-2.238a7.997 7.997 0 0 0 2.124-.885l2.668 1.121L23 17.265l-2.566-1.345c.085-.426.141-.869.155-1.321A7.983 7.983 0 0 0 21 12c0-.543-.058-1.069-.158-1.586zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
            </svg>
            <span className="agente-externo-logo">SAGE</span>
          </div>
        </header>
        <h2 className="agente-externo-title">Portal do Agente Externo</h2>

        <nav className="agente-externo-options">
          <button
            className="agente-externo-option"
            onClick={() => navigate("/agente-externo/solicitar-manutencao")}
          >
            <FaTools className="option-icon" />
            <span>Solicitar manutenção corretiva</span>
          </button>
          <button
            className="agente-externo-option"
            onClick={() => navigate("/agente-externo/avaliar-servico")}
          >
            <FaStar className="option-icon" />
            <span>Avaliar serviço ou funcionário</span>
          </button>
          <button
            className="agente-externo-option"
            onClick={() => navigate("/agente-externo/solicitar-instrucao")}
          >
            <FaQuestionCircle className="option-icon" />
            <span>Solicitar instrução de equipamento</span>
          </button>
        </nav>
        <button className="agente-externo-logout" onClick={handleLogout}>
          <FaSignOutAlt /> <span>Sair</span>
        </button>
      </div>
    </div>
  );
}