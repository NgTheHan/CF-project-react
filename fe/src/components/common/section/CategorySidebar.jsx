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
    <div className="w-full bg-white shadow rounded p-4 text-sm space-y-2">
      {categories.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 hover:text-red-500 cursor-pointer"
        >
          <span>🔹</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
