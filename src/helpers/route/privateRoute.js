import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(props) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const dataUser = useSelector((state) => state.user.data);
  // dataUser = JSON.parse(dataUser);
  if (!token) {
    return <Navigate to="/basic/login" state={{ from: location }} replace />;
  }
  if (props.isAdmin && dataUser.role !== "admin") {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
