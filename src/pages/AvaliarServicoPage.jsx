import React, { useState } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import "./AgenteServicoPages.css";
import { useNavigate } from "react-router-dom";

export default function AvaliarServicoPage() {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState("");
  const [sucesso, setSucesso] = useState(false);
  const navigate = useNavigate();
  function Star({ filled, onClick }) {
    return (
      <span onClick={onClick} style={{cursor:'pointer',fontSize:"1.7em",color: filled ? "#ffbc00" : "#d3d3d3", transition:".13s"}}>
        <FaStar />
      </span>
    );
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (!nota) return;
    setSucesso(true);
    setTimeout(()=>navigate("/agente-externo"), 1400);
  };
  return (
    <div className="agente-servico-bg">
      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-logo-title">
          <span className="gear">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#45718f" viewBox="0 0 24 24"><path d="M19.434 8.08L22 6.735 20.265 2l-2.668 1.114a7.997 7.997 0 0 0-2.124-.885L15 0h-6l-.473 2.229a7.997 7.997 0 0 0-2.124.885L2.735 2 1 6.735l2.566 1.345c-.085.426-.141.867-.158 1.319A7.983 7.983 0 0 0 3 12c0 .543.058 1.069.158 1.585l-2.566 1.355L2.735 22l2.668-1.125c.655.36 1.363.663 2.124.887L9 24h6l.473-2.238a7.997 7.997 0 0 0 2.124-.885l2.668 1.121L23 17.265l-2.566-1.345c.085-.426.141-.869.155-1.321A7.983 7.983 0 0 0 21 12c0-.543-.058-1.069-.158-1.586zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
          </span>
          <span className="form-logo-label">SAGE</span>
        </div>
        <div className="form-title">
          <FaStar style={{ color: "#ffbc00" }} /> Avaliar serviço ou funcionário
        </div>
        <div className="form-group">
          <label>
            Nota (clique nas estrelas) 
            <div style={{display:'flex', gap: 6, margin:'8px 0 16px 0', fontSize:'1.15em'}}>
              {[1,2,3,4,5].map(i=>(
                <Star filled={i<=nota} key={i} onClick={()=>setNota(i)} />
              ))}
            </div>
          </label>
          <label>
            Comentário
            <textarea placeholder="Comentário, sugestão, elogio, etc"
              value={comentario}
              onChange={e=>setComentario(e.target.value)} />
          </label>
        </div>
        <button type="submit" className="btn-solid">Enviar avaliação</button>
        <button type="button" className="btn-ghost" onClick={()=>navigate(-1)}>Voltar</button>
        {sucesso && (
          <div className="success center">
            <FaCheckCircle style={{ color: "#1db854", marginBottom: -3, marginRight: 6 }}/>
            Avaliação registrada. Obrigado!
          </div>
        )}
      </form>
    </div>
  );
}