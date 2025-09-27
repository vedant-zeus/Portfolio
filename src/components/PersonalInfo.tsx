import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Journey: React.FC = () => {
  const { isDark } = useTheme();

  const timeline = [
    {
      date: 'Till 2021',
      title: 'DAV Public School',
      description: 'Completed Secondary School education at DAV Public School.',
    },
    {
      date: '2021 – 2023',
      title: 'Pratibha International Jr. College',
      description: 'Studied Science stream and developed strong foundations.',
    },
    {
      date: '2023 – 2027',
      title: 'SRM Institute of Science and Technology',
      description: 'Pursuing B.Tech with the vision to become a skilled engineer.',
    },
    {
      date: 'Future',
      title: 'Road to Skilled Engineer',
      description: 'Continuously learning, building projects, and growing as an engineer.',
    },
  ];

  return (
    <section
      id="timeline"
      className={`py-20 ${
        isDark
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-24">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            My Educational Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full"></div>
          <p
            className={`mt-8 text-lg lg:text-xl ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            The path from school to becoming a skilled engineer 🚀
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative flex items-start justify-between gap-12">
          {/* Connecting line */}
          <div
            className={`absolute top-8 left-0 right-0 h-1 ${
              isDark
                ? 'bg-gradient-to-r from-sky-500 to-purple-500'
                : 'bg-gradient-to-r from-sky-400 to-purple-400'
            }`}
          ></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-56 text-center"
            >
              {/* Node */}
              <div
                className={`w-12 h-12 rounded-full border-4 flex items-center justify-center mb-6 ${
                  isDark
                    ? 'bg-gray-900 border-sky-400'
                    : 'bg-white border-sky-500'
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full ${
                    isDark ? 'bg-sky-400' : 'bg-sky-500'
                  }`}
                ></div>
              </div>

              {/* Text */}
              <div>
                <p
                  className={`text-base font-semibold mb-2 ${
                    isDark ? 'text-sky-400' : 'text-sky-600'
                  }`}
                >
                  {item.date}
                </p>
                <h4
                  className={`text-lg font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {item.title}
                </h4>
                <p
                  className={`mt-1 text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
