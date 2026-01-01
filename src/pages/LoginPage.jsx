import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in email and password.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || data.ok === false) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("isLoggedIn", "true");

      navigate("/", { replace: true });
    } catch (err) {
      setError("Backend is not running or blocked (CORS).");
      console.error(err);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome to LebanEats!</h2>

        <form className="auth-form" onSubmit={handleLogin}>
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
            />
          </div>

          {error && (
            <p style={{ color: "var(--lebanese-red)", fontSize: "0.85rem" }}>
              {error}
            </p>
          )}

          {/* ✅ IMPORTANT: type="submit" */}
          <button className="auth-btn" type="submit">
            Login
          </button>
        </form>

        <div className="auth-bottom">
          Don’t have an account? <Link to="/register">Create one</Link>
        </div>

        <div className="auth-bottom">
          <Link to="/forgot-password" className="auth-link-btn">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
