import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaPhone, FaBook, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";

const items = [
  { name: "Kingdom Come: Deliverance II", query: "Tài khoản Steam Offline" },
  { name: "XBox Game Pass", query: "xbox game" },
  { name: "Giải trí cực Chill", query: "Giải trí" },
  { name: "Thiết kế dễ dàng cùng Canva Pro", query: "Thiết kế" },
];

export default function TopBarHeader() {
  const [index, setIndex] = useState(0);

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

  return (
    <div className="bg-blue-700 ">
      <div className="max-w-[1200px] mx-auto text-white text-sm py-2 px-3 flex justify-between">
        <div className="flex items-center ">
          <button onClick={handlePrev}>
            <ChevronLeft size={16} />
          </button>
          <button onClick={handleNext}>
            <ChevronRight size={16} />
          </button>
          <Link
            to={`/search?q=${encodeURIComponent(items[index].query)}`}
            className="hover:underline"
          >
            {items[index].name}
          </Link>
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
