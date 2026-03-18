"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiGraphql, 
  SiNodedotjs, SiJavascript, SiHtml5, SiCss, 
  SiShopify, SiJest, SiTestinglibrary, SiFramer, 
  SiTailwindcss, SiGit 
} from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import "./TechStack.css";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "VTEX IO", icon: FaShoppingCart, color: "#F71963" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Shopify", icon: SiShopify, color: "#95BF47" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Testing Library", icon: SiTestinglibrary, color: "#E33332" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" }
];

export default function TechStack() {
  const marqueeTech = [...technologies, ...technologies];

  return (
    <section className="tech-stack-section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <Cpu className="section-icon" /> 
            Technologies & Tools
          </h2>
        </motion.div>
      </div>

      <div className="marquee-container">
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>
        
        <motion.div 
          className="marquee-content"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {marqueeTech.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={`${tech.name}-${index}`} 
                className="tech-badge glass-panel"
                style={{ "--hover-color": tech.color } as React.CSSProperties}
              >
                <Icon className="tech-icon" style={{ color: tech.color }} />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
      
      <div className="marquee-container reverse">
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>
        
        <motion.div 
          className="marquee-content"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {[...marqueeTech].reverse().map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={`rev-${tech.name}-${index}`} 
                className="tech-badge glass-panel"
                style={{ "--hover-color": tech.color } as React.CSSProperties}
              >
                <Icon className="tech-icon" style={{ color: tech.color }} />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
