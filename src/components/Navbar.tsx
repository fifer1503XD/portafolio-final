"use client";

import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const links = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.nav 
      className="navbar glass-panel"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <a href="#" className="logo">
          &lt;Felipe /&gt;
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <div className="nav-toggles">
            <button onClick={toggleLanguage} className="icon-btn" aria-label="Toggle Language" title={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}>
              <Globe size={20} /> <span className="lang-text">{language.toUpperCase()}</span>
            </button>
            <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle Theme" title="Toggle Light/Dark Mode">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="mobile-menu glass-panel"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-nav-toggles">
            <button onClick={toggleLanguage} className="mobile-nav-link text-left w-full flex align-center gap-2">
              <Globe size={20} /> {language === "en" ? "Español" : "English"}
            </button>
            <button onClick={toggleTheme} className="mobile-nav-link text-left w-full flex align-center gap-2">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />} {theme === "dark" ? (language === "en" ? "Light Mode" : "Modo Claro") : (language === "en" ? "Dark Mode" : "Modo Oscuro")}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
