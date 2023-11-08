import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/shard/Layout";
import Dashboard from "../pages/Dashboards/Dashboard";
import Products from "../pages/Products/Products";
import Home from "../pages/Home";
import BasicHome from '../pages/AdminMain/Basic/BasicHome'

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" />} />
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/basic/home" element={<BasicHome />} />
        <Route path="/admin/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
