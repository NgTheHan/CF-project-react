// BannerSidebar.tsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const mainBanners = [
  {
    id: 1,
    img: "https://cdn.divineshop.vn/image/catalog/Banner/Netflix%20banner%2019k%20ngay-55470.png?hash=1734074412",
    link: "/search?q=netflix",
  },
  {
    id: 2,
    img: "https://cdn.divineshop.vn/image/catalog/Banner/SteamTK-48660.png?hash=1752563261",
    link: "/game-offline",
  },
  {
    id: 3,
    img: "https://cdn.divineshop.vn/image/catalog/Banner%20m%E1%BB%9Bi/iQIYI29k-87594.png?hash=1743745440",
    link: "/tai-khoan-iqiyi-premium-1-thang",
  },
  {
    id: 4,
    img: "https://cdn.divineshop.vn/image/catalog/Youtube2-65855.png?hash=1735881244",
    link: "/search?q=youtube+premium",
  },
  {
    id: 5,
    img: "https://cdn.divineshop.vn/image/catalog/AntiVirus%20(1)-41981.png?hash=1735893501",
    link: "/diet-virus",
  },
  {
    id: 6,
    img: "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Thang/ToiUuCongViec-89008.png?hash=1722222194",
    link: "/lam-viec",
  },
  {
    id: 7,
    img: "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Thang/HocTapPhatTrien%20(1)-88934.png?hash=1722662091",
    link: "/hoc-tap",
  },
  {
    id: 8,
    img: "https://cdn.divineshop.vn/image/catalog/Capcut-86373.png?hash=1735881306",
    link: "/search?q=capcut",
  },
  {
    id: 9,
    img: "https://cdn.divineshop.vn/image/catalog/banner%20Google%20One%20(1)-90108.png?hash=1735892847",
    link: "/search?q=google+drive",
  },
  {
    id: 10,
    img: "https://cdn.divineshop.vn/image/catalog/AutoDesk%20Main%20banner-22763.png?hash=1735881367",
    link: "/search?q=autodesk",
  },
];

const sideBanners = [
  {
    img: "https://cdn.divineshop.vn/image/catalog/Banner/VPN-23171.png?hash=1750297772",
    link: "/vpn",
  },
  {
    img: "https://cdn.divineshop.vn/image/catalog/Banner/AI-34071.png?hash=1750297759",
    link: "/ai",
  },
  {
    img: "https://cdn.divineshop.vn/image/catalog/Banner/Microsoft Office-97046.png?hash=1750297824",
    link: "/windows-office",
  },
  {
    img: "https://cdn.divineshop.vn/image/catalog/Banner/Steam-69570.png?hash=1750297791",
    link: "/search?q=steam+wallet",
  },
  {
    img: "https://cdn.divineshop.vn/image/catalog/Banner/ThietKe-56624.png?hash=1750297801",
    link: "/thiet+ke",
  },
  {
    img: "https://cdn.divineshop.vn/image/catalog/Banner/SteamTK-79280.png?hash=1750297813",
    link: "/steam-wallet",
  },
];

export default function BannerSidebar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mainBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 px-6 mt-6">
      <div className="col-span-12 grid grid-cols-10 gap-4">
        {/* Main banner slideshow */}
        <div className="col-span-7 relative overflow-hidden rounded-xl shadow-lg">
          <Link to={mainBanners[current].link}>
            <img
              src={mainBanners[current].img}
              alt="Main Banner"
              className="w-full h-[300px] object-cover rounded-xl"
            />
          </Link>
          {/* Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {mainBanners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === i ? "bg-white scale-110" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/*  banner phụ bên phải main */}
        <div className="col-span-3 flex flex-col gap-4">
          {sideBanners.slice(0, 2).map((banner, idx) => (
            <Link key={idx} to={banner.link}>
              <img
                src={banner.img}
                alt={`Side Banner ${idx}`}
                className="w-full h-[145px] object-cover rounded-xl shadow-md"
              />
            </Link>
          ))}
        </div>

        {/* bottom banner  */}
        <div className="col-span-10 mt-4 grid grid-cols-4 gap-3">
          {sideBanners.slice(2).map((banner, idx) => (
            <Link key={idx} to={banner.link}>
              <img
                src={banner.img}
                alt={`Bottom Banner ${idx}`}
                className="w-full h-[120px] object-cover rounded-xl shadow-md"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
