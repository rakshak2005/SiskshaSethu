import express from "express";
import cors from "cors";
import cron from "node-cron";
import mongoose from "mongoose";
import dotenv from "dotenv";

import internshipRoutes from "./src/routes/internshipRoutes.js";
import scholarshipRoutes from "./src/routes/scholarshipRoutes.js";

import { fetchPublicInternships } from "./src/services/fetchers/aicteFetcher.js";
import { fetchVTUInternships } from "./src/services/fetchers/vtufetcher.js";
import { fetchFreshersworldInternships } from "./src/services/fetchers/freshersworldFetcher.js";
import { processInternships } from "./src/services/processors/internshipProcessor.js";
import { expireOldInternships } from "./src/services/scheduler/expiryjob.js";

import { fetchStaticScholarships } from "./src/services/fetchers/fetchStaticScholarships.js";
import { fetchNSPScholarships } from "./src/services/fetchers/nspFetcher.js";
import { fetchAICTEFellowships } from "./src/services/fetchers/aicteFellowshipFetcher.js";
import { processScholarships } from "./src/services/processors/scholarshipProcessor.js";
import { expireOldScholarships } from "./src/services/scheduler/scholarshipExpiryJob.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection failed:", err));

app.use("/api/internships", internshipRoutes);
app.use("/api/scholarships", scholarshipRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Siksha Sethu backend is running" });
});

cron.schedule("* * * * *", async () => {
  console.log("Updating internships and scholarships...");

  try {
    const aicteData = await fetchPublicInternships(1);
    if (aicteData.length) await processInternships(aicteData);

    const vtuData = await fetchVTUInternships(1);
    if (vtuData.length) await processInternships(vtuData);

    const freshersData = await fetchFreshersworldInternships();
    if (freshersData.length) await processInternships(freshersData);

    await expireOldInternships();

    const staticScholarships = await fetchStaticScholarships();
    if (staticScholarships.length) await processScholarships(staticScholarships);

    const nspData = await fetchNSPScholarships();
    if (nspData.length) await processScholarships(nspData);

    const fellowshipData = await fetchAICTEFellowships();
    if (fellowshipData.length) await processScholarships(fellowshipData);

    await expireOldScholarships();

    console.log("Update completed successfully");
  } catch (error) {
    console.error("Update failed:", error.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
