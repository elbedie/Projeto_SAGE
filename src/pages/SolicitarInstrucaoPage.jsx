import React, { useState } from "react";
import { FaQuestionCircle, FaCheckCircle } from "react-icons/fa";
import "./AgenteServicoPages.css";
import { useNavigate } from "react-router-dom";

export default function SolicitarInstrucaoPage() {
  const [equipamento, setEquipamento] = useState("");
  const [duvida, setDuvida] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!equipamento || !duvida) return;
    setSucesso(true);
    setTimeout(() => navigate("/agente-externo"), 1400);
  };

  return (
    <div className="agente-servico-bg">
      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-header">
          <div className="form-logo-title">
            <span className="gear">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#456789" viewBox="0 0 24 24"><path d="M19.434 8.08L22 6.735 20.265 2l-2.668 1.114a7.997 7.997 0 0 0-2.124-.885L15 0h-6l-.473 2.229a7.997 7.997 0 0 0-2.124.885L2.735 2 1 6.735l2.566 1.345c-.085.426-.141.867-.158 1.319A7.983 7.983 0 0 0 3 12c0 .543.058 1.069.158 1.585l-2.566 1.355L2.735 22l2.668-1.125c.655.36 1.363.663 2.124.887L9 24h6l.473-2.238a7.997 7.997 0 0 0 2.124-.885l2.668 1.121L23 17.265l-2.566-1.345c.085-.426.141-.869.155-1.321A7.983 7.983 0 0 0 21 12c0-.543-.058-1.069-.158-1.586zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
            </span>
            <span className="form-logo-label">SAGE</span>
          </div>
          <span className="form-desc">Solicitação de instrução</span>
        </div>

        <div className="form-title">
          <FaQuestionCircle className="title-icon" style={{ color: "#3b70d1" }} />
          Solicitar instrução de equipamento
        </div>

        <div className="form-section">
          <div className="form-group">
            <div className="field">
              <label htmlFor="equipamento">
                Equipamento 
              </label>
              <textarea
                id="equipamento"
                placeholder="Ex: Bomba de infusão, Ventilador, etc"
                value={equipamento}
                onChange={e => setEquipamento(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="duvida">
                Instrução desejada 
              </label>
              <textarea
                id="duvida"
                placeholder="Descreva qual instrução precisa"
                value={duvida}
                onChange={e => setDuvida(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-footer">
          <button type="submit" className="btn-solid">Solicitar</button>
          <button type="button" className="btn-ghost" onClick={() => navigate(-1)}>Voltar</button>
        </div>
        
        {sucesso && (
          <div className="success center">
            <FaCheckCircle style={{ color: "#1db854", marginBottom: -3, marginRight: 6 }}/>
            Solicitação enviada. Retornaremos em breve!
          </div>
        )}
      </form>
    </div>
  );
}