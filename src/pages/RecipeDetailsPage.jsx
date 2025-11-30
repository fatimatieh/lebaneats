// src/pages/RecipeDetailsPage.jsx
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import IngredientList from "../components/recipes/IngredientList";
import StepByStepCookMode from "../components/recipes/StepByStepCookMode";

function RecipeDetailsPage({
  recipes,
  isFavorite,
  toggleFavorite,
  addOrderItems
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === id);
  const [showCookMode, setShowCookMode] = useState(false);

  if (!recipe) {
    return (
      <div className="page-shell">
        <div className="page-shell-inner">
          <h1 className="page-title">Recipe not found</h1>
          <Link to="/recipes" className="secondary-btn">
            Back to recipes
          </Link>
        </div>
      </div>
    );
  }

  const handleOrderAll = () => {
    if (recipe.ingredients && recipe.ingredients.length > 0 && addOrderItems) {
      const items = recipe.ingredients.map((ing) => ({
        name: ing.name,
        quantity: ing.quantity,
        fromRecipeName: recipe.name
      }));
      addOrderItems(items);
    }
    navigate("/orders");
  };

  return (
    <div className="page-shell">
      <div className="page-shell-inner">
        <h1 className="page-title">{recipe.name}</h1>
        <p className="page-subtitle">{recipe.shortDescription}</p>

        <div
          className="card"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)",
            gap: "1.3rem",
            marginBottom: "1.5rem"
          }}
        >
          <div>
            {recipe.image && (
  <div style={{ marginBottom: "0.8rem" }}>
    <img
      src={recipe.image}
      alt={recipe.name}
      style={{
        width: "70%",
        aspectRatio: "16/ 9",   // <- makes it a nice rectangle/cube
        objectFit: "cover",
        borderRadius: "0.9rem",
        display: "block"
      }}
    />
  </div>
)}

            <p style={{ fontSize: "0.9rem", marginBottom: "0.3rem" }}>
              Category: <strong>{recipe.category}</strong>
            </p>
            <p style={{ fontSize: "0.9rem", marginBottom: "0.3rem" }}>
              Time: <strong>{recipe.cookTime} min</strong> • Servings:{" "}
              <strong>{recipe.servings}</strong>
            </p>
            <p style={{ fontSize: "0.9rem", marginBottom: "0.8rem" }}>
              Difficulty: <strong>{recipe.difficulty}</strong>
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <button
                type="button"
                className="primary-btn"
                onClick={() => setShowCookMode(true)}
              >
                Start cooking mode
              </button>
              <button
                type="button"
                className="secondary-btn"
                onClick={handleOrderAll}
              >
                Order ingredients
              </button>
              <button
                type="button"
                className="secondary-btn"
                onClick={() => toggleFavorite(recipe.id)}
              >
                {isFavorite(recipe.id) ? "★ Favorited" : "☆ Add to favorites"}
              </button>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: "0.5rem" }}>Ingredients</h3>
            <IngredientList ingredients={recipe.ingredients} />
          </div>
        </div>

        <section className="section">
          <h2 className="page-title" style={{ fontSize: "1.4rem" }}>
            How to make
          </h2>
          <ol style={{ paddingLeft: "1.2rem" }}>
            {recipe.steps.map((step, i) => (
              <li key={i} style={{ marginBottom: "0.6rem" }}>
                {step.text}
              </li>
            ))}
          </ol>
        </section>

        <section className="section">
          <h2 className="page-title" style={{ fontSize: "1.4rem" }}>
            Video tutorial
          </h2>

          <button
            type="button"
            className="secondary-btn"
            disabled={!recipe.videoUrl}
            onClick={() => {
              if (recipe.videoUrl) {
                window.open(recipe.videoUrl, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {recipe.videoUrl ? "Watch on YouTube" : "Video coming soon"}
          </button>
        </section>

        <div
          style={{
            marginTop: "1.4rem",
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap"
          }}
        >
          <Link to="/recipes" className="secondary-btn">
            ← Back to recipes
          </Link>
          <Link to="/" className="secondary-btn">
            Go to home
          </Link>
          <Link to="/orders" className="secondary-btn">
            Go to orders / shopping list
          </Link>
        </div>
{showCookMode && (
  <StepByStepCookMode
    steps={recipe.steps}
    onClose={() => setShowCookMode(false)}
  />
)}

      </div>
    </div>
  );
}

export default RecipeDetailsPage;
