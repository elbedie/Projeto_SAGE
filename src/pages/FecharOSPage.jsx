import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./FecharOSPage.css";

export default function FecharOSPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tecnico = sessionStorage.getItem("nomeUser") || "Técnico";
  const todasOS = JSON.parse(localStorage.getItem("osAbertas") || "[]");
  const idx = todasOS.findIndex((os) => os.id === id);
  const os = todasOS[idx];

  const [descricao, setDescricao] = useState("");
  const [setor, setSetor] = useState(os?.detalhes?.setor || "");
  const [msg, setMsg] = useState("");
  const [enviado, setEnviado] = useState(false);
  const dataFechamento = new Date().toISOString().substr(0, 10);

  function fecharOS(e) {
    e.preventDefault();
    if (!descricao || !setor) {
      setMsg("Preencha todos os campos obrigatórios!");
      return;
    }
    setMsg("Ordem de Serviço fechada com sucesso!");
    setEnviado(true); // Evita reenvio

    const fechamento = { dataFechamento, tecnico, setor, descricao };
    const osFechadas = JSON.parse(localStorage.getItem("osFechadas") || "[]");
    const osFinalizada = { ...os, fechada: true, fechamento };
    osFechadas.push(osFinalizada);
    localStorage.setItem("osFechadas", JSON.stringify(osFechadas));
    const novasAbertas = todasOS.filter((item) => item.id !== os.id);
    localStorage.setItem("osAbertas", JSON.stringify(novasAbertas));

    setTimeout(() => navigate("/dashboard"), 1600);
  }

  // === ALTERAÇÃO ABAIXO ===
  if (!os || os.fechada) {
    // Só mostrar mensagem de erro se NÃO for envio bem-sucedido
    if (!enviado) {
      return (
        <div className="fecharos-flex" style={{ padding:32 }}>
          <Sidebar perfil="tecnico" nomeUser={tecnico}/>
          <div style={{ color: "#fff", margin: 40, fontSize: 20 }}>O.S. não encontrada ou já fechada.</div>
        </div>
      );
    }
    // Se foi enviado, não mostra nada porque vai mostrar a mensagem de sucesso/transição!
  }

  if (enviado) {
    return (
      <div className="fecharos-flex" style={{
        minHeight:"100vh",
        background: "linear-gradient(135deg,#36de9a 0%, #daf3ea 100%)",
        alignItems: 'center', justifyContent: 'center', 
        display: 'flex', padding:0
      }}>
        <Sidebar perfil="tecnico" nomeUser={tecnico}/>
        <div style={{
          margin: "auto",
          maxWidth: 460,
          width: "96%",
          background: "#fff",
          borderRadius: 18,
          padding: "44px 30px",
          boxShadow: "0 8px 32px #48d9b440",
          textAlign: "center",
          display: 'flex',
          flexDirection:"column",
          alignItems:"center"
        }}>
          {/* SVG de sucesso */}
          <svg
            style={{marginBottom:24}}
            width="70" height="70" viewBox="0 0 70 70"
            fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="35" cy="35" r="34" fill="#36de9a" stroke="#24ac69" strokeWidth="2"/>
            <path
              d="M21 37.5L32.5 49L49 25"
              stroke="#fff"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ strokeDasharray: 50, strokeDashoffset: 0, animation: "dash 1s linear" }}
            />
            <style>
              {`
                @keyframes dash {
                  from { stroke-dashoffset: 50; }
                  to { stroke-dashoffset: 0; }
                }
              `}
            </style>
          </svg>
          <h2 style={{
            color: "#25bf74",
            fontWeight: 700,
            fontSize: "1.6rem",
            margin: 0,
            marginBottom: 12
          }}>
            Ordem de Serviço fechada!
          </h2>
          <div style={{fontSize: 18, color:"#1a5137", marginBottom:14}}>
            Redirecionando para o painel...
          </div>
          <div style={{marginTop:18, opacity:.68, fontSize:14,color:"#222"}}>
            Você será direcionado em instantes.<br/>
            Caso isso não aconteça,&nbsp;
            <button onClick={() => window.location.href="/dashboard"}
              style={{
                color: "#25bf74", background: 'none', border: 'none', textDecoration:"underline", padding:0, cursor: "pointer", fontSize:14
              }}>
              clique aqui
            </button>
            .
          </div>
        </div>
      </div>
    );
  }

  // Render form normalmente enquanto ainda não enviou
  return (
    <div className="fecharos-flex">
      <Sidebar perfil="tecnico" nomeUser={tecnico} />
      <div className="fecharos-main-bg">
        <form className="fecharos-form" onSubmit={fecharOS} autoComplete="off">
          <h2>Fechar Ordem de Serviço</h2>
          <div className="fecharos-row">
            <div className="fecharos-col">
              <label>Data de Abertura</label>
              <input
                className="fecharos-input readonly"
                value={os.detalhes.data}
                readOnly
              />
            </div>
            <div className="fecharos-col">
              <label>Data de Fechamento</label>
              <input
                className="fecharos-input readonly"
                value={dataFechamento}
                readOnly
              />
            </div>
          </div>
          <div className="fecharos-row">
            <div className="fecharos-col">
              <label>Equipamento</label>
              <input
                className="fecharos-input readonly"
                value={os.equipamento}
                readOnly
              />
            </div>
            <div className="fecharos-col">
              <label>Prioridade</label>
              <input
                className="fecharos-input readonly"
                value={os.detalhes.prioridade}
                readOnly
              />
            </div>
          </div>
          <div className="fecharos-row">
            <div className="fecharos-col">
              <label>Nome do Técnico</label>
              <input
                className="fecharos-input readonly"
                value={tecnico}
                readOnly
              />
            </div>
            <div className="fecharos-col">
              <label>Setor</label>
              <input
                className="fecharos-input"
                value={setor}
                onChange={e => setSetor(e.target.value)}
                disabled={enviado}
              />
            </div>
          </div>
          <label>Descrição do Problema</label>
          <textarea
            className="fecharos-input readonly"
            value={os.detalhes.descricao}
            readOnly
            rows={2}
          />
          <label>Descrição da manutenção realizada</label>
          <textarea
            className="fecharos-input"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            rows={4}
            disabled={enviado}
          />
          {msg && (
            <div className={`fecharos-msg ${msg.includes('sucesso') ? 'sucesso' : 'erro'}`}>{msg}</div>
          )}
          <button
            className="fecharos-btn"
            type="submit"
            disabled={enviado}
          >
            {enviado ? "Fechando..." : "FECHAR O.S."}
          </button>
        </form>
      </div>
    </div>
  );
}