import React from 'react';
import { 
  Zap, Award, Star, Plane, Code, Gamepad, 
  Dumbbell, Trophy , Download
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`py-32 pt-28 ${
        isDark
          ? "bg-gradient-to-tr from-black via-gray-900 to-blue-950"
          : "bg-gradient-to-tr from-gray-50 via-pink-100 to-yellow-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Profile + Bio + Achievements */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-5">
          
          {/* Left Side Image + Achievements */}
          <div className="flex flex-col items-center gap-12">
            {/* Enlarged Profile Circle */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-purple-600 shadow-2xl">
              <img 
                src="/vedant1.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Achievements beside photo */}
            <div className="w-full mt-4">
              <h3
                className={`text-3xl font-bold mb-8 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Achievements & Highlights 🏆
              </h3>
              <ul className="flex flex-wrap justify-center gap-6">
                <li className="flex items-center gap-2">
                  <Award className="text-yellow-500" size={24} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    Developed a Website for a NGO to streamline their operations.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-purple-500" size={24} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    Certified by IIT Madras (NPTEL) in Database Management Systems.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-blue-500" size={24} />
                  <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    Elite Certification from IIT Kharagpur (NPTEL) in Machine Learning.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Details */}
          <div>
            <h2
              className={`relative text-6xl lg:text-[2.75rem] font-extrabold leading-tight 
                bg-gradient-to-r 
                ${isDark 
                  ? 'from-white via-teal-400 to-teal-300' 
                  : 'from-pink-600 via-orange-500 to-yellow-500'} 
                text-transparent bg-clip-text 
                animate-gradient-x bg-[length:200%_200%]`}
            >
              Vedant Sanjay Amrutkar
            </h2>
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}
            >
              Tech Explorer | Lifelong Learner
            </h3>

            {/* Short Bio */}
            <p
              className={`text-lg leading-relaxed mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              My journey in tech started with curiosity about how data can solve real-world problems. 
              Since then, I’ve built projects in AI, full-stack development, and data analysis. 
              I love transforming ideas into reality through code and design.
            </p>

            {/* Motto */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
              <div className="flex items-center gap-4">
                <Zap
                  className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                  size={28}
                />
                <span
                  className={`text-xl font-semibold tracking-wide ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Code. Create. Inspire.
                </span>
              </div>

              {/* ✅ Download Resume Button */}
              <button
            className={`group px-8 py-4 text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2
              bg-gradient-to-r ${isDark 
                ? 'from-emerald-500 to-teal-400' 
                : 'from-pink-500 to-orange-400'}
            `}
            onClick={() => {
              const resumeUrl = '/Resume.pdf'; 
              const link = document.createElement('a');
              link.href = resumeUrl;
              link.download = 'Vedant_Sanjay_Amrutkar_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download Resume
          </button>
            </div>
          </div>
        </div>

        {/* Hobbies / Interests Icons */}
        <div className="mt-12 border-t border-gray-500 pt-8">
          <h3
            className={`text-3xl font-bold mb-8 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Hobbies & Interests 
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Dumbbell size={36} className="text-purple-500 mb-2" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Gym</span>
            </div>
            <div className="flex flex-col items-center">
              <Plane size={36} className="text-blue-500 mb-2" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Travel</span>
            </div>
            <div className="flex flex-col items-center">
              <Code size={36} className="text-green-500 mb-2" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Coding</span>
            </div>
            <div className="flex flex-col items-center">
              <Gamepad size={36} className="text-red-500 mb-2" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Gaming</span>
            </div>
            <div className="flex flex-col items-center">
              <Trophy size={36} className="text-yellow-500 mb-2" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Cricket</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
