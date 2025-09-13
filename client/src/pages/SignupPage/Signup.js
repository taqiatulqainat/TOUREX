
// import React, { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import axios from "axios";
// import "./Signup.css";


// const Signup = () => {
//   const { signup } = useAuth();
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [loading, setLoading] = useState(false);


//   const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     setLoading(true);
//     try {
//       // backend expects: name, email, password
//       // const res = await axios.post("http://localhost:5000/api/auth/signup", {
//       //   name: `${form.firstName} ${form.lastName}`.trim(),
//       //   email: form.email,
//       //   password: form.password,
//       // });
//       // alert(res?.data?.message || "Signup successful");

//     const res = await axios.post("http://localhost:5000/api/auth/signup", {
//       name: `${form.firstName} ${form.lastName}`.trim(),
//       email: form.email,
//       password: form.password,
//     });

//     // Save to localStorage
//     localStorage.setItem("token", res.data.token);
//     localStorage.setItem("user", JSON.stringify(res.data.user));

//     // Update UI (e.g., redirect to homepage)
//     window.location.href = "/";
  


//       // const name = `${form.firstName} ${form.lastName}`.trim();
//       // await signup({ name, email: form.email, password: form.password });

//     } catch (err) {
//       alert(err?.response?.data?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="signup-container">
//       <div className="form-box">
//         <p className="top-text">START FOR FREE</p>
//         <h1 className="heading">Create new account</h1>
//         <p className="sub-text">
//           Already a member? <a href="/login" className="login-link">Log In</a>
//         </p>

//         <form className="signup-form" onSubmit={handleSubmit}>
//           <div className="input-row">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={form.firstName}
//               onChange={onChange}
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={form.lastName}
//               onChange={onChange}
//               required
//             />
//           </div>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={onChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={onChange}
//             required
//           />

//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={form.confirmPassword}
//             onChange={onChange}
//             required
//           />

//           <button type="submit" className="create-btn" disabled={loading}>
//             {loading ? "Creating..." : "Create Account"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import "./Signup.css";

import EyeClose from "../../assets/eye-close.png";
import EyeOpen from "../../assets/eye-open.png";

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
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ Validation function
  const validateForm = () => {
    let newErrors = {};

    if (form.firstName.trim().length < 4) {
      newErrors.firstName = "First name must be at least 4 characters.";
    }
    if (form.lastName.trim().length < 4) {
      newErrors.lastName = "Last name must be at least 4 characters.";
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)) {
      newErrors.password =
        "Password must be at least 8 characters and include letters & numbers.";
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.location.href = "/";
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
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={onChange}
                required
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={onChange}
                required
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={onChange}
              required
            />
            {/* <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span> */}

            <img
    src={showPassword ? EyeOpen : EyeClose}
    alt="toggle password"
    className="toggle-password"
    onClick={() => setShowPassword(!showPassword)}
  />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="input-group password-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={onChange}
              required
            />
            {/* <span
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </span> */}

            <img
    src={showPassword ? EyeOpen : EyeClose}
    alt="toggle password"
    className="toggle-password"
    onClick={() => setShowPassword(!showPassword)}
  />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>

          <button type="submit" className="create-btn" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
