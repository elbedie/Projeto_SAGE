import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";
import "./AbrirOSPage.css";
// função simples para gerar id único
function gerarId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2,5);
}
export default function AbrirOSPage() {
  const [equipamento, setEquipamento] = useState("");
  const [problema, setProblema] = useState("");
  const [prioridade, setPrioridade] = useState("baixa");
  const [setor, setSetor] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [msg, setMsg] = useState("");
  const [erro, setErro] = useState(false);
  const nomeUser = sessionStorage.getItem("nomeUser") || "Usuário";
  function abrirOS(e) {
    e.preventDefault();
    if (!equipamento || !problema || !setor || !responsavel) {
      setMsg("Preencha todos os campos!");
      setErro(true);
      return;
    }
    setErro(false);
    setMsg("O.S. criada com sucesso!");
    const novaOS = {
      id: gerarId(),
      nome: responsavel,
      equipamento,
      detalhes: {
        equipamento,
        setor, // Salva o setor preenchido
        data: (new Date()).toISOString().substr(0,10),
        descricao: problema,
        prioridade: prioridade
      }
    };
    // Salva em "osAbertas"
    const abertas = JSON.parse(localStorage.getItem("osAbertas") || "[]");
    abertas.push(novaOS);
    localStorage.setItem("osAbertas", JSON.stringify(abertas));
    setEquipamento(""); setProblema(""); setSetor(""); setResponsavel("");
  }
  return (
    <div style={{display:"flex"}}>
      <Sidebar perfil="tecnico" nomeUser={nomeUser}/>
      <div className="abrir-os-bg">
        <form className="abrir-os-form" onSubmit={abrirOS} autoComplete="off">
          <h2>Abrir Ordem de Serviço</h2>
          <label>Equipamento</label>
          <input 
            className="os-input" 
            placeholder="Ex: Monitor Multiparamétrico" 
            value={equipamento} 
            onChange={e=>setEquipamento(e.target.value)} 
            autoFocus 
          />
          <label>Setor</label>
          <input 
            className="os-input"
            placeholder="Ex: Pronto Socorro"
            value={setor}
            onChange={e=>setSetor(e.target.value)}
          />
          <label>Descrição do Problema</label>
          <textarea 
            className="os-input" 
            placeholder="Explique detalhadamente o problema"
            value={problema} 
            onChange={e=>setProblema(e.target.value)}
            rows={3}
          />
          <label>Prioridade</label>
          <select className="os-input" value={prioridade} onChange={e=>setPrioridade(e.target.value)}>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
          </select>
          <label>Técnico Responsável</label>
          <input 
            className="os-input" 
            placeholder="Nome do responsável" 
            value={responsavel} 
            onChange={e=>setResponsavel(e.target.value)}
          />
          {msg && (
            <div className={erro ? "os-msg erro" : "os-msg sucesso"}>
              {msg}
            </div>
          )}
          <button className="os-btn" type="submit">
            ABRIR O.S.
          </button>
        </form>
      </div>
    </div>
  );
}