import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./BookingForm.css";

export default function BookingForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const initialDestination = queryParams.get("destination") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: initialDestination,
    date: "",
    persons: 1,
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => setMsg(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;
    if (name === "persons" && value < 1) return;

    setForm((prev) => ({
      ...prev,
      [name]: name === "persons" ? Number(value) : value, // persons always numeric
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    try {
      await axios.post("http://localhost:4000/api/bookings", {
        ...form,
        destination: form.destination.trim(), // normalize
      });

      setMsg({
        type: "success",
        text: "Your booking is confirmed. Check your phone for details.",
      });

      setForm({
        name: "",
        phone: "",
        destination: initialDestination,
        date: "",
        persons: 1,
      });
    } catch (err) {
      setMsg({
        type: "error",
        text: err?.response?.data?.message || "Booking failed. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="booking container">
      <h2>Book Your Trip</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={form.destination}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          min={today}
          required
        />

        <input
          type="number"
          name="persons"
          min="1"
          value={form.persons}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Confirm Booking"}
        </button>
      </form>

      {msg && <p className={`form-msg ${msg.type}`}>{msg.text}</p>}
    </section>
  );
}
