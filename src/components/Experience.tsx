"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "ITGlobers",
    period: "Nov 2022 - Present",
    description: "Leading both new implementations and ongoing IT support for major B2B and B2C e-commerce platforms using VTEX IO, React, Next.js, and TypeScript. Continuously optimizing Core Web Vitals for international enterprise clients.",
    tech: ["VTEX IO", "React", "Next.js", "TypeScript", "GraphQL"," Jest","Testing Library"]
  },
  {
    role: "SSR Frontend Developer",
    company: "Ecomsur-Infracomerce",
    period: "2021 - 2022",
    description: "Developed and deployed robust custom UI components focused on high conversion rates. Led the frontend development of comprehensive digital storefronts.",
    tech: ["React", "VTEX IO", "Node.js", "GraphQL"]
  },
  {
    role: "Full stack Developer",
    company: "Academlo",
    period: "2018 - 2021",
    description: "Created dynamic and interactive web experiences leveraging modern CSS practices, complex integrated animations, and fully responsive layouts.",
    tech: ["JavaScript", "HTML/CSS", "GSAP", "Node.js","React"]
  }
];

export default function Experience() {
  return (
    <section className="experience container" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <Briefcase className="section-icon" /> 
          Where I've Worked
        </h2>
      </motion.div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <h3 className="timeline-role">{exp.role}</h3>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-tech">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
