"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Simple translation dictionary
export const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.about": { en: "About", es: "Sobre mí" },
  "nav.experience": { en: "Experience", es: "Experiencia" },
  "nav.projects": { en: "Projects", es: "Proyectos" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  // Built with..
  "footer.built": { en: "Built with Next.js, React, and Framer Motion.", es: "Hecho con Next.js, React y Framer Motion." },
  "footer.rights": { en: "All rights reserved.", es: "Todos los derechos reservados." }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-lang") as Language;
    if (saved) setLanguage(saved);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  const t = (key: string) => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key; // Fallback
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
