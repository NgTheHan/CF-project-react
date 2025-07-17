import { FaFacebookF, FaYoutube, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#f2f2f2] text-sm text-[#333] mt-10 relative ">
      <div className="bg-black text-white flex flex-col md:flex-row justify-between items-center px-6 py-10">
        <div className=" max-w-[1200px] mx-auto flex items-center gap-6">
          <img
            src="https://cdn.divineshop.vn/static/528b91cfa29c7ffd85418f4b1e8cc8ce.svg"
            alt="Banner"
            className="w-52"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2 ">
              Bạn chưa có tài khoản?
            </h2>
            <p className="mb-4">
              Hãy tạo ngay một tài khoản để sử dụng đầy đủ các tính năng, tích
              lũy ưu đãi và nhận hoa hồng vĩnh viễn tại Divine Shop.
            </p>
            <Link
              to="/register"
              className="bg-[#007bff] text-white px-4 py-2 rounded hover:bg-blue-600 transition "
            >
              Đăng ký ngay
            </Link>
            <p className="mt-4">
              Hoặc đã có tài khoản?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Icon thanh toán */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto py-4 px-6 flex  items-center gap-4 border-b">
          <img
            src="https://cdn.divineshop.vn/static/b77a2122717d76696bd2b87d7125fd47.svg"
            alt="momo"
            className="h-6"
          />
          <img
            src="https://cdn.divineshop.vn/static/72a3a36fc7c66085b3f442940ba45fde.svg"
            alt="vnpay"
            className="h-6"
          />
          <img
            src="https://cdn.divineshop.vn/static/464c7c79044dea88e86adf0e1b9c064c.svg"
            alt="visa"
            className="h-6"
          />
          <img
            src="https://cdn.divineshop.vn/static/ddb866eb1214c914ea62417879046b99.svg"
            alt="mastercard"
            className="h-6"
          />
          <span className="text-gray-500 text-xs">và nhiều hình thức khác</span>
        </div>
      </div>

      {/* Footer content */}
      <div className=" max-w-[1200px] mx-auto  items-center grid grid-cols-4  gap-8 px-6 py-10">
        <div>
          <div className="flex gap-4 mb-4">
            <FaFacebookF className="text-xl" />
            <FaYoutube className="text-xl" />
          </div>
          <h3 className="font-semibold mb-2 hover:underline">GIỚI THIỆU</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link className="hover:underline" to="#">
                Game bản quyền là gì?
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="#">
                Giới thiệu Divine Shop
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="#">
                Điều khoản dịch vụ
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="#">
                Chính sách bảo mật
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">TÀI KHOẢN</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link className="hover:underline" to="/login">
                Đăng nhập
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/register">
                Đăng ký
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">LIÊN HỆ</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              Hotline tự động <span className="text-red-500">1900 633 305</span>
            </li>
            <li>
              <Link className="hover:underline" to="#">
                Liên hệ hỗ trợ
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="#">
                Chat với CSKH
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="https://www.dmca.com/Protection/Status.aspx?ID=18522dc6-fdd6-4b49-ab40-395a79849050&refurl=https://divineshop.vn/">
            <img
              src="https://images.dmca.com/Badges/_dmca_premi_badge_2.png?ID=18522dc6-fdd6-4b49-ab40-395a79849050"
              alt="DMCA"
              className="w-1/2"
            />
          </Link>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow hover:bg-blue-600 transition"
        title="Lên đầu trang"
      >
        <FaChevronUp />
      </button>
    </footer>
  );
};

export default Footer;
