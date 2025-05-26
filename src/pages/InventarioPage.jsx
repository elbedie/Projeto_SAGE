import React, { useState } from "react";
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

// Modal estiloso
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal-bg2" tabIndex={-1} onClick={onClose}>
      <div
        className="modal2-content"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
}

const ITEMS_PER_PAGE = 6;

const EQUIPAMENTO_FOTOS = {
  "Monitor Multiparaméd.": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80",
  "Cardioversor": "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&w=300&h=220&fit=crop",
  "Monitor Raio-X": "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=300&q=80",
  "Desfibrilador": "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&w=300&h=220&fit=crop",
  "Bisturi Elétrico": "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80",
  "Ventilador Pulmonar": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80",
  "Infusora": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80",
  "Oxímetro": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80",
  "Monitor ECG": "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=300&q=80",
  "Bomba de Seringa": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80",
  "ECG Portátil": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80"
};

const INVENTORY_INITIAL = [
  { setor: "Enfermaria 5º andar", equipamento: "Monitor Multiparaméd.", marca: "Mindray", modelo: "iPM 12" },
  { setor: "Enfermaria 5º andar", equipamento: "Cardioversor", marca: "Instramed", modelo: "Dualmax" },
  { setor: "Pediatria 2º andar", equipamento: "Monitor Raio-X", marca: "Acteon", modelo: "iPM 69" },
  { setor: "UTI 7º andar", equipamento: "Cardioversor", marca: "Instramed", modelo: "R-X54" },
  { setor: "Emergência", equipamento: "Desfibrilador", marca: "Philips", modelo: "HEARTSTART" },
  { setor: "Centro Cirúrgico", equipamento: "Bisturi Elétrico", marca: "WEM", modelo: "Model 800" },
  { setor: "UTI 7º andar", equipamento: "Ventilador Pulmonar", marca: "Vyaire", modelo: "bellavista 1000" },
  { setor: "Pediatria 2º andar", equipamento: "Infusora", marca: "Braun", modelo: "Perfusor Space" },
  { setor: "Enfermaria 5º andar", equipamento: "Oxímetro", marca: "Nonin", modelo: "PalmSat 2500" },
  { setor: "Centro Cirúrgico", equipamento: "Monitor ECG", marca: "GE", modelo: "CARESCAPE" },
  { setor: "CTI", equipamento: "Bomba de Seringa", marca: "BD", modelo: "SyringePump" },
  { setor: "Pronto-Socorro", equipamento: "ECG Portátil", marca: "Prodimed", modelo: "ECGPro" }
];

