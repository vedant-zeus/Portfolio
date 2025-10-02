// src/pages/Technologies.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

type Tech = {
  id: string;
  name: string;
  logo?: string; // e.g. "html.png"
  emoji?: string;
};

const TECHS: Tech[] = [
  { id: "html", name: "HTML5", logo: "html.png" },
  { id: "css", name: "CSS3", logo: "css3.png" },
  { id: "js", name: "JavaScript", logo: "javascript.png" },
  { id: "ts", name: "TypeScript", logo: "typescript.png" },
  { id: "react", name: "React", logo: "react.png" },
  { id: "bootstrap", name: "Bootstrap", logo: "bootstrap.png" },
  { id: "vite", name: "Vite", logo: "vite.png" },
  { id: "tailwind", name: "Tailwind", logo: "tailwind.png" },
  { id: "supabase", name: "Supabase", logo: "supabase.png" },
  { id: "node", name: "Node.js", logo: "nodejs.png" },
  { id: "", name: "", logo: "" },
  { id: "mongo", name: "MongoDB", logo: "mongodb.png" },
  { id: "mysql", name: "MySQL", logo: "mysql.png" },
  { id: "threejs", name: "Three.js", logo: "threejs.png" },
  
];

export const Technologies: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="technologies"
      className={`py-32 px-6 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
          >
            Making apps with modern technologies.
          </motion.h1>
<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4 mb-10"></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`mt-4 text-sm md:text-base ${
              isDark ? "text-slate-300" : "text-gray-600"
            }`}
          >
            Never miss a task, deadline or idea — tools I use to build products.
          </motion.p>
        </header>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 place-items-center">
          {TECHS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.1, y: -6 }}
              className="flex flex-col items-center"
              title={t.name}
            >
              {t.logo ? (
                <img
                  src={t.logo}
                  alt={t.name}
                  className="w-16 h-16 object-contain mb-1"
                />
              ) : (
                <div className="text-3xl mb-2">{t.emoji}</div>
              )}
              <span
                className={`text-xs ${
                  isDark ? "text-slate-300" : "text-gray-700"
                }`}
              >
                {t.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
