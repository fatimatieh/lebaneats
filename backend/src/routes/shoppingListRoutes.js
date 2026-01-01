const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const auth = require("../middleware/authMiddleware");

//GET all shopping list items for logged-in user
router.get("/", auth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT id, item_name, quantity, from_recipe_name, created_at
       FROM shopping_list
       WHERE user_id = ?
       ORDER BY id DESC`,
      [req.user.id]
    );
    res.json({ ok: true, items: rows });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

//POST add one item
router.post("/", auth, async (req, res) => {
  const { item_name, quantity, from_recipe_name } = req.body;

  if (!item_name || !item_name.trim()) {
    return res.status(400).json({ ok: false, message: "item_name is required" });
  }

  try {
    const name = item_name.trim();
    const qty = (quantity || "").toString().trim();
    const fromName = (from_recipe_name || "").toString().trim();

    const [result] = await pool.query(
      `INSERT INTO shopping_list (user_id, item_name, quantity, from_recipe_name)
       VALUES (?, ?, ?, ?)`,
      [req.user.id, name, qty, fromName]
    );

    res.json({
      ok: true,
      item: {
        id: result.insertId,
        item_name: name,
        quantity: qty,
        from_recipe_name: fromName,
      },
    });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

//POST add MANY items at once (for "Generate shopping list" / "Order missing")
router.post("/bulk", auth, async (req, res) => {
  const { items } = req.body; 

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ ok: false, message: "items array is required" });
  }

  try {
   
    const cleaned = items
      .map((x) => ({
        item_name: (x.item_name || x.name || "").toString().trim(),
        quantity: (x.quantity || "").toString().trim(),
        from_recipe_name: (x.from_recipe_name || x.fromRecipeName || "").toString().trim(),
      }))
      .filter((x) => x.item_name);

    if (cleaned.length === 0) {
      return res.status(400).json({ ok: false, message: "No valid items to insert" });
    }

    const values = cleaned.map((x) => [req.user.id, x.item_name, x.quantity, x.from_recipe_name]);

    await pool.query(
      `INSERT INTO shopping_list (user_id, item_name, quantity, from_recipe_name)
       VALUES ?`,
      [values]
    );

    res.json({ ok: true, message: "Items added" });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

//DELETE one item by id
router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query(
      "DELETE FROM shopping_list WHERE id = ? AND user_id = ?",
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

//DELETE clear entire list
router.delete("/", auth, async (req, res) => {
  try {
    await pool.query("DELETE FROM shopping_list WHERE user_id = ?", [req.user.id]);
    res.json({ ok: true, message: "Shopping list cleared" });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

module.exports = router;
