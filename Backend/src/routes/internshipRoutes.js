import express from "express";
import Internship from "../models/internship.js";

const router = express.Router();


router.get("/active", async (req, res) => {
  try {
    const internships = await Internship.find({ status: "active" })
      .sort({ createdAt: -1 });

    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: "Error fetching internships" });
  }
});

export default router;
