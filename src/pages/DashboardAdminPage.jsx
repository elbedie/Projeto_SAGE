import React, { useState } from "react";
import "./DashboardAdminPage.css";
import { useNavigate } from "react-router-dom";

const contratos = [
  {
    nome: "MINDRAY - Nº 0079/2025",
    detalhes: {
      empresa: "Mindray",
      numero: "0079/2025",
      validade: "31/12/2025",
      valor: "R$ 25.000,00",
      status: "Ativo"
    }
  },
  {
    nome: "INSTRAMED - Nº 0078/2025",
    detalhes: {
      empresa: "Instramed",
      numero: "0078/2025",
      validade: "01/11/2025",
      valor: "R$ 30.000,00",
      status: "Ativo"
    }
  }
];

const lembretesServicos = [
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
    hora: "16:30",
    setor: "Enfermaria 5º andar",
    equipamento: "Cardioversor",
    responsavel: "Enf. Bianca"
  },
];

export default function DashboardAdminPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContrato, setSelectedContrato] = useState(null);
  const navigate = useNavigate();

  function handleOpenModal(contrato) {
    setSelectedContrato(contrato);
    setModalOpen(true);
  }
  function handleCloseModal() {
    setModalOpen(false);
    setSelectedContrato(null);
  }

  return (
    <div className="admin-bg">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-profile">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Foto perfil"
          />
          <h3>Amanda Ramalho</h3>
          <span>Auxiliar Administrativo</span>
        </div>
        <nav className="admin-menu">
          <ul>
            <li onClick={() => navigate("/dashboard-admin")}>
            <span aria-label="início" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#75809C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ display: 'block' }}
                    aria-hidden="true"
                >
                    <path d="M3 12L12 5l9 7" />
                    <path d="M5 10v8a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h2v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-8" />
                </svg>
                </span>
              Home
            </li>
            <li onClick={() => navigate("/adicionar-contrato")}>
              <span role="img" aria-label="addcontrato">＋</span>
              Adicionar Contrato
            </li>
            <li onClick={() => navigate("/inventario")}>
              <span role="img" aria-label="inventario">🧾</span>
              Inventário
            </li>
            <li onClick={() => navigate("/servicos-agendados")}>
              <span role="img" aria-label="agenda">📅</span>
              Serviços Agendados
            </li>
          </ul>
        </nav>
        <button className="sidebar-logout-btn" onClick={() => {
          sessionStorage.clear();
          window.location.href = "/";
        }}>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          Sair
        </button>
      </aside>
      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-content">

          {/* BLOCO LEMBRETE SERVIÇOS AGENDADOS */}
          <div className="lembrete-servicos">
            <span className="lembrete-titulo">🔔 Serviços Agendados</span>
            <ul>
              {lembretesServicos.map((srv, idx) => (
                <li key={idx}>
                  <b>{srv.data.split('-').reverse().join('/')}</b> às <b>{srv.hora}</b> &ndash; {srv.equipamento} (<span className="lembrete-setor">{srv.setor}</span>)
                </li>
              ))}
            </ul>
            <button className="lembrete-botao" onClick={() => navigate("/servicos-agendados")}>
              Ver todos
            </button>
          </div>

          {/* Cards de contratos */}
          <section className="admin-section-card">
            <div className="card-header">
              <strong>Contratos</strong>
            </div>
            <div className="card-lines">
              {contratos.map((contrato, idx) => (
                <div className="card-line" key={idx}>
                  <span>{contrato.nome}</span>
                  <button onClick={() => handleOpenModal(contrato)}>Ver Detalhes</button>
                </div>
              ))}
            </div>
          </section>
          {/* Cards inventário */}
          <section className="admin-section-card">
            <div className="card-header">
              <span>Inventário</span>
              <button className="btn-small" onClick={() => navigate("/inventario")}>Ver Inventário</button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Setor</th>
                  <th>Equipamento</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enfermaria 5º andar</td>
                  <td>Monitor Multiparaméd.</td>
                  <td>Mindray</td>
                  <td>iPM 12</td>
                </tr>
                <tr>
                  <td>Enfermaria 5º andar</td>
                  <td>Cardioversor</td>
                  <td>Instramed</td>
                  <td>Dualmax</td>
                </tr>
                <tr>
                  <td>Pediatria 2º andar</td>
                  <td>Monitor Raio-X</td>
                  <td>Acteon</td>
                  <td>iPM 69</td>
                </tr>
                <tr>
                  <td>UTI 7º andar</td>
                  <td>Cardioversor</td>
                  <td>Instramed</td>
                  <td>R-X54</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
      {/* MODAL */}
      {modalOpen && selectedContrato && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedContrato.nome}</h2>
            <ul className="modal-list">
              <li><b>Empresa:</b> {selectedContrato.detalhes.empresa}</li>
              <li><b>Nº Contrato:</b> {selectedContrato.detalhes.numero}</li>
              <li><b>Validade:</b> {selectedContrato.detalhes.validade}</li>
              <li><b>Valor:</b> {selectedContrato.detalhes.valor}</li>
              <li><b>Status:</b> {selectedContrato.detalhes.status}</li>
            </ul>
            <button className="modal-close-btn" onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}