import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardAdminPage.css";
import {
  FiHome,
  FiPlusCircle,
  FiClipboard,
  FiFileText,
  FiCalendar,
  FiLogOut,
  FiBell,
  FiAlertTriangle,
  FiCheckCircle,
  FiClock,
  FiCircle
} from "react-icons/fi";
const CONTRATOS_FAKE_INIT = [
  {
    empresa: "Hospital Santa Luzia",
    numero: "0079/2025",
    tipo: "Prestação de serviço",
    validade: "2025-12-31",
    valor: 15000.0,
    status: "ativo",
    objeto: "Manutenção preditiva dos equipamentos médicos do bloco cirúrgico.",
    responsavel: "Márcia Souza",
    contato: "marcia.souza@hsl.com.br",
  },
  {
    empresa: "Talmed Soluções",
    numero: "121/2024",
    tipo: "Compra",
    validade: "2024-09-30",
    valor: 25900.5,
    status: "ativo",
    objeto: "Aquisição de monitores multiparamétricos para a UTI pediátrica.",
    responsavel: "Carlos Henrique",
    contato: "carlos@talmed.com",
  },
  {
    empresa: "Facility Saúde",
    numero: "002/2023",
    tipo: "Locação",
    validade: "2023-11-15",
    valor: 8700.0,
    status: "inativo",
    objeto: "Locação de equipamentos de imagem por 1 ano.",
    responsavel: "Fernanda Lima",
    contato: "(11) 99888-7766",
  },
  {
    empresa: "Grupo Vision Life",
    numero: "0143/2026",
    tipo: "Manutenção",
    validade: "2026-05-05",
    valor: 19600.0,
    status: "ativo",
    objeto: "Manutenção corretiva e calibração de cardioversores.",
    responsavel: "Rubens Leite",
    contato: "rubens.leite@vision.com",
  },
  {
    empresa: "Ativa Serviços",
    numero: "459/2024",
    tipo: "Prestação de serviço",
    validade: "2024-08-17",
    valor: 7600.0,
    status: "ativo",
    objeto: "Serviços de esterilização e limpeza mensal hospitalar.",
    responsavel: "Beatriz Ferraz",
    contato: "beatriz@ativa.com",
  },
  {
    empresa: "Vitta Equipamentos",
    numero: "2025/0098",
    tipo: "Compra",
    validade: "2025-10-10",
    valor: 180000.0,
    status: "ativo",
    objeto: "Compra de dez ventiladores pulmonares modernos modelo XZ-2025.",
    responsavel: "João Almeida",
    contato: "ja@vittaequip.com.br",
  },
  {
    empresa: "Stark Medical",
    numero: "930/2023",
    tipo: "Locação",
    validade: "2024-04-15",
    valor: 8300.0,
    status: "inativo",
    objeto: "Locação de bisturis elétricos para centro cirúrgico.",
    responsavel: "Evelin Dias",
    contato: "evelin.dias@stark.com",
  },
];

const statusLabel = {
  ativo: <span style={{ color: "#16b068", fontWeight: 600 }}>Ativo</span>,
  inativo: <span style={{ color: "#cb4848", fontWeight: 600 }}>Inativo</span>,
};

