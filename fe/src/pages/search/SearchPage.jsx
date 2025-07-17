import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/divine.api";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("keyword") || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const all = await getAllProducts();
      console.log("📦 Dữ liệu API trả về:", all);
      const filtered = all.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setProducts(filtered);
    };

    fetchData();
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Tìm kiếm sản phẩm</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.length === 0 ? (
          <p>Không tìm thấy sản phẩm nào.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
