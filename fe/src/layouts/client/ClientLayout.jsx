import { Outlet } from "react-router-dom";
import Header from "../../components/common/header/Header";
const ClientLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <main className="max-w-[1200px] mx-auto ">
          <Outlet />
        </main>
        <footer className="bg-gray-100 text-center p-4">Footer</footer>
      </div>
    </div>
  );
};

export default ClientLayout;
