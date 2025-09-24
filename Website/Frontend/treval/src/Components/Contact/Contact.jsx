import React from "react";
import { motion } from "framer-motion";
import "../Contact/Contact.css"


export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="contact-header">
                    <h2>Get in Touch</h2>
                    <p>Got a question or need help planning your trip? Just fill out the form or contact us using the details below.</p>
                </motion.div>
                <div className="contact-content">
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="contact-details">
                        <h3>Contact Info</h3>
                        <p><strong>Email:</strong>info@paktravels.com</p>
                        <p><strong>Phone:</strong> +92 330 5277853</p>
                        <p><strong>Address:</strong> Islamabad, Pakistan</p>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}