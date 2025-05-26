import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./DashboardAdminPage.css";
import "./AdicionarContrato.css";
import {
  FiHome,
  FiPlusCircle,
  FiClipboard,
  FiFileText,
  FiCalendar,
} from "react-icons/fi";

export default function AdicionarContratoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    empresa: "",
    numero: "",
    validade: "",
    valor: "",
    status: "ativo",
    tipo: "",
    objeto: "",
    responsavel: "",
    contato: "",
    anexo: null,
  });
  const [sucesso, setSucesso] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm(form => ({
      ...form,
      [name]: name === "anexo" ? files[0] : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const contratosExistentes = JSON.parse(localStorage.getItem("contratos")) || [];
    const contratoNovo = {
      ...form,
      valor: parseFloat(form.valor),
      tipo: mapTipo(form.tipo),
    };
    localStorage.setItem(
      "contratos",
      JSON.stringify([contratoNovo, ...contratosExistentes])
    );
    setSucesso(true);
    setTimeout(() => {
      setSucesso(false);
      navigate("/contratos"); // Redirecionar!
    }, 1200);
    setForm({
      empresa: "",
      numero: "",
      validade: "",
      valor: "",
      status: "ativo",
      tipo: "",
      objeto: "",
      responsavel: "",
      contato: "",
      anexo: null,
    });
  }

  function mapTipo(tipo) {
    if (tipo === "serviço") return "Prestação de serviço";
    if (tipo === "compra") return "Compra";
    if (tipo === "locacao") return "Locação";
    if (tipo === "manutencao") return "Manutenção";
    if (tipo === "outro") return "Outro";
    return tipo;
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
            <li 
              className={location.pathname === "/dashboard-admin" ? "active" : ""}
              onClick={() => navigate("/dashboard-admin")}
            >
              <FiHome size={20} />
              Home
            </li>
            <li 
              className={location.pathname === "/adicionar-contrato" ? "active" : ""}
              onClick={() => navigate("/adicionar-contrato")}
            >
              <FiPlusCircle size={20} />
              Adicionar Contrato
            </li>
            <li 
              className={location.pathname === "/inventario" ? "active" : ""}
              onClick={() => navigate("/inventario")}
            >
              <FiClipboard size={20} />
              Inventário
            </li>
            <li 
              className={location.pathname === "/contratos" ? "active" : ""}
              onClick={() => navigate("/contratos")}
            >
              <FiFileText size={20} />
              Contratos
            </li>
            <li 
              className={location.pathname === "/servicos-agendados" ? "active" : ""}
              onClick={() => navigate("/servicos-agendados")}
            >
              <FiCalendar size={20} />
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
      <main className="admin-main">
        <div className="admin-content" style={{ maxWidth: 720, minWidth: 290, width: "100%" }}>
          <section className="contract-form-corporate">
            <div className="contract-form-title-row">
              <div>
                <h1>Adicionar Contrato</h1>
                <span className="contract-form-subtitle">
                  Formulário de cadastro de contratos corporativos.
                </span>
              </div>
            </div>
            <form className="contract-form-fields" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-row">
                <div className="form-field">
                  <label>Empresa</label>
                  <input
                    name="empresa"
                    type="text"
                    value={form.empresa}
                    onChange={handleChange}
                    required
                    placeholder="Nome da empresa"
                    autoFocus
                  />
                </div>
                <div className="form-field">
                  <label>Nº Contrato</label>
                  <input
                    name="numero"
                    type="text"
                    value={form.numero}
                    onChange={handleChange}
                    required
                    placeholder="Ex: 0079/2025"
                  />
                </div>
                <div className="form-field">
                  <label>Tipo</label>
                  <select
                    name="tipo"
                    value={form.tipo}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="serviço">Prestação de serviço</option>
                    <option value="compra">Compra</option>
                    <option value="locacao">Locação</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Validade</label>
                  <input
                    name="validade"
                    type="date"
                    value={form.validade}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Valor (R$)</label>
                  <input
                    name="valor"
                    type="number"
                    value={form.valor}
                    required
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    placeholder="Ex: 15000.00"
                  />
                </div>
                <div className="form-field">
                  <label>Status</label>
                  <select name="status" value={form.status} onChange={handleChange}>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                  </select>
                </div>
              </div>
              <div className="form-divisor" />
              <div className="form-row">
                <div className="form-field" style={{ flex: "2 1 180px" }}>
                  <label>Objeto do Contrato</label>
                  <textarea
                    name="objeto"
                    value={form.objeto}
                    onChange={handleChange}
                    placeholder="Descreva brevemente o objeto do contrato"
                    required
                    maxLength={255}
                    rows={2}
                  />
                </div>
                <div className="form-field">
                  <label>Anexar PDF</label>
                  <input
                    name="anexo"
                    type="file"
                    accept="application/pdf"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Responsável</label>
                  <input
                    name="responsavel"
                    type="text"
                    value={form.responsavel}
                    onChange={handleChange}
                    placeholder="Nome responsável"
                  />
                </div>
                <div className="form-field">
                  <label>Contato</label>
                  <input
                    name="contato"
                    type="text"
                    value={form.contato}
                    onChange={handleChange}
                    placeholder="E-mail ou telefone"
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 30 }}>
                <button className="contract-form-btn" type="submit">
                  Salvar Contrato
                </button>
                {sucesso && (
                  <span className="contract-form-success">
                    Contrato adicionado com sucesso!
                  </span>
                )}
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}