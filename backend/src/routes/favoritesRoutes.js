const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const auth = require("../middleware/authMiddleware");

// GET my favorites (returns recipe_id list)
router.get("/", auth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT recipe_id FROM favorites WHERE user_id = ? ORDER BY created_at DESC",
      [req.user.id]
    );
    res.json({ ok: true, favorites: rows.map((r) => r.recipe_id) });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});


// POST add favorite
router.post("/", auth, async (req, res) => {
  const { recipe_id } = req.body;
  if (!recipe_id) {
    return res.status(400).json({ ok: false, message: "recipe_id required" });
  }

  try {
    // INSERT
    await pool.query(
      "INSERT IGNORE INTO favorites (user_id, recipe_id) VALUES (?, ?)",
      [req.user.id, recipe_id]
    );

    // PROOF TEST: read back immediately from DB (same connection)
    const [rows] = await pool.query(
      "SELECT user_id, recipe_id FROM favorites WHERE user_id = ? ORDER BY created_at DESC",
      [req.user.id]
    );

    // return recipe_id list
    res.json({ ok: true, favorites: rows.map(r => r.recipe_id) });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});


// DELETE remove favorite
router.delete("/:recipeId", auth, async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM favorites WHERE user_id = ? AND recipe_id = ?",
      [req.user.id, req.params.recipeId]
    );
    res.json({ ok: true, message: "Removed from favorites" });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

module.exports = router;
