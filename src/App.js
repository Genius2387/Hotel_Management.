import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Rooms from "./components/Rooms.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Booking from "./components/Booking.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
