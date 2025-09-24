import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    title: "Intercity Rides",
    desc: "Comfortable and safe trips between cities.",
    routes: [
      "Lahore ↔ Islamabad",
      "Karachi ↔ Hyderabad",
      "Islamabad ↔ Murree",
      "Peshawar ↔ Swat",
      "Multan ↔ Bahawalpur",
      "Faisalabad ↔ Lahore",
      "Quetta ↔ Karachi",
      "Rawalpindi ↔ Muzaffarabad",
      "Sialkot ↔ Lahore",
      "Gujranwala ↔ Islamabad",
    ],
  },
  {
    id: 2,
    title: "Tour Packages",
    desc: "Curated tours: mountains, heritage, and coastal escapes.",
    routes: [
      "Hunza Valley (Karimabad, Attabad Lake, Passu Cones)",
      "Skardu (Shangrila Lake, Deosai National Park, Shigar Fort)",
      "Swat Valley (Malam Jabba, Mingora, Kalam)",
      "Murree & Galiyat (Patriata, Nathiagali, Ayubia)",
      "Fairy Meadows & Nanga Parbat Trek",
      "Lahore Heritage (Badshahi Mosque, Lahore Fort, Shalimar Gardens)",
      "Islamabad & Margalla Hills (Daman-e-Koh, Monal, Trail 5)",
      "Karachi Coastal Tour (Clifton Beach, Hawksbay, Manora Island)",
      "Thar Desert Safari (Mithi, Nagarparkar, Desert Festival)",
      "Cholistan Desert & Derawar Fort",
    ],
  },
  {
    id: 3,
    title: "Custom Itineraries",
    desc: "Built to your pace and interest.",
    routes: [
      "Northern Peaks Explorer (Hunza, Skardu, Fairy Meadows)",
      "Cultural Heritage Trail (Lahore, Multan, Uch Sharif)",
      "Sufi & Spiritual Journey (Sehwan Sharif, Data Darbar, Shah Rukn-e-Alam)",
      "Family-Friendly Retreats (Murree, Nathia Gali, Ayubia)",
      "Beach & Coastal Escape (Karachi, Gwadar, Ormara)",
      "Adventure Trekking (Nanga Parbat Base Camp, Rakaposhi Trek)",
      "Desert Safari (Cholistan, Thar, Derawar Fort)",
      "Historical Wonders (Taxila, Mohenjo-daro, Harappa)",
      "Honeymoon Packages (Hunza, Swat, Skardu resorts)",
      "Food & Culture Tours (Karachi street food, Lahore food street, Peshawar Qissa Khwani Bazaar)",
    ],
  },
];

export default function Services() {
  const [openId, setOpenId] = useState(null);

  const toggleService = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="services">
      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-block">
            <motion.div
              className="service-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => toggleService(service.id)}
            >
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </motion.div>

            <AnimatePresence>
              {openId === service.id && (
                <motion.div
                  className="routes-grid"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {service.routes.map((route, i) => (
                    <motion.div
                      key={i}
                      className="route-card"
                      whileHover={{ scale: 1.05 }}
                    >
                      {route}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
