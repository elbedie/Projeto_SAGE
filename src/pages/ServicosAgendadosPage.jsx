import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardAdminPage.css";

const ITEMS_PER_PAGE = 6;
const INITIAL_SERVICOS = [
  { 
    data: "2024-07-01",
    hora: "08:15",
    setor: "Centro Cirúrgico",
    equipamento: "Bisturi Elétrico",
    responsavel: "Dr. Salazar"
  },
  {
    data: "2024-07-02",
    hora: "14:00",
    setor: "UTI 7º andar",
    equipamento: "Ventilador Pulmonar",
    responsavel: "Enf. Camila"
  },
  {
    data: "2024-07-03",
    hora: "10:30",
    setor: "Pediatria 2º andar",
    equipamento: "Infusora",
    responsavel: "Dr. Vitor"
  },
  {
    data: "2024-07-03",
    hora: "16:30",
    setor: "Enfermaria 5º andar",
    equipamento: "Cardioversor",
    responsavel: "Enf. Bianca"
  },
  {
    data: "2024-07-04",
    hora: "09:00",
    setor: "Emergência",
    equipamento: "Desfibrilador",
    responsavel: "Dr. Pontes"
  },
  {
    data: "2024-07-04",
    hora: "13:45",
    setor: "CTI",
    equipamento: "Bomba de Seringa",
    responsavel: "Enf. João"
  },
  {
    data: "2024-07-05",
    hora: "11:45",
    setor: "Pronto-Socorro",
    equipamento: "ECG Portátil",
    responsavel: "Dr. Thaís"
  },
  {
    data: "2024-07-05",
    hora: "15:20",
    setor: "Centro Cirúrgico",
    equipamento: "Monitor ECG",
    responsavel: "Enf. Wilson"
  },
  // Adicione mais se quiser
];

export default function ServicosAgendadosPage() {
  const navigate = useNavigate();
  const [servicos, setServicos] = useState(INITIAL_SERVICOS);
  const [page, setPage] = useState(1);
  const [editIdx, setEditIdx] = useState(null);
  const [editForm, setEditForm] = useState({
    data: "", hora: "", setor: "", equipamento: "", responsavel: ""
  });

  const totalPages = Math.max(1, Math.ceil(servicos.length / ITEMS_PER_PAGE));
  const displayed = servicos.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  function goToPage(pageNum) {
    if (pageNum >= 1 && pageNum <= totalPages) setPage(pageNum);
  }

  // Remover agendamento
  function handleRemove(globalIdx) {
    if (!window.confirm("Confirma remover este serviço agendado?")) return;
    const copia = servicos.slice();
    copia.splice(globalIdx, 1);
    setServicos(copia);

    if ((page - 1) * ITEMS_PER_PAGE >= copia.length && page > 1) setPage(page - 1);
  }

  // Editar agendamento
  function startEdit(localIdx) {
    const globalIdx = (page - 1) * ITEMS_PER_PAGE + localIdx;
    setEditIdx(globalIdx);
    setEditForm({ ...servicos[globalIdx] });
  }
  function handleEditChange(e) {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  }
  function saveEdit(globalIdx) {
    const arr = servicos.slice();
    arr[globalIdx] = { ...editForm };
    setServicos(arr);
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
            <li onClick={() => navigate("/inventario")}>
              <span role="img" aria-label="inventario">🧾</span>Inventário
            </li>
            <li className="active" onClick={() => navigate("/servicos-agendados")}>
              <span role="img" aria-label="agenda">📅</span>Serviços Agendados
            </li>
          </ul>
        </nav>
        <button className="sidebar-logout-btn" onClick={() => {
          sessionStorage.clear();
          window.location.href = "/";
        }}>
          <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" style={{marginRight: 7, marginBottom: -2}} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 12H8M12 16l-4-4 4-4" />
          </svg>
          Sair
        </button>
      </aside>
      <main className="admin-main">
        <div className="admin-content">
          <section className="admin-section-card" style={{marginTop:48}}>
            <div className="card-header"><strong>Serviços Agendados</strong></div>
            <table className="admin-table inventory-minimal">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Hora</th>
                  <th>Setor</th>
                  <th>Equipamento</th>
                  <th>Responsável</th>
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
                            name="data"
                            type="date"
                            value={editForm.data}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <input
                            name="hora"
                            type="time"
                            value={editForm.hora}
                            onChange={handleEditChange}
                          />
                        </td>
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
                            name="responsavel"
                            type="text"
                            value={editForm.responsavel}
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
                      <td>{item.data.split("-").reverse().join("/")}</td>
                      <td>{item.hora}</td>
                      <td>{item.setor}</td>
                      <td>{item.equipamento}</td>
                      <td>{item.responsavel}</td>
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