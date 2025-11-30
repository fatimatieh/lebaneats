import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import RecipeFilters from "../components/recipes/RecipeFilters";
import RecipeList from "../components/recipes/RecipeList";

function RecipesPage({ recipes, favorites, toggleFavorite }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [maxTime, setMaxTime] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      recipes.filter((r) => {
        if (category && r.category !== category) return false;
        if (difficulty && r.difficulty !== difficulty) return false;
        if (maxTime && r.cookTime > Number(maxTime)) return false;
        if (
          search &&
          !r.name.toLowerCase().includes(search.toLowerCase().trim())
        ) {
          return false;
        }
        return true;
      }),
    [recipes, category, difficulty, maxTime, search]
  );

  return (
    <div className="page-shell page--recipes">
      <div className="page-shell-inner">
        <h1 className="page-title">Lebanese recipes</h1>
        <p className="page-subtitle">
          Browse all available Lebanese dishes and filter by category,
          difficulty, and cooking time.
        </p>

      
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap"
          }}
        >
          <Link to="/" className="secondary-btn">
            ← Back to home
          </Link>
          <Link to="/favorites" className="secondary-btn">
            Go to favorites
          </Link>
          <Link to="/pantry" className="secondary-btn">
            Go to My pantry
          </Link>
        </div>

        <RecipeFilters
          category={category}
          setCategory={setCategory}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          maxTime={maxTime}
          setMaxTime={setMaxTime}
          search={search}
          setSearch={setSearch}
        />

        <RecipeList
          recipes={filtered}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}

export default RecipesPage;
