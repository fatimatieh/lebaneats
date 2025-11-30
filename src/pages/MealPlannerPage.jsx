import React from "react";
import { Link } from "react-router-dom";
import MealPlannerGrid from "../components/planner/MealPlannerGrid";

function MealPlannerPage({
  recipes,
  mealPlan,
  setMealPlan,
  generateShoppingListFromMealPlan
}) {
  return (
    <div className="page-shell page--mealplanner">
      <div className="page-shell-inner">
        <h1 className="page-title">Meal planner</h1>
        <p className="page-subtitle">
          Plan Lebanese meals for each day of the week and generate a shopping
          list from your plan.
        </p>

        <div style={{ marginBottom: "1rem" }}>
          <button
            type="button"
            className="primary-btn"
            onClick={generateShoppingListFromMealPlan}
          >
            Generate shopping list from plan
          </button>
        </div>

        <MealPlannerGrid
          recipes={recipes}
          mealPlan={mealPlan}
          setMealPlan={setMealPlan}
        />

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
            View recipes
          </Link>
          <Link to="/orders" className="secondary-btn">
            Go to orders / shopping list
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MealPlannerPage;
