import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AbrirOSPage from "./pages/AbrirOSPage";
import FechamentoOSPage from "./pages/FechamentoOSPage";
import FecharOSPage from "./pages/FecharOSPage";
import RelatoriosPage from "./pages/RelatoriosPage";
import RelatorioDetalhePage from "./pages/RelatorioDetalhePage";
const routes = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/abrir-os", element: <AbrirOSPage /> },
  { path: "/fechamento-os", element: <FechamentoOSPage /> }, // lista OS abertas
  { path: "/fechar-os/:id", element: <FecharOSPage /> },   // detalhe e fechamento
  { path: "/relatorios", element: <RelatoriosPage /> },
  { path: "/relatorio/:id", element: <RelatorioDetalhePage /> }
]);
export default routes;