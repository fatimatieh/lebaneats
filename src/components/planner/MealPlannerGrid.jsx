import React from "react";
import MealPlannerDayColumn from "./MealPlannerDayColumn";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const SLOTS = ["breakfast", "lunch", "dinner"];

function MealPlannerGrid({ recipes, mealPlan, setMealPlan }) {
  const updateDayPlan = (day, updatedDayPlan) => {
    setMealPlan((prev) => ({
      ...prev,
      [day]: updatedDayPlan,
    }));
  };

  const totalMeals = (() => {
    let count = 0;
    Object.values(mealPlan || {}).forEach((day) => {
      if (!day) return;
      Object.values(day).forEach((val) => {
        if (val) count += 1;
      });
    });
    return count;
  })();

  const clearWeek = async () => {
    // 1) Clear UI
    setMealPlan({});

    // 2) Clear DB if logged in
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      for (const day of DAYS) {
        for (const slot of SLOTS) {
          const res = await fetch("http://localhost:5000/api/meal-plans", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              day_of_week: day,
              meal_type: slot,
              recipe_id: null,
            }),
          });

          const data = await res.json();
          if (!res.ok || !data.ok) {
            throw new Error(data.message || "Failed to clear week in DB");
          }
        }
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <div
        style={{
          marginBottom: "0.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p className="page-subtitle" style={{ marginBottom: 0 }}>
          Total planned meals: <strong>{totalMeals}</strong>
        </p>
        <button type="button" className="secondary-btn" onClick={clearWeek}>
          Clear whole week
        </button>
      </div>

      <div className="recipe-grid">
        {DAYS.map((day) => (
          <MealPlannerDayColumn
            key={day}
            day={day}
            recipes={recipes}
            dayPlan={mealPlan?.[day]}
            onUpdateDay={updateDayPlan}
          />
        ))}
      </div>
    </div>
  );
}

export default MealPlannerGrid;
