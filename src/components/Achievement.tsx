import React, { useState } from 'react';

import {
  Award, Trophy, Star, CheckCircle,
  Target, Zap, Code, BookOpen, X, ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock theme context - replace with your actual useTheme hook
const useTheme = () => {
  const [isDark, setIsDark] = useState(true);
  return { isDark, setIsDark };
};

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  icon: any;
  color: string;
  description: string;
  certificateUrl: string;
  verifyUrl?: string;
  type: 'certification' | 'award' | 'achievement';
}

const Achievements: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Introduction to Database Systems',
      organization: 'NPTEL/IIT Madras',
      date: 'April 2025',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      description: '',
      certificateUrl: 'https://drive.google.com/file/d/11SI1B2rgIt8KmuTsGQpmSRbJdch0_4ca/view?usp=sharing',
      type: 'certification'
    },
    {
      id: 2,
      title: 'Hackathon Winner',
      organization: 'DeepVision Hackathon',
      date: 'October 2025',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      description: 'First place in hackathon with 25+ participating teams',
      certificateUrl: 'https://drive.google.com/file/d/1aTm2pQOxCiFbOHmdsJprtxdOihHWxtrY/view?usp=sharing',
      type: 'award'
    },
    {
      id: 3,
      title: 'Introduction to Machine Learning',
      organization: 'Nptel/IIT Kharagpur',
      date: 'September 2025',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
      description: 'Professional Cloud Architect certification',
      certificateUrl: 'https://drive.google.com/file/d/1aoSCb_aNNWCJ6Cilb2zKqaiHmR8X79NY/view?usp=drive_link',
      type: 'certification'
    },
    {
      id: 4,
      title: 'Python Developer Course',
      organization: 'Udemy',
      date: 'November 2023',
      icon: CheckCircle,
      color: 'from-cyan-500 to-blue-500',
      description: 'Complete Python Developer : Zero to Mastery',
      certificateUrl: 'https://drive.google.com/file/d/163rj7tbEDNsAka9kY5xh0o0PoGiKRgEC/view?usp=sharing',
      type: 'certification'
    },
    {
      id: 5,
      title: 'Machine Learning Certificate',
      organization: 'Udemy',
      date: 'Feb 2025',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      description: 'Introduction to Machine Learning',
      certificateUrl: 'https://drive.google.com/file/d/1XHoLgp-FGAX_QzIrZ_qhPUleetzoYm9-/view?usp=sharing',
      type: 'certification'
    },
      {
        id: 6,
        title: 'Data Structures and Algorithms',
        organization: 'Udemy',
        date: 'November 2024',
        icon: Target,
        color: 'from-green-500 to-emerald-500',
        description: 'Database administration and development',
        certificateUrl: 'https://drive.google.com/file/d/1vTAmradkwnTt7CYlod1odBrTZ_gGY_eW/view?usp=sharing',
        type: 'certification'
      },
      {
        id: 7,
        title: 'Programming C++ Bootcamp',
        organization: 'Udemy',
        date: 'May 2024',
        icon: Zap,
        color: 'from-pink-500 to-rose-500',
        description: 'Beginning C++ Programming - From Beginner to Beyond',
        certificateUrl: 'https://drive.google.com/file/d/1Ilz0KZEC-SUnQyO7Ge4zSIAe0-nhoAwK/view?usp=sharing',
        type: 'certification'
      },
      {
        id: 8,
        title: 'Open Source Contributor',
        organization: 'GitHub',
        date: 'Ongoing',
        icon: BookOpen,
        color: 'from-indigo-500 to-purple-500',
        description: 'Active contributor to 10+ open source projects',
        certificateUrl: 'https://github.com/vedant-zeus',
        verifyUrl: 'https://github.com/vedant-zeus',
        type: 'achievement'
      }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  const handleDownload = (certificateUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = `${title.replace(/\s+/g, '_')}_Certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="achievements"
      className={`py-20 pt-32 min-h-screen transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-tr from-gray-50 via-pink-100 to-yellow-100"
      }`}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse ${
          isDark ? 'bg-purple-600' : 'bg-purple-300'
        }`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse ${
          isDark ? 'bg-cyan-600' : 'bg-cyan-300'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Click on any badge to view the certificate or achievement details
          </p>
        </motion.div>

        {/* Badges Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => {
                  setSelectedAchievement(achievement);
                  setImageLoaded(false);
                }}
                className={`relative group cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50'
                    : 'bg-white/70 hover:bg-white/90 border border-gray-200/50'
                } backdrop-blur-sm hover:shadow-2xl`}
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${achievement.color} blur-xl -z-10`} />
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${
                  isDark ? 'bg-gray-700/80 text-gray-300' : 'bg-white/80 text-gray-700'
                }`}>
                  {achievement.type}
                </div>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className={`text-lg font-bold text-center mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {achievement.title}
                </h3>
                <p className={`text-sm text-center mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {achievement.organization}
                </p>
                <p className={`text-xs text-center font-semibold ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}>
                  {achievement.date}
                </p>
                <p className={`text-xs text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  Click to view →
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-4xl w-full rounded-2xl overflow-hidden ${
                isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-2xl max-h-[90vh] overflow-y-auto`}
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                } shadow-lg`}
              >
                <X size={24} />
              </button>

              <div className="p-8">
                <div className="text-center mb-6">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${selectedAchievement.color} mb-4`}>
                    <selectedAchievement.icon className="text-white" size={48} />
                  </div>
                  <h3 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {selectedAchievement.title}
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedAchievement.organization}
                  </p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}>
                    {selectedAchievement.date}
                  </p>
                </div>

                <p className={`text-center mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedAchievement.description}
                </p>

                <div className={`relative rounded-xl overflow-hidden ${
                  isDark ? 'bg-gray-800' : 'bg-gray-100'
                } mb-6`}>
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
                    </div>
                  )}
                  <img
                    src={selectedAchievement.certificateUrl}
                    alt={`${selectedAchievement.title} Certificate`}
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-auto transition-opacity duration-300 ${
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
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold ${
                        isDark
                          ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                          : 'bg-purple-600 hover:bg-purple-700 text-white'
                      } shadow-lg`}
                    >
                      <ExternalLink size={20} />
                      Verify Certificate
                    </a>
                  )}
                  <button
                    onClick={() => handleDownload(selectedAchievement.certificateUrl, selectedAchievement.title)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold ${
                      isDark
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    } shadow-lg`}
                  >
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
