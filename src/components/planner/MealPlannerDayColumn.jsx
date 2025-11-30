import React from "react";

const MEAL_SLOTS = ["Breakfast", "Lunch", "Dinner"];

function MealPlannerDayColumn({ day, recipes, dayPlan, onUpdateDay }) {
  const handleChange = (slotKey, recipeId) => {
    const updated = {
      ...(dayPlan || {}),
      [slotKey]: recipeId || null
    };
    onUpdateDay(day, updated);
  };

  const clearDay = () => onUpdateDay(day, {});

  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem"
        }}
      >
        <strong>{day}</strong>
        <button
          type="button"
          className="secondary-btn"
          onClick={clearDay}
        >
          Clear day
        </button>
      </div>

      {MEAL_SLOTS.map((slot) => {
        const key = slot.toLowerCase();
        const selectedId = dayPlan && dayPlan[key] ? dayPlan[key] : "";
        return (
          <div key={slot} style={{ marginBottom: "0.7rem" }}>
            <div style={{ fontSize: "0.85rem", marginBottom: "0.2rem" }}>
              {slot}
            </div>
            <select
              className="select-field"
              value={selectedId}
              onChange={(e) => handleChange(key, e.target.value)}
            >
              <option value="">No recipe selected</option>
              {recipes.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </div>
  );
}

export default MealPlannerDayColumn;
