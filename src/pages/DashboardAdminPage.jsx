import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import "./DashboardAdminPage.css";

// Contratos COM PENDÊNCIA
const contratosPendencia = [
  {
    nome: "MINDRAY - Nº 0079/2025",
    pendencia: "Vencimento de documento próximo",
    detalhes: {
      empresa: "Mindray",
      numero: "0079/2025",
      validade: "31/12/2025",
      valor: "R$ 25.000,00",
      status: "Pendente"
    }
  },
  {
    nome: "INSTRAMED - Nº 0078/2025",
    pendencia: "Aguardando assinatura",
    detalhes: {
      empresa: "Instramed",
      numero: "0078/2025",
      validade: "01/11/2025",
      valor: "R$ 30.000,00",
      status: "Pendente"
    }
  }
];
// Equipamentos COM PENDÊNCIA
const equipamentosPendencia = [
  {
    setor: "Centro Cirúrgico",
    equipamento: "Bisturi Elétrico",
    marca: "Mindray",
    modelo: "BM-400",
    pendencia: "Manutenção preventiva atrasada"
  },
  {
    setor: "UTI 7º andar",
    equipamento: "Ventilador Pulmonar",
    marca: "Instramed",
    modelo: "VP-XL",
    pendencia: "Calibração pendente"
  }
];
// Serviços agendados
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
  }
];
// Agenda checklist - início como NÃO concluídas
const tarefasHojeInit = [
  { hora: "09:00", tarefa: "Verificar estoque de insumos do centro cirúrgico" },
  { hora: "11:00", tarefa: "Reunião com equipe de engenharia clínica" },
  { hora: "14:30", tarefa: "Receber fornecedor Mindray" },
  { hora: "16:00", tarefa: "Atualizar relatórios de pendências" }
];
export default function DashboardAdminPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContrato, setSelectedContrato] = useState(null);
  const [tarefas, setTarefas] = useState(
    tarefasHojeInit.map(t => ({ ...t, feito: false }))
  );
  const navigate = useNavigate();
  function handleOpenModal(contrato) {
    setSelectedContrato(contrato);
    setModalOpen(true);
  }
  function handleCloseModal() {
    setModalOpen(false);
    setSelectedContrato(null);
  }
  // Toggle marcado/concluído
  function toggleFeito(idx) {
    setTarefas(tarefas =>
      tarefas.map((t, i) =>
        i === idx ? { ...t, feito: !t.feito } : t
      )
    );
  }
  // Data do dia
  function dataHojeFormatada() {
    const hoje = new Date();
    return hoje.toLocaleDateString('pt-BR');
  }
  return (
    <>
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
            <li onClick={() => navigate("/dashboard-admin")} className="active">
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
        <button
          className="sidebar-logout-btn"
          onClick={() => {
            sessionStorage.clear();
            window.location.href = "/";
          }}
        >
          <FiLogOut size={20} />
          Sair
        </button>
      </aside>
      {/* Main Content */}
      <main className="admin-main" style={{ background: "#f7fafd" }}>
        <div className="admin-content">
          {/* Linha superior */}
          <div className="dashboard-row-twin">
            {/* Serviços agendados */}
            <div className="card-min card-lembrete card-borda-lateral-lembretes">
              <div className="card-min-header" style={{ color: "#de8d06" }}>
                <FiBell size={17} style={{ marginRight: 8 }} />
                Serviços Agendados
              </div>
              <ul className="card-lembrete-lista">
                {lembretesServicos.map((srv, idx) => (
                  <li key={idx}>
                    <b>{srv.data.split("-").reverse().join("/")}</b> às <b>{srv.hora}</b> — {srv.equipamento} <br />
                    <span className="lembrete-setor">{srv.setor}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-outline-min" onClick={() => navigate("/servicos-agendados")}>
                Ver todos
              </button>
            </div>
            {/* Checklist da agenda */}
            <div className="card-min card-agenda card-borda-lateral-agenda">
              <div className="card-min-header" style={{ color: "#2285df" }}>
                <FiClock size={16} style={{ marginRight: 8 }} />
                Minha Agenda - {dataHojeFormatada()}
              </div>
              <ul className="card-agenda-lista checklist-agenda">
                {tarefas.map((tarefa, idx) => (
                  <li key={idx} className={tarefa.feito ? "concluida" : ""}>
                    <button
                      className="check-btn"
                      aria-label={tarefa.feito ? "Desmarcar tarefa" : "Marcar tarefa como concluída"}
                      onClick={() => toggleFeito(idx)}
                      tabIndex={0}
                    >
                      {tarefa.feito ? (
                        <FiCheckCircle className="checked" size={22} />
                      ) : (
                        <FiCircle className="unchecked" size={22} />
                      )}
                    </button>
                    <span className="card-agenda-hora">{tarefa.hora}</span>
                    <span className="card-agenda-tarefa">{tarefa.tarefa}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Linha inferior: pendências lado a lado */}
          <div className="dashboard-row-twin">
            {/* Lista de contratos com pendência */}
            <section className="card-min card-pendencia">
              <div className="card-min-header" style={{ color: "#cc182f" }}>
                <FiAlertTriangle size={18} style={{ marginRight: 8 }} />
                Contratos com Pendência
              </div>
              {contratosPendencia.length === 0 && (
                <div className="card-pendencia-vazio">
                  <FiCheckCircle style={{ color: "#19af22", marginRight: 8 }} />
                    Sem contratos pendentes.
                </div>
              )}
              {contratosPendencia.map((contrato, idx) => (
                <div className="card-contrato-linha" key={idx}>
                  <div style={{display: "flex", flexDirection:"column"}}>
                    <span style={{fontWeight:700, color:"#223048"}}>{contrato.nome}</span>
                    <span className="card-pendencia-alerta">{contrato.pendencia}</span>
                  </div>
                  <button className="btn-link-min" onClick={() => handleOpenModal(contrato)}>Ver Detalhes</button>
                </div>
              ))}
            </section>
            {/* Lista de equipamentos com pendência */}
            <section className="card-min card-pendencia">
              <div className="card-min-header" style={{ color: "#cc182f" }}>
                <FiAlertTriangle size={18} style={{ marginRight: 8 }} />
                Equipamentos com Pendência
              </div>
              {equipamentosPendencia.length === 0 && (
                <div className="card-pendencia-vazio">
                  <FiCheckCircle style={{ color: "#19af22", marginRight: 8 }} />
                    Sem pendências em equipamentos.
                </div>
              )}
              <table className="admin-table-min">
                <thead>
                  <tr>
                    <th>Setor</th>
                    <th>Equipamento</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Pendência</th>
                  </tr>
                </thead>
                <tbody>
                  {equipamentosPendencia.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.setor}</td>
                      <td>{item.equipamento}</td>
                      <td>{item.marca}</td>
                      <td>{item.modelo}</td>
                      <td className="card-pendencia-alerta">{item.pendencia}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </main>
    </div>

    {/* MODAL CONTRATO FORA DA DIV admin-bg */}
    {modalOpen && selectedContrato && (
      <div className="modal-backdrop" onClick={handleCloseModal}>
        <div className="modal-content contrato-modal" onClick={e => e.stopPropagation()}>
          <div className="contrato-modal-head">
            <FiFileText size={32} className="contrato-modal-icone" />
            <span className="contrato-modal-titulo">{selectedContrato.nome}</span>
          </div>
          <div className="contrato-modal-info">
            <div>
              <div className="contrato-label">Empresa</div>
              <div className="contrato-valor">{selectedContrato.detalhes.empresa}</div>
            </div>
            <div>
              <div className="contrato-label">Nº Contrato</div>
              <div className="contrato-valor">{selectedContrato.detalhes.numero}</div>
            </div>
            <div>
              <div className="contrato-label">Validade</div>
              <div className="contrato-valor">{selectedContrato.detalhes.validade}</div>
            </div>
            <div>
              <div className="contrato-label">Valor</div>
              <div className="contrato-valor">{selectedContrato.detalhes.valor}</div>
            </div>
            <div className="contrato-modal-status-row">
              <div className="contrato-label">Status</div>
              <span className={`contrato-status ${selectedContrato.detalhes.status === "Pendente" ? "pendente" : "aprovado"}`}>
                {selectedContrato.detalhes.status}
              </span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={handleCloseModal}>Fechar</button>
        </div>
      </div>
    )}
    </>
  );
}