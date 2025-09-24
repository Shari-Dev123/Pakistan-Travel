import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Destinations.css";

// Import compressed WebP versions
import Chitral1Webp from "../../assets/compressed/Chitral1.webp";
import Chitral2Webp from "../../assets/compressed/Chitral2.webp";
import Fairy1Webp from "../../assets/compressed/Fairy1.webp";
import Fairy2Webp from "../../assets/compressed/Fairy2.webp";
import Gwadar1Webp from "../../assets/compressed/Gwadar1.webp";
import Gwadar2Webp from "../../assets/compressed/Gwadar2.webp";
import Hunza1Webp from "../../assets/compressed/Hunza1.webp";
import Hunza2Webp from "../../assets/compressed/Hunza2.webp";
import Karimabad1Webp from "../../assets/compressed/Karimabad1.webp";
import Karimabad2Webp from "../../assets/compressed/Karimabad2.webp";
import Murree1Webp from "../../assets/compressed/Murree1.webp";
import Murree2Webp from "../../assets/compressed/Murree2.webp";
import Naltar1Webp from "../../assets/compressed/Naltar1.webp";
import Naltar2Webp from "../../assets/compressed/Naltar2.webp";
import Ormara1Webp from "../../assets/compressed/Ormara1.webp";
import Ormara2Webp from "../../assets/compressed/Ormara2.webp";
import Ratti1Webp from "../../assets/compressed/Ratti1.webp";
import Ratti2Webp from "../../assets/compressed/Ratti2.webp";
import Skardu1Webp from "../../assets/compressed/Skardu1.webp";
import Skardu2Webp from "../../assets/compressed/Skardu2.webp";
import Swat1Webp from "../../assets/compressed/Swat1.webp";
import Swat2Webp from "../../assets/compressed/Swat2.webp";

// Import original JPGs (for fallback)
import Chitral1Jpg from "../../assets/Chitral1.jpg";
import Chitral2Jpg from "../../assets/Chitral2.jpg";
import Fairy1Jpg from "../../assets/Fairy1.jpg";
import Fairy2Jpg from "../../assets/Fairy2.jpg";
import Gwadar1Jpg from "../../assets/Gwadar1.jpg";
import Gwadar2Jpg from "../../assets/Gwadar2.jpg";
import Hunza1Jpg from "../../assets/Hunza1.jpg";
import Hunza2Jpg from "../../assets/Hunza2.jpg";
import Karimabad1Jpg from "../../assets/Karimabad1.jpg";
import Karimabad2Jpg from "../../assets/Karimabad2.jpg";
import Murree1Jpg from "../../assets/Murree1.jpg";
import Murree2Jpg from "../../assets/Murree2.jpg";
import Naltar1Jpg from "../../assets/Naltar1.jpg";
import Naltar2Jpg from "../../assets/Naltar2.jpg";
import Ormara1Jpg from "../../assets/Ormara1.jpg";
import Ormara2Jpg from "../../assets/Ormara2.jpg";
import Ratti1Jpg from "../../assets/Ratti1.jpg";
import Ratti2Jpg from "../../assets/Ratti2.jpg";
import Skardu1Jpg from "../../assets/Skardu1.jpg";
import Skardu2Jpg from "../../assets/Skardu2.jpg";
import Swat1Jpg from "../../assets/Swat1.jpg";
import Swat2Jpg from "../../assets/Swat2.jpg";

// Image array with proper imports
const images = [
  { src: Chitral1Webp, fallback: Chitral1Jpg, alt: "Chitral" },
  { src: Chitral2Webp, fallback: Chitral2Jpg, alt: "Chitral" },
  { src: Fairy1Webp, fallback: Fairy1Jpg, alt: "Fairy Meadows" },
  { src: Fairy2Webp, fallback: Fairy2Jpg, alt: "Fairy Meadows" },
  { src: Gwadar1Webp, fallback: Gwadar1Jpg, alt: "Gwadar" },
  { src: Gwadar2Webp, fallback: Gwadar2Jpg, alt: "Gwadar" },
  { src: Hunza1Webp, fallback: Hunza1Jpg, alt: "Hunza" },
  { src: Hunza2Webp, fallback: Hunza2Jpg, alt: "Hunza" },
  { src: Karimabad1Webp, fallback: Karimabad1Jpg, alt: "Karimabad" },
  { src: Karimabad2Webp, fallback: Karimabad2Jpg, alt: "Karimabad" },
  { src: Murree1Webp, fallback: Murree1Jpg, alt: "Murree" },
  { src: Murree2Webp, fallback: Murree2Jpg, alt: "Murree" },
  { src: Naltar1Webp, fallback: Naltar1Jpg, alt: "Naltar" },
  { src: Naltar2Webp, fallback: Naltar2Jpg, alt: "Naltar" },
  { src: Ormara1Webp, fallback: Ormara1Jpg, alt: "Ormara" },
  { src: Ormara2Webp, fallback: Ormara2Jpg, alt: "Ormara" },
  { src: Ratti1Webp, fallback: Ratti1Jpg, alt: "Ratti Gali" },
  { src: Ratti2Webp, fallback: Ratti2Jpg, alt: "Ratti Gali" },
  { src: Skardu1Webp, fallback: Skardu1Jpg, alt: "Skardu" },
  { src: Skardu2Webp, fallback: Skardu2Jpg, alt: "Skardu" },
  { src: Swat1Webp, fallback: Swat1Jpg, alt: "Swat" },
  { src: Swat2Webp, fallback: Swat2Jpg, alt: "Swat" },
];

export default function Destinations() {
  return (
    <div className="destinations">
      <div className="container">
        <div className="overlay">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Journey Through Pakistan</h1>
            <p>
              Experience the culture, landscapes, and hidden gems of every region
              with reliable travel designed just for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="img-gallery">
              {images.map((img, index) => (
                <picture key={index}>
                  <source srcSet={img.src} type="image/webp" />
                  <LazyLoadImage
                    src={img.fallback}
                    alt={img.alt}
                    loading="lazy"
                    effect="blur"
                  />
                </picture>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
