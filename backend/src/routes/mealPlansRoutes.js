const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const auth = require("../middleware/authMiddleware");

// GET full meal plan for current user
router.get("/", auth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT day_of_week, meal_type, recipe_id FROM meal_plans WHERE user_id = ?",
      [req.user.id]
    );

    // convert rows -> { Monday: { breakfast: "tabbouleh" }, ... }
    const mealPlan = {};
    for (const r of rows) {
      if (!mealPlan[r.day_of_week]) mealPlan[r.day_of_week] = {};
      mealPlan[r.day_of_week][r.meal_type] = r.recipe_id;
    }

    res.json({ ok: true, mealPlan });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

// PUT set ONE slot (upsert)
router.put("/", auth, async (req, res) => {
  const { day_of_week, meal_type, recipe_id } = req.body;

  if (!day_of_week || !meal_type) {
    return res
      .status(400)
      .json({ ok: false, message: "day_of_week and meal_type are required" });
  }

  try {
    // if empty => clear that slot
    if (!recipe_id) {
      await pool.query(
        "DELETE FROM meal_plans WHERE user_id = ? AND day_of_week = ? AND meal_type = ?",
        [req.user.id, day_of_week, meal_type]
      );
      return res.json({ ok: true, message: "Slot cleared" });
    }

    await pool.query(
      `INSERT INTO meal_plans (user_id, day_of_week, meal_type, recipe_id)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE recipe_id = VALUES(recipe_id)`,
      [req.user.id, day_of_week, meal_type, recipe_id]
    );

    res.json({ ok: true, message: "Meal plan saved" });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

module.exports = router;
