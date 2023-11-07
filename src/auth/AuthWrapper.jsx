import React, { createContext, useContext, useState } from "react";
import Login from "../pages/Login/Login";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Register from "../pages/Login/Register";

import PrivateRoute from "../routes/PrivateRoute";

export const AuthContent = createContext();
// export const AuthData = () => useContext(AuthContent);

const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const navigate = useNavigate();

  // if (!token) {
  //   return <Login setToken={setToken}  />;
  // }

  return (
    <AuthContent.Provider value={{ user, token, setToken }}>
      <>
        <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {token ? (
          <PrivateRoute />
          
        ) : (
          <Routes>
            <Route path="*" element={<Navigate to="/login" />} />
            <Navigate to="/login"  />;
          </Routes>
        )}
      </>
    </AuthContent.Provider>
  );
};

export default AuthWrapper;
