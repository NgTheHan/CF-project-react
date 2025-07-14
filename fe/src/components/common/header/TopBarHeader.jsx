import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaPhone, FaBook, FaGift } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const items = [
  "Kingdom Come: Deliverance II Gold Edition - Tài khoản Steam Offline",
  "XBox Game Pass",
  "Giải trí cực Chill",
  "Kiếm tiền trên Divine Shop",
  "Bảo vệ máy tính của bạn",
  "Thiết kế dễ dàng cùng Canva Pro",
];

export default function TopBarHeader() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const handleClick = () => {
    const query = encodeURIComponent(items[index]);
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="bg-blue-700 ">
      <div className="max-w-[1200px] mx-auto text-white text-sm py-2 px-3 flex justify-between">
        <div className="flex items-center ">
          <button onClick={handlePrev}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={handleNext}>
            <ChevronRight size={18} />
          </button>
          <span
            onClick={handleClick}
            className="whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:underline"
          >
            {items[index]}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <FaBook /> Hướng dẫn mua hàng
          </Link>
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <FaGift /> Ưu đãi khách hàng
          </Link>
          <Link to="/" className="flex items-center gap-1 hover:underline">
            <FaPhone /> Thông tin liên hệ
          </Link>
        </div>
      </div>
    </div>
  );
}
