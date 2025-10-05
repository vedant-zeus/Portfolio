import React from 'react';
import { Download, User2 ,Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToabout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parent container controls staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  // Children slide from bottom
  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      id="hero"
      className={`min-h-screen relative overflow-hidden flex items-center justify-center text-center ${
        isDark 
          ? 'bg-gradient-to-br from-black via-gray-900 to-blue-950' 
          : 'bg-gradient-to-br from-gray-50 via-pink-100 to-yellow-100'
      }`}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-4 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse ${
          isDark ? 'bg-cyan-600/20' : 'bg-pink-300/30'
        }`} />
        <div className={`absolute top-1/2 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse ${
          isDark ? 'bg-emerald-600/20' : 'bg-yellow-300/30'
        }`} />
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 pt-10 flex flex-col items-center justify-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name (animates differently - zoom) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`relative text-6xl lg:text-[4.5rem] font-extrabold leading-tight 
            bg-gradient-to-r 
            ${isDark 
              ? 'from-white via-teal-400 to-teal-300' 
              : 'from-pink-600 via-orange-500 to-yellow-500'} 
            text-transparent bg-clip-text 
            animate-gradient-x bg-[length:200%_200%]`}
        >
          Vedant Amrutkar
        </motion.h1>

        {/* Role */}
        <motion.p variants={itemVariants} className={`text-xl lg:text-2xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400 drop-shadow-[0_0_25px_rgba(50,200,150,0.4)]">
            Full-stack Developer & Data Enthusiast
          </span>
        </motion.p>

        {/* Description */}
        <motion.p variants={itemVariants} className={`text-lg max-w-2xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
          Crafting immersive user experiences paired with reliable database solutions, blending creativity and performance to deliver seamless, engaging, and immersive web applications.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={scrollToabout}
            className={`group px-8 py-4 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2
              bg-gradient-to-r ${isDark 
                ? 'from-emerald-500 to-teal-400' 
                : 'from-pink-500 to-orange-400'}
            `}
          >
            <User2 size={20} />
            <span>About me </span>
          </button>

          <button 
            onClick={scrollToContact}
            className={`px-8 py-4 font-semibold rounded-xl transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl flex items-center gap-2 
              bg-gradient-to-r ${isDark 
                ? 'from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500' 
                : 'from-lime-400 to-green-500 text-white hover:from-lime-500 hover:to-green-600'}
            `}
          >
            <Mail size={20} />
            <span>My Creations</span>
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex gap-6 mt-6">
          <a href="https://github.com/vedant-zeus" target="_blank" rel="noopener noreferrer"
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
              isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' 
                     : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Github size={22} />
          </a>

          <a href="https://www.linkedin.com/in/vedant-amrutkar-87b266288" target="_blank" rel="noopener noreferrer"
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
              isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' 
                     : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Linkedin size={22} />
          </a>

          <a href="https://instagram.com/vedant_a18" target="_blank" rel="noopener noreferrer"
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
              isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' 
                     : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Instagram size={22} />
          </a>

          <a href="mailto:vedant8405@gmail.com"
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
              isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' 
                     : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
