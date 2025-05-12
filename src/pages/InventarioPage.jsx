import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardAdminPage.css";

const ITEMS_PER_PAGE = 6;

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
  { setor: "Pronto-Socorro", equipamento: "ECG Portátil", marca: "Prodimed", modelo: "ECGPro" },
  // ...adicione mais!
];

export default function InventarioPage() {
  const navigate = useNavigate();

  const [inventario, setInventario] = useState(INVENTORY_INITIAL);
  const [page, setPage] = useState(1);
  const [editIdx, setEditIdx] = useState(null);
  const [editForm, setEditForm] = useState({
    setor: "", equipamento: "", marca: "", modelo: ""
  });

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

    // Corrige página se necessário
    if ((page - 1) * ITEMS_PER_PAGE >= copia.length && page > 1) setPage(page - 1);
  }

  // Editar
  function startEdit(localIdx) {
    const globalIdx = (page - 1) * ITEMS_PER_PAGE + localIdx;
    setEditIdx(globalIdx);
    setEditForm({ ...inventario[globalIdx] });
  }
  function handleEditChange(e) {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  }
  function saveEdit(globalIdx) {
    const arr = inventario.slice();
    arr[globalIdx] = { ...editForm };
    setInventario(arr);
    setEditIdx(null);
  }
  function cancelEdit() {
    setEditIdx(null);
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
              <span role="img" aria-label="contratos">📄</span>Contratos
            </li>
            <li onClick={() => navigate("/adicionar-contrato")}>
              <span role="img" aria-label="addcontrato">＋</span>Adicionar Contrato
            </li>
            <li className="active" onClick={() => navigate("/inventario")}>
              <span role="img" aria-label="inventario">🧾</span>Inventário
            </li>
            <li onClick={() => navigate("/servicos-agendados")}>
              <span role="img" aria-label="agenda">📅</span>Serviços Agendados
            </li>
          </ul>
        </nav>
        <button className="sidebar-logout-btn" onClick={() => {
          sessionStorage.clear();
          window.location.href = "/";
        }}>
          <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2"
            style={{marginRight: 7, marginBottom: -2}}
            viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 12H8M12 16l-4-4 4-4" />
          </svg>
          Sair
        </button>
      </aside>
      <main className="admin-main">
        <div className="admin-content">
          <section className="admin-section-card" style={{marginTop:48}}>
            <div className="card-header">
              <strong>Inventário</strong>
            </div>
            <table className="admin-table inventory-minimal">
              <thead>
                <tr>
                  <th>Setor</th>
                  <th>Equipamento</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th style={{width:95}}></th>
                </tr>
              </thead>
              <tbody>
                {displayed.map((item, idx) => {
                  const globalIdx = (page - 1) * ITEMS_PER_PAGE + idx;
                  if (editIdx === globalIdx) {
                    return (
                      <tr key={idx} className="editando">
                        <td>
                          <input
                            name="setor"
                            type="text"
                            value={editForm.setor}
                            onChange={handleEditChange}
                            maxLength={40}
                          />
                        </td>
                        <td>
                          <input
                            name="equipamento"
                            type="text"
                            value={editForm.equipamento}
                            onChange={handleEditChange}
                            maxLength={40}
                          />
                        </td>
                        <td>
                          <input
                            name="marca"
                            type="text"
                            value={editForm.marca}
                            onChange={handleEditChange}
                            maxLength={25}
                          />
                        </td>
                        <td>
                          <input
                            name="modelo"
                            type="text"
                            value={editForm.modelo}
                            onChange={handleEditChange}
                            maxLength={25}
                          />
                        </td>
                        <td>
                          <button className="icon-btn save" title="Salvar" onClick={()=>saveEdit(globalIdx)}>💾</button>
                          <button className="icon-btn cancel" title="Cancelar" onClick={cancelEdit}>✗</button>
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={idx}>
                      <td>{item.setor}</td>
                      <td>{item.equipamento}</td>
                      <td>{item.marca}</td>
                      <td>{item.modelo}</td>
                      <td>
                        <button className="icon-btn edit" title="Editar" onClick={()=>startEdit(idx)}>✎</button>
                        <button className="icon-btn del" title="Remover" onClick={()=>handleRemove(globalIdx)}>🗑</button>
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
                {Array.from({length: totalPages}).map((_,i) =>
                  <button
                    key={i}
                    className={`paginacao-num ${i+1 === page ? "ativo" : ""}`}
                    onClick={() => goToPage(i+1)}
                  >{i+1}</button>
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
    </div>
  );
}