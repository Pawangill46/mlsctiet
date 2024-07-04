import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import LandingPage from "./Pages/LandingPage";
import Alumni from "./Pages/Alumni";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavbarI from "./Components/NavbarI/NavbarI";

function App() {
  return (
    <Router>
      {/* <NavbarI /> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/events" element={<Events />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/alumni" element={<Alumni />} />
    
      </Routes>
    </Router>
  );
}

export default App; 