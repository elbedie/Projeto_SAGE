import React, { useState } from "react";
import { FaTools } from "react-icons/fa";
import './AgenteServicoPages.css';
import { useNavigate } from "react-router-dom";
const setores = ["UTI", "Enfermaria", "Centro Cirúrgico", "Pronto Socorro", "Outro"];
const localidades = ["1º Andar", "2º Andar", "Sala 05", "Leito 03", "Outro"];
const urgencias = ["Alta", "Média", "Baixa"];

export default function SolicitarManutencaoPage() {
  const [equipamento, setEquipamento] = useState("");
  const [setor, setSetor] = useState("");
  const [local, setLocal] = useState("");
  const [urgencia, setUrgencia] = useState("");
  const [descricao, setDescricao] = useState("");
  const [enviou, setEnviou] = useState(false);
  const navigate = useNavigate();
  const agora = new Date();

  const dataHora = agora.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });

  function handleSubmit(e) {
    e.preventDefault();
    if (!equipamento || !setor || !local || !urgencia || !descricao) return;
    setEnviou(true);
    setTimeout(() => navigate("/agente-externo"), 1500);
  }

  return (
    <div className="agente-servico-bg">
      <form className="form-card" onSubmit={handleSubmit} autoComplete="off">
        
        <div className="form-header">
          <div className="form-logo-title">
            <span className="gear">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#456789" viewBox="0 0 24 24">
                <path d="M19.434 8.08L22 6.735 20.265 2l-2.668 1.114a7.997 7.997 0 0 0-2.124-.885L15 0h-6l-.473 2.229a7.997 7.997 0 0 0-2.124.885L2.735 2 1 6.735l2.566 1.345c-.085.426-.141.867-.158 1.319A7.983 7.983 0 0 0 3 12c0 .543.058 1.069.158 1.585l-2.566 1.355L2.735 22l2.668-1.125c.655.36 1.363.663 2.124.887L9 24h6l.473-2.238a7.997 7.997 0 0 0 2.124-.885l2.668 1.121L23 17.265l-2.566-1.345c.085-.426.141-.869.155-1.321A7.983 7.983 0 0 0 21 12c0-.543-.058-1.069-.158-1.586zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
              </svg>
            </span>
            <span className="form-logo-label">SAGE</span>
          </div>
          <span className="form-desc">Solicitação de Manutenção</span>
        </div>

        <div className="form-title">
          <FaTools className="title-icon"/>
          Manutenção Corretiva
        </div>
        
        <div className="form-section">
          <div className="form-group-grid">
            <div className="field">
              <label htmlFor="equipamento">Equipamento</label>
              <input
                id="equipamento"
                type="text"
                placeholder="Ex: Bomba de infusão, Monitor, etc"
                value={equipamento}
                onChange={e => setEquipamento(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="field">
              <label htmlFor="setor">Setor</label>
              <select id="setor" value={setor} onChange={e => setSetor(e.target.value)} required>
                <option value="">Selecione</option>
                {setores.map(op => <option key={op} value={op}>{op}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="local">Local</label>
              <select id="local" value={local} onChange={e => setLocal(e.target.value)} required>
                <option value="">Selecione</option>
                {localidades.map(op => <option key={op} value={op}>{op}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="urgencia">Urgência</label>
              <select id="urgencia" value={urgencia} onChange={e => setUrgencia(e.target.value)} required>
                <option value="">Selecione</option>
                {urgencias.map(op => <option key={op} value={op}>{op}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="field">
              <label htmlFor="descricao">Descreva o problema</label>
              <textarea
                id="descricao"
                placeholder="Descreva o defeito ou sintoma"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                required
                rows={3}
                maxLength={500}
              />
            </div>
            <div className="field">
              <label htmlFor="datahora">Data/hora da solicitação</label>
              <input
                id="datahora"
                type="text"
                value={dataHora}
                readOnly
                tabIndex={-1}
              />
            </div>
          </div>
        </div>

        <div className="form-footer">
          <button type="submit" className="btn-solid">Solicitar manutenção</button>
          <button type="button" className="btn-ghost" onClick={() => navigate(-1)}>Voltar</button>
        </div>

        {enviou && <div className="success center">Solicitação registrada com sucesso!</div>}
      </form>
    </div>
  );
}