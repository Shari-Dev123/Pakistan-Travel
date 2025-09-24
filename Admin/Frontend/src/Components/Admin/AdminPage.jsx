import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaTicketAlt,
  FaChartBar,
  FaWhatsapp,
  FaCheck,
} from "react-icons/fa";
import "./AdminPage.css";

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/bookings");
      setBookings(res.data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  const confirmBooking = async (id) => {
    try {
      await axios.put(`http://localhost:4000/api/bookings/${id}`, {
        status: "confirmed",
      });
      fetchBookings();
    } catch (err) {
      console.error("Error confirming booking:", err);
    }
  };

  const sendTicketWhatsapp = async (
    id,
    phone,
    ticketNumber,
    name,
    destination,
    date
  ) => {
    let phoneNumber = phone.replace(/\D/g, "");
    if (!phoneNumber.startsWith("92")) {
      phoneNumber = "92" + phoneNumber.replace(/^0/, "");
    }

    const message = `Hello ${name},\nYour ticket is confirmed!\nTicket Number: ${ticketNumber}\nRoute: ${destination}\nDate: ${date}`;
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");

    try {
      await axios.put(`http://localhost:4000/api/bookings/${id}`, {
        status: "sent",
      });
      fetchBookings();
    } catch (err) {
      console.error("Error updating booking to sent:", err);
    }
  };


  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter((b) => b.status === "pending").length;
  const confirmedBookings = bookings.filter((b) => b.status === "confirmed").length;
  const sentBookings = bookings.filter((b) => b.status === "sent").length;

  
  const filteredBookings =
    filter === "pending"
      ? bookings.filter((b) => b.status === "pending")
      : filter === "confirmed"
      ? bookings.filter((b) => b.status === "confirmed")
      : filter === "sent"
      ? bookings.filter((b) => b.status === "sent")
      : bookings;

  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <h2 className="logo">Admin Panel</h2>
        <ul>
          <li
            className={activeMenu === "dashboard" ? "active" : ""}
            onClick={() => {
              setActiveMenu("dashboard");
              setFilter(null);
            }}
          >
            <FaChartBar /> Dashboard
          </li>
          <li
            className={activeMenu === "bookings" ? "active" : ""}
            onClick={() => {
              setActiveMenu("bookings");
              setFilter(null);
            }}
          >
            <FaTicketAlt /> Bookings
          </li>
        </ul>
      </aside>

      <main className="admin-main">
        {activeMenu === "dashboard" && (
          <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="cards">
              <div
                className="card total"
                onClick={() => {
                  setActiveMenu("bookings");
                  setFilter(null); 
                }}
              >
                <h3>Total Bookings</h3>
                <p>{totalBookings}</p>
              </div>
              <div
                className="card pending"
                onClick={() => {
                  setActiveMenu("bookings");
                  setFilter("pending");
                }}
              >
                <h3>Pending</h3>
                <p>{pendingBookings}</p>
              </div>
              <div
                className="card confirmed"
                onClick={() => {
                  setActiveMenu("bookings");
                  setFilter("confirmed");
                }}
              >
                <h3>Confirmed</h3>
                <p>{confirmedBookings}</p>
              </div>
              <div
                className="card sent"
                onClick={() => {
                  setActiveMenu("bookings");
                  setFilter("sent");
                }}
              >
                <h3>Tickets Sent</h3>
                <p>{sentBookings}</p>
              </div>
            </div>
          </div>
        )}

        {activeMenu === "bookings" && (
          <div>
            <h2>
              {filter === "pending"
                ? "Pending Bookings"
                : filter === "confirmed"
                ? "Confirmed Bookings"
                : filter === "sent"
                ? "Tickets Sent"
                : "All Bookings"}
            </h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Route</th>
                  <th>Date</th>
                  <th>Persons</th>
                  <th>Status</th>
                  <th>Ticket Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((b) => (
                  <tr key={b._id}>
                    <td>{b.name}</td>
                    <td>{b.phone}</td>
                    <td>{b.destination}</td>
                    <td>{b.date}</td>
                    <td>{b.persons}</td>
                    <td
                      className={
                        b.status === "pending"
                          ? "status-pending"
                          : b.status === "confirmed"
                          ? "status-confirmed"
                          : b.status === "sent"
                          ? "status-sent"
                          : ""
                      }
                    >
                      {b.status}
                    </td>
                    <td>{b.ticketNumber}</td>
                    <td>
                      {b.status === "pending" ? (
                        <button
                          className="confirm-btn"
                          onClick={() => confirmBooking(b._id)}
                        >
                          <FaCheck /> Confirm
                        </button>
                      ) : b.status === "confirmed" ? (
                        <button
                          className="whatsapp-btn"
                          onClick={() =>
                            sendTicketWhatsapp(
                              b._id,
                              b.phone,
                              b.ticketNumber,
                              b.name,
                              b.destination,
                              b.date
                            )
                          }
                        >
                          <FaWhatsapp /> Send Ticket
                        </button>
                      ) : (
                        <span className="ticket-sent">Ticket Sent</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
