import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

// MOSTRA OS RELATÓRIOS FECHADOS COM PAGINAÇÃO
export default function RelatoriosPage() {
  const navigate = useNavigate();
  const relatorios = JSON.parse(localStorage.getItem("osFechadas") || "[]");
  const pageSize = 5;
  const [pagina, setPagina] = useState(1);

  const totalPaginas = Math.ceil(relatorios.length / pageSize) || 1;
  const relatoriosPagina = relatorios.slice((pagina-1)*pageSize, pagina*pageSize);

  return (
    <div style={{display:"flex"}}>
      <Sidebar perfil="tecnico" nomeUser={sessionStorage.getItem("nomeUser")}/>
      <div style={{padding:40,flex:1,minHeight:"100vh",background:"#f5f7fa"}}>
        <h2 style={{marginTop:0, color:"#232", textAlign: "center"}}>Relatórios Fechados</h2>
        {relatorios.length === 0 ? (
          <div style={{
            background:"#fff", padding:28, borderRadius:10, textAlign:"center", color:"#888",
            fontSize:18, marginTop:40
          }}>Nenhum relatório encontrado.</div>
        ) : (
          <>
            <div style={{display:"flex",flexDirection:"column",gap:"18px",maxWidth:920,margin:"0 auto"}}>
            {relatoriosPagina.map(os => (
              <div key={os.id} style={{
                background:"#fff", borderRadius:10, padding:"17px 24px", boxShadow:"0 2px 7px #0001", display:"flex", alignItems:"center", justifyContent:"space-between"
              }}>
                <span>
                  <b>{os.equipamento}</b> em <span style={{color:"#385"}}>{os.fechamento.setor}</span><br/>
                  <small>Fechado em {new Date(os.fechamento.dataFechamento).toLocaleDateString()}</small>
                </span>
                <button style={{
                  background:"#345377", color:"#fff", border:"none",borderRadius:7,padding:"7px 17px",fontWeight:600,fontSize:15,cursor:"pointer"
                }}
                  onClick={()=>navigate(`/relatorio/${os.id}`)}
                >Ver detalhes</button>
              </div>
            ))}
            </div>
            {/* Paginação */}
            <div style={{textAlign:"center",marginTop:30}}>
              <button 
                disabled={pagina===1}
                onClick={()=>setPagina(p=>p-1)}
                style={{marginRight:8,padding:"7px 17px",borderRadius:6,border:"none",cursor:"pointer",background:"#eee",color:pagina===1?"#aaa":"#234"}}
              >Anterior</button>
              <span style={{fontSize:16,margin:"0 15px"}}>
                Página {pagina} de {totalPaginas}
              </span>
              <button 
                disabled={pagina===totalPaginas}
                onClick={()=>setPagina(p=>p+1)}
                style={{marginLeft:8,padding:"7px 17px",borderRadius:6,border:"none",cursor:"pointer",background:"#eee",color:pagina===totalPaginas?"#aaa":"#234"}}
              >Próxima</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}