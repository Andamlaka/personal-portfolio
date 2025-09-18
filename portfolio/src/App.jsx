import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";



function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/downloads" element={<h1>Downloads</h1>} />
      </Routes>
      <Footer />    
    </div>
  );
}

export default App;
