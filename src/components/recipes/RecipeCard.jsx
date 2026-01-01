import React, { useState } from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe, isFavorite, toggleFavorite }) {
  const token = localStorage.getItem("token");
  const [busy, setBusy] = useState(false);

  const onFavClick = async () => {
    if (!token) {
      alert("Please login first to use favorites.");
      return;
    }
    if (busy) return;

    setBusy(true);
    try {
      await toggleFavorite(recipe.id); // App.js handles backend + state update
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card">
      {recipe.image && (
        <div style={{ marginBottom: "0.6rem" }}>
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{
              width: "100%",
              height: "160px",
              objectFit: "cover",
              borderRadius: "0.9rem",
            }}
          />
        </div>
      )}

      <h3 style={{ marginBottom: "0.25rem" }}>{recipe.name}</h3>
      <p className="page-subtitle" style={{ marginBottom: "0.5rem" }}>
        {recipe.shortDescription}
      </p>
      <p style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
        {recipe.category} • {recipe.cookTime} min • {recipe.difficulty}
      </p>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Link to={`/recipes/${recipe.id}`} className="secondary-btn">
          View Recipe
        </Link>

        <button
          type="button"
          className="secondary-btn"
          onClick={onFavClick}
          disabled={!token || busy}
          title={!token ? "Login required" : ""}
        >
          {isFavorite ? "★ Favorited" : "☆ Favorite"}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
