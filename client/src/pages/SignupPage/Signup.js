
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import "./Signup.css";


const Signup = () => {
  const { signup } = useAuth();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);


  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      // backend expects: name, email, password
      // const res = await axios.post("http://localhost:5000/api/auth/signup", {
      //   name: `${form.firstName} ${form.lastName}`.trim(),
      //   email: form.email,
      //   password: form.password,
      // });
      // alert(res?.data?.message || "Signup successful");

    const res = await axios.post("http://localhost:5000/api/auth/signup", {
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      password: form.password,
    });

    // Save to localStorage
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // Update UI (e.g., redirect to homepage)
    window.location.href = "/";
  


      // const name = `${form.firstName} ${form.lastName}`.trim();
      // await signup({ name, email: form.email, password: form.password });

    } catch (err) {
      alert(err?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="signup-container">
      <div className="form-box">
        <p className="top-text">START FOR FREE</p>
        <h1 className="heading">Create new account</h1>
        <p className="sub-text">
          Already a member? <a href="/login" className="login-link">Log In</a>
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={onChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={onChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={onChange}
            required
          />

          <button type="submit" className="create-btn" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
