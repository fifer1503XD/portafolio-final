"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./Hero.css";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="hero container" id="about">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero-subtitle text-gradient">
            {language === 'en' ? "Hi, my name is" : "Hola, mi nombre es"}
          </p>
          <h1 className="hero-title">Felipe Ortiz.</h1>
          <h2 className="hero-heading">
            {language === 'en' ? "I build robust web experiences." : "Construyo experiencias web sólidas."}
          </h2>
          <p className="hero-description">
            {language === 'en' ? "I'm a Full-Stack Software Developer specialized in " : "Soy Desarrollador de Software Full-Stack especializado en "}
            <span className="hero-highlight">VTEX IO, React, and Next.js</span>.
            {language === 'en' ? " I focus on creating premium, accessible, and highly performant digital products that deliver exceptional user experiences." : " Me enfoco en crear productos digitales premium, accesibles y de alto rendimiento que brindan experiencias de usuario excepcionales."}
          </p>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#projects" className="btn btn-primary">
            {language === 'en' ? "View My Work" : "Ver Mi Trabajo"} <ArrowRight size={18} />
          </a>
          <div className="hero-social">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-visuals"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="glass-panel profile-glass">
            <div className="profile-placeholder"></div>
            <div className="glass-decoration decoration-1"></div>
            <div className="glass-decoration decoration-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
