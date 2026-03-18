"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./Contact.css";

export default function Contact() {
  const { language, t } = useLanguage();

  return (
    <section className="contact container" id="contact">
      <motion.div
        className="contact-content glass-panel"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-title text-gradient">
          {language === 'en' ? "Let's Work Together" : "Trabajemos Juntos"}
        </h2>
        <p className="contact-description">
          {language === 'en' 
            ? "I'm currently looking for new opportunities. Whether you have a question, a project proposition, or just want to say hi, my inbox is always open!" 
            : "Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta, una propuesta de proyecto o simplemente quieras saludar, ¡mi bandeja de entrada siempre está abierta!"}
        </p>
        
        <div className="contact-actions">
          <a href="mailto:contact@example.com" className="btn btn-primary contact-btn">
            {language === 'en' ? "Say Hello" : "Di Hola"} <Mail size={18} />
          </a>
          <a href="/cv.pdf" className="btn btn-outline contact-btn" download="Felipe_Ortiz_CV.pdf">
            {language === 'en' ? "Download CV" : "Descargar CV"} <Download size={18} />
          </a>
        </div>
      </motion.div>

      <footer className="footer">
        <p>{t("footer.built")}</p>
        <p>&copy; {new Date().getFullYear()} Felipe Ortiz. {t("footer.rights")}</p>
      </footer>
    </section>
  );
}
