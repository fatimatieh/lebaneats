import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page-shell">
        <div className="page-shell-inner">
          <h1 className="page-title">Contact</h1>
          <p className="page-subtitle">
            Thank you for your message. In Phase 1 this is a front-end only
            demo, so the message is not really sent, but the form submission is
            simulated successfully.
          </p>
          <Link to="/" className="secondary-btn">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <div className="page-shell-inner">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">
          Send feedback about recipes, features, or Lebanese dishes you would
          like to see added.
        </p>

        <form
          onSubmit={handleSubmit}
          className="card"
          style={{ maxWidth: "480px" }}
        >
          <input
            className="input-field"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className="input-field"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            className="textarea-field"
            placeholder="Message / feedback"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          {error && (
            <p
              style={{
                color: "var(--lebanese-red)",
                fontSize: "0.85rem",
                marginBottom: "0.5rem"
              }}
            >
              {error}
            </p>
          )}
          <button type="submit" className="primary-btn">
            Send
          </button>
        </form>

        <div
          style={{
            marginTop: "1.4rem",
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap"
          }}
        >
          <Link to="/" className="secondary-btn">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
