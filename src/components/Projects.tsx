"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./Projects.css";

const projects = [
  {
    title: "Tena MX",
    description: {
      en: "Continuous development and technical support for Tena's official store in Mexico. Implemented major UI/UX improvements, checkout optimization, and performance enhancements.",
      es: "Desarrollo continuo y soporte técnico para la tienda oficial de Tena en México. Implementación de mejoras de UI/UX, optimización de checkout y rendimiento."
    },
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.tena.com.mx/"
  },
  {
    title: "Saba MX",
    description: {
      en: "Evolutionary maintenance of the Saba Mexico e-commerce platform, ensuring high availability and optimal load times during massive promotional campaigns.",
      es: "Mantenimiento evolutivo de la plataforma e-commerce de Saba México, garantizando alta disponibilidad y tiempos de carga óptimos durante campañas masivas."
    },
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.saba.com.mx/"
  },
  {
    title: "Club Softys PE",
    description: {
      en: "Frontend support and critical bug resolution for Softys Peru's B2C portal. Created custom components for special promotions and complex catalogs.",
      es: "Soporte frontend y resolución de bugs críticos en el portal B2C de Softys Perú. Creación de componentes personalizados para promociones y catálogos."
    },
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.clubsoftys.com.pe/"
  },
  {
    title: "Megatiendas Colombia",
    description: {
      en: "Optimization of the Megatiendas digital ecosystem. Architectural frontend improvements to streamline grocery shopping and product search features.",
      es: "Optimización del ecosistema digital de Megatiendas. Mejoras arquitectónicas en el frontend para agilizar la compra y búsqueda de productos de supermercado."
    },
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.megatiendas.co/"
  },
  {
    title: "Elite Professional PE",
    description: {
      en: "Support and development of new B2B features for Elite Professional in Peru. Implemented highly customized automated quoting workflows.",
      es: "Soporte y desarrollo de nuevas funcionalidades B2B para Elite Professional en Perú. Implementación de flujos de cotización personalizados."
    },
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.eliteprofessional.com.pe/"
  },
  {
    title: "Ortopédicos Futuro Colombia",
    description: {
      en: "Comprehensive maintenance and refactoring of legacy code for the Ortopédicos Futuro online store, significantly boosting Lighthouse scores and SEO metrics.",
      es: "Mantenimiento integral y refactorización de código legado para la tienda online de Ortopédicos Futuro, mejorando la puntuación de Lighthouse y SEO."
    },
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.ortopedicosfuturo.com/"
  },
  {
    title: "Pandora Colombia",
    description: {
      en: "Specialized support during high-traffic events (Cyber Monday, Black Friday). Provided rapid interface adjustments and guaranteed transactional stability.",
      es: "Soporte especializado durante eventos de alto tráfico (Cyber Monday, Black Friday). Proporcionado ajustes rápidos de interfaz y garantizado estabilidad transaccional."
    },
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.pandora.com.co/"
  },
  {
    title: "Casaideas Colombia",
    description: {
      en: "Evolutionary maintenance of the Casaideas storefront. Developed new visual blocks integrated directly with the CMS for easier content management.",
      es: "Mantenimiento evolutivo del storefront de Casaideas. Desarrollado nuevos bloques visuales directamente integrados con el CMS para fácil gestión del contenido."
    },
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.casaideas.com.co/"
  }
];

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section className="projects container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <FolderGit2 className="section-icon" /> 
          {language === 'en' ? "Featured Projects" : "Proyectos Destacados"}
        </h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-header">
              <FolderGit2 size={40} className="project-folder-icon" />
              <div className="project-links">
                {project.live !== "#" && (
                  <a href={project.live} className="project-link" aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description[language]}</p>
            
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-item">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
