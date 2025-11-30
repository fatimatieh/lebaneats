import React, { useState } from "react";

function PantryForm({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        className="input-field"
        placeholder="Add ingredient (e.g. tomato, rice, onion)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="primary-btn">
        Add
      </button>
    </form>
  );
}

export default PantryForm;
