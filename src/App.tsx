import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Technologies from './components/Technologies';
import PersonalInfo from './components/PersonalInfo';
import Contact from './components/Contact';
import Achievements from './components/Achievement';
import Loader from './components/Loader';

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    // Show loader for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Animate sections when they appear on screen
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

  if (loading) {
    return <Loader />; // ⏳ Show the loading screen first
  }

  // 🌟 Main website after loading
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
        <Achievements />
        <Contact />

        {/* Footer */}
        <footer
          className={`py-8 border-t ${
            isDark
              ? 'bg-gray-900 border-gray-800 text-gray-400'
              : 'bg-gradient-to-tr from-gray-50 via-pink-100 to-yellow-100'
          }`}
        >
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
