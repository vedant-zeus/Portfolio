import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#timeline', label: 'Personal Info' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-3/4 ml-[150px] mx-auto mt-[25px] z-50 transition-all duration-300 backdrop-blur-md rounded-xl ${
        isDark
          ? 'bg-gray-900/90 border-gray-700/50'
          : 'bg-white/90 border-gray-200/50'
      } border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 w-3/4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative group transition-all duration-300 transform 
                  hover:scale-110 hover:-translate-y-1
                  ${isDark ? 'text-gray-300' : 'text-gray-700'}
                `}
              >
                {/* Gradient glowing text on hover */}
                <span
                  className={`transition-all duration-300 ${
                    isDark
                      ? 'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-500'
                      : 'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600'
                  }`}
                >
                  {link.label}
                </span>

                {/* Underline slide-in effect */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-0 
                  group-hover:w-full transition-all duration-500 
                  ${isDark ? 'bg-gradient-to-r from-blue-400 to-pink-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}
                ></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                isDark
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDark
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDark
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden border-t transition-all duration-200 ${
              isDark
                ? 'border-gray-700 bg-gray-900/95'
                : 'border-gray-200 bg-white/95'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    isDark
                      ? 'text-gray-300 hover:bg-gray-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  } rounded-lg`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
