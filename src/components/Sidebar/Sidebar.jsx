import { FaClipboardList, FaWrench } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ perfil, nomeUser }) => {
  const navigate = useNavigate();
  return (
    <aside
      style={{
        background: "#262c3c",
        color: "#fff",
        width: 220,
        minWidth: 160,
        height: "100vh",
        padding: "0px 0px 18px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        position: "relative",
        justifyContent: "space-between"
      }}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Perfil + menu */}
        <div style={{ marginTop: 38, marginBottom: 16, display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Avatar */}
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "#e1e5ec",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10
            }}
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="#75809c" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4.5" />
              <path d="M4 20c0-3.5 3.4-6 8-6s8 2.5 8 6v1H4v-1z" />
            </svg>
          </div>
          {/* Nome e cargo */}
          <div style={{ fontWeight: "600", fontSize: 18, marginBottom: 2 }}>{nomeUser}</div>
          <div style={{ fontSize: 13, marginBottom: 18, color: "#b0b6c4" }}>Engenheiro Clínico</div>
          {/* Menu */}
          <button className="sb-btn" onClick={() => navigate("/dashboard")}>
            <FaClipboardList />Solicitações
          </button>
          <button className="sb-btn" onClick={() => navigate("/fechamento-os")}>
            <FaWrench />Fechamento de O.S.
          </button>
          <button className="sb-btn" onClick={() => navigate("/relatorios")}>
            <FaClipboardList />Relatórios
          </button>
        </div>
      </div>
      {/* Botão SAIR no final */}
      <button
        className="sb-btn sb-sair"
        style={{
          width: "90%",
          margin: "18px auto 0 auto",
          background: "#253556",
          color: "#f8faff",
          fontWeight: 700,
          border: "none",
          borderRadius: 6,
          padding: "10px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          fontSize: 16,
          cursor: "pointer",
          boxShadow: "0 2px 10px #0d152977",
        }}
        onClick={() => navigate("/")}
      >
        <FiLogOut /> Sair
      </button>
      {/* Estilo botão do menu */}
      <style>{`
        .sb-btn {
          background: none;
          border: none;
          color: #fff;
          text-align: left;
          width: 90%;
          padding: 10px 14px;
          margin: 6px 0;
          font-size: 16px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }
        .sb-btn:disabled { opacity: .5; cursor: not-allowed;}
        .sb-btn:not(:disabled):hover { background: #345377;}
        .sb-sair:hover { background: #ad2639 !important; color: #fff;}
      `}</style>
    </aside>
  );
};

export default Sidebar;