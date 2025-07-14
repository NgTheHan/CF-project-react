import AdminLayout from "../layouts/admin/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProductManagerPage from "../pages/admin/ProductManagerPage";
import UserManagerPage from "../pages/admin/UserManagerPage";

const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    { index: true, element: <AdminDashboard /> },
    { path: "products", element: <ProductManagerPage /> },
    { path: "users", element: <UserManagerPage /> },
  ],
};

export default AdminRoutes;
