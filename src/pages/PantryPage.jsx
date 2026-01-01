import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PantryMatchResults from "../components/pantry/PantryMatchResults";
import {
  getPantryItems,
  addPantryItem,
  removePantryItem,
  clearPantry,
} from "../utils/api";

function PantryPage({ token, recipes = [], pantryItems = [], setPantryItems, addOrderItems }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  
  const requireLogin = () => {
    if (!token) {
      alert("Please login first to use My Pantry.");
      return false;
    }
    return true;
  };

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!token) {
        setPantryItems([]); 
        return;
      }

      try {
        const items = await getPantryItems(); 
        if (!cancelled) setPantryItems(items);
      } catch (e) {
        console.log("Load pantry error:", e.message);
        if (!cancelled) setPantryItems([]);
      }
    }

    load();
    return () => (cancelled = true);
  }, [token, setPantryItems]);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!requireLogin()) return;

    const value = input.trim();
    if (!value) return;

    const exists = pantryItems.some(
      (i) => i.item_name.toLowerCase() === value.toLowerCase()
    );
    if (exists) {
      setInput("");
      return;
    }

    try {
      const newItem = await addPantryItem(value); 
      setPantryItems((prev) => [...prev, newItem]);
      setInput("");
    } catch (e2) {
      alert(e2.message);
    }
  };

  const handleRemove = async (id) => {
    if (!requireLogin()) return;


    const old = [...pantryItems];

    setPantryItems((prev) => prev.filter((x) => x.id !== id));

    try {
      await removePantryItem(id);
    } catch (e) {
      setPantryItems(old);
      alert(e.message);
    }
  };

  const handleClear = async () => {
    if (!requireLogin()) return;

    const old = pantryItems;
    setPantryItems([]);

    try {
      await clearPantry();
    } catch (e) {
      setPantryItems(old);
      alert(e.message);
    }
  };

  const handleOrderAll = () => {
    if (!pantryItems.length || !addOrderItems) return;

    const orderItems = pantryItems.map((x) => ({
      name: x.item_name,
      quantity: "From pantry",
      fromRecipeName: "My pantry",
    }));

    addOrderItems(orderItems);
    navigate("/orders");
  };

  const onOrderMissing = (missingItems) => {
    if (!missingItems?.length || !addOrderItems) return;
    addOrderItems(missingItems);
    navigate("/orders");
  };

 
  const pantryNames = pantryItems.map((x) => x.item_name);

  return (
    <div className="page-shell page--pantry">
      <div className="page-shell-inner">
        <h1 className="page-title">My pantry</h1>
        <p className="page-subtitle">
          Add the ingredients you already have at home. Smart suggestions appear automatically.
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
            disabled={!token}
          />
          <button type="submit" className="primary-btn" disabled={!token}>
            Add ingredient
          </button>
        </form>

        {!token && (
          <p className="page-subtitle" style={{ marginBottom: "1rem" }}>
            Please login to save your pantry items.
          </p>
        )}

        <div className="card" style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ marginBottom: "0.6rem" }}>Pantry list</h2>

          {pantryItems.length === 0 && (
            <p className="page-subtitle">No ingredients yet. Add something above.</p>
          )}

          {pantryItems.length > 0 && (
            <>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 0.8rem 0" }}>
                {pantryItems.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <span>{item.item_name}</span>
                    <button
                      type="button"
                      className="secondary-btn"
                      onClick={() => handleRemove(item.id)}
                      disabled={!token}
                    >
                      remove
                    </button>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.4rem" }}>
                <button type="button" className="secondary-btn" onClick={handleClear} disabled={!token}>
                  Clear pantry
                </button>

                <button type="button" className="primary-btn" onClick={handleOrderAll}>
                  Order these ingredients
                </button>
              </div>
            </>
          )}
        </div>

        <PantryMatchResults
          recipes={recipes}
          pantryItems={pantryNames}
          onOrderMissing={onOrderMissing}
        />

        <div style={{ marginTop: "1.4rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link to="/" className="secondary-btn">← Back to home</Link>
          <Link to="/recipes" className="secondary-btn">Go to recipes</Link>
          <Link to="/orders" className="secondary-btn">Go to orders / shopping list</Link>
        </div>
      </div>
    </div>
  );
}

export default PantryPage;
