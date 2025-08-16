import React from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

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

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-5xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            Have a project in mind? I'd love to hear about it. 💫
          </p>
          
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              alex@example.com
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <GitHubIcon className="w-5 h-5" />
              GitHub
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <LinkedInIcon className="w-5 h-5" />
              LinkedIn
            </motion.button>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          
          <p className="text-gray-400 text-lg">
            © 2024 Alex Johnson. Built with React & Tailwind CSS. Made with 💖
          </p>
        </motion.div>
      </div>
    </section>
  );
}