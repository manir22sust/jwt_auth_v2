import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
};
