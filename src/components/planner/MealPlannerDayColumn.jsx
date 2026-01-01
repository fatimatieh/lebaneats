import React from "react";
const MEAL_SLOTS = ["Breakfast", "Lunch", "Dinner"];

function MealPlannerDayColumn({ day, recipes, dayPlan, onUpdateDay }) {
  const handleChange = async (slotKey, recipeId) => {
   
    const updated = {
      ...(dayPlan || {}),
      [slotKey]: recipeId || null,
    };
    onUpdateDay(day, updated);

    
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("http://localhost:5000/api/meal-plans", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          day_of_week: day,
          meal_type: slotKey, 
          recipe_id: recipeId || null,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.message || "Failed to save meal plan");
    } catch (e) {
      alert(e.message);
    }
  };

  const clearDay = async () => {
    onUpdateDay(day, {});

  
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const slots = ["breakfast", "lunch", "dinner"];

      const results = await Promise.all(
        slots.map(async (slot) => {
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
          if (!res.ok || !data.ok) throw new Error(data.message || `Failed clearing ${day} ${slot}`);
          return true;
        })
      );

      return results;
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <strong>{day}</strong>
        <button type="button" className="secondary-btn" onClick={clearDay}>
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
