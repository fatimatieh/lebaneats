const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");
const authMiddlewareModule = require("../middleware/authMiddleware.js");
const authMiddleware =
  authMiddlewareModule.default ||
  authMiddlewareModule.authMiddleware ||
  authMiddlewareModule;

const router = express.Router();


router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // simple validation
    if (!name || !email || !password) {
      return res.status(400).json({ ok: false, message: "Please fill all fields." });
    }

    // check if user already exists
    const [existing] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);
    if (existing.length > 0) {
      return res.status(409).json({ ok: false, message: "Email already exists." });
    }

    // hash password
    const hashed = await bcrypt.hash(password, 10);

    // save user (store hashed password in `password`)
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email, hashed]
    );

    return res.json({ ok: true, message: "Account created ✅", userId: result.insertId });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ ok: false, message: "Please fill all fields." });
    }

    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(401).json({ ok: false, message: "Invalid email or password." });
    }

    const user = rows[0];

    // compare password with hashed password stored in DB
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.status(401).json({ ok: false, message: "Invalid email or password." });
    }

    // create token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      ok: true,
      message: "Login successful ✅",
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  }
});


router.get("/me", authMiddleware, async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT id, name, email FROM users WHERE id = ?", [
      req.user.id
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ ok: false, message: "User not found" });
    }
    return res.json({ ok: true, user: rows[0] });
  } catch (err) {
    return res.status(500).json({ ok: false, message: err.message });
  }
});

module.exports = router;
