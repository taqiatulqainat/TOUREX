// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Set baseURL if you want (optional)
  axios.defaults.baseURL = "http://localhost:5000";

  // Load persisted auth on mount
  useEffect(() => {
    const raw = localStorage.getItem("tourex_auth");
    if (raw) {
      try {
        const data = JSON.parse(raw);
        setUser(data.user || null);
        setToken(data.token || null);
        if (data.token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        }
      } catch (e) {
        console.warn("Invalid stored auth");
      }
    }
    setLoadingAuth(false);
  }, []);

  // LOGIN: calls backend, stores token+user
  const login = async ({ email, password }) => {
    const res = await axios.post("/api/auth/login", { email, password });
    // backend expected to return { token, user }
    const { token: jwt, user: userObj } = res.data;
    // save in memory & axios
    setUser(userObj);
    setToken(jwt);
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
    // persist
    localStorage.setItem("tourex_auth", JSON.stringify({ token: jwt, user: userObj }));
    // navigate to home (or wherever)
    navigate("/");
    return res.data;
  };

  // SIGNUP: call signup then auto-login
  const signup = async ({ name, email, password }) => {
    // your backend currently returns a message for signup.
    // We will call signup then call login for seamless UX.
    await axios.post("/api/auth/signup", { name, email, password });
    // after successful signup auto-login:
    return await login({ email, password });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("tourex_auth");
    navigate("/"); // go to home
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
