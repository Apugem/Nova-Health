import { useState } from "react";
import API from "../services/api.js";

export default function BookAppointment() {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const bookAppointment = async () => {
    try {
      await API.post("/appointments", {
        patient,
        doctor,
        date
      });
      alert("Appointment booked");
    } catch {
      alert("Booking failed");
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <input
        placeholder="Patient ID"
        onChange={(e) => setPatient(e.target.value)}
      />

      <br />

      <input
        placeholder="Doctor ID"
        onChange={(e) => setDoctor(e.target.value)}
      />

      <br />

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <br />

      <button onClick={bookAppointment}>Book</button>
    </div>
  );
}