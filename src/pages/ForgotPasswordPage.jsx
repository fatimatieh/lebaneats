import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSend = (e) => {
  e.preventDefault();

  if (!email.trim()) {
    alert("Please enter your email.");
    return;
  }

  alert("If this email exists, a reset link would be sent (Phase 2 backend).");
};


  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Forgot Password</h2>
        <p className="auth-subtitle">Enter your email to reset your password.</p>

        <form className="auth-form" onSubmit={handleSend}>
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

          {error && (
            <p style={{ color: "var(--lebanese-red)", fontSize: "0.85rem" }}>
              {error}
            </p>
          )}

          <button className="auth-btn" type="submit">
            Send reset link
          </button>
        </form>

        <div className="auth-bottom">
          <Link to="/login">Back to login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
