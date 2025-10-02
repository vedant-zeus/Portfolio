import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Technologies from './components/Technologies';
import PersonalInfo from './components/PersonalInfo';
import Contact from './components/Contact';

const AppContent: React.FC = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <PersonalInfo />
        <Services />
        <Technologies />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <footer className={`py-8 border-t ${
          isDark 
            ? 'bg-gray-900 border-gray-800 text-gray-400' 
            : 'bg-white border-gray-200 text-gray-600'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 Vedant Sanjay Amrutkar. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;