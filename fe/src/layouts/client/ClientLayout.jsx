import { Outlet } from "react-router-dom";
import Header from "../../components/common/header/Header";
const ClientLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <main className=" mx-auto px-4 py-6">
          <Outlet />
        </main>
        <footer className="bg-gray-100 text-center p-4">Footer</footer>
      </div>
    </div>
  );
};

export default ClientLayout;
