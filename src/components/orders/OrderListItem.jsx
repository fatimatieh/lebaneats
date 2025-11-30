import React from "react";

function OrderListItem({ item }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.7rem"
      }}
    >
      <div>
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
    </div>
  );
}

export default OrderListItem;
