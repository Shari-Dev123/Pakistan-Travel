import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const servicesData = [
  {
    id: 1,
    title: "Intercity Rides",
    desc: "Comfortable and safe trips between cities.",
    routes: [
      { 
        name: "Islamabad ↔ Lahore",  
        pricePerPerson: 8300, 
        meals: "Breakfast", 
        img: "/Lahore-Islamabad.png" 
      },
      { 
        name: "Karachi ↔ Hyderabad", 
        pricePerPerson: 800, 
        meals: "None", 
        img: "/karachi-hyderabad.png" 
      },
      { 
        name: "Islamabad ↔ Murree", 
        pricePerPerson: 1800, 
        meals: "Breakfast", 
        img: "/Murree.png" 
      },
      { 
        name: "Peshawar ↔ Swat", 
        pricePerPerson: 6320, 
        meals: "Breakfast, Lunch", 
        img: "/Swat.png" 
      },
      { 
        name: "Multan ↔ Bahawalpur", 
        pricePerPerson: 550, 
        meals: "None", 
        img: "/Bahawalpur.png" 
      },
    ],
  },
  {
    id: 2,
    title: "Tour Packages",
    desc: "Curated tours: mountains, heritage, and coastal escapes.",
    routes: [
      { 
        name: "Hunza Valley (Karimabad, Attabad Lake, Passu Cones)", 
        pricePerPerson: 25000, 
        meals: "Breakfast, Lunch, Dinner", 
        img: "/Hunza Valley.png" 
      },
      { 
        name: "Skardu (Shangrila Lake, Deosai National Park, Shigar Fort)", 
        pricePerPerson: 30000, 
        meals: "Breakfast, Lunch, Dinner", 
        img: "/Skardu.png" 
      },
      { 
        name: "Swat Valley (Malam Jabba, Mingora, Kalam)", 
        pricePerPerson: 15000, 
        meals: "Breakfast, Lunch", 
        img: "/Kalam.png" 
      },
      { 
        name: "Murree & Galiyat (Patriata, Nathiagali, Ayubia)", 
        pricePerPerson: 12000, 
        meals: "Breakfast, Lunch", 
        img: "/Galiyat.png" 
      },
    ],
  },
  {
    id: 3,
    title: "Custom Itineraries",
    desc: "Built to your pace and interest.",
    routes: [
      { 
        name: "Northern Peaks Explorer (Hunza, Skardu, Fairy Meadows)", 
        pricePerPerson: 40000, 
        meals: "Breakfast, Lunch, Dinner", 
        img: "/hunza.png" 
      },
      { 
        name: "Cultural Heritage Trail (Lahore, Multan, Uch Sharif)", 
        pricePerPerson: 15000, 
        meals: "Breakfast, Lunch", 
        img: "/Cultural.png" 
      },
      { 
        name: "Sufi & Spiritual Journey (Sehwan Sharif, Data Darbar, Shah Rukn-e-Alam)", 
        pricePerPerson: 12000, 
        meals: "Breakfast, Lunch", 
        img: "/Sufi.png" 
      },
      { 
        name: "Family-Friendly Retreats (Murree, Nathia Gali, Ayubia)", 
        pricePerPerson: 13000, 
        meals: "Breakfast, Lunch", 
        img: "/Family.png" 
      },
    ],
  },
];

export default function Services({ preview = false }) {
  const navigate = useNavigate();
  const itemsToShow = preview ? servicesData.slice(0, 2) : servicesData;

  return (
    <section className="services">
      <div className="container">
        <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          Our Services
        </motion.h2>

        {itemsToShow.map((s) => (
          <div key={s.id} className="service-section">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>

            <div className="routes-grid">
              {(preview ? s.routes.slice(0, 2) : s.routes).map((r, i) => (
                <motion.div
                  key={i}
                  className="route-card"
                  whileHover={{ y: -6 }}
                  onClick={() =>
                    navigate(
                      `/book?destination=${encodeURIComponent(r.name)}&price=${r.pricePerPerson}`
                    )
                  }
                >
                 
                  {r.img && <img src={r.img} alt={r.name} className="route-img" />}
                  
                  <h4>{r.name}</h4>
                  <p className="price">PKR {r.pricePerPerson.toLocaleString()}</p>
                  {!preview && <p className="meals">Meals: {r.meals}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {preview && (
          <div className="see-more-wrapper">
            <button className="see-more-btn" onClick={() => navigate("/services")}>
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
