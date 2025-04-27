import { FaClipboardList, FaWrench, FaCalendarCheck, FaListAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ perfil, nomeUser }) => {
  const navigate = useNavigate();
  return (
    <aside style={{
      background: "#262c3c",
      color: "#fff",
      minWidth: 220,
      height: "100vh",
      padding: "24px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        width: 70, 
        height: 70, 
        borderRadius: "50%", 
        background: "#e1e5ec", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        marginBottom: 12
        }}>
        <svg width="38" height="38" viewBox="0 0 24 24" fill="#75809c" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4.5"/>
            <path d="M4 20c0-3.5 3.4-6 8-6s8 2.5 8 6v1H4v-1z"/>
        </svg>
        </div>
      <div style={{fontWeight: "bold", fontSize: 18, marginBottom: 3 }}>{nomeUser}</div>
      <div style={{fontSize: 13, marginBottom: 28}}>Engenheiro Clínico</div>
      <button className="sb-btn" onClick={()=>navigate("/dashboard")}><FaClipboardList />Solicitações</button>
      <button className="sb-btn" onClick={()=>navigate("/fechamento-os")}><FaWrench/>Fechamento de O.S.</button>
      <button className="sb-btn" onClick={()=>navigate("/relatorios")}><FaClipboardList/>Relatórios</button>
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
      `}</style>
    </aside>
  );
};
export default Sidebar;