import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Projects: React.FC = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: "FlavourCraft",
      description: "Flavour Craft brings recipes to life with an elegant, user-friendly design.A digital cookbook crafted for food lovers and creators alike.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["MongoDB", "TypeScript", "Vite", "React"],
      github: "https://github.com/vedant-zeus/FlavourCraft.git",
      demo: "https://flavourcraft.vercel.app/",
    },
    {
      title: "Cars E-Commerce",
      description: "A sleek cars e-commerce platform built for seamless browsing, comparison, and purchase Designed to deliver a premium shopping experience.",
      image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
      tech: ["TypeScript", "React (Vite)", "Supabase"],
      github: "https://github.com/vedant-zeus/Cars-Ecommerce.git",
      demo: "https://cars-ecommerce-delta.vercel.app/",
    },
    {
      title: "Doc-Vault",
      description: "Doc-Vault is a secure digital wallet for storing and managing important documents online.Built with reliability and simplicity, it keeps your files safe .",
      image:
        "https://images.pexels.com/photos/33428404/pexels-photo-33428404.jpeg",
      tech: ["TypeScript", "React (Vite)", "Supabase"],
      github: "https://github.com/vedant-zeus/Document-Wallet.git",
      demo: "https://document-wallet-nine.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website designed to showcase my projects, skills, and creative journey.Built with modern web technologies.",
      image:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/vedant-zeus/Portfolio",
      demo: "https://www.vedantamrutkar.site/",
    },
    {
      title: "Rail Route",
      description: "Railway route finder application with an immersive user experience.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      tech: ["React", "Node.js", "TypeScript"],
      github: "https://github.com/vedant-zeus/Railway-Frontend.git",
      demo: "https://railway-route.netlify.app/",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with UI.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      tech: ["React", "Weather API", "Chart.js"],
      github: "https://github.com/vedant-zeus/weather-app",
      demo: "https://weather-dashboard-example.vercel.app/",
    },
  ];

  // Duplicate projects for infinite loop
  const doubledProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      className={`py-20 pt-32 min-h-screen ${
        isDark
          ? "bg-gradient-to-b from-gray-800 to-gray-900"
          : "bg-gradient-to-tr from-gray-50 via-pink-100 to-yellow-100"
      }`}
    >
      {/* Inline CSS for animations */}
      <style>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .slide-left {
          display: flex;
          width: 200%;
          animation: slideLeft 40s linear infinite;
        }
        .slide-right {
          display: flex;
          width: 200%;
          animation: slideRight 40s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
             Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A showcase of my recent work combining web development and real time projects
          </p>
        </div>

        {/* Track 1 (slides left) */}
        <div className="overflow-hidden mb-10">
          <div className="slide-left">
            {doubledProjects.map((project, i) => (
              <div key={i} className="w-80 flex-shrink-0 px-4">
                <ProjectCard project={project} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>

        {/* Track 2 (slides right) */}
        <div className="overflow-hidden">
          <div className="slide-right">
            {doubledProjects.map((project, i) => (
              <div key={i} className="w-80 flex-shrink-0 px-4">
                <ProjectCard project={project} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
};

const ProjectCard: React.FC<{ project: Project; isDark: boolean }> = ({
  project,
  isDark,
}) => {
  return (
    <div
      className={`rounded-2xl  overflow-hidden h-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
        isDark
          ? "bg-gray-800 border border-gray-700"
          : "bg-white border border-gray-100"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 space-y-3">
        <h3
          className={`text-lg font-bold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-2 py-1 text-xs rounded-full ${
                isDark
                  ? "bg-blue-600/20 text-blue-300 border border-blue-600/30"
                  : "bg-blue-100 text-blue-800 border border-blue-200"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90"
          >
            <ExternalLink size={14} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
