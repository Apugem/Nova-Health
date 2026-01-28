import { useEffect, useState } from "react";
import API from "../services/api.js";
import AppointmentCard from "../components/AppointmentCard.jsx";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    API.get("/appointments")
      .then((res) => setAppointments(res.data))
      .catch(() => alert("Error loading appointments"));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      {appointments.map((a) => (
        <AppointmentCard key={a._id} data={a} />
      ))}
    </div>
  );
}