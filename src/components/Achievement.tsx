import React, { useState, useEffect, useRef } from 'react';
import {
  Award, Trophy, Star, CheckCircle,
  Target, Zap, Code, BookOpen, X, ExternalLink, Sparkles
} from 'lucide-react';

const useTheme = () => {
  const [isDark, setIsDark] = useState(true);
  return { isDark, setIsDark };
};

const Achievements = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  const achievements = [
    {
      id: 1,
      title: 'Introduction to Database Systems',
      organization: 'NPTEL/IIT Madras',
      date: 'April 2025',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/20',
      description: 'Comprehensive database systems course covering SQL, NoSQL, and database design principles',
      certificateUrl: 'https://drive.google.com/file/d/11SI1B2rgIt8KmuTsGQpmSRbJdch0_4ca/view?usp=sharing',
      type: 'certification',
      emoji: '🗄️'
    },
    {
      id: 2,
      title: 'Hackathon Winner',
      organization: 'DeepVision Hackathon',
      date: 'October 2025',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/20',
      description: 'First place in hackathon with 25+ participating teams',
      certificateUrl: 'https://drive.google.com/file/d/1aTm2pQOxCiFbOHmdsJprtxdOihHWxtrY/view?usp=sharing',
      type: 'award',
      emoji: '🏆'
    },
    {
      id: 3,
      title: 'Introduction to Machine Learning',
      organization: 'Nptel/IIT Kharagpur',
      date: 'September 2025',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      description: 'Professional Cloud Architect certification',
      certificateUrl: 'https://drive.google.com/file/d/1aoSCb_aNNWCJ6Cilb2zKqaiHmR8X79NY/view?usp=drive_link',
      type: 'certification',
      emoji: '🤖'
    },
    {
      id: 4,
      title: 'Python Developer Course',
      organization: 'Udemy',
      date: 'November 2023',
      icon: CheckCircle,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/20',
      description: 'Complete Python Developer : Zero to Mastery',
      certificateUrl: 'https://drive.google.com/file/d/163rj7tbEDNsAka9kY5xh0o0PoGiKRgEC/view?usp=sharing',
      type: 'certification',
      emoji: '🐍'
    },
    {
      id: 5,
      title: 'Machine Learning Certificate',
      organization: 'Udemy',
      date: 'Feb 2025',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/20',
      description: 'Introduction to Machine Learning',
      certificateUrl: 'https://drive.google.com/file/d/1XHoLgp-FGAX_QzIrZ_qhPUleetzoYm9-/view?usp=sharing',
      type: 'certification',
      emoji: '⚡'
    },
    {
      id: 6,
      title: 'Data Structures and Algorithms',
      organization: 'Udemy',
      date: 'November 2024',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      description: 'Database administration and development',
      certificateUrl: 'https://drive.google.com/file/d/1vTAmradkwnTt7CYlod1odBrTZ_gGY_eW/view?usp=sharing',
      type: 'certification',
      emoji: '🎯'
    },
    {
      id: 7,
      title: 'Programming C++ Bootcamp',
      organization: 'Udemy',
      date: 'May 2024',
      icon: Zap,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/20',
      description: 'Beginning C++ Programming - From Beginner to Beyond',
      certificateUrl: 'https://drive.google.com/file/d/1Ilz0KZEC-SUnQyO7Ge4zSIAe0-nhoAwK/view?usp=sharing',
      type: 'certification',
      emoji: '⚙️'
    },
    {
      id: 8,
      title: 'Open Source Contributor',
      organization: 'GitHub',
      date: 'Ongoing',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/20',
      description: 'Active contributor to 10+ open source projects',
      certificateUrl: 'https://github.com/vedant-zeus',
      verifyUrl: 'https://github.com/vedant-zeus',
      type: 'achievement',
      emoji: '🌟'
    }
  ];

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % achievements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [achievements.length]);

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const total = achievements.length;
    let position = diff;
    
    if (diff > total / 2) position = diff - total;
    if (diff < -total / 2) position = diff + total;

    const isCenter = position === 0;
    const scale = isCenter ? 1 : 0.7 - Math.abs(position) * 0.1;
    const rotateY = position * 35;
    const translateZ = isCenter ? 50 : -100 - Math.abs(position) * 50;
    const translateX = position * 350;
    const opacity = isCenter ? 1 : 0.4 - Math.abs(position) * 0.1;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: Math.max(0, opacity),
      zIndex: isCenter ? 10 : 5 - Math.abs(position),
      pointerEvents: isCenter ? 'auto' : 'none'
    };
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <section
      ref={containerRef}
      id="achievements"
      className={`relative py-20 pt-32 min-h-screen overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-black' : 'bg-gray-50'
      }`}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute inset-0 ${
          isDark ? 'bg-gradient-to-b from-purple-900/30 via-transparent to-cyan-900/30' : 'bg-gradient-to-b from-purple-200/30 via-transparent to-cyan-200/30'
        }`} />
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-cyan-400' : 'bg-purple-400'
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              opacity: 0.6,
              boxShadow: `0 0 ${particle.size * 2}px ${isDark ? 'rgba(34, 211, 238, 0.5)' : 'rgba(168, 85, 247, 0.5)'}`
            }}
          />
        ))}
      </div>

      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 800px at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, ${
            isDark ? 'rgba(34, 211, 238, 0.08)' : 'rgba(168, 85, 247, 0.08)'
          }, transparent 70%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header with Glitch Effect */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30">
            <Sparkles className={isDark ? 'text-cyan-400' : 'text-purple-600'} size={20} />
            <span className={`text-sm font-bold tracking-wider uppercase ${
              isDark ? 'text-cyan-400' : 'text-purple-600'
            }`}>
              Portfolio Showcase
            </span>
          </div>
          
          <h2 
            className={`text-6xl lg:text-7xl font-black mb-6 tracking-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{
              textShadow: isDark ? '0 0 80px rgba(34, 211, 238, 0.3)' : '0 0 80px rgba(168, 85, 247, 0.3)'
            }}
          >
            Achievements
          </h2>
          
          <div className={`w-32 h-1.5 bg-gradient-to-r ${
            isDark ? 'from-purple-600 via-cyan-500 to-purple-600' : 'from-purple-600 via-pink-500 to-purple-600'
          } mx-auto mb-8 rounded-full animate-pulse`} />
          
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Journey through excellence • Click to explore
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[600px] perspective-[2000px] mb-20">
          <div className="absolute inset-0 flex items-center justify-center preserve-3d">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={achievement.id}
                  className="absolute w-96 h-[28rem] transition-all duration-700 ease-out preserve-3d"
                  style={getCardStyle(index)}
                  onClick={() => isActive && setSelectedAchievement(achievement)}
                >
                  <div
                    className={`relative w-full h-full rounded-3xl transition-all duration-500 ${
                      isActive ? 'cursor-pointer' : 'cursor-default'
                    } ${
                      isDark
                        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700'
                        : 'bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200'
                    } backdrop-blur-xl shadow-2xl overflow-hidden group`}
                    style={{
                      transform: `rotateY(${mousePosition.x * (isActive ? 5 : 0)}deg) rotateX(${-mousePosition.y * (isActive ? 5 : 0)}deg)`,
                      boxShadow: isActive ? `0 30px 80px -20px ${isDark ? 'rgba(34, 211, 238, 0.4)' : 'rgba(168, 85, 247, 0.4)'}` : 'none'
                    }}
                  >
                    {/* Animated Border Glow */}
                    {isActive && (
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${achievement.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />
                    )}

                    {/* Card Content */}
                    <div className="relative h-full flex flex-col p-8">
                      {/* Emoji Badge */}
                      <div className="absolute top-6 right-6 text-4xl animate-bounce" style={{ animationDuration: '3s' }}>
                        {achievement.emoji}
                      </div>

                      {/* Type Badge */}
                      <div className={`inline-flex self-start px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${
                        isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-600'
                      } backdrop-blur-sm`}>
                        {achievement.type}
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div 
                          className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                          style={{
                            boxShadow: `0 20px 60px -10px ${isDark ? 'rgba(34, 211, 238, 0.4)' : 'rgba(168, 85, 247, 0.4)'}`
                          }}
                        >
                          <IconComponent className="text-white" size={48} />
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-50 blur-xl`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center space-y-3">
                        <h3 className={`text-2xl font-bold text-center leading-tight ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {achievement.title}
                        </h3>
                        
                        <p className={`text-base text-center font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {achievement.organization}
                        </p>
                        
                        <p className={`text-sm text-center font-bold ${
                          isDark ? 'text-cyan-400' : 'text-purple-600'
                        }`}>
                          📅 {achievement.date}
                        </p>
                      </div>

                      {/* CTA */}
                      {isActive && (
                        <div className="pt-4 text-center">
                          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold ${
                            isDark
                              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          } shadow-lg transform group-hover:scale-105 transition-all duration-300`}>
                            <span>View Details</span>
                            <ExternalLink size={18} />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Reflection Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-6 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? 'bg-gray-900/90 text-cyan-400 border border-cyan-500/30 hover:bg-gray-800 hover:border-cyan-400'
                : 'bg-white/90 text-purple-600 border border-purple-300 hover:bg-white hover:border-purple-500'
            } backdrop-blur-xl shadow-2xl`}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-3xl font-bold">‹</span>
            </div>
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-6 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? 'bg-gray-900/90 text-cyan-400 border border-cyan-500/30 hover:bg-gray-800 hover:border-cyan-400'
                : 'bg-white/90 text-purple-600 border border-purple-300 hover:bg-white hover:border-purple-500'
            } backdrop-blur-xl shadow-2xl`}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="text-3xl font-bold">›</span>
            </div>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3">
          {achievements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === currentIndex
                  ? `w-12 h-3 ${isDark ? 'bg-cyan-400' : 'bg-purple-600'}`
                  : `w-3 h-3 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`
              }`}
            />
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedAchievement && (
        <div
          onClick={() => setSelectedAchievement(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-5xl w-full rounded-3xl overflow-hidden ${
              isDark ? 'bg-gray-900 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'
            } shadow-2xl max-h-[90vh] overflow-y-auto`}
            style={{ animation: 'zoomIn 0.3s ease-out' }}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className={`absolute top-6 right-6 z-10 p-3 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-900'
              } shadow-2xl hover:scale-110`}
            >
              <X size={24} />
            </button>

            <div className="p-10">
              <div className="text-center mb-8">
                <div className={`inline-block p-6 rounded-3xl bg-gradient-to-br ${selectedAchievement.color} mb-6 shadow-2xl`}>
                  <selectedAchievement.icon className="text-white" size={56} />
                </div>
                <h3 className={`text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {selectedAchievement.title}
                </h3>
                <p className={`text-xl mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedAchievement.organization}
                </p>
                <p className={`text-base font-bold ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}>
                  {selectedAchievement.date}
                </p>
              </div>

              <p className={`text-center text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedAchievement.description}
              </p>

              <div className={`relative rounded-2xl overflow-hidden ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              } mb-8 shadow-xl`}>
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`animate-spin rounded-full h-16 w-16 border-4 border-t-transparent ${
                      isDark ? 'border-cyan-400' : 'border-purple-600'
                    }`}></div>
                  </div>
                )}
                <img
                  src={selectedAchievement.certificateUrl}
                  alt={`${selectedAchievement.title} Certificate`}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-auto transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                {selectedAchievement.verifyUrl && (
                  <a
                    href={selectedAchievement.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      isDark
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                    } shadow-xl`}
                  >
                    <ExternalLink size={22} />
                    Verify Certificate
                  </a>
                )}
                <button
                  onClick={() => window.open(selectedAchievement.certificateUrl, '_blank')}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isDark
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  } shadow-xl`}
                >
                  <ExternalLink size={22} />
                  View Full Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .perspective-\[2000px\] {
          perspective: 2000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Achievements;