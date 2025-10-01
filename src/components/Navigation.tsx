import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  
  const [isHovered, setIsHovered] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#timeline', label: 'Personal Info' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative backdrop-blur-md transition-all duration-500 ease-out rounded-full ${
            isDark ? 'bg-gray-900/95' : 'bg-white/95'
          } ${
            isHovered ? 'px-8 py-4 shadow-2xl' : 'px-8 py-4 shadow-lg'
          }`}
          style={{
            width: isHovered ? 'auto' : '180px',
            minWidth: isHovered ? '800px' : '290px',
          }}
        >
          <div className="flex items-center justify-between gap-6">
            {/* Brand Name - Always Visible */}
            <div className={`font-bold text-xl italic whitespace-nowrap ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Vedant Amrutkar
            </div>

            {/* Navigation Links - Appear on Hover */}
            <div
              className={`flex items-center gap-1 transition-all duration-500 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 w-0'
              }`}
              style={{
                overflow: isHovered ? 'visible' : 'hidden',
              }}
            >
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative group px-5 py-2 text-xs font-medium tracking-wider transition-all duration-300 rounded-full whitespace-nowrap ${
                    isDark
                      ? 'text-gray-300 hover:text-grey-400 hover:bg-white/10'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-white-100'
                  } ${index === 0 ? 'bg-white/20 text-black' : ''}`}
                  style={{
                    transitionDelay: isHovered ? `${index * 50}ms` : '0ms',
                  }}
                >
                  {link.label}
                  
                  {/* Hover dot indicator */}
                  <span
                    className={`absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isDark ? 'bg-white' : 'bg-gray-900'
                    } ${index === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  />
                </button>
              ))}
            </div>

            {/* Theme Toggle - Always Visible */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isDark
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Decorative dots */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 flex gap-8 transition-all duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-30'
            }`}
            style={{ left: '50%', transform: 'translate(-50%, -50%)' }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`m-4 backdrop-blur-md rounded-2xl ${
          isDark ? 'bg-gray-900/95' : 'bg-white/95'
        } shadow-lg`}>
          <div className="flex items-center justify-between px-6 py-4">
            {/* Brand Name */}
            <div className={`font-bold text-lg italic ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Rekorder
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`border-t px-4 py-3 ${
              isDark ? 'border-gray-800' : 'border-gray-200'
            }`}>
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${
                      isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    } ${index === 0 ? (isDark ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-900') : ''}`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;