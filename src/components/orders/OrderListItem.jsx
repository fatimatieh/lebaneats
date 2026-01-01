import React from "react";

function OrderListItem({ item, onRemove }) {
  const canRemove = typeof onRemove === "function" && item?.id;

  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.7rem",
        gap: "0.8rem",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 600 }}>{item.name}</div>

        {item.quantity && (
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Quantity: {item.quantity}
          </div>
        )}

        {item.fromRecipeName && (
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            From: {item.fromRecipeName}
          </div>
        )}
      </div>

      <button
        type="button"
        className="secondary-btn"
        onClick={onRemove}
        disabled={!canRemove}
        title={!canRemove ? "Remove not available" : "Remove item"}
        style={{ whiteSpace: "nowrap" }}
      >
        Remove
      </button>
    </div>
  );
}

export default OrderListItem;
