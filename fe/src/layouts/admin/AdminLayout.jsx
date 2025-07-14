import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-4 min-h-screen">
        Admin Sidebar
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
