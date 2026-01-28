const express = require("express");
const {
  createAppointment,
  getAppointments
} = require("../controllers/appointmentcon");

const router = express.Router();

router.get("/", getAppointments);
router.post("/", createAppointment);

module.exports = router;