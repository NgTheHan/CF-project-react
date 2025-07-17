import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaEye,
  FaFire,
  FaPercent,
  FaLock,
  FaCreditCard,
} from "react-icons/fa";
export default function MainBarHeader() {
  return (
    <div className="bg-blue-600">
      <div className=" max-w-[1200px] mx-auto  text-white py-3 px-4">
        <div className=" flex justify-between items-center flex-wrap gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-white font-bold text-xl"
          >
            Divine Shop
          </Link>

          {/* Search bar */}
          <div className="flex flex-1 max-w-[500px]">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="w-full px-4 py-2 text-black rounded-l focus:outline-none"
            />
            <button className="bg-blue-700 px-4 rounded-r">
              <FaSearch />
            </button>
          </div>

          {/* Auth + Cart */}
          <div className="flex items-center gap-4">
            <FaUser />
            <span className="flex items-center gap-1 ">
              <Link className="hover:underline" to="/login">
                Đăng nhập
              </Link>{" "}
              /
              <Link className="hover:underline" to="/register">
                Đăng ký
              </Link>
            </span>
            <Link
              to="/cart"
              className="flex items-center gap-2 border border-white px-3 py-1 rounded"
            >
              <FaShoppingCart />
              <span>Giỏ hàng</span>
              <span className="ml-1 bg-white text-blue-700 font-bold text-xs px-1 rounded">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Submenu icons */}
        <div className="max-w-[1200px] mx-auto mt-4 flex justify-between text-sm font-medium">
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <FaEye /> Sản phẩm vừa xem
          </Link>
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <FaFire /> Sản phẩm mua nhiều
          </Link>
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <FaPercent /> Sản phẩm khuyến mại
          </Link>
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <FaLock /> Tuyển dụng
          </Link>
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <FaCreditCard /> Hình thức thanh toán
          </Link>
        </div>
      </div>
    </div>
  );
}
