import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, favorites, toggleFavorite }) {
  return (
    <div className="recipe-grid">
      {recipes.map((r) => (
        <RecipeCard
          key={r.id}
          recipe={r}
          isFavorite={favorites.includes(r.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
      {recipes.length === 0 && (
        <p className="page-subtitle">No recipes match your filters.</p>
      )}
    </div>
  );
}

export default RecipeList;