function ModalContrato({ open, contrato, onClose, onSave, onDelete }) {
  const [fields, setFields] = useState(contrato || {});
  const [confirmDelete, setConfirmDelete] = useState(false);

  React.useEffect(() => {
    setFields(contrato || {});
    setConfirmDelete(false);
  }, [contrato, open]);

  if (!open || !contrato) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((f) => ({
      ...f,
      [name]: name === "valor" ? value.replace(",", ".") : value,
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    if (!fields.empresa || !fields.numero || !fields.contato || !fields.responsavel) return;
    onSave({
      ...fields,
      valor: parseFloat(fields.valor),
    });
    onClose();
  }

  function handleDelete() {
    setConfirmDelete(true);
  }
  function confirmDeleteAction() {
    setConfirmDelete(false);
    onDelete();
    onClose();
  }
  function cancelDeleteAction() {
    setConfirmDelete(false);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content" onMouseDown={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <svg width="20" height="20" viewBox="0 0 22 22">
              <rect x="3" y="4.5" width="16" height="13" rx="2.7" fill="#eaf0fa" stroke="#4381cd" strokeWidth="1.3"/>
            </svg>
            Detalhes do Contrato
          </div>
          <button className="btn-modal-close" type="button" title="Fechar" onClick={onClose}>✕</button>
        </div>
        {!confirmDelete ? (
        <>
          <form className="modal-form" onSubmit={handleSave} autoComplete="off">
            <label>Empresa
                <input
                name="empresa"
                value={fields.empresa || ""}
                onChange={handleChange}
                required
                />
            </label>
            <label>Nº Contrato
                <input
                name="numero"
                value={fields.numero || ""}
                onChange={handleChange}
                required
                />
            </label>
            <label>Tipo
                <select
                name="tipo"
                value={fields.tipo || ""}
                onChange={handleChange}
                required
                >
                <option value="">Selecione...</option>
                <option>Prestação de serviço</option>
                <option>Compra</option>
                <option>Locação</option>
                <option>Manutenção</option>
                </select>
            </label>
            <label>Validade
                <input
                name="validade"
                type="date"
                value={fields.validade || ""}
                onChange={handleChange}
                required
                />
            </label>
            <label>Valor (R$)
                <input
                name="valor"
                type="number"
                min="0"
                step="0.01"
                value={fields.valor}
                onChange={handleChange}
                required
                />
            </label>
            <label>Status
                <select
                name="status"
                value={fields.status || ""}
                onChange={handleChange}
                required
                >
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
                </select>
            </label>

            {/* Objeto ocupa linha inteira */}
            <label className="full-row">Objeto
                <textarea
                name="objeto"
                rows={3}
                value={fields.objeto || ""}
                onChange={handleChange}
                maxLength={160}
                />
            </label>
            <label>Responsável
                <input
                name="responsavel"
                value={fields.responsavel || ""}
                onChange={handleChange}
                required
                />
            </label>
            <label>Contato
                <input
                name="contato"
                value={fields.contato || ""}
                onChange={handleChange}
                required
                />
            </label>

            <div className="modal-footer">
                <button
                type="button"
                className="btn-modal-delete"
                onClick={handleDelete}
                >
                <svg
                    width="19"
                    height="19"
                    viewBox="0 0 22 22"
                    style={{ verticalAlign: "-3px", marginRight: 4 }}
                >
                    <rect
                    x="5.4"
                    y="7.8"
                    width="11.3"
                    height="7.2"
                    rx="1.8"
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="1.3"
                    />
                    <rect
                    x="7.8"
                    y="3.5"
                    width="6.8"
                    height="2.5"
                    rx="1.1"
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="0.4"
                    />
                    <rect
                    x="5.4"
                    y="7.8"
                    width="11.3"
                    height="7.2"
                    rx="1.8"
                    stroke="#fff"
                    strokeWidth="1.3"
                    fill="none"
                    />
                    <path
                    d="M9 11v3M13 11v3"
                    stroke="#fff"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    />
                </svg>
                Excluir
                </button>
                <button type="submit" className="btn-modal-save">
                Salvar
                </button>
            </div>
            </form>
        </>
        ) : (
          <div>
            <div className="confirm-delete-modal">
              Tem certeza que deseja <strong>excluir</strong> este contrato?
              Esta ação não pode ser desfeita.
            </div>
            <div className="confirm-delete-actions">
              <button className="confirm-delete-btn" onClick={confirmDeleteAction}>
                Excluir
              </button>
              <button className="confirm-cancel-btn" onClick={cancelDeleteAction}>
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ContratosPage() {
  const navigate = useNavigate();
  const [contratos, setContratos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContratoIndex, setModalContratoIndex] = useState(null);
  const [busca, setBusca] = useState("");

  // Carregar contratos: do storage + fake
  useEffect(() => {
    const contratosLocal = JSON.parse(localStorage.getItem("contratos")) || [];
    const todos = [
      ...contratosLocal,
      ...CONTRATOS_FAKE_INIT.filter(fk =>
        !contratosLocal.some(cl => cl.numero === fk.numero && cl.empresa === fk.empresa)
      )
    ];
    setContratos(todos);
  }, []);

  // Editar/salvar
  function handleModalSave(data) {
    setContratos((current) => {
      const novaLista = current.map((c, i) => (i === modalContratoIndex ? data : c));
      // Apenas do storage (evita sobrescrever fake)
      localStorage.setItem("contratos", JSON.stringify(
        novaLista.filter(c => !CONTRATOS_FAKE_INIT.some(fk => fk.numero === c.numero && fk.empresa === c.empresa))
      ));
      return novaLista;
    });
  }
  // Excluir
  function handleModalDelete() {
    setContratos(current => {
      const novaLista = current.filter((c,i) => i !== modalContratoIndex);
      localStorage.setItem("contratos", JSON.stringify(
        novaLista.filter(c => !CONTRATOS_FAKE_INIT.some(fk => fk.numero === c.numero && fk.empresa === c.empresa))
      ));
      return novaLista;
    });
    setModalOpen(false);
    setTimeout(() => setModalContratoIndex(null), 200);
  }
  function handleRowClick(i) {
    setModalContratoIndex(i);
    setModalOpen(true);
  }
  function handleModalClose() {
    setModalOpen(false);
    setTimeout(() => setModalContratoIndex(null), 200);
  }

  const contratosFiltrados = contratos.filter(c =>
    c.empresa?.toLowerCase().includes(busca.trim().toLowerCase())
  );

  return (
    <div className="admin-bg">
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Perfil" />
          <h3>Amanda Ramalho</h3>
          <span>Auxiliar Administrativo</span>
        </div>
        <nav className="admin-menu">
          <ul>
            <li onClick={() => navigate("/dashboard-admin")}>
              <FiHome size={20} />
              Home
            </li>
            <li onClick={() => navigate("/adicionar-contrato")}>
              <FiPlusCircle size={20} />
              Adicionar Contrato
            </li>
            <li onClick={() => navigate("/inventario")}>
              <FiClipboard size={20} />
              Inventário
            </li>
            <li onClick={() => navigate("/contratos")} className="active">
              <FiFileText size={20} />
              Contratos
            </li>
            <li onClick={() => navigate("/servicos-agendados")}>
              <FiCalendar size={20} />
              Serviços Agendados
            </li>
          </ul>
        </nav>
        <button className="sidebar-logout-btn" onClick={() => {
          sessionStorage.clear();
          window.location.href = "/";
        }}>
          <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" style={{marginRight: 7, marginBottom:-2}} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 12H8M12 16l-4-4 4-4" />
          </svg>
          Sair
        </button>
      </aside>
      <main className="admin-main">
        <div className="admin-content">
          <section className="admin-section-card" style={{ marginTop: 48, maxWidth: 1320 }}>
            <div className="card-header" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <strong style={{fontSize: 20, color:"#23395d", display:"flex",alignItems:"center",gap:10}}>
                <svg width="22" height="22" viewBox="0 0 22 22" style={{verticalAlign:'-3px'}}>
                  <rect x="3" y="4.5" width="16" height="13" rx="2.7" fill="#eaf0fa" stroke="#4381cd" strokeWidth="1.3"/>
                  <rect x="7" y="8" width="8" height="1.7" rx="0.8" fill="#b7d1ef"/>
                  <rect x="7" y="11" width="6" height="1.7" rx="0.8" fill="#b7d1ef"/>
                </svg>
                Contratos Corporativos
              </strong>
              <button className="btn-corporate2" onClick={() => navigate("/adicionar-contrato")}>
                <svg width="17" height="17" viewBox="0 0 19 19">
                  <circle cx="9.5" cy="9.5" r="8.5" fill="#d4e8fa" stroke="#468ed9"/>
                  <line x1="9.5" y1="6" x2="9.5" y2="13" stroke="#468ed9" strokeWidth="2"/>
                  <line x1="6" y1="9.5" x2="13" y2="9.5" stroke="#468ed9" strokeWidth="2"/>
                </svg>
                Novo Contrato
              </button>
            </div>
            <div className="search-bar-contratos" style={{position: "relative"}}>
              <input
                type="text"
                placeholder="Buscar por nome da empresa..."
                value={busca}
                onChange={e => setBusca(e.target.value)}
              />
            </div>
            <div style={{overflowX:"auto", maxWidth:"100%"}}>
              <table className="admin-table inventory-corporate" style={{marginTop: 18, background:"#fff", minWidth: 1100}}>
                <thead>
                  <tr>
                    <th style={{minWidth:110}}>Empresa</th>
                    <th style={{minWidth:80}}>Nº Contrato</th>
                    <th style={{minWidth:70}}>Tipo</th>
                    <th style={{minWidth:90}}>Validade</th>
                    <th style={{minWidth:90}}>Valor</th>
                    <th style={{minWidth:60}}>Status</th>
                    <th className="objeto" style={{minWidth:140}}>Objeto</th>
                    <th style={{minWidth:90}}>Responsável</th>
                    <th style={{minWidth:70}}>Contato</th>
                  </tr>
                </thead>
                <tbody>
                  {contratosFiltrados.length === 0 && (
                    <tr>
                      <td colSpan={9} style={{textAlign:'center',color:'#7a8bb2',padding:'34px 0',fontSize:17}}>Nenhum contrato encontrado.</td>
                    </tr>
                  )}
                  {contratosFiltrados.map((contrato, i) => {
                    const indexReal = contratos.findIndex(c => c === contrato);
                    return (
                      <tr key={indexReal} onClick={() => handleRowClick(indexReal)} style={{cursor:"pointer"}}>
                        <td style={{fontWeight:550}}>{contrato.empresa}</td>
                        <td>{contrato.numero}</td>
                        <td>{contrato.tipo}</td>
                        <td>{new Date(contrato.validade).toLocaleDateString("pt-BR")}</td>
                        <td>
                          R$ {Number(contrato.valor).toLocaleString('pt-BR', {minimumFractionDigits:2})}
                        </td>
                        <td>
                          {statusLabel[contrato.status]}
                        </td>
                        <td className="objeto">
                          <span title={contrato.objeto}>
                            {contrato.objeto.length > 32
                              ? contrato.objeto.substring(0,29) + "..."
                              : contrato.objeto}
                          </span>
                        </td>
                        <td>{contrato.responsavel}</td>
                        <td>{contrato.contato}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <ModalContrato
              open={modalOpen}
              contrato={contratos[modalContratoIndex] || null}
              onClose={handleModalClose}
              onSave={handleModalSave}
              onDelete={handleModalDelete}
            />
          </section>
        </div>
      </main>
    </div>
  );
}