import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Homepage from "./Pages/HomePage";
import Projects from "./Projects/Projects";
import Demo from "./Pages/Demo";
import AboutUs from "./Pages/AboutUs";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />

          <Route path="/Homepage" element={<Homepage />} />

          <Route path="/Projects" element={<Projects />} />

          <Route path="/Demo" element={<Demo />} />

          <Route path="/AboutUs" element={<AboutUs />} />

          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
