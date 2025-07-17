export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md">
      <img
        src={product.images?.[0]}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="mt-2 font-semibold text-lg">{product.name}</h2>
      <p className="text-red-600 font-bold">
        {product.price.toLocaleString("vi-VN")}đ
      </p>
    </div>
  );
}
