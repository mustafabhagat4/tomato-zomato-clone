const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Define Schema
const DiningOutSchema = new mongoose.Schema({}, { strict: false });
const DiningOut = mongoose.model("DiningOut", DiningOutSchema, "diningOut");

// Fetch All Dining Out Places
router.get("/", async (req, res) => {
  try {
    const diningPlaces = await DiningOut.find();
    res.json(diningPlaces);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
