import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./RelatorioDetalhePage.css";

export default function RelatorioDetalhePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const todas = JSON.parse(localStorage.getItem("osFechadas")||"[]");
  const os = todas.find(x => x.id === id);

  const [modalExcluir, setModalExcluir] = useState(false);

  function excluirRelatorio() {
    const novas = todas.filter(x => x.id !== id);
    localStorage.setItem("osFechadas", JSON.stringify(novas));
    navigate("/relatorios");
  }

  if (!os || !os.fechada) return (
    <div style={{padding: 40, fontSize: 18, color: "#d32d2d"}}>
      <Sidebar perfil="tecnico" nomeUser={sessionStorage.getItem("nomeUser")}/>
      Relatório não encontrado!
    </div>
  );
  return (
    <div style={{display: "flex", minHeight:"100vh", background:"#f8fafc"}}>
      <Sidebar perfil="tecnico" nomeUser={sessionStorage.getItem("nomeUser")}/>
      <div style={{flex:1}}>
        <div className="relatorio-word-paper">
          <div style={{display: "flex", justifyContent:"space-between"}}>
            <button className="relatorio-voltar-btn" onClick={()=>navigate("/relatorios")}>← Voltar</button>
            <button 
              className="relatorio-excluir-btn" 
              style={{
                background:"#ffebee", color:"#b71c1c", fontWeight:"bold",
                border:"none", borderRadius:6, padding:"7px 16px", cursor:"pointer"
              }}
              onClick={()=>setModalExcluir(true)}
            >Excluir relatório</button>
          </div>
          <div className="relatorio-header">
            RELATÓRIO TÉCNICO
          </div>
          <div className="relatorio-subtitulo">
            {os.equipamento}
          </div>
          <hr className="relatorio-divisor"/>
          <div className="relatorio-campo">
            <span className="relatorio-label">Data de abertura:</span>
            <span className="relatorio-value">{os.detalhes.data}</span>
          </div>
          <div className="relatorio-campo">
            <span className="relatorio-label">Responsável:</span>
            <span className="relatorio-value">{os.nome}</span>
          </div>
          <div className="relatorio-campo">
            <span className="relatorio-label">Setor:</span>
            <span className="relatorio-value">{os.fechamento.setor}</span>
          </div>
          <div className="relatorio-campo">
            <span className="relatorio-label">Problema:</span>
            <span className="relatorio-value">{os.detalhes.descricao}</span>
          </div>
          <div className="relatorio-campo">
            <span className="relatorio-label">Status:</span>
            <span className="relatorio-value relatorio-status-finalizada">
              Finalizada
            </span>
          </div>
          <div className="relatorio-campo">
            <span className="relatorio-label">Manutenção realizada:</span>
            <span className="relatorio-value">{os.fechamento.descricao}</span>
          </div>
          <div className="relatorio-campo">
            <span className="relatorio-label">Tempo gasto:</span>
            <span className="relatorio-value">{os.fechamento.tempo}</span>
          </div>
          <div className="relatorio-campo">
            <span className="relatorio-label">Data de fechamento:</span>
            <span className="relatorio-value">
              {new Date(os.fechamento.dataFechamento).toLocaleString()}
            </span>
          </div>
        </div>
        {/* Modal de confirmação exclusão */}
        {modalExcluir &&
          <div style={{
            position:"fixed",left:0,top:0,right:0,bottom:0,background:"#0006",
            display:"flex",alignItems:"center",justifyContent:"center",zIndex:10
          }}>
            <div style={{
              background:"#fff",borderRadius:8,padding:"24px 28px",minWidth:260,textAlign:"center"
            }}>
              <h2 style={{color:"#b71c1c", marginBottom:13}}>Excluir relatório?</h2>
              <p>Tem certeza que deseja excluir este relatório?</p>
              <div style={{marginTop:18,display:"flex",justifyContent:"center",gap:15}}>
                <button onClick={excluirRelatorio} style={{
                  background:"#b71c1c",color:"#fff",border:"none", borderRadius:5, fontWeight:600,
                  padding:"6px 20px", fontSize:16, cursor:"pointer"
                }}>
                  Sim, excluir
                </button>
                <button onClick={()=>setModalExcluir(false)} style={{
                  background:"#f3f3f3",color:"#1d1d1d",border:"none", borderRadius:5, fontWeight:600,
                  padding:"6px 20px", fontSize:16, cursor:"pointer"
                }}>Cancelar</button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}