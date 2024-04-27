import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppNav from "../components/AppNav";
import { AuthContexts } from "../contexts/AuthProvider";
import Home from "../pages/Home";

const PrivateRouter = () => {
  const { user } = useContext(AuthContexts);

  return user ? (
    <>
      <AppNav />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
