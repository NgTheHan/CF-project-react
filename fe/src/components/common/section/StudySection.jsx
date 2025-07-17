import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/formatPrice";

const studyProducts = [
  {
    id: 1,
    title: "Quizlet Plus 1 năm - Nâng cấp chính chủ",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP/Khác/Quizlet Plus-Nangcap-1y-28668.png?hash=1718877951",
    price: 399000,
    originalPrice: 990000,
    discount: 60,
    link: "/product/quizlet-plus-1nam",
  },
  {
    id: 2,
    title: "Grammarly Premium (AI) 1 tháng 1 thiết bị - Tài khoản",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP/Khác/Grammarly Premium-1m-1pc-55101.png?hash=1716176302",
    price: 89000,
    originalPrice: 400000,
    discount: 78,
    link: "/product/grammarly-1thang",
  },
  {
    id: 3,
    title: "Turnitin 1 Tháng - Nâng cấp chính chủ",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Thang/Turnitin-1m-21162.png?hash=1722659289",
    price: 249000,
    originalPrice: 399000,
    discount: 38,
    link: "/product/turnitin-1thang",
  },
  {
    id: 4,
    title: "QuillBot Premium 1 tháng 2 thiết bị - Tài khoản",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP/Khác/QuillBot Premium 2 Device (1)-59500.png?hash=1715588360",
    price: 79000,
    originalPrice: 250000,
    discount: 68,
    link: "/product/quillbot-1thang",
  },
  {
    id: 5,
    title: "Hello Chinese Premium 1 năm - Tài khoản",
    image:
      "https://cdn.divineshop.vn/image/catalog/Anh-SP/Khác/Hello Chinese Premium-taikhoan-10119.png?hash=1717204503",
    price: 550000,
    originalPrice: 1280000,
    discount: 57,
    link: "/product/hellochinese-1nam",
  },
  {
    id: 6,
    title: "Datacamp Premium 3 tháng - Tài khoản",
    image:
      "https://cdn.divineshop.vn/image/catalog/Phi/Datacamp-3m (1)-14973.png?hash=1718120313",
    price: 199000,
    originalPrice: 750000,
    discount: 73,
    link: "/product/datacamp-3thang",
  },
  {
    id: 7,
    title: "JetBrains All Products Pack 1 năm - Tài khoản",
    image:
      "https://cdn.divineshop.vn/image/catalog/JetBrains-1y-89777.png?hash=1730437268",
    price: 490000,
    originalPrice: 6900000,
    discount: 93,
    link: "/product/jetbrains-1nam",
  },
];

const StudySection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 pt-6">
      <h2 className="text-2xl font-semibold mb-1">Học Tập</h2>
      <p className="text-gray-500 mb-5">
        Những sản phẩm hỗ trợ học tập được đánh giá tốt
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {studyProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium text-[#1e1e1e] leading-tight line-clamp-2">
                {product.title}
              </h3>
              <div className="flex items-center mt-2 gap-2 flex-wrap">
                <span className="text-[#e53935] font-bold text-base">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
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

export default StudySection;
