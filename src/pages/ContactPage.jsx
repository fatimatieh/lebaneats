import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sendFeedback } from "../utils/api";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Auto-fill name & email if logged in
  useEffect(() => {
    try {
      const userStr = localStorage.getItem("user");
      if (!userStr) return;

      const user = JSON.parse(userStr);
      if (!user) return;

      setForm((prev) => ({
        ...prev,
        name: user.name || user.email?.split("@")[0] || "",
        email: user.email || "",
      }));
    } catch {
      // ignore parsing errors
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setError("Name and message are required.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await sendFeedback({
        name: form.name,
        email: form.email,
        message: form.message,
      });

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="page-shell">
        <div className="page-shell-inner">
          <h1 className="page-title">Contact</h1>
          <p className="page-subtitle">
            ✅ Thank you for your feedback! Your message has been sent
            successfully.
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
            required
          />

          <input
            className="input-field"
            placeholder="Email (optional)"
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
            required
          />

          {error && (
            <p
              style={{
                color: "var(--lebanese-red)",
                fontSize: "0.85rem",
                marginBottom: "0.5rem",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-btn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div
          style={{
            marginTop: "1.4rem",
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap",
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
