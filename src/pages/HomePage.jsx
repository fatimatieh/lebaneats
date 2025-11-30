import React from "react";
import { Link } from "react-router-dom";

function HomePage({ recipes }) {
  const popular = recipes.slice(0, 3);

  return (
    <div className="page-shell page--home">
      <div className="page-shell-inner">
        
        <section className="home-hero">
          <h1 className="page-title home-hero-title">
            Lebaneats; Cook Lebanese at Home!
          </h1>

          <p className="page-subtitle home-hero-subtitle">
            Find Lebanese meals, see video tutorials, and plan or order
            ingredients.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.7rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "1.6rem"
            }}
          >
            <Link to="/recipes" className="primary-btn">
              Browse recipes
            </Link>
            <Link to="/pantry" className="secondary-btn">
              Smart Cooking Mode
            </Link>
            <Link to="/meal-planner" className="secondary-btn">
              Plan your week
            </Link>
            <Link to="/about" className="secondary-btn">
              About LebanEats
            </Link>
          </div>

         
          <h2
            className="page-title"
            style={{ fontSize: "1.4rem", marginBottom: "1rem" }}
          >
            Most popular dishes
          </h2>

   <div className="recipe-list-vertical">
  {popular.map((recipe) => (
    <div key={recipe.id} className="card">
      {recipe.image && (
        <div style={{ marginBottom: "0.6rem" }}>
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{
              width: "100%",
              height: "200px",
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
      <Link to={`/recipes/${recipe.id}`} className="secondary-btn">
        View recipe
      </Link>
    </div>
  ))}
</div>

        </section>

        
        <section className="section">
          <div
            className="card"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "0.8rem",
              flexWrap: "wrap",
              alignItems: "center"
            }}
          >
            <strong>Lebanese food, Lebanese heart, made in your kitchen. 🇱🇧</strong>
            <span className="ghost-chip">
              
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
