import React from "react";
import { Link } from "react-router-dom";

function FavoritesPage({ recipes, favorites, toggleFavorite }) {
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div className="page-shell">
      <div className="page-shell-inner">
        <h1 className="page-title">Favorites</h1>
        <p className="page-subtitle">
          Your favorite Lebanese dishes. Save the recipes you cook the most.
        </p>

        {favoriteRecipes.length === 0 && (
          <p className="page-subtitle">
            You have no favorites yet. Go to the recipes page and mark some
            recipes as favorites.
          </p>
        )}

        <div className="recipe-grid">
          {favoriteRecipes.map((recipe) => (
            <div key={recipe.id} className="card">
              {recipe.image && (
                <div style={{ marginBottom: "0.6rem" }}>
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "0.8rem"
                    }}
                  />
                </div>
              )}
              <h3>{recipe.name}</h3>
              <p className="page-subtitle">{recipe.shortDescription}</p>
              <p style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                {recipe.category} • {recipe.cookTime} min
              </p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="secondary-btn"
                >
                  View
                </Link>
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => toggleFavorite(recipe.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
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
          <Link to="/recipes" className="secondary-btn">
            Go to recipes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
