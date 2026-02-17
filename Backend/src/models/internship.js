import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  company: {
    type: String,
    required: true
  },

  source: {
    type: String, 
    required: true
  },

  applyUrl: {
    type: String,
    required: true
  },

  location: String,
  duration: String,
  stipend: String,

  deadline: Date,

  status: {
    type: String,
    enum: ["active", "expired"],
    default: "active"
  },

  lastChecked: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

const Internship =
  mongoose.models.Internship ||
  mongoose.model("Internship", internshipSchema);

export default Internship;
