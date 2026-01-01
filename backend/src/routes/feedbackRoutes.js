const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// POST feedback (guest or logged-in)
router.post("/", async (req, res) => {
  const { name, email, message, user_id } = req.body;

  if (!name || !message) {
    return res
      .status(400)
      .json({ ok: false, message: "Name and message are required" });
  }

  try {
    await pool.query(
      `INSERT INTO feedback (name, email, message, user_id)
       VALUES (?, ?, ?, ?)`,
      [name.trim(), email || null, message.trim(), user_id || null]
    );

    res.json({ ok: true, message: "Feedback sent" });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

module.exports = router;
