import { Outlet } from "react-router-dom";
import React from "react";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
