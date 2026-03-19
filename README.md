# Felipe Ortiz - Senior Frontend Engineer Portfolio 💻✨

> **A premium, high-performance, and fully responsive developer portfolio built with modern web technologies, pushing boundaries in UI/UX without relying on heavy UI frameworks.**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-f04b81?logo=framer)

## 🌟 Overview

This is my personal portfolio demonstrating technical expertise in frontend architecture, performance optimization, and internationalized modern web design. Rather than relying on standard monolithic utility CSS frameworks (like Tailwind or Bootstrap), this application uses a meticulously crafted **Vanilla CSS Design System** powered by CSS variables to achieve scalable custom theming and intricate *glassmorphism* interactions.

## ✨ Key Features

- **🌓 Native Dark / Light Mode Engine:** Full CSS-variable-based theme toggling with instant local browser persistence (`localStorage`) and no hydration mismatch flickers.
- **🌍 Built-in Internationalization (i18n):** English and Spanish text content served dynamically via a custom React Context provider (`LanguageContext`), allowing instant language switching without full page reloads.
- **🪄 Micro-Animations & Interactivity:** Integrated with `framer-motion` to handle buttery smooth parallax, viewport-triggered scroll reveals, and responsive marquee sliders.
- **⚡ Performant Architecture:** Leverages Next.js 15 App Router, strict TypeScript typing, and optimized font loading (via `next/font`). Highly optimized for excellent Core Web Vitals.
- **💎 Glassmorphic UI:** Sophisticated UI utilizing background blurs, multi-layered colorful gradients, and refined shadows across timeline and project cards.
- **⚙️ Dynamic Terminal Window:** A faux code-window component visually serving as a digital avatar.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** Vanilla CSS3 + CSS Custom Properties & Variables
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment & SEO:** Vercel (Recommended), Lighthouse auditing.

## 🚀 Getting Started

To run this project locally, execute the following commands in your terminal:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portafolio.git

# 2. Navigate to the project directory
cd portafolio

# 3. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The development server supports React Server Components and Fast Refresh.

## 📁 Repository Structure

```text
src/
├── app/
│   ├── globals.css        # Core Design System, Theme Variables (Dark/Light)
│   ├── layout.tsx         # Root layout configuring Context Providers and Fonts
│   └── page.tsx           # Assembly of all portfolio UI sections
├── components/            # Isolated view components (Hero, Navbar, Experience, etc.)
│   ├── Contact.tsx
│   ├── Experience.tsx     # Timelines (Tena, Saba, Megatiendas, etc)
│   ├── Hero.tsx           # Floating code-window banner
│   ├── Learning.tsx       # Studies and ongoing education 
│   ├── Navbar.tsx         # Sticky navigation with theme & language UI toggles
│   ├── Projects.tsx       # Hoverable glass-panel cards
│   ├── TechStack.tsx      # Infinite horizontal logo marquee
│   └── *.css              # Co-located component-specific styles
└── context/
    ├── LanguageContext.tsx # Centralized translation state and engine
    └── ThemeContext.tsx    # Hook managing dark/light OS preference and toggle
```

## 📈 Recent Impact Highlights

The projects featured here demonstrate a capacity to handle enterprise-level architecture, especially maintaining platforms like:
- **Tena MX & Saba MX**
- **Casaideas Colombia**
- **Ortopédicos Futuro**
- *and other top-tier VTEX IO e-commerce sites scaling to handle massive promotional events (Cyber Monday, Black Friday etc).*

## 🤝 Let's Connect

Currently open for new opportunities to build scalable and highly performant user interfaces. 
Have a project, a question, or a role in mind? Let's talk!

- [LinkedIn](https://www.linkedin.com/in/felipe-ortiz-bejarano-68a2ba137/) - *(Update with your link)*
- [GitHub](https://github.com/fifer1503XD) - *(Update with your link)*
- **Email:** *(Update with your email)*

---

*Designed and Built by Felipe Ortiz © 2026.*
