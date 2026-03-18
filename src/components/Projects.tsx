"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "Tena MX",
    description: "Continuous development and technical support for Tena's official store in Mexico. Implemented major UI/UX improvements, checkout optimization, and performance enhancements.",
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.tena.com.mx/"
  },
  {
    title: "Saba MX",
    description: "Evolutionary maintenance of the Saba Mexico e-commerce platform, ensuring high availability and optimal load times during massive promotional campaigns.",
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.saba.com.mx/"
  },
  {
    title: "Club Softys PE",
    description: "Frontend support and critical bug resolution for Softys Peru's B2C portal. Created custom components for special promotions and complex catalogs.",
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.clubsoftys.com.pe/"
  },
  {
    title: "Megatiendas Colombia",
    description: "Optimization of the Megatiendas digital ecosystem. Architectural frontend improvements to streamline grocery shopping and product search features.",
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "#"
  },
  {
    title: "Elite Professional PE",
    description: "Support and development of new B2B features for Elite Professional in Peru. Implemented highly customized automated quoting workflows.",
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "#"
  },
  {
    title: "Ortopédicos Futuro Colombia",
    description: "Comprehensive maintenance and refactoring of legacy code for the Ortopédicos Futuro online store, significantly boosting Lighthouse scores and SEO metrics.",
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "#"
  },
  {
    title: "Pandora Colombia",
    description: "Specialized support during high-traffic events (Cyber Monday, Black Friday). Provided rapid interface adjustments and guaranteed transactional stability.",
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.pandora.com.co/"
  },
  {
    title: "Casaideas Colombia",
    description: "Evolutionary maintenance of the Casaideas storefront. Developed new visual blocks integrated directly with the CMS for easier content management.",
    tech: ["VTEX IO", "React", "TypeScript", "CSS", "HTML"],
    live: "https://www.casaideas.com.co/"
  }
];

export default function Projects() {
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
          Featured Projects
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
            <p className="project-description">{project.description}</p>
            
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
