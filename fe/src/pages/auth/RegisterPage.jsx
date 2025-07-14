import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username || !form.email || !form.password) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    try {
      const newUser = {
        id: Date.now(),
        ...form,
        role: "user",
      };

      console.log("Đăng ký thành công:", newUser);

      navigate("/login");
    } catch (error) {
      setError("Đăng ký thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Đăng ký tài khoản
        </h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Tên người dùng"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Đăng ký
        </button>

        <p className="mt-4 text-sm text-center">
          Đã có tài khoản?{" "}
          <a href="/login" className="text-blue-600 underline">
            Đăng nhập
          </a>
        </p>
      </form>
    </div>
  );
}
