"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact container" id="contact">
      <motion.div
        className="contact-content glass-panel"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-title text-gradient">Let's Work Together</h2>
        <p className="contact-description">
          I'm currently looking for new opportunities. Whether you have a question, a project proposition, or just want to say hi, my inbox is always open!
        </p>
        
        <a href="mailto:contact@example.com" className="btn btn-primary contact-btn">
          Say Hello <Mail size={18} />
        </a>
      </motion.div>

      <footer className="footer">
        <p>Built with Next.js, React, and Framer Motion.</p>
        <p>&copy; {new Date().getFullYear()} Felipe Ortiz. All rights reserved.</p>
      </footer>
    </section>
  );
}
