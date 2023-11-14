import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/shard/Layout";
import Dashboard from "../pages/Dashboards/Dashboard";
import Products from "../pages/Products/Products";
import Home from "../pages/Home";
import BasicHome from "../pages/AdminMain/Basic/BasicHome";
import BasicWong from "../pages/AdminMain/Basic/BasicWong";
let Type = localStorage.getItem("Type");

const PrivateRoute = () => {
  return (
    <>
   
      {Type == "main-admin" || Type == "admin" ? (
        <Routes>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/basic/home" element={<BasicHome />} />
            <Route path="/admin/basic/wong" element={<BasicWong />} />
          </Route>
          <Route path="/" element={<Navigate to="/admin" />} />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      ) : ""}
      {Type == "user" ? (
        <Routes>
          <Route path="/user" element={<Layout />} />
          <Route path="/" element={<Navigate to="/user" />} />
          <Route path="*" element={<Navigate to="/user" />} />
        </Routes>
      ): ""}
    </>
  );
};

export default PrivateRoute;
