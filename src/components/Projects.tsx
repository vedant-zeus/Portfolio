import React from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isScrollingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Check if the projects section is in viewport
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        e.preventDefault();
        
        // Prevent multiple rapid scrolls
        if (isScrollingRef.current) return;
        
        isScrollingRef.current = true;
        
        // Determine scroll direction
        if (e.deltaY > 0) {
          // Scroll down - next slide
          nextSlide();
        } else {
          // Scroll up - previous slide
          prevSlide();
        }
        
        // Reset scrolling flag after animation
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

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
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and responsive design principles.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/vedant-zeus/portfolio',
      demo: 'https://portfolio-example.vercel.app/'
    },
    {
      title: 'Task Manager',
      description: 'A productivity app for managing daily tasks and projects. Features include task prioritization, deadline tracking, and team collaboration.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/vedant-zeus/task-manager',
      demo: 'https://task-manager-example.vercel.app/'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with beautiful UI. Displays current conditions, forecasts, and weather alerts for any location worldwide.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tech: ['React', 'Weather API', 'Chart.js'],
      github: 'https://github.com/vedant-zeus/weather-app',
      demo: 'https://weather-dashboard-example.vercel.app/'
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className={`py-20 pt-40 min-h-screen flex items-center ${
        isDark 
          ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
          <p className={`text-sm mt-4 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Scroll to navigate through projects
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider - Shows 3 projects */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-600 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div 
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
                          target="_blank"
                          rel="noopener noreferrer"
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all duration-200"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {projects.length > itemsPerPage && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110 z-10 ${
                  currentIndex === 0
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:scale-110'
                } ${
                  isDark 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                aria-label="Previous projects"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full shadow-xl transition-all duration-200 z-10 ${
                  currentIndex >= maxIndex
                    ? 'opacity-30 cursor-not-allowed'
                    : 'hover:scale-110'
                } ${
                  isDark 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
                aria-label="Next projects"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Dots Navigation */}
          {projects.length > itemsPerPage && (
            <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;