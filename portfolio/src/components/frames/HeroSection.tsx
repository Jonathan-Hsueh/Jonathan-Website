import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {Mail } from "lucide-react";

const GitHubIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={24} 
    height={24} 
    viewBox="0 0 24 24"
    className={className}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
      <path strokeDasharray={32} strokeDashoffset={32} d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3">
        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></animate>
      </path>
      <path strokeDasharray={10} strokeDashoffset={10} d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31">
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></animate>
      </path>
    </g>
  </svg>
);


const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={24} 
    height={24} 
    viewBox="0 0 24 24"
    className={className}
  >
    <circle cx={4} cy={4} r={2} fill="currentColor" fillOpacity={0}>
      <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1"></animate>
    </circle>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
      <path strokeDasharray={12} strokeDashoffset={12} d="M4 10v10">
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0"></animate>
      </path>
      <path strokeDasharray={12} strokeDashoffset={12} d="M10 10v10">
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0"></animate>
      </path>
      <path strokeDasharray={24} strokeDashoffset={24} d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5">
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0"></animate>
      </path>
    </g>
  </svg>
);

export function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Full Stack Developer & UI/UX Enthusiast",
    "Digital Craftsman & Problem Solver",
    "Code Architect & Design Thinker", 
    "Tech Explorer & User Advocate",
    "Creative Developer & Innovation Driver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10"></div>
      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>
              
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                Alex Johnson
              </h1>
              
              <div className="h-8 flex items-center">
                <motion.p 
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl text-gray-600 font-medium"
                >
                  {taglines[currentTagline]}
                </motion.p>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                I craft digital experiences that blend beautiful design with powerful functionality. 
                Passionate about creating scalable solutions that make a difference. ✨
              </p>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <GitHubIcon className="w-5 h-5" />
                GitHub
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <LinkedInIcon className="w-5 h-5" />
                LinkedIn
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.img 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                src="/bio:jhsueh.jpg" 
                alt="Profile Image"
                className="w-96 h-96 object-contain drop-shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-25 animate-pulse delay-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}