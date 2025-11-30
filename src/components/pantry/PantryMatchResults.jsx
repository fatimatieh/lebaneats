import React from "react";
import { Link } from "react-router-dom";

function PantryMatchResults({ recipes, pantryItems, onOrderMissing }) {
  const normalized = pantryItems.map((i) => i.toLowerCase().trim());

  const canCookNow = [];
  const almostThere = [];

  recipes.forEach((recipe) => {
    const names = recipe.ingredients.map((i) => i.name.toLowerCase().trim());
    const haveCount = names.filter((n) => normalized.includes(n)).length;
    const missingCount = names.length - haveCount;
    const missingIngredients = recipe.ingredients.filter(
      (i) => !normalized.includes(i.name.toLowerCase().trim())
    );

    if (missingCount === 0) {
      canCookNow.push({ recipe, missingIngredients });
    } else if (missingCount > 0 && missingCount <= 2) {
      almostThere.push({ recipe, missingIngredients });
    }
  });

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <div className="section">
        <h2 className="page-title" style={{ fontSize: "1.4rem" }}>
          You can cook now (100%)
        </h2>
        {canCookNow.length === 0 && (
          <p className="page-subtitle">
            No full matches yet. Add more items to your pantry.
          </p>
        )}
        <div className="recipe-grid">
          {canCookNow.map(({ recipe }) => (
            <div key={recipe.id} className="card">
              <h3>{recipe.name}</h3>
              <p className="page-subtitle">{recipe.shortDescription}</p>
              <p style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                {recipe.category} • {recipe.cookTime} min
              </p>
              <Link to={`/recipes/${recipe.id}`} className="secondary-btn">
                View recipe
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="page-title" style={{ fontSize: "1.4rem" }}>
          Almost there (missing 1–2 ingredients)
        </h2>
        {almostThere.length === 0 && (
          <p className="page-subtitle">
            No partial matches yet. Add more items or more recipes.
          </p>
        )}
        <div className="recipe-grid">
          {almostThere.map(({ recipe, missingIngredients }) => (
            <div key={recipe.id} className="card">
              <h3>{recipe.name}</h3>
              <p className="page-subtitle">{recipe.shortDescription}</p>
              <p style={{ fontSize: "0.85rem", marginBottom: "0.3rem" }}>
                Missing:
              </p>
              <ul style={{ paddingLeft: "1.2rem", marginBottom: "0.7rem" }}>
                {missingIngredients.map((ing) => (
                  <li key={ing.name} style={{ fontSize: "0.85rem" }}>
                    {ing.quantity} {ing.name}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className="secondary-btn"
                >
                  View recipe
                </Link>
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() =>
                    onOrderMissing(
                      missingIngredients.map((ing) => ({
                        name: ing.name,
                        quantity: ing.quantity,
                        fromRecipeName: recipe.name
                      }))
                    )
                  }
                >
                  Order missing ingredients
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PantryMatchResults;
