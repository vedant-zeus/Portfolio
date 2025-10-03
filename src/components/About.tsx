import React from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  const skills = [
    { name: 'React', icon: Code, level: 70 },
    { name: 'Node.js', icon: Code, level: 55 },
    { name: 'MongoDB', icon: Database, level: 68 },
    { name: 'Typescript', icon: Code, level: 82 },
    { name: 'C++', icon: Brain, level: 80 },
    { name: 'Data Analysis', icon: Database, level: 65 }
  ];

  return (
    
    <section id="about"
      className={`py-32 pt-30 ${
  isDark
    ? "bg-gradient-to-tr from-black via-gray-900 to-blue-950"
    : "bg-gradient-to-tr from-gray-50 via-pink-100 to-yellow-100"
}`}
>
  

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm a passionate developer and data enthusiast with a strong foundation in both 
              full-stack development and data analytics. My journey began with a curiosity about 
              how technology can solve real-world problems, leading me to specialize in creating 
              data-driven applications.
            </p>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              With expertise in modern web technologies and advanced data analysis techniques, 
              I bridge the gap between complex data insights and user-friendly interfaces. 
              I'm always eager to take on new challenges and contribute to innovative projects.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Zap className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} size={24} />
              <span className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Always learning, always growing
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Technical Skills
            </h3>
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                      <span className={`font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {skill.name}
                      </span>
                    </div>
                    <span className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-3 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div 
                      className="h-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;