import { Outlet } from "react-router-dom";
import React from "react";

const AuthLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
