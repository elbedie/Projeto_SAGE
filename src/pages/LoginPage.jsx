import React, { useState } from "react";
import { FaUser, FaLock, FaBuilding } from "react-icons/fa";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  function handleEntrar(e) {
    e.preventDefault();
    if (!user || !senha || !perfil) {
      setErro("Preencha todos os campos!");
      return;
    }
    sessionStorage.setItem("perfil", perfil);
    sessionStorage.setItem("nomeUser", user); // <-- Novo!
    navigate("/dashboard");
  }

  function handleRecuperarSenha() {
    alert("Funcionalidade de recuperação de senha não implementada.");
  }

  return (
    <div className="login-bg">
      <form className="login-box" onSubmit={handleEntrar}>
        {/* Logo grande conforme a referência */}
        <div className="logo-title">
          <span className="gear">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#45718f" viewBox="0 0 24 24"><path d="M19.434 8.08L22 6.735 20.265 2l-2.668 1.114a7.997 7.997 0 0 0-2.124-.885L15 0h-6l-.473 2.229a7.997 7.997 0 0 0-2.124.885L2.735 2 1 6.735l2.566 1.345c-.085.426-.141.867-.158 1.319A7.983 7.983 0 0 0 3 12c0 .543.058 1.069.158 1.585l-2.566 1.355L2.735 22l2.668-1.125c.655.36 1.363.663 2.124.887L9 24h6l.473-2.238a7.997 7.997 0 0 0 2.124-.885l2.668 1.121L23 17.265l-2.566-1.345c.085-.426.141-.869.155-1.321A7.983 7.983 0 0 0 21 12c0-.543-.058-1.069-.158-1.586zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
          </span>
          <span className="logo-title-label">SAGE</span>
        </div>
        <span className="sub">
          Sistema de Acompanhamento e Gerenciamento<br />de Equipamentos
        </span>

        {/* Inputs com ícones */}
        <div className="input-icon">
          <FaUser className="input-icon-ico" />
          <input type="text" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} />
        </div>
        <div className="input-icon">
          <FaLock className="input-icon-ico" />
          <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
        </div>
        <div className="input-icon">
          <FaBuilding className="input-icon-ico" />
          <select value={perfil} onChange={e => setPerfil(e.target.value)}>
            <option value="">Departamento</option>
            <option value="gestor">Engenheiro Clínico</option>
            <option value="tecnico">Agente Externo</option>
            <option value="admin">Administrativo</option>
          </select>
        </div>
        {erro && <div className="erro">{erro}</div>}

        <button type="submit" className="botao-entrar">Entrar</button>
        <span
          className="recuperar"
          onClick={handleRecuperarSenha}
        >
          Esqueci minha senha
        </span>
      </form>
    </div>
  );
}