import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import LandingPage from "./pages/Home/LandingPage"

function App() {

  return (
    <>
    <div className="text-black bg-white font">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
    </>
  )
}

export default App
