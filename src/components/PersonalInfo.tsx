import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const timeline = [
  { year: "Till 2021", title: "DAV Public School", desc: "Completed Secondary School education at DAV Public School." },
  { year: "2021 – 2023", title: "Pratibha International Jr. College", desc: "Studied Science stream and developed strong foundations." },
  { year: "2023 – 2027", title: "SRM Institute of Science and Technology", desc: "Pursuing B.Tech with the vision to become a skilled engineer." },
  { year: "Future", title: "Road to Skilled Engineer", desc: "Continuously learning, building projects, and growing as an engineer." },
];


const AnimatedBackground = () => {
  const icons = ['✨', '⭐', '💫', '🌟', '✦', '★', '☆', '⚡', '💥'];
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 0.8 + Math.random() * 1.5,
      }));
    };

    setParticles(generateParticles());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-2xl opacity-0"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}rem`,
          }}
          animate={{
            opacity: [0, 0.6, 0.8, 0.6, 0],
            y: [0, -30, -60],
            scale: [0.5, 1, 1.2, 1, 0.8],
            rotate: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {particle.icon}
        </motion.div>
      ))}
      
      {/* Floating glowing orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-xl"
          style={{
            width: `${100 + Math.random() * 150}px`,
            height: `${100 + Math.random() * 150}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              ['rgba(59, 130, 246, 0.15)', 'rgba(139, 92, 246, 0.15)', 'rgba(236, 72, 153, 0.15)'][i % 3]
            }, transparent)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

const Journey = () => {
  const containerRef = useRef(null);
  const [totalHeight, setTotalHeight] = useState(2000);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 40,
    restDelta: 0.0001
  });

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const children = container.querySelectorAll('.timeline-item');
        if (children.length > 0) {
          const lastChild = children[children.length - 1];
          const rect = lastChild.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const relativePosition = rect.top - containerRect.top + container.scrollTop;
          setTotalHeight(relativePosition);
        }
      }
    };

    const timer = setTimeout(updateHeight, 200);
    window.addEventListener('resize', updateHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      <AnimatedBackground />
      <h2 className="text-4xl font-bold text-center mb-16 relative z-10">🚀 My Journey</h2>
      <div className="relative max-w-4xl mx-auto px-4">
        <WavyLine 
          scrollProgress={smoothProgress}
          totalHeight={totalHeight}
        />

        <div className="space-y-32 relative z-10">
          {timeline.map((item, i) => (
            <JourneyStep
              key={i}
              year={item.year}
              title={item.title}
              desc={item.desc}
              side={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const WavyLine = ({ scrollProgress, totalHeight }) => {
  const generatePath = () => {
    let path = 'M 100 0';
    const amplitude = 35;
    const frequency = 0.008;
    
    for (let y = 0; y <= totalHeight; y += 5) {
      const x = 100 + Math.sin(y * frequency * Math.PI) * amplitude;
      path += ` L ${x} ${y}`;
    }

    return path;
  };

  const pathData = generatePath();
  
  const dotX = useTransform(scrollProgress, (v) => {
    const y = v * totalHeight;
    return 100 + Math.sin(y * 0.008 * Math.PI) * 35;
  });
  
  const dotY = useTransform(scrollProgress, (v) => v * totalHeight);

  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none" style={{ height: totalHeight }}>
      <svg
        width="200"
        height={totalHeight}
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="40%" stopColor="#8b5cf6" />
            <stop offset="80%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <path
          d={pathData}
          stroke="#374151"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        
        <motion.path
          d={pathData}
          stroke="url(#lineGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          style={{
            pathLength: scrollProgress
          }}
          initial={{ pathLength: 0 }}
        />
        
        <motion.circle
          r="6"
          fill="#60a5fa"
          filter="url(#glow)"
          style={{
            x: dotX,
            y: dotY
          }}
        >
          <animate
            attributeName="r"
            values="6;9;6"
            dur="2s"
            repeatCount="indefinite"
          />
        </motion.circle>
        
        <motion.circle
          r="12"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
          opacity="0.4"
          style={{
            x: dotX,
            y: dotY
          }}
        >
          <animate
            attributeName="r"
            values="12;16;12"
            dur="2s"
            repeatCount="indefinite"
          />
        </motion.circle>
      </svg>
    </div>
  );
};

const JourneyStep = ({ year, title, desc, side }) => {
  const localRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: localRef,
    offset: ["start 0.85", "start 0.4"],
  });

  const smoothScale = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30
  });

  const opacity = useTransform(smoothScale, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(smoothScale, [0, 0.5, 1], [0.85, 1, 1]);
  const x = useTransform(
    smoothScale,
    [0, 0.5, 1],
    [side === "left" ? -60 : 60, 0, 0]
  );

  return (
    <div className="timeline-item relative">
      <motion.div
        ref={localRef}
        style={{ opacity, scale, x }}
        className={`relative w-full md:w-1/2 px-4 py-6 ${
          side === "left" 
            ? "md:text-right md:pr-20 md:ml-auto" 
            : "md:text-left md:pl-20 md:mr-auto"
        }`}
      >
        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-colors duration-300"
          whileHover={{ scale: 1.05, rotate: side === "left" ? -2 : 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="text-blue-400 font-mono text-sm mb-2">{year}</div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{desc}</p>
        </motion.div>

        <motion.div
          style={{ scale: smoothScale }}
          className={`absolute top-1/2 -translate-y-1/2 z-20 ${
            side === "left" 
              ? "md:-right-[52px] right-1/2 translate-x-1/2 md:translate-x-0" 
              : "md:-left-[52px] left-1/2 -translate-x-1/2 md:translate-x-0"
          }`}
        >
          <div className="relative w-10 h-10">
            <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
            <span className="absolute inset-1 rounded-full bg-blue-500 border-4 border-gray-900" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Journey;