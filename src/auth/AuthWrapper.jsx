import React, { createContext, useContext, useState } from "react";
import Login from "../pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/shard/Layout";
import Register from "../pages/Login/Register";
import Dashboard from "../pages/Dashboards/Dashboard";
import Products from "../pages/Products/Products";
import Home from "../pages/Home";

export const AuthContent = createContext();
// export const AuthData = () => useContext(AuthContent);

const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });
  const [token, setToken] = useState(localStorage.getItem("Token"));

  if (!token) {
    return <Login setToken={setToken}  />;
  }

  // const login = (username, password) => {
  //   return new Promise((resolve, reject) => {
  //     if (password === "1234") {
  //       setUser({ name: username, isAuthenticated: true });
  //       resolve("success");
  //     } else {
  //       reject("รหัสผ่านไม่ถูกต้อง");
  //     }
  //   });
  // };

  // const logout = () => {
  //   setUser({ ...user, isAuthenticated: false });
  // };

  return (
    <AuthContent.Provider value={{ user , token  }}>
      <>
        <Routes>
          {/* 
          <Route path="/login" element={<Login setToken={setToken} token={token} />} />
          <Route path="/register" element={<Register />} /> */}

          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
          </Route>


          <Route path="/login" element={<Login  />} />
          <Route path="/" element={token ? <Layout /> : <Login setToken={setToken}  />} />
        </Routes>
      </>
    </AuthContent.Provider>
  );
};

export default AuthWrapper;
