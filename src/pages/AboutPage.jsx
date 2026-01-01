import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="page-shell">
      <div className="page-shell-inner">
        <h1 className="page-title">About LebanEats</h1>

        <p className="page-subtitle">
          LebanEats is a Lebanese-only cooking and meal planning platform that
          helps users discover traditional dishes, manage ingredients, plan
          meals, and prepare shopping lists in a smart and practical way.
        </p>

        <div className="card">
          <h2
            className="page-title"
            style={{ fontSize: "1.3rem", marginBottom: "0.7rem" }}
          >
            Why only Lebanese cuisine?
          </h2>

          <p style={{ marginBottom: "0.9rem" }}>
            Lebanese cuisine is rich, fresh, and diverse, combining vegetables,
            grains, herbs, and olive oil in a healthy and flavorful way.
            LebanEats focuses exclusively on Lebanese recipes to preserve
            authenticity while making traditional cooking easier and more
            accessible for modern home cooks.
          </p>

          <h3
            className="page-title"
            style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}
          >
            What you can do with LebanEats
          </h3>

          <ul style={{ paddingLeft: "1.2rem", marginBottom: "0.9rem" }}>
            <li>Browse curated Lebanese recipes with detailed ingredients and steps.</li>
            <li>Watch video tutorials when available.</li>
            <li>Add ingredients you already have using <strong>My Pantry</strong>.</li>
            <li>Get smart recipe suggestions based on pantry items.</li>
            <li>Plan meals for the entire week using the meal planner.</li>
            <li>Generate a shopping list from recipes, pantry, or meal plans.</li>
            <li>Save shopping lists and manage them per user account.</li>
            <li>Send feedback or suggestions through the contact page.</li>
          </ul>

          <h3
            className="page-title"
            style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}
          >
            Technical overview
          </h3>

          <p style={{ marginBottom: "0.4rem" }}>
            <strong>Frontend:</strong> Built with React, React Router, and modern
            component-based design for a smooth user experience.
          </p>

          <p style={{ marginBottom: "0.4rem" }}>
            <strong>Backend:</strong> Node.js with Express REST APIs handling
            authentication, pantry management, meal planning, shopping lists,
            and user feedback.
          </p>

          <p style={{ marginBottom: "0.4rem" }}>
            <strong>Database:</strong> MySQL used to store users, pantry items,
            shopping lists, meal plans, favorites, and contact messages.
          </p>

          <p>
            <strong>Authentication:</strong> Secure login system using JSON Web
            Tokens (JWT), allowing each user to access their own data.
          </p>
        </div>

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
          <Link to="/contact" className="secondary-btn">
            Contact / feedback
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
