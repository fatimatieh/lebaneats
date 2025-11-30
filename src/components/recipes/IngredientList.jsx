import React, { useState } from "react";

function IngredientList({ ingredients }) {
  const [checked, setChecked] = useState(
    ingredients.reduce((acc, ing) => {
      acc[ing.name] = false;
      return acc;
    }, {})
  );

  const toggle = (name) =>
    setChecked((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {ingredients.map((ing) => (
        <li
          key={ing.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.3rem"
          }}
        >
          <input
            type="checkbox"
            checked={checked[ing.name] || false}
            onChange={() => toggle(ing.name)}
          />
          <span>
            <strong>{ing.quantity}</strong> {ing.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default IngredientList;
