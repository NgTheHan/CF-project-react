import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/divine.api";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("keyword") || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts(query);
        setProducts(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Tìm kiếm sản phẩm</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded p-3 hover:shadow transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <h3 className="font-medium mt-2">{item.name}</h3>
            <p className="text-red-500">
              {item.price.toLocaleString("vi-VN")}đ
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
