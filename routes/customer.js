const express = require("express");
const customerRouter = express.router();

const customerModel = require("../models/customerModel.js", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a customer
customerRouter.post("/", async (req, res) => {
  const newCustomer = new customerModel(req.body);

  try {
    const customer = await newCustomer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all customers
customerRouter.get("/", async (req, res) => {
  try {
    let owner_id = req.query.owner_id;
    if (owner_id) {
      const customers = await customerModel.find({ owner_id });
      res.json(customers);
    } else {
      const customers = await customerModel.find();
      res.json(customers);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a customer by ID
customerRouter.get("/:id", async (req, res) => {
  try {
    const customer = await customerModel.findById(req.params.id);
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a customer
customerRouter.put("/:id", async (req, res) => {
  try {
    const customer = await customerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });
    res.json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a customer
customerRouter.delete("/:id", async (req, res) => {
  try {
    const customer = await customerModel.findByIdAndDelete(req.params.id);
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });
    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = customerRouter;
