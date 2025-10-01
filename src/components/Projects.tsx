import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      "title": "FlavourCraft",
  "description": "A full-stack web application serving as a digital cookbook. Users can explore a vast collection of dishes, view detailed recipes, and save their favorites. The platform focuses on a seamless user experience for discovering and sharing culinary creations.",
  "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  "tech": ["MongoDB", "TypeScript", "Vite", "React"],
  "github": "https://github.com/vedant-zeus/FlavourCraft.git",
  "demo": "https://flavourcraft.vercel.app/"
    },
    {
  title: 'Cars E-Commerce',
  description: 'Car marketplace with buying and comparison features (like smartphone sites). Built with TypeScript, React (Vite), and Supabase for authentication, DB, and data management.',
  image: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg',
  tech: ['TypeScript', 'React (Vite)', 'Supabase'],
  github: 'https://github.com/vedant-zeus/Cars-Ecommerce.git',
  demo: 'https://cars-ecommerce-delta.vercel.app/'
},
{
  title: 'Document Wallet',
  description: 'Secure document storage app showcasing data authorization, per-user database control, and Supabase Row-Level Security. Built with TypeScript, React (Vite), and Supabase.',
  image: 'https://images.pexels.com/photos/33428404/pexels-photo-33428404.jpeg',
  tech: ['TypeScript', 'React (Vite)', 'Supabase'],
  github: 'https://github.com/vedant-zeus/Document-Wallet.git',
  demo: 'https://document-wallet-nine.vercel.app/'
}
  ];

  return (
    <section id="projects" className={`py-20 pt-40 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my recent work combining data analytics, web development, and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isDark 
                          ? 'bg-blue-600/20 text-blue-300 border border-blue-600/30' 
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2">
                  <a 
                    href={project.github}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                      isDark 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;