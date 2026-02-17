import express from "express";
import Scholarship from "../models/scholarship.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const scholarships = await Scholarship.find({ status: "active" })
    .sort({ createdAt: -1 });

  res.json(scholarships);
});

export default router;
