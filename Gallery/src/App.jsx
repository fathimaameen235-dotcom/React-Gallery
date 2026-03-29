import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"; // 🔥 மாற்றம் இங்க
import Navbar from "./Pages/Navbar";

import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

import "./App.css";

function App() {
  return (
    <HashRouter> {/* 🔥 BrowserRouter → HashRouter */}
      <div className="app">

        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </HashRouter>
  );
}

export default App;