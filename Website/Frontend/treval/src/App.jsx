import React from "react";
import { Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Services from "./Components/Services/Services.jsx";
import BookingForm from "./Components/BookingForm/BookingForm.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Contact from "./Components/Contact/Contact.jsx";

function PageWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/book" element={<PageWrapper><BookingForm /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <Services preview /> 
      <Contact />
      <section className="cta">
        <div className="container">
          <h2>Ready to Travels</h2>
          <p>Book your custom trip in a few clicks. Secure. Responsive. Friendly.</p>
          <a href="/book" className="btn">Book Now</a>
        </div>
      </section>
    </main>
  );
}
