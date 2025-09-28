import React from 'react';
import { Download, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Wave Pixelation settings
  const rows = 10;
  const blocks = Array.from({ length: rows });

  return (
    <section 
      id="hero"
      className={`min-h-screen relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' 
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100'
      }`}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-4 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse ${
          isDark ? 'bg-blue-600/20' : 'bg-blue-300/30'
        }`}></div>
        <div className={`absolute top-1/2 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse ${
          isDark ? 'bg-purple-600/20' : 'bg-purple-300/30'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        {/* Removed negative margin and added top padding for fine-tuning */}
        <div className="grid lg:grid-cols-5 gap-0 items-center min-h-screen pt-12">
          
                {/* left side */}

          <div className="lg:col-span-2 space-y-8 animate-fade-in pr-8 pl-8">
  <div className="space-y-4">
    <h1 className={`text-5xl lg:text-7xl font-bold leading-tight ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}>
      Vedant Sanjay Amrutkar
    </h1>
    <p className={`text-xl lg:text-2xl ${
      isDark ? 'text-gray-300' : 'text-gray-600'
    }`}>
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-600">
        Aspiring Frontend | Full-Stack Developer
      </span>
    </p>
    <p className={`text-lg max-w-lg leading-relaxed ${
      isDark ? 'text-black-400' : 'text-gray-700'
    }`}>
      Crafting immersive user experiences and pixel-perfect interfaces. Combining a passion for design with robust frontend architecture to build web solutions that are both beautiful and performant.
    </p>
  </div>
  
  <div className="flex flex-wrap gap-4">
    <button
  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
  onClick={() => {
    // Replace '/path/to/your/resume.pdf' with the actual path to your resume file in the 'public' directory
    const resumeUrl = '/Resume.pdf'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Vedant_Sanjay_Amrutkar_Resume.pdf'; // Suggested default file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <Download size={20} className="group-hover:animate-bounce" />
  Download Resume
</button>
    <button 
      onClick={scrollToContact}
      className={`px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl flex items-center gap-2 ${
        isDark 
          ? 'border-gray-600 text-black-700 hover:bg-gray-500 hover:border-gray-500' 
          : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
      }`}
    >
      <Mail size={20} />
      <span>Contact Me</span>
    </button>
  </div>
</div>

          {/* Right Side - Wave Pixelation Reveal + Hover */}
<div className="lg:col-span-3 relative h-screen flex items-center justify-end">
  <motion.div
    className="relative w-[60%] h-[90%] lg:w-[65%] lg:h-[90%] grid grid-rows-10 gap-0 overflow-hidden group"
    initial="hidden"
    animate="visible"
    whileHover="pixelated"
    variants={{
      visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.3 }
      },
      pixelated: {
        transition: { staggerChildren: 0.05 }
      }
    }}
  >
    {/* Mobile Image (simplified + reduced size) */}
  <div className="md:hidden w-[80%] h-[50vh] flex items-center justify-center">
    <img
      src="/vedant.png"
      alt="Vedant"
      className="w-full h-full object-contain rounded-lg shadow-lg"
    />
  </div>
    {blocks.map((_, i) => (
      <motion.div
        key={i}
        className="w-full h-full"
        style={{
          backgroundImage: "url(images/vedant.png)",
          backgroundSize: `100% ${rows * 100}%`,
          backgroundPosition: `0 ${(i / (rows - 1)) * 100}%`,
        }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          pixelated: { opacity: 0.6 }
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    ))}
  </motion.div>
</div>


        </div>
      </div>
    </section>
  );
};

export default Hero;