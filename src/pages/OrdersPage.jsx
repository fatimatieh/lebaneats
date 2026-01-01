import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OrderListItem from "../components/orders/OrderListItem";
import {
  getShoppingList,
  removeShoppingItem,
  clearShoppingList,
} from "../utils/api";

//helpers
const normalize = (s) => (s || "").toString().trim().toLowerCase();

// Deduplicate DB rows by ingredient name
function dedupeOrders(raw = []) {
  const map = new Map();

  raw.forEach((x) => {
    const name = (x.name ?? x.item_name ?? "").toString().trim();
    if (!name) return;

    const key = normalize(name);

    const quantity = (x.quantity || "").toString().trim();
    const from = (x.fromRecipeName ?? x.from_recipe_name ?? "").toString().trim();
    const id = x.id;

    if (!map.has(key)) {
      map.set(key, {
        id, 
        name,
        quantity,
        fromRecipeName: from,
        _ids: [id], 
      });
      return;
    }

    const cur = map.get(key);

    const sources = new Set(
      (cur.fromRecipeName || "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    );
    if (from) sources.add(from);
    cur.fromRecipeName = Array.from(sources).join(", ");

    if (quantity && !cur.quantity) {
      cur.quantity = quantity;
    } else if (quantity && cur.quantity && cur.quantity !== quantity) {
      const qs = new Set(
        cur.quantity
          .split(" | ")
          .map((t) => t.trim())
          .filter(Boolean)
      );
      qs.add(quantity);
      cur.quantity = Array.from(qs).join(" | ");
    }

    
    cur._ids.push(id);
  });

  return Array.from(map.values());
}

function OrdersPage({ token, orders = [], setOrders }) {

  const isDbId = (id) => Number.isFinite(Number(id));

  
  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!token) return; 

      try {
        const list = await getShoppingList(); 
        const deduped = dedupeOrders(list);
        if (!cancelled) setOrders(deduped);
      } catch (e) {
        console.log("Load shopping list error:", e.message);
        if (!cancelled) setOrders([]);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [token, setOrders]);

  
  const uiOrders = (orders || []).map((x) => ({
    id: x.id,
    name: x.name ?? x.item_name,
    quantity: x.quantity,
    fromRecipeName: x.fromRecipeName ?? x.from_recipe_name,
    _ids: x._ids, 
  }));


  const handleRemoveOne = async (item) => {
    const ids =
      item && typeof item === "object"
        ? item._ids && item._ids.length
          ? item._ids
          : [item.id]
        : [item];

    const old = orders;

    setOrders((prev) =>
      prev.filter((x) => {
        const xIds = x._ids && x._ids.length ? x._ids : [x.id];
        return !xIds.some((one) => ids.includes(one));
      })
    );

    if (!token || !ids.every(isDbId)) return;

    try {
      await Promise.all(ids.map((oneId) => removeShoppingItem(oneId)));
    } catch (e) {
      alert(e.message);
      setOrders(old); 
    }
  };


  const handleClearAll = async () => {
    const old = orders;

    setOrders([]);

    if (!token) return;

    try {
      await clearShoppingList();
    } catch (e) {
      alert(e.message);
      setOrders(old); 
    }
  };

  return (
    <div className="page-shell">
      <div className="page-shell-inner">
        <h1 className="page-title">Orders / shopping list</h1>
        <p className="page-subtitle">
          This page collects the ingredients you chose to order from recipes,
          pantry, or the meal planner. Use it with Lebanese delivery apps like
          Toters.
        </p>

        <div className="card" style={{ marginBottom: "1.2rem" }}>
          <p style={{ marginBottom: "0.5rem" }}>
            Open Toters:{" "}
            <a
              href="https://www.totersapp.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--lebanese-red)" }}
            >
              www.totersapp.com
            </a>
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Use this list while ordering ingredients from Toters or any local
            Lebanese app.
          </p>
        </div>

        {uiOrders.length === 0 && (
          <p className="page-subtitle">
            Your shopping list is empty. Add items from a recipe, My pantry, or
            the meal planner.
          </p>
        )}

        {uiOrders.length > 0 && (
          <>
            <div style={{ marginBottom: "0.8rem" }}>
              <button
                type="button"
                className="secondary-btn"
                onClick={handleClearAll}
              >
                Clear list
              </button>
            </div>

            {uiOrders.map((item) => (
              <OrderListItem
                key={item.id}
                item={item}
                onRemove={() => handleRemoveOne(item)}
              />
            ))}
          </>
        )}

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
          <Link to="/pantry" className="secondary-btn">
            Go to My pantry
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
