const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./config/db");
const authRoutes = require("./routes/authRoutes.js");
const favoritesImported = require("./routes/favoritesRoutes.js"); 
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

app.use(cors());
app.use(express.json());

pool.query("SELECT DATABASE() AS db")
  .then(([r]) => console.log("Connected DB:", r[0].db))
  .catch((e) => console.log("DB name check failed:", e.message));


const favoritesRoutes =
  typeof favoritesImported === "function"
    ? favoritesImported
    : favoritesImported?.default
    ? favoritesImported.default
    : favoritesImported?.router
    ? favoritesImported.router
    : null;

if (!favoritesRoutes || typeof favoritesRoutes !== "function") {
  console.error(
    "❌ favoritesRoutes is NOT a router function. Check exports in favoritesRoutes.js"
  );
  process.exit(1);
}


const pantryImported = require("./routes/pantryRoutes.js");

console.log("pantryRoutes typeof:", typeof pantryImported);
console.log(
  "pantryRoutes keys:",
  pantryImported && typeof pantryImported === "object"
    ? Object.keys(pantryImported)
    : "no keys"
);

const pantryRoutes =
  typeof pantryImported === "function"
    ? pantryImported
    : pantryImported?.default
    ? pantryImported.default
    : pantryImported?.router
    ? pantryImported.router
    : null;

if (!pantryRoutes || typeof pantryRoutes !== "function") {
  console.error(
    "pantryRoutes is NOT a router function. Check exports in pantryRoutes.js"
  );
  process.exit(1);
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Backend is running ✅" });
});

app.get("/api/db-test", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    res.json({ ok: true, db: "connected", result: rows[0].result });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/favorites", favoritesRoutes);
app.use("/api/meal-plans", require("./routes/mealPlansRoutes"));
app.use("/api/pantry", pantryRoutes);
app.use("/api/shopping-list", require("./routes/shoppingListRoutes"));
app.use("/api/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
