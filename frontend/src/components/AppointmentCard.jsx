export default function AppointmentCard({ data }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
      <p><b>Patient:</b> {data.patient?.name}</p>
      <p><b>Doctor:</b> {data.doctor?.name}</p>
      <p><b>Status:</b> {data.status}</p>
    </div>
  );
}