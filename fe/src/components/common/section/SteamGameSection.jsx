import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/formatPrice";

const games = [
  {
    id: 1,
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh/Banner/Random Code Steam.png?hash=1623754090",
    title: "Random Code Steam",
    price: "9000",
    originalPrice: "20000",
    discount: 55,
  },
  {
    id: 2,
    image:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2001120/header.jpg?t=1741794685",
    title: "Split Fiction - Thuê game (1 ngày)",
    price: "23000",
    originalPrice: "899000",
    discount: 97,
  },
  {
    id: 3,
    image: "https://steamcdn-a.akamaihd.net/steam/apps/1245620/header.jpg",
    title: "ELDEN RING Shadow of the Erdtree Deluxe - Steam Offline",
    price: "99000",
    originalPrice: "1690000",
    discount: 94,
  },
  {
    id: 4,
    image: "https://steamcdn-a.akamaihd.net/steam/apps/1244460/header.jpg",
    title: "Jurassic World Evolution 2 - Tài khoản game tạo sẵn",
    price: "49000",
    originalPrice: "910000",
    discount: 95,
  },
  {
    id: 5,
    image: "https://steamcdn-a.akamaihd.net/steam/apps/949230/header.jpg",
    title: "Cities: Skylines II - Tài khoản Steam Offline",
    price: "99000",
    originalPrice: "1493000",
    discount: 93,
  },
  {
    id: 6,
    image: "https://steamcdn-a.akamaihd.net/steam/apps/814380/header.jpg",
    title: "Sekiro Shadows Die Twice - Tài khoản Steam",
    price: "79000",
    originalPrice: "1290000",
    discount: 94,
  },
  {
    id: 7,
    image: "https://steamcdn-a.akamaihd.net/steam/apps/1790600/header.jpg",
    title: "DRAGON BALL: Sparking! ZERO Ultimate - Steam Offline",
    price: "99000",
    originalPrice: "1590000",
    discount: 94,
  },
  {
    id: 8,
    image: "https://steamcdn-a.akamaihd.net/steam/apps/1326470/header.jpg",
    title: "Sons Of The Forest - Tài khoản Steam Offline",
    price: "39000",
    originalPrice: "384000",
    discount: 90,
  },
];

const SteamGameSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 pt-6">
      <h2 className="text-2xl font-semibold mb-1">Game trên Steam</h2>
      <p className="text-gray-500 mb-5">
        Những trò chơi được đánh giá tốt, nội dung hấp dẫn đang chờ bạn
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <Link
            key={game.id}
            to={`/product/${game.id}`}
            className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium text-[#1e1e1e] leading-tight line-clamp-2">
                {game.title}
              </h3>
              <div className="flex items-center mt-2 gap-2 flex-wrap">
                <span className="text-[#e53935] font-bold text-base">
                  {formatPrice(game.price)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(game.originalPrice)}
                </span>
                <span className="bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                  -{game.discount}%
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          to="/steam-games"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Xem thêm
        </Link>
      </div>
      <div className="mt-8 border-b border-gray-200" />
    </div>
  );
};

export default SteamGameSection;
