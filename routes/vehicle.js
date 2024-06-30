const express = require("express");
const vehicleRouter = express.router();

const vehicleModel = require("../models/vehicleModel.js", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a vehicle
vehicleRouter.post("/", async (req, res) => {
  const newVehicle = new vehicleModel(req.body);

  try {
    const vehicle = await newVehicle.save();
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all vehicles
customerRouter.get("/", async (req, res) => {
  try {
    let owner_id = req.query.owner_id;
    if (owner_id) {
      const vehicles = await vehicleModel.find({ owner_id });
      res.json(vehicles);
    } else {
      const vehicles = await vehicleModel.find();
      res.json(vehicles);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a vehicle by ID
customerRouter.get("/:id", async (req, res) => {
  try {
    const vehicle = await vehicleModel.findById(req.params.id);
    if (!vehicle)
      return res.status(404).json({ message: "Vehicle not found" });
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a vehicle
customerRouter.put("/:id", async (req, res) => {
  try {
    const vehicle = await vehicleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!vehicle)
      return res.status(404).json({ message: "Vehicle not found" });
    res.json(vehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a vehicle
customerRouter.delete("/:id", async (req, res) => {
  try {
    const vehicle = await vehicleModel.findByIdAndDelete(req.params.id);
    if (!vehicle)
      return res.status(404).json({ message: "Vehicle not found" });
    res.json({ message: "Vehicle deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = customerRouter;
