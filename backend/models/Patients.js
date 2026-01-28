const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  age: Number,
  gender: String,
  medicalHistory: String
});

module.exports = mongoose.model("Patient", PatientSchema);