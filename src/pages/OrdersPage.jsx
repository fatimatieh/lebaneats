import React from "react";
import { Link } from "react-router-dom";
import OrderListItem from "../components/orders/OrderListItem";

function OrdersPage({ orders, clearOrders }) {
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

        {orders.length === 0 && (
          <p className="page-subtitle">
            Your shopping list is empty. Add items from a recipe, My pantry, or
            the meal planner.
          </p>
        )}

        {orders.length > 0 && (
          <>
            <div style={{ marginBottom: "0.8rem" }}>
              <button
                type="button"
                className="secondary-btn"
                onClick={clearOrders}
              >
                Clear list
              </button>
            </div>
            {orders.map((item) => (
              <OrderListItem key={item.id} item={item} />
            ))}
          </>
        )}

        <div
          style={{
            marginTop: "1.4rem",
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap"
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
