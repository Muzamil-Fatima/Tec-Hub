import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import LandingPage from "./pages/Home/LandingPage";
import AboutUs from "./pages/About/AboutUs";
import ContactInfo from "./pages/ContactUs/ContactInfo";
import Opportunity from "./pages/Internship/Opportunity";
function App() {
  return (
    <>
      <div className="text-black bg-white font">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={AboutUs} />
          <Route path="/contact" element={<ContactInfo />} />
          <Route path="/internship" element={<Opportunity />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
