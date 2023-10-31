import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Dashboard from "./pages/Dashboards/Dashboard";
import Layout from "./components/shard/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Route>

      {/* login */}
      <Route path="/login" element={<p>555555</p>} />
    </Routes>
  );
};

export default App;
