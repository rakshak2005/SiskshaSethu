
import mongoose from "mongoose";

const scholarshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  provider: String,

  source: {
    type: String,
    required: true
  },

  applyUrl: {
    type: String,
    required: true,
    unique: true
  },

  eligibility: String,
  amount: String,

  deadline: Date,

  status: {
    type: String,
    enum: ["active", "expired"],
    default: "active"
  },

  fetchedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model("Scholarship", scholarshipSchema);
