import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">Pakistan Travels</Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link
            to="/services"
            className={loc.pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>
          <Link
            to="/book"
            className={loc.pathname === "/book" ? "active" : ""}
          >
            Booking
          </Link>
          <Link
            to="/contact"
            className={loc.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>

        </nav>

        <div className="nav-actions">
          <Link className="btn-outline" to="/book">Book</Link>
          <button
            className="hamburger"
            onClick={() => setOpen(s => !s)}
            aria-label="Menu"
          >
            <motion.span animate={{ rotate: open ? 45 : 0 }} className="ham-line" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="ham-line" />
            <motion.span animate={{ rotate: open ? -45 : 0 }} className="ham-line" />
          </button>
        </div>
      </div>
    </header>
  );
}
