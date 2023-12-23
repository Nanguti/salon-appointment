import Stylist from "../models/Stylist.js";

// Get all stylists
export const getAllStylists = async (req, res) => {
  try {
    const stylists = await Stylist.find();
    res.json(stylists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single stylist by ID
export const getStylistById = async (req, res) => {
  try {
    const stylist = await Stylist.findById(req.params.id);
    if (!stylist) {
      return res.status(404).json({ message: "Stylist not found" });
    }
    res.json(stylist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new stylist
export const createStylist = async (req, res) => {
  try {
    const newStylist = await Stylist.create(req.body);
    res.status(201).json(newStylist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a stylist by ID
export const updateStylistById = async (req, res) => {
  try {
    const updatedStylist = await Stylist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedStylist) {
      return res.status(404).json({ message: "Stylist not found" });
    }

    res.json(updatedStylist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a stylist by ID
export const deleteStylistById = async (req, res) => {
  try {
    const deletedStylist = await Stylist.findByIdAndDelete(req.params.id);

    if (!deletedStylist) {
      return res.status(404).json({ message: "Stylist not found" });
    }

    res.json({ message: "Stylist deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
