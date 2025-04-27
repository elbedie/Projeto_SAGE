import Sidebar from "../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import "./DashboardPage.css";

function diasEntre(d1, d2) {
  const dd1 = new Date(d1), dd2 = new Date(d2);
  return Math.floor((dd2 - dd1) / (1000 * 60 * 60 * 24));
}

export default function DashboardPage() {
  const perfil = sessionStorage.getItem("perfil") || "tecnico";
  const nome = sessionStorage.getItem("nomeUser") || "Usuário";

  const [detalhes, setDetalhes] = useState(null);
  const [solExcluir, setSolExcluir] = useState(null);
  const [solicitacoes, setSolicitacoes] = useState([
    {
      nome:'João Silva',
      equipamento:'MONITOR MULTIPARAMÉDICO (ENFERMARIA - 5º andar)',
      detalhes: {
        equipamento: "MONITOR MULTIPARAMÉDICO (MINDRAY - iPM 12)",
        setor: "ENFERMARIA 5º ANDAR BLOCO D",
        data: "2025-04-02",
        descricao: "Sem descrição"
      }
    },
    {
      nome:'Adam Sumeriano',
      equipamento:'MONITOR MULTIPARAMÉDICO (ENFERMARIA - 5º andar)',
      detalhes: {
        equipamento: "MONITOR MULTIPARAMÉDICO (MINDRAY - iPM 12)",
        setor: "ENFERMARIA 5º ANDAR BLOCO D",
        data: "2025-04-02",
        descricao: ""
      }
    }
  ]);

  const [osAbertas, setOsAbertas] = useState([]);
  const [osPendentes, setOsPendentes] = useState([]);
  const [placeholderOsAbertas] = useState([
    { nome: "Madalena Aqua", detalhes: { setor: "Bloco Cirúrgico", data: "2024-06-01" } },
    { nome: "Julio Bim", detalhes: { setor: "Bloco Cirúrgico", data: "2024-06-02" } },
    { nome: "Mariana Clarim", detalhes: { setor: "Enfermaria", data: "2024-06-03" } },
    { nome: "Diego Rodrigues", detalhes: { setor: "UTI", data: "2024-06-04" } },
  ]);
  const [placeholderOsPendentes] = useState([
    { nome: "Madalena Aqua", detalhes: { setor: "Enfermaria", data: "2024-04-10" } },
    { nome: "Julio Bim", detalhes: { setor: "Enfermaria", data: "2024-04-12" } },
  ]);

  useEffect(() => {
    // Carrega Solicitações do localStorage
    const doStorage = JSON.parse(localStorage.getItem("solicitacoes") || "[]");
    if (doStorage.length) {
      setSolicitacoes(prev => [
        ...prev,
        ...doStorage.filter(
          req => !prev.some(
            x => x.detalhes && req.detalhes && x.detalhes.data === req.detalhes.data && x.detalhes.equipamento === req.detalhes.equipamento
          )
        )
      ]);
    }

    // Carrega OS Abertas e calcula pendentes
    const osAberts = JSON.parse(localStorage.getItem("osAbertas") || "[]").filter(os => !os.fechada);
    const hoje = new Date();
    const abertas = [];
    const pendentes = [];

    for (let os of osAberts) {
      const dataCriacao = os.detalhes?.data || os.createdAt || os.dataCriacao;
      if (!dataCriacao) {
        abertas.push(os);
        continue;
      }
      const dias = diasEntre(dataCriacao, hoje);
      if (dias > 20) {
        pendentes.push(os);
      } else {
        abertas.push(os);
      }
    }
    setOsAbertas(abertas);
    setOsPendentes(pendentes);

    // eslint-disable-next-line
  }, []);

  function abrirDetalhes(solic) {
    setDetalhes(solic);
  }
  function fecharModal() {
    setDetalhes(null);
  }
  function removerSolicitacaoConfirmado(idx) {
    setSolicitacoes(prev => {
      const removed = prev[idx];
      const novas = prev.filter((_, i) => i !== idx);
      const atuaisStorage = JSON.parse(localStorage.getItem("solicitacoes") || "[]");
      const novasStorage = atuaisStorage.filter(s =>
        !(
          s.nome === removed.nome &&
          s.equipamento === removed.equipamento &&
          s.detalhes && removed.detalhes &&
          s.detalhes.data === removed.detalhes.data &&
          s.detalhes.equipamento === removed.detalhes.equipamento
        )
      );
      localStorage.setItem("solicitacoes", JSON.stringify(novasStorage));
      return novas;
    });
    setSolExcluir(null);
  }

  return (
    <div style={{display:"flex"}}>
      <Sidebar perfil={perfil} nomeUser={nome}/>
      <main className="main-dash dash-centered">
        <img src="/logo.png" alt="SAGE" className="sage-logo" />
        <div className="cards-container">
          <section className="section-card">
            <h3 className="titulo-card">Solicitações</h3>
            {solicitacoes.length === 0 && (
              <div className="linha-card">
                <span>Nenhuma solicitação pendente.</span>
              </div>
            )}
            {solicitacoes.map((s, i) => (
              <div className="linha-card" key={i}>
                <span>{s.nome} - {s.equipamento}</span>
                <span style={{display:"flex", gap:9}}>
                  <button
                    className="botao-card"
                    onClick={()=>abrirDetalhes(s.detalhes)}
                  >Ver detalhes</button>
                  <button
                    className="botao-card botao-excluir"
                    onClick={() => setSolExcluir(i)}
                    title="Excluir solicitação"
                    style={{background:"#ffeaea", color:"#ab0613"}}
                  >✕</button>
                </span>
              </div>
            ))}
          </section>
          <div className="cards-grid">
            <section className="section-card">
              <h3 className="titulo-card">O.S Abertas</h3>
              {(osAbertas.length===0 && placeholderOsAbertas.length>0) && placeholderOsAbertas.map((os, idx) => (
                <div className="linha-card os-linha" key={os.nome + idx}>
                  <span className="os-nome">{os.nome}</span>
                  <span className="os-setor">({os.detalhes?.setor})</span>
                  <span className="os-data-verde">Aberta em {os.detalhes?.data}</span>
                </div>
              ))}
              {osAbertas.length>0 && osAbertas.map(os => (
                <div className="linha-card os-linha" key={os.id}>
                  <span className="os-nome">{os.nome || os.tecnico || "Desconhecido"}</span>
                  <span className="os-setor">({os.detalhes?.setor})</span>
                  <span className="os-data-verde">Aberta em {os.detalhes?.data}</span>
                </div>
              ))}
              {osAbertas.length===0 && placeholderOsAbertas.length===0 && (
                <div className="linha-card">Nenhuma O.S. aberta</div>
              )}
            </section>
            <section className="section-card">
              <h3 className="titulo-card">O.S Pendentes</h3>
              {(osPendentes.length===0 && placeholderOsPendentes.length>0) && placeholderOsPendentes.map((os, idx) => (
                <div className="linha-card os-linha" key={os.nome + idx}>
                  <span className="os-nome">{os.nome}</span>
                  <span className="os-setor">({os.detalhes?.setor})</span>
                  <span className="os-data-vermelha">
                    Aberta em {os.detalhes?.data} - {diasEntre(os.detalhes?.data, new Date())} dias
                  </span>
                </div>
              ))}
              {osPendentes.length>0 && osPendentes.map(os => (
                <div className="linha-card os-linha" key={os.id}>
                  <span className="os-nome">{os.nome || os.tecnico || "Desconhecido"}</span>
                  <span className="os-setor">({os.detalhes?.setor})</span>
                  <span className="os-data-vermelha">
                    Aberta em {os.detalhes?.data} - {diasEntre(os.detalhes?.data, new Date())} dias
                  </span>
                </div>
              ))}
              {osPendentes.length===0 && placeholderOsPendentes.length===0 && (
                <div className="linha-card">Nenhuma O.S. pendente</div>
              )}
            </section>
          </div>
        </div>
        {/* MODAL DETALHES */}
        {!!detalhes && (
          <div className="modal-bg">
            <div className="modal-detalhes">
              <h2>Solicitação de {detalhes.nome || "João Silva"}</h2>
              <div><b>Equipamento:</b> {detalhes.equipamento}</div>
              <div><b>Setor:</b> {detalhes.setor}</div>
              <div><b>Data da solicitação:</b> {detalhes.data}</div>
              <div><b>Descrição:</b> {detalhes.descricao || "Sem descrição."}</div>
              <div className="modal-actions">
                <button className="botao-acao vermelho" onClick={fecharModal}>Fechar</button>
                <button className="botao-acao verde" onClick={() => window.location='/abrir-os'}>Abrir O.S.</button>
              </div>
            </div>
          </div>
        )}
        {/* MODAL CONFIRMAÇÃO DE EXCLUSÃO */}
        {solExcluir !== null && (
          <div className="modal-bg">
            <div className="modal-detalhes" style={{textAlign: "center"}}>
              <h2 style={{color:'#a01818'}}>Excluir solicitação?</h2>
              <p>Tem certeza que deseja <b>excluir</b> esta solicitação? Esta ação não poderá ser desfeita.</p>
              <div className="modal-actions" style={{justifyContent:'center', marginTop: 24}}>
                <button className="botao-acao vermelho" onClick={() => removerSolicitacaoConfirmado(solExcluir)}>
                  Sim, excluir
                </button>
                <button className="botao-acao azul" onClick={() => setSolExcluir(null)}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}