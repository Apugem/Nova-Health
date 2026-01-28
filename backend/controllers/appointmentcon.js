const Appointment = require("../models/Appoinments");

exports.createAppointment = async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.json(appointment);
};

// exports.getAppointments = async (req, res) => {
//   const appointments = await Appointment.find()
//     .populate("patient")
//     .populate("doctor");
//   res.json(appointments);
// };

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json(err.message);
  }
};