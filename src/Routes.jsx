import { createBrowserRouter } from "react-router-dom";

//! COMPONENTES
import { Home } from "./pages/home";
import { AboutUs } from "./pages/aboutUs";
import { Coverage } from "./pages/Coverage";
import { InfoServices } from "./pages/infoServices";
import { Plans } from "./pages/plans";
import App from "./components/App";

export const ROUTER = createBrowserRouter([
  { path: "/Inicio", element: <Home /> },
  { path: "/SobreNosotros", element: <AboutUs /> },
  { path: "/InformacionServicios", element: <InfoServices /> },
  { path: "/Planes", element: <Plans /> },
  { path: "/Cobertura", element: <Coverage /> },
  { path: "/", element: <App /> },
]);
