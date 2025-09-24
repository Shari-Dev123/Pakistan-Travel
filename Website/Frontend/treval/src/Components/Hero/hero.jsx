import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

import HunzaImg from "../../assets/Hunza1.jpg";
import ChitralImg from "../../assets/Chitral1.jpg";
import NaltarImg from "../../assets/Naltar1.jpg";
import FairyImg from "../../assets/Fairy1.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-inner">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Explore Pakistan — Trusted Local Travel</h1>
            <p>
              Personalized trips, expert drivers, and safe journeys across every
              city and scenic route.
            </p>
            <div className="hero-cta">
              <a href="/book" className="btn">
                Start Booking
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="gallery-grid">
              <img src={HunzaImg} alt="Hunza mountains" />
              <img src={ChitralImg} alt="Chitral valley" />
              <img src={NaltarImg} alt="Naltar roadtrip" />
              <img src={FairyImg} alt="Fairy roadtrip" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
