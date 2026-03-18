"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./Experience.css";

const experiences = [
  {
    role: { en: "Senior Frontend Engineer", es: "Ingeniero Frontend Senior" },
    company: "ITGlobers",
    period: { en: "Nov 2022 - Present", es: "Nov 2022 - Presente" },
    description: {
      en: "Leading both new implementations and ongoing IT support for major B2B and B2C e-commerce platforms using VTEX IO, React, Next.js, and TypeScript. Continuously optimizing Core Web Vitals for international enterprise clients.",
      es: "Liderando nuevas implementaciones y soporte continuo de TI para grandes plataformas e-commerce B2B y B2C utilizando VTEX IO, React, Next.js y TypeScript. Optimizando continuamente los Core Web Vitals para clientes empresariales internacionales."
    },
    tech: ["VTEX IO", "React", "Next.js", "TypeScript", "GraphQL", "Jest", "Testing Library"]
  },
  {
    role: { en: "SSR Frontend Developer", es: "Desarrollador Frontend SSR" },
    company: "Ecomsur-Infracomerce",
    period: { en: "2021 - 2022", es: "2021 - 2022" },
    description: {
      en: "Developed and deployed robust custom UI components focused on high conversion rates. Led the frontend development of comprehensive digital storefronts.",
      es: "Desarrollo y despliegue de componentes UI personalizados y robustos enfocados en altas tasas de conversión. Lideré el desarrollo frontend de escaparates digitales completos."
    },
    tech: ["React", "VTEX IO", "Node.js", "GraphQL"]
  },
  {
    role: { en: "Full stack Developer", es: "Desarrollador Full Stack" },
    company: "Academlo",
    period: { en: "2018 - 2021", es: "2018 - 2021" },
    description: {
      en: "Created dynamic and interactive web experiences leveraging modern CSS practices, complex integrated animations, and fully responsive layouts.",
      es: "Creación de experiencias web dinámicas e interactivas aprovechando prácticas modernas de CSS, complejas animaciones integradas y diseños completamente responsivos."
    },
    tech: ["JavaScript", "HTML/CSS", "GSAP", "Node.js", "React"]
  }
];

export default function Experience() {
  const { language } = useLanguage();

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
          {language === 'en' ? "Where I've Worked" : "Dónde He Trabajado"}
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
                <h3 className="timeline-role">{exp.role[language]}</h3>
                <span className="timeline-period">{exp.period[language]}</span>
              </div>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-description">{exp.description[language]}</p>
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
