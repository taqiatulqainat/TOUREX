

import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
// import axios from "axios";
import "./Login.css";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // try {
    //   await axios.post("http://localhost:5000/api/auth/login", form);
    //   alert("Login successful!");
    // } catch (err) {
    //   alert("Error: " + err.message);
    // }
    // setLoading(false);

    try {
      await login({ email: form.email, password: form.password });
      // after login AuthProvider navigates to home
    } catch (err) {
      alert(err.response?.data?.message || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <h1 className="heading">Log In</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <p className="sub-text">
            Don’t have an account? <a href="/signup" className="signup-link">Sign Up</a>
          </p>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
