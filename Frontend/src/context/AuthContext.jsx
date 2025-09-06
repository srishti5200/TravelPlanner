// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  // ✅ On first render: if token exists, fetch user
  useEffect(() => {
    if (token) {
      API.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => setUser(res.data)) // backend should return { name, email, ... }
        .catch(() => {
          // invalid/expired token
          logout();
        });
    }
  }, [token]);

  // ✅ Login
  const login = async (email, password) => {
    try {
      const res = await API.post("/auth/login", { email, password });
      const { token } = res.data; // backend returns { token }

      setToken(token);
      localStorage.setItem("token", token);

      // fetch user right after login
      const me = await API.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(me.data);

      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  // ✅ Signup
  const signup = async (name, email, password) => {
    try {
      await API.post("/auth/signup", { name, email, password });
      navigate("/login"); // after signup, redirect to login
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  // ✅ Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
