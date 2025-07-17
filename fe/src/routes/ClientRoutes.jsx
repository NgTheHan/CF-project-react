import ClientLayout from "../layouts/client/ClientLayout";
import HomePage from "../pages/home/HomePage";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import ProfilePage from "../pages/profile/ProfilePage";
import SearchPage from "../pages/search/SearchPage";

const ClientRoutes = {
  path: "/",
  element: <ClientLayout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "/search", element: <SearchPage /> },
    { path: "products/:id", element: <ProductDetailPage /> },
    { path: "profile", element: <ProfilePage /> },
  ],
};

export default ClientRoutes;
