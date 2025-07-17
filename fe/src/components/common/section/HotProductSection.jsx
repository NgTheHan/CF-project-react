import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Perplexity Pro 1 năm - Tài khoản",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Thang/Perplexity Pro 12m-89002.png?hash=1739770536",
    price: 4600000,
    originalPrice: 399000,
    discount: 91,
    link: "/search?q=perplexity",
  },
  {
    id: 2,
    title: "ExitLag 1 tháng - Code gia hạn",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/ExitLag-92081.png?hash=1650276321",
    price: 195000,
    originalPrice: 79000,
    discount: 59,
    link: "/search?q=exitlag",
  },
  {
    id: 3,
    title: "ChatGPT Plus 20$ 1 tháng - Tài khoản Share",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP/Khác/ChatGPT Plus Share-1m-87789.png?hash=1718253008",
    price: 510000,
    originalPrice: 190000,
    discount: 63,
    link: "/search?q=chatgpt",
  },
  {
    id: 4,
    title: "Jetbrains All Products Pack (1 năm)",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP/Khác/JetBrains1-81956.jpg?hash=1671761607",
    price: 6900000,
    originalPrice: 490000,
    discount: 93,
    link: "/search?q=jetbrains",
  },
  {
    id: 5,
    title: "Netflix Premium 1 tuần - Tài khoản",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP/Netflix/NETFLIX-1tuan (1)-76597.png?hash=1715588591",
    price: 260000,
    originalPrice: 49000,
    discount: 81,
    link: "/search?q=netflix",
  },
  {
    id: 6,
    title: "Duolingo Super 1 năm - Gia hạn chính chủ",
    image:
      "https://cdn.divineshop.vn/image/catalog/Duolingo-gh-1y-17122.png?hash=1730437075",
    price: 1850000,
    originalPrice: 290000,
    discount: 84,
    link: "/search?q=duolingo",
  },
  {
    id: 7,
    title: "YouTube Premium + Music 1 năm - Chính chủ",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP/Youtube/YouTube Premium Music-1nam-65910.png?hash=1715587226",
    price: 6720000,
    originalPrice: 599000,
    discount: 91,
    link: "/search?q=youtube",
  },
  {
    id: 8,
    title: "Thiết kế Full App 100GB Cloud 1 tháng",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP/Adobe/Adobe full app 1 thang-46533.jpg?hash=1675954020",
    price: 1500000,
    originalPrice: 199000,
    discount: 87,
    link: "/search?q=design",
  },
];

const HotProductsSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 pt-6">
      <h2 className="text-2xl font-semibold mb-1">Sản phẩm nổi bật</h2>
      <p className="text-gray-500 mb-5">
        Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full  object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium text-[#1e1e1e] leading-tight line-clamp-2">
                {product.title}
              </h3>
              <div className="flex items-center mt-2 gap-2 flex-wrap">
                <span className="text-[#e53935] font-bold text-base">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                  -{product.discount}%
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

export default HotProductsSection;
