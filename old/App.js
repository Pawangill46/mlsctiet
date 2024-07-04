import About2 from "./Pages/AboutUs2/About2";
import Community from "./Pages/Community";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import LandingPage from "./Pages/LandingPage";

import Projects from "./Pages/Projects";
import Sponsors from "./Pages/Sponsors";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Pages/Errorpage/Errorpage";
import NavbarI from "./Components/NavbarI/NavbarI";
import Chatbot from "./Components/Chatbot/chatbot";

function App() {
  return (
    <Router>
      <NavbarI />
      <Chatbot/>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
				<Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
				<Route path="/gallery" element={<Gallery />} />
        
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/about" element={<About2 />} />
        <Route path="*" element={<Error />} />
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App;
