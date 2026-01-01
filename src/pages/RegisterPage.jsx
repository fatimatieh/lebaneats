import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

const handleRegister = async (e) => {
  e.preventDefault();

  if (!name.trim() || !email.trim() || !password.trim()) {
    alert("Please fill all fields.");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    alert("Account created ✅ Now login.");
    navigate("/login");
  } catch (err) {
    alert("Backend is not running or blocked (CORS).");
    console.error(err);
  }
};



  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Create an account to save your progress.</p>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label>Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          <div className="form-row">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          {/* ✅ show error */}
          {error && (
            <p
              style={{
                color: "var(--lebanese-red)",
                fontSize: "0.85rem",
                marginTop: "0.2rem",
                marginBottom: "0.7rem",
              }}
            >
              {error}
            </p>
          )}

          <button className="auth-btn" type="button" onClick={handleRegister}>
            Create account
          </button>
        </form>

        <div className="auth-bottom">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
