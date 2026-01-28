import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import BookAppointment from "./pages/Bookappoinment.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Login />
      <BookAppointment />
      <Dashboard />
    </>
  );
}

export default App;