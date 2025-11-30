import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="page-shell">
      <div className="page-shell-inner">
        <h1 className="page-title">About LebanEats</h1>
        <p className="page-subtitle">
          LebanEats is a Lebanese-only recipe companion that helps you
          discover dishes, plan meals, and prepare ingredient orders.
        </p>

        <div className="card">
          <h2
            className="page-title"
            style={{ fontSize: "1.3rem", marginBottom: "0.7rem" }}
          >
            Why only Lebanese cuisine?
          </h2>
          <p style={{ marginBottom: "0.7rem" }}>
            Lebanese food is rich, fresh, and full of flavor. This project
            focuses on traditional and modern Lebanese recipes to make them easy
            and accessible for beginners and experienced home cooks.
          </p>

          <h3
            className="page-title"
            style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}
          >
            Project goal
          </h3>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "0.7rem" }}>
            <li>Browse curated Lebanese recipes with ingredients and steps.</li>
            <li>Watch video tutorials for each dish.</li>
            <li>Use My pantry to see what you can cook with what you have.</li>
            <li>Plan meals for the whole week.</li>
            <li>Prepare a shopping list for delivery apps.</li>
          </ul>

          <h3
            className="page-title"
            style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}
          >
            Technical phases
          </h3>
          <p style={{ marginBottom: "0.4rem" }}>
            <strong>Phase 1 (this project):</strong> Front-end only using React.
            Data is stored in local React state and static recipe data files.
          </p>
          <p>
            <strong>Future phase:</strong> full-stack version with backend,
            user accounts, saving data in a database, and integrating real
            delivery / ordering.
          </p>
        </div>

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
          <Link to="/contact" className="secondary-btn">
            Contact / feedback
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
