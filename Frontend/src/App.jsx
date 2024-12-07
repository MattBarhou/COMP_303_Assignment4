import Homepage from "../components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import DonationHistory from "../components/DonationHistory";
import ScheduleDonation from "../components/ScheduleDonation";
import DonorDetails from "../components/DonorDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/main" element={<Navbar />} />
        <Route path="/donor-details" element={<DonorDetails />} />
        <Route path="/schedule-donation" element={<ScheduleDonation />} />
        <Route path="/donation-history" element={<DonationHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
