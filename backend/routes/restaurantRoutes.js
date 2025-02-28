const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Define Schema
const RestaurantSchema = new mongoose.Schema({}, { strict: false });
const Restaurant = mongoose.model("Restaurant", RestaurantSchema, "restaurants");

// Fetch All Restaurants
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
