import React, { useEffect, useMemo, useState } from "react";

function IngredientList({ ingredients = [], onSelectionChange }) {
  // Build default checked map
  const initialChecked = useMemo(() => {
    return ingredients.reduce((acc, ing) => {
      acc[ing.name] = false;
      return acc;
    }, {});
  }, [ingredients]);

  const [checked, setChecked] = useState(initialChecked);

  // Reset when recipe changes
  useEffect(() => {
    setChecked(initialChecked);
  }, [initialChecked]);

  const toggle = (name) =>
    setChecked((prev) => ({ ...prev, [name]: !prev[name] }));

  // ✅ Select all ingredients
  const selectAll = () => {
    const allChecked = {};
    ingredients.forEach((ing) => {
      allChecked[ing.name] = true;
    });
    setChecked(allChecked);
  };

  // ✅ Clear all selections
  const clearAll = () => {
    setChecked(initialChecked);
  };

  // Send selected ingredients to parent
  useEffect(() => {
    if (typeof onSelectionChange !== "function") return;

    const selected = ingredients.filter((ing) => checked[ing.name]);
    onSelectionChange(selected);
  }, [checked, ingredients, onSelectionChange]);

  const anyChecked = Object.values(checked).some(Boolean);

  return (
    <div>
      {/* ✅ Select all / Clear controls */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "0.6rem",
          flexWrap: "wrap",
        }}
      >
        <button
          type="button"
          className="secondary-btn"
          onClick={selectAll}
        >
          Select all
        </button>

        {anyChecked && (
          <button
            type="button"
            className="secondary-btn"
            onClick={clearAll}
          >
            Clear
          </button>
        )}
      </div>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {ingredients.map((ing) => (
          <li
            key={ing.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.3rem",
            }}
          >
            <input
              type="checkbox"
              checked={!!checked[ing.name]}
              onChange={() => toggle(ing.name)}
            />
            <span>
              <strong>{ing.quantity}</strong> {ing.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;
