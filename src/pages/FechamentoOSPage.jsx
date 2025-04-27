import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const priorities = {
  baixa: { cor: "#198754", nome: "Baixa" },
  media: { cor: "#ffc107", nome: "Média" },
  alta: { cor: "#dc3545", nome: "Alta" }
};

export default function FechamentoOSPage() {
  const navigate = useNavigate();
  const [osAbertas, setOsAbertas] = useState(
    (JSON.parse(localStorage.getItem("osAbertas")) || []).filter(os => !os.fechada)
  );
  const [idxExcluir, setIdxExcluir] = useState(null);
  const [idxDetalhe, setIdxDetalhe] = useState(null);

  function confirmarExclusao(idx) {
    setIdxExcluir(idx);
  }
  function excluirOS() {
    if (idxExcluir === null) return;
    const novas = osAbertas.filter((_, i) => i !== idxExcluir);
    setOsAbertas(novas);
    const todas = JSON.parse(localStorage.getItem("osAbertas")) || [];
    const paraRemover = osAbertas[idxExcluir];
    const novasTodas = todas.filter(os => os.id !== paraRemover.id);
    localStorage.setItem("osAbertas", JSON.stringify(novasTodas));
    setIdxExcluir(null);
  }

  return (
    <div style={{display:"flex"}}>
      <Sidebar perfil="tecnico" nomeUser={sessionStorage.getItem("nomeUser")}/>
      <div style={{padding: 32, flex: 1, minHeight: "100vh", background: "#f5f7fa"}}>
        <h2 style={{marginTop: 0, color: "#232", textAlign: "center"}}>O.S. Abertas</h2>
        <div style={{ maxWidth: 950, margin: "0 auto" }}>
          {osAbertas.length === 0 ? (
            <div style={{
              background: "#fff",
              padding: 28,
              borderRadius: 10,
              textAlign: "center",
              color: "#888",
              fontSize: 18,
              marginTop: 40
            }}>
              Nenhuma O.S. aberta no momento.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {osAbertas.map((os, i) => (
                <div 
                  key={os.id}
                  style={{
                    background: "#fff",
                    borderRadius: 10,
                    padding: "22px 30px",
                    boxShadow: "0 2px 7px #0002",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: 18 }}>{os.equipamento}</span>
                      <span style={{
                        marginLeft: 18,
                        fontSize: 14,
                        background: priorities[os.detalhes.prioridade]?.cor ?? "#888",
                        borderRadius: 8,
                        padding: "2px 13px",
                        fontWeight: 500,
                        color: "#fff"
                      }}>
                        {priorities[os.detalhes.prioridade]?.nome ?? os.detalhes.prioridade}
                      </span>
                    </div>
                    <div style={{display:"flex", gap:12}}>
                      <button
                        onClick={() => setIdxDetalhe(i)}
                        style={{
                          background: "#eef2fa",
                          color: "#353a5e",
                          border: "none",
                          borderRadius: 7,
                          padding: "8px 15px",
                          fontWeight: 600,
                          fontSize: 15,
                          cursor: "pointer"
                        }}
                      >Ver Detalhes</button>
                      <button
                        onClick={() => navigate(`/fechar-os/${os.id}`)}
                        style={{
                          background: "#345377",
                          color: "#fff",
                          border: "none",
                          borderRadius: 7,
                          padding: "8px 15px",
                          fontWeight: 600,
                          fontSize: 15,
                          cursor: "pointer"
                        }}
                      >Fechar O.S</button>
                      <button
                        onClick={() => confirmarExclusao(i)}
                        style={{
                          background: "#ffeaea",
                          color: "#e91e2e",
                          border: "none",
                          borderRadius: 7,
                          padding: "8px 15px",
                          fontWeight: 600,
                          fontSize: 15,
                          cursor: "pointer"
                        }}
                        title="Excluir O.S."
                      >Excluir</button>
                    </div>
                  </div>
                  <div style={{ fontSize: 15, color: "#222", marginTop: 7 }}>
                    <b>Problema:</b> {os.detalhes.descricao}
                  </div>
                  <div style={{ fontSize: 14, color: "#555", marginTop: 2 }}>
                    <b>Data:</b> {os.detalhes.data} &nbsp;|&nbsp;
                    <b>Responsável:</b> {os.nome}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Modal de Detalhes */}
        {idxDetalhe !== null && osAbertas[idxDetalhe] &&
          <div style={{
            position: "fixed",
            left: 0, top: 0, right: 0, bottom: 0,
            background: "#0008", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20
          }}>
            <div style={{
              background: "#fff",
              borderRadius: 12,
              padding: "36px 32px",
              boxShadow: "0 8px 25px #0003",
              minWidth: 330,
              minHeight: 120,
              maxWidth: 400
            }}>
              <h2 style={{color:"#353a5e", marginBottom:18}}>Detalhes da O.S.</h2>
              <div style={{fontSize:16, lineHeight:"1.7"}}>
                <b>Equipamento:</b> {osAbertas[idxDetalhe].equipamento}<br/>
                <b>Setor:</b> {osAbertas[idxDetalhe].detalhes?.setor}<br/>
                <b>Prioridade:</b> <span style={{
                  color: priorities[osAbertas[idxDetalhe].detalhes?.prioridade]?.cor
                }}>{priorities[osAbertas[idxDetalhe].detalhes?.prioridade]?.nome ?? osAbertas[idxDetalhe].detalhes?.prioridade}</span><br/>
                <b>Data de abertura:</b> {osAbertas[idxDetalhe].detalhes?.data}<br/>
                <b>Responsável:</b> {osAbertas[idxDetalhe].nome}<br/>
                <b>Descrição do Problema:</b>
                <div style={{background:"#f3f4fa", padding:"7px 10px", borderRadius:6, margin:"7px 0", color:"#404"}}>
                  {osAbertas[idxDetalhe].detalhes?.descricao}
                </div>
              </div>
              <div style={{marginTop:22, textAlign:"right"}}>
                <button onClick={()=>setIdxDetalhe(null)}
                  style={{
                    background:"#345377", color:"#fff", border:"none",
                    borderRadius:5, padding:"8px 18px", fontWeight:600, fontSize:15, cursor:"pointer"
                  }}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        }

        {/* Modal de confirmação de exclusão */}
        {idxExcluir !== null &&
          <div style={{
            position: "fixed",
            left: 0, top: 0, right: 0, bottom: 0,
            background: "#0008", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10
          }}>
            <div style={{
              background: "#fff",
              borderRadius: 10,
              padding: "36px 32px",
              boxShadow: "0 8px 25px #0003",
              minWidth: 300,
              textAlign: "center"
            }}>
              <h2 style={{color:"#b0142e", marginBottom:18}}>Excluir O.S.?</h2>
              <p>Confirma a exclusão desta Ordem de Serviço?</p>
              <div style={{display:"flex", justifyContent:"center", gap:18, marginTop:28}}>
                <button onClick={excluirOS}
                  style={{
                    background:"#b0142e", color:"#fff", border:"none",
                    borderRadius:5, padding:"7px 22px", fontWeight:600, fontSize:15, cursor:"pointer"
                  }}>
                  Sim, excluir
                </button>
                <button onClick={()=>setIdxExcluir(null)}
                  style={{
                    background:"#ececec", color:"#2d2d2d", border:"none",
                    borderRadius:5, padding:"7px 22px", fontWeight:600, fontSize:15, cursor:"pointer"
                  }}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}