import React from 'react';
import { Globe, BarChart3, Brain, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Services: React.FC = () => {
  const { isDark } = useTheme();

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description:
        'Full-stack web applications using modern frameworks like React, Node.js, and cloud technologies.',
      features: [
        'Responsive Design',
        'REST APIs',
        'Database Integration',
        'Website Deployment',
      ],
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description:
        'Transform your data into actionable insights with advanced analytics and visualization.',
      features: [
        'Data Visualization',
        'Statistical Analysis',
        'Business Intelligence',
        'Report integration',
      ],
    },
    {
      icon: Brain,
      title: 'Agentic AI Solutions',
      description:
        'Implement machine learning models and AI-powered features to automate and optimize processes.',
      features: [
        'ML Model Development',
        'Predictive Analytics',
        'NLP Solutions',
        'Computer Vision',
      ],
    },
    {
      icon: Users,
      title: 'Machine Learning',
      description:
        'Technical training and consultation services for teams and individuals.',
      features: [
        "LLM's Integration",
        'Code Reviews',
        'Training Models',
        'Best Practices',
      ],
    },
  ];

  return (
    <section
      id="services"
      className={`py-32 pt-30 $ ${
        isDark
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
           Comprehensive solutions tailored to your business needs
          </p>
        </div>
          
        </div>

        {/* Service Cards */}
        <div className="space-y-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                  isDark
                    ? 'bg-slate-800/50 border border-slate-700/50'
                    : 'bg-white border border-gray-100'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-4 rounded-xl mr-4 ${
                      isDark ? 'bg-sky-500/20' : 'bg-blue-100'
                    }`}
                  >
                    <Icon
                      className={`${isDark ? 'text-sky-400' : 'text-blue-600'}`}
                      size={28}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                <p
                  className={`mb-6 leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-gray-600'
                  }`}
                >
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className={`inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full ${
                        isDark
                          ? 'bg-slate-700/50 text-slate-300 border border-slate-600/50'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          isDark ? 'bg-sky-400' : 'bg-blue-600'
                        }`}
                      ></div>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
