import { useRoutes } from "react-router-dom";
import AdminRoutes from "./adminRoutes";
import AuthRoutes from "./AuthRoutes";
import ClientRoutes from "./ClientRoutes";

const AppRoutes = () => {
  const routes = useRoutes([ClientRoutes, AdminRoutes, AuthRoutes]);
  return routes;
};

export default AppRoutes;
