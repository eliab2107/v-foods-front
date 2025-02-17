import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import { PerfilGestor } from "./pages/Perfil";
import Colaborador from "./pages/Colaborador";
import HomePage from './pages/homepage/homepage';
import Indicadores from './pages/indicadores/indicadores';
import Relatorio from "./pages/relatorio/relatorio";
import Colaboradores from "./pages/colaboradores/colaboradores";
import CadastroColaborador from "./pages/AddColaborador";
import addSucess from "./pages/addSucess";
import BuscaIndicadores from "./pages/buscaIndicadores/buscaIndicadores";
import CadastroIndicador from "./pages/AddIndicador";
import CadastroResultado from "./pages/AddResultado";
import CadastroAssign from "./pages/AddAssign";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/Gestor",
    Component: PerfilGestor,
  },
  {
    path: "/Colaborador",
    Component: Colaborador,
  },
  {
    path: "/HomePage",
    Component: HomePage,
  },
  {
    path: "/Indicadores",
    Component: Indicadores,
  },
  {
    path: "/Relatorio",
    Component: Relatorio,
  },
  {
    path: "/Colaboradores",
    Component: Colaboradores,
  },
  {
    path: "/AddColaborador",
    Component: CadastroColaborador,
  },
  {
    path: "/Indicadormensal",
    Component: Indicadores,
  },
  {
    path: "/Criado",
    Component: addSucess
  },
  {
    path: "/buscaIndicadores",
    Component: BuscaIndicadores,
  },
  {
    path: "/AddIndicador",
    Component: CadastroIndicador,
  },
  {
    path: "/AddResultado",
    Component: CadastroResultado,
  },
  {
    path: "/AddAssign",
    Component: CadastroAssign,
  }
]);
export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
