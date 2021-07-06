// DB Schema 
const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Enter full names",
  },
  email: {
    type: String,
  },
  gender: {
    type: [
      {
        type: String,
        enum: ["male", "female"],
      },
    ],
  },
  about: {
    type: String,
    required: "Enter about you",
  },
  role: {
    type: String,
  },
  company: {
    type: String,
  },
  birth_date: {
    type: Date,
    default: Date.now,
  },
  applied_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "dropped", "passed"],
      },
    ],
    default: ["pending"],
  },
});

module.exports = mongoose.model("Applicants", applicantSchema);
