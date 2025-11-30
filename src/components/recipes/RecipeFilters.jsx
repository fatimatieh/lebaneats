import React from "react";

function RecipeFilters({
  category,
  setCategory,
  difficulty,
  setDifficulty,
  maxTime,
  setMaxTime,
  search,
  setSearch
}) {
  return (
    <div
      className="card"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 2fr) repeat(3, minmax(0, 1fr))",
        gap: "0.6rem",
        marginBottom: "1rem"
      }}
    >
      
      <input
        className="input-field"
        placeholder="Search by name (e.g. mjaddara)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      
      <select
        className="input-field"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All categories</option>
        <option value="Mezze">Mezze</option>
        <option value="Main">Main</option>
        <option value="Breakfast">Breakfast</option>
      </select>

      
      <select
        className="input-field"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">All difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      
      <select
        className="input-field"
        value={maxTime}
        onChange={(e) => setMaxTime(e.target.value)}
      >
        <option value="">Any time</option>
        <option value="20">Up to 20 min</option>
        <option value="30">Up to 30 min</option>
        <option value="45">Up to 45 min</option>
        <option value="60">Up to 60 min</option>
      </select>
    </div>
  );
}

export default RecipeFilters;
