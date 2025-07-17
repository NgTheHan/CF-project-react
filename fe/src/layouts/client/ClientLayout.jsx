import { Outlet } from "react-router-dom";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
const ClientLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <main className="max-w-[1200px] mx-auto ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ClientLayout;
