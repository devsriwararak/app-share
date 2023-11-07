import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/shard/Layout";
import Dashboard from "../pages/Dashboards/Dashboard";
import Products from "../pages/Products/Products";
import Home from "../pages/Home";
import Basic from "../pages/AdminMain/Basic";

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/basic/home" element={<Basic />} />
        <Route path="/admin/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoute;
