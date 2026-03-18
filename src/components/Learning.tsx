"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./Learning.css";

const studies = [
  {
    title: { en: "English Proficiency (B2/C1)", es: "Dominio del Inglés (B2/C1)" },
    description: {
      en: "Currently taking advanced courses to achieve a C1 level, focusing on technical communication and international team collaboration.",
      es: "Actualmente tomando cursos avanzados para alcanzar el nivel C1, con enfoque en comunicación técnica y colaboración con equipos internacionales."
    }
  },
  {
    title: { en: "MuleSoft Anypoint Platform", es: "Plataforma MuleSoft Anypoint" },
    description: {
      en: "Learning how to build, deploy, and scale robust APIs and integrations using MuleSoft's enterprise-grade tools.",
      es: "Aprendiendo a construir, desplegar y escalar APIs e integraciones robustas utilizando herramientas empresariales de MuleSoft."
    }
  },
  {
    title: { en: "n8n Workflow Automation", es: "Automatización con n8n" },
    description: {
      en: "Exploring node-based workflow automation to seamlessly connect multiple services, APIs, and databases together.",
      es: "Explorando la automatización de flujos de trabajo basados en nodos para conectar múltiples servicios, APIs y bases de datos."
    }
  }
];

export default function Learning() {
  const { language } = useLanguage();

  return (
    <section className="learning container" id="learning">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <BookOpen className="section-icon" /> 
          {language === 'en' ? "Currently Learning" : "En Proceso de Estudio"}
        </h2>
      </motion.div>

      <div className="learning-grid">
        {studies.map((study, index) => (
          <motion.div
            key={index}
            className="learning-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="learning-icon-container">
              <GraduationCap size={28} className="learning-icon" />
            </div>
            <div>
              <h3 className="learning-title">{study.title[language]}</h3>
              <p className="learning-description">{study.description[language]}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
