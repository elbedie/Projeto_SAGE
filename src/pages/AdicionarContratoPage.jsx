import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardAdminPage.css";

export default function AdicionarContratoPage() {
  const [form, setForm] = useState({
    empresa: "",
    numero: "",
    validade: "",
    valor: "",
    status: "ativo"
  });
  const [sucesso, setSucesso] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSucesso(true);
    setForm({
      empresa: "",
      numero: "",
      validade: "",
      valor: "",
      status: "ativo"
    });
    setTimeout(()=>setSucesso(false), 2200);
  }

  return (
    <div className="admin-bg">
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
            <li>
              <Link to="/dashboard-admin">
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
              </Link>
            </li>
            <li className="active">
              <Link to="/adicionar-contrato">
                <span role="img" aria-label="addcontrato">＋</span>
                Adicionar Contrato
              </Link>
            </li>
            <li>
              <Link to="/inventario">
                <span role="img" aria-label="inventario">🧾</span>
                Inventário
              </Link>
            </li>
            <li>
              <Link to="/servicos-agendados">
                <span role="img" aria-label="agenda">📅</span>
                Serviços Agendados
              </Link>
            </li>
          </ul>
        </nav>
        <button className="sidebar-logout-btn" onClick={() => {
          sessionStorage.clear();
          window.location.href = "/";
        }}>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          Sair
        </button>
      </aside>
      <main className="admin-main">
        <div className="admin-content">
          <section className="admin-section-card" style={{maxWidth:"420px", margin:"56px auto"}}>
            <div className="card-header">
              <strong>Adicionar Contrato</strong>
            </div>
            <form className="form-contrato" onSubmit={handleSubmit} autoComplete="off">
              <label>
                Empresa
                <input
                  name="empresa"
                  type="text"
                  value={form.empresa}
                  onChange={handleChange}
                  required
                  placeholder="Nome da empresa"
                />
              </label>
              <label>
                Nº Contrato
                <input
                  name="numero"
                  type="text"
                  value={form.numero}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 0079/2025"
                />
              </label>
              <label>
                Validade
                <input
                  name="validade"
                  type="date"
                  value={form.validade}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Valor (R$)
                <input
                  name="valor"
                  type="number"
                  value={form.valor}
                  onChange={handleChange}
                  required
                  step="0.01"
                  min="0"
                />
              </label>
              <label>
                Status
                <select name="status" value={form.status} onChange={handleChange}>
                  <option value="ativo">Ativo</option>
                  <option value="inativo">Inativo</option>
                </select>
              </label>
              <button className="btn-submit-contrato" type="submit">Salvar Contrato</button>
              {sucesso && <div className="msg-sucesso">Contrato adicionado com sucesso!</div>}
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}