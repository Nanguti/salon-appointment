import Salon from "../models/Salon.js";

export const getAllSalons = async (req, res) => {
  try {
    const salons = await Salon.find();
    res.json(salons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
