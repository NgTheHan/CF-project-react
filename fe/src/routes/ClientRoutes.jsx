import ClientLayout from "../layouts/client/ClientLayout";
import CartPage from "../pages/cart/CartPage";
import HomePage from "../pages/home/HomePage";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import ProfilePage from "../pages/profile/ProfilePage";

const ClientRoutes = {
  path: "/",
  element: <ClientLayout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "products/:id", element: <ProductDetailPage /> },
    { path: "cart", element: <CartPage /> },
    { path: "profile", element: <ProfilePage /> },
  ],
};

export default ClientRoutes;
