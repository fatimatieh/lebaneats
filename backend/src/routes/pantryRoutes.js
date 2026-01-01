const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const auth = require("../middleware/authMiddleware");

//GET all pantry items for logged-in user
router.get("/", auth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, item_name, created_at FROM pantry_items WHERE user_id = ? ORDER BY id DESC",
      [req.user.id]
    );
    res.json({ ok: true, items: rows });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

//POST add one pantry item
router.post("/", auth, async (req, res) => {
  const { item_name } = req.body;

  if (!item_name || !item_name.trim()) {
    return res.status(400).json({ ok: false, message: "item_name is required" });
  }

  try {
    // prevent duplicates per user (case-insensitive)
    const name = item_name.trim();
    const [exists] = await pool.query(
      "SELECT id FROM pantry_items WHERE user_id = ? AND LOWER(item_name) = LOWER(?) LIMIT 1",
      [req.user.id, name]
    );

    if (exists.length) {
      return res.status(409).json({ ok: false, message: "Item already exists in pantry" });
    }

    const [result] = await pool.query(
      "INSERT INTO pantry_items (user_id, item_name) VALUES (?, ?)",
      [req.user.id, name]
    );

    res.json({
      ok: true,
      item: { id: result.insertId, item_name: name }
    });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

//DELETE one pantry item by id (only if belongs to user)
router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query(
      "DELETE FROM pantry_items WHERE id = ? AND user_id = ?",
      [id, req.user.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ ok: false, message: "Item not found" });
    }

    res.json({ ok: true, message: "Item removed" });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

//DELETE clear all pantry items
router.delete("/", auth, async (req, res) => {
  try {
    await pool.query("DELETE FROM pantry_items WHERE user_id = ?", [req.user.id]);
    res.json({ ok: true, message: "Pantry cleared" });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

module.exports = router;
