const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Define Schema
const NightLifeSchema = new mongoose.Schema({}, { strict: false });
const NightLife = mongoose.model("NightLife", NightLifeSchema, "nightLife");

// Fetch All Nightlife Places
router.get("/", async (req, res) => {
  try {
    const nightLifePlaces = await NightLife.find();
    res.json(nightLifePlaces);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
