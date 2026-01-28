const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: Date,
  status: {
    type: String,
    default: "Booked"
  }
});

module.exports = mongoose.model("Appointment", AppointmentSchema);