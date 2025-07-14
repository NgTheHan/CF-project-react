import { useRoutes } from "react-router-dom";
import ClientRoutes from "./clientRoutes";
import AdminRoutes from "./adminRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRoutes = () => {
  const routes = useRoutes([ClientRoutes, AdminRoutes, AuthRoutes]);
  return routes;
};

export default AppRoutes;