export default function InventarioPage() {
  const navigate = useNavigate();
  const [inventario, setInventario] = useState(INVENTORY_INITIAL);
  const [page, setPage] = useState(1);

  // MODAL CONTROLE
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null); // Quando editar/visualizar, tem um item. Quando adiciona, é null
  const [modalForm, setModalForm] = useState({ setor: "", equipamento: "", marca: "", modelo: "" });
  const [modalEditing, setModalEditing] = useState(false);

  const totalPages = Math.max(1, Math.ceil(inventario.length / ITEMS_PER_PAGE));
  const displayed = inventario.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  function goToPage(pageNum) {
    if (pageNum >= 1 && pageNum <= totalPages) setPage(pageNum);
  }

  // Remover item
  function handleRemove(globalIdx) {
    if (!window.confirm("Confirma remover este item?")) return;
    const copia = inventario.slice();
    copia.splice(globalIdx, 1);
    setInventario(copia);
    if ((page - 1) * ITEMS_PER_PAGE >= copia.length && page > 1) setPage(page - 1);
  }

  // Modal - visualizar/editar
  function openModal(item, globalIdx) {
    setModalItem({ ...item, _idx: globalIdx });
    setModalForm({ ...item });
    setModalEditing(false);
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
    setModalItem(null);
    setModalEditing(false);
    setModalForm({ setor: "", equipamento: "", marca: "", modelo: "" });
  }
  function onModalEditChange(e) {
    setModalForm({ ...modalForm, [e.target.name]: e.target.value });
  }
  function saveModalEdit() {
    const arr = inventario.slice();
    if (modalItem && typeof modalItem._idx === "number") {
      arr[modalItem._idx] = { ...modalForm }; // edição
    } else {
      arr.push({ ...modalForm }); // novo
    }
    setInventario(arr);
    closeModal();
  }

  // Botão novo equipamento
  function handleNovoEquipamento() {
    setModalForm({ setor: "", equipamento: "", marca: "", modelo: "" });
    setModalItem(null); // Não é edição!
    setModalEditing(true);
    setModalOpen(true);
  }

  return (
    <div className="admin-bg">
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto perfil" />
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
            <li onClick={() => navigate("/inventario")} className="active">
              <FiClipboard size={20} />
              Inventário
            </li>
            <li onClick={() => navigate("/contratos")}>
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
          <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2"
            style={{ marginRight: 7, marginBottom: -2 }}
            viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 12H8M12 16l-4-4 4-4" />
          </svg>
          Sair
        </button>
      </aside>
      <main className="admin-main">
        <div className="admin-content">
          <section className="admin-section-card" style={{ marginTop: 48 }}>
            <div className="card-header" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <strong>Inventário de Equipamentos</strong>
              <button
                className="btn-corporate2"
                style={{ fontSize:14, padding:'7px 13px' }}
                onClick={handleNovoEquipamento}
              >
                <svg height="18" width="18" viewBox="0 0 20 20" style={{ marginRight: 6, verticalAlign: '-4px' }}>
                  <circle cx="10" cy="10" r="9" fill="#d4e8fa" stroke="#468ed9" />
                  <line x1="10" y1="6" x2="10" y2="14" stroke="#468ed9" strokeWidth="2"/>
                  <line x1="6" y1="10" x2="14" y2="10" stroke="#468ed9" strokeWidth="2"/>
                </svg>
                Novo Equipamento
              </button>
            </div>
            <table className="admin-table inventory-corporate">
              <thead>
                <tr>
                  <th>Foto</th>
                  <th>Setor</th>
                  <th>Equipamento</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th style={{ width: 110 }}></th>
                </tr>
              </thead>
              <tbody>
                {displayed.map((item, idx) => {
                  const globalIdx = (page - 1) * ITEMS_PER_PAGE + idx;
                  return (
                    <tr key={idx}>
                      <td>
                        <img
                          className="equip-foto-thumb"
                          src={EQUIPAMENTO_FOTOS[item.equipamento] || "https://cdn.pixabay.com/photo/2017/02/28/11/41/hospital-2108026_1280.jpg"}
                          alt={item.equipamento}
                          width={70}
                          height={56}
                          style={{
                            borderRadius: 8,
                            border: '1px solid #eef',
                            objectFit: 'cover',
                          }}
                        />
                      </td>
                      <td>{item.setor}</td>
                      <td>{item.equipamento}</td>
                      <td>{item.marca}</td>
                      <td>{item.modelo}</td>
                      <td>
                        <button
                          className="icon-btn edit"
                          title="Visualizar / Editar"
                          onClick={() => openModal(item, globalIdx)}
                        >
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#468ed9" strokeWidth="2.1" fill="none"/><circle cx="12" cy="12" r="4" stroke="#468ed9" strokeWidth="2.1" fill="none"/></svg>
                        </button>
                        <button className="icon-btn del" title="Remover" onClick={() => handleRemove(globalIdx)}>
                          <svg width="17" height="17" viewBox="0 0 20 20" fill="none"><path d="M5 6h10M8.5 9.5v4M11.5 9.5v4M7 6V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="#d32f2f" strokeWidth="1.5"/></svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="paginacao">
              <button
                className="paginacao-btn"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Página anterior"
              >‹</button>
              <span className="paginacao-numeros">
                {Array.from({ length: totalPages }).map((_, i) =>
                  <button
                    key={i}
                    className={`paginacao-num ${i + 1 === page ? "ativo" : ""}`}
                    onClick={() => goToPage(i + 1)}
                  >{i + 1}</button>
                )}
              </span>
              <button
                className="paginacao-btn"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                aria-label="Próxima página"
              >›</button>
            </div>
          </section>
        </div>
      </main>

      {/* MODAL DE DETALHES/EDIÇÃO/ADIÇÃO */}
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="modal2-header">
          <div className="modal2-icon-bg">
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
              <rect x="4" y="9" width="28" height="18" rx="4.5" fill="#ecf4ff" stroke="#58a0fd" strokeWidth="2"/>
              <rect x="12.5" y="22" width="11" height="2.5" rx="1.25" fill="#a9cdfc"/>
              <circle cx="10.5" cy="15.5" r="1.5" fill="#58a0fd"/>
              <circle cx="18" cy="15.5" r="1.5" fill="#58a0fd"/>
              <circle cx="25.5" cy="15.5" r="1.5" fill="#58a0fd"/>
            </svg>
          </div>
          <h3>{modalItem ? "Detalhes do Equipamento" : "Novo Equipamento"}</h3>
          <button className="modal-close2-btn" onClick={closeModal} aria-label="Fechar">
            <svg height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="#B7C9E2" strokeWidth="2">
              <line x1="7" y1="7" x2="17" y2="17"/>
              <line x1="7" y1="17" x2="17" y2="7"/>
            </svg>
          </button>
        </div>

        <div className="modal2-body">
          <div className="modal2-info-img">
            <img
              className="detalhe-img2"
              src={
                EQUIPAMENTO_FOTOS[
                  modalEditing ? modalForm.equipamento : modalItem?.equipamento
                ] || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80"
              }
              alt={modalEditing ? modalForm.equipamento : modalItem?.equipamento}
            />
          </div>
          {!modalEditing ? (
            <ul className="modal2-detalhes">
              <li><span>Setor:</span> {modalItem?.setor}</li>
              <li><span>Equipamento:</span> {modalItem?.equipamento}</li>
              <li><span>Marca:</span> {modalItem?.marca}</li>
              <li><span>Modelo:</span> {modalItem?.modelo}</li>
            </ul>
          ) : (
            <form
              className="modal2-form"
              onSubmit={e => {
                e.preventDefault();
                saveModalEdit();
              }}
            >
              <label>
                <svg height="20" width="20" style={{marginRight:3}}><circle cx="10" cy="10" r="8" fill="#cce1fc" stroke="#58a0fd"/></svg>
                <input name="setor" value={modalForm.setor || ""} onChange={onModalEditChange} maxLength={40} placeholder="Setor" autoFocus required />
              </label>
              <label>
                <svg height="20" width="20" style={{marginRight:3}}><rect x="3" y="5" width="14" height="8" rx="2" fill="#bfdffe" stroke="#58a0fd"/></svg>
                <input name="equipamento" value={modalForm.equipamento || ""} onChange={onModalEditChange} maxLength={40} placeholder="Equipamento" required />
              </label>
              <label>
                <svg height="20" width="20" style={{marginRight:3}}><rect x="3" y="7" width="14" height="6" rx="2" fill="#d3eafd" stroke="#58a0fd"/></svg>
                <input name="marca" value={modalForm.marca || ""} onChange={onModalEditChange} maxLength={25} placeholder="Marca" required />
              </label>
              <label>
                <svg height="20" width="20" style={{marginRight:3}}><rect x="3" y="7" width="14" height="6" rx="2" fill="#e7f4fd" stroke="#58a0fd"/></svg>
                <input name="modelo" value={modalForm.modelo || ""} onChange={onModalEditChange} maxLength={25} placeholder="Modelo" required />
              </label>
              <div className="modal2-actions">
                <button className="btn-corporate2" type="submit">
                  <svg height="20" width="20" viewBox="0 0 20 20" fill="none" style={{marginRight: 6, verticalAlign:'-4px'}}>
                    <rect x="3" y="3" width="14" height="14" rx="2.5" fill="#fff" stroke="#468ed9" strokeWidth="1.4"/>
                    <rect x="7" y="10" width="6" height="3.2" rx="1.2" fill="#afcef6"/>
                    <rect x="9.35" y="6.6" width="1.3" height="2.3" rx=".65" fill="#468ed9"/>
                  </svg>
                  Salvar
                </button>
                <button className="btn-outline2" type="button" onClick={closeModal}>
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div>

        {!modalEditing && (
          <div className="modal2-actions modal2-actions-view">
            <button className="btn-corporate2 " onClick={() => setModalEditing(true)}>
              <svg height="20" width="20" viewBox="0 0 24 24"><path d="M16.6 5.6l1.8 1.8c.6.6.6 1.5 0 2.1l-9.7 9.7c-.3.3-.7.4-1.1.5l-3 0.5 0.5-3c0.1-.4.2-.8.5-1.1l9.7-9.7a1.46 1.46 0 0 1 2.1 0z" fill="#58a0fd"/><path d="M14.7 7.7l1.6 1.6" stroke="#58a0fd" strokeWidth="2"/></svg>
              Editar
            </button>
            <button className="btn-outline2" onClick={closeModal}>
              Fechar
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}