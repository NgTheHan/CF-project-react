const categories = [
  "Giải trí",
  "Làm việc",
  "Học tập",
  "Game Steam",
  "Edit Ảnh - Video",
  "Window, Office",
  "Google Drive",
  "Thế giới AI",
  "VPN, bảo mật mạng",
  "Gift Card",
];

export default function CategorySidebar() {
  return (
    <div className="w-full bg-white shadow rounded mt-6 pb-8 text-base space-y-2">
      {categories.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-1 hover:text-red-500 cursor-pointer"
        >
          <span>🔹</span>
          <span className="py-1.5">{item}</span>
        </div>
      ))}
    </div>
  );
}
