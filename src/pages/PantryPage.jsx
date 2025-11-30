// src/pages/PantryPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PantryPage({ addOrderItems }) {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;

    if (items.map((i) => i.toLowerCase()).includes(value.toLowerCase())) {
      setInput("");
      return;
    }

    setItems((prev) => [...prev, value]);
    setInput("");
  };

  const handleRemove = (name) => {
    setItems((prev) => prev.filter((i) => i !== name));
  };

  const handleClear = () => setItems([]);

  const handleOrderAll = () => {
    if (!items.length || !addOrderItems) return;

    const orderItems = items.map((name) => ({
      name,
      quantity: "From pantry",
      fromRecipeName: "My pantry",
    }));

    addOrderItems(orderItems);
    navigate("/orders");
  };

  return (
    <div className="page-shell page--pantry">
      <div className="page-shell-inner">
        <h1 className="page-title">My pantry</h1>
        <p className="page-subtitle">
          Add the ingredients you already have at home. Later we will connect
          this with smart recipe suggestions.
        </p>

        <form
          onSubmit={handleAdd}
          className="card"
          style={{ marginBottom: "1rem", maxWidth: "480px" }}
        >
          <input
            className="input-field"
            placeholder="e.g. tomato, rice, onion..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="primary-btn">
            Add ingredient
          </button>
        </form>

        <div className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ marginBottom: "0.6rem" }}>Pantry list</h2>

          {items.length === 0 && (
            <p className="page-subtitle">
              No ingredients yet. Add something above.
            </p>
          )}

          {items.length > 0 && (
            <>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 0.8rem 0",
                }}
              >
                {items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <span>{item}</span>
                    <button
                      type="button"
                      className="secondary-btn"
                      onClick={() => handleRemove(item)}
                    >
                      remove
                    </button>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: "flex",
                  gap: "0.6rem",
                  flexWrap: "wrap",
                  marginTop: "0.4rem",
                }}
              >
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={handleClear}
                >
                  Clear pantry
                </button>

                <button
                  type="button"
                  className="primary-btn"
                  onClick={handleOrderAll}
                >
                  Order these ingredients
                </button>
              </div>
            </>
          )}
        </div>

        <div
          style={{
            marginTop: "1.4rem",
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap",
          }}
        >
          <Link to="/" className="secondary-btn">
            ← Back to home
          </Link>
          <Link to="/recipes" className="secondary-btn">
            Go to recipes
          </Link>
          <Link to="/orders" className="secondary-btn">
            Go to orders / shopping list
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PantryPage;
