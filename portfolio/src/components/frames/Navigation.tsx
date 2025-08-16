import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { id: "about", label: "About", number: "01" },
  { id: "skills", label: "Skills", number: "02" },
  { id: "experience", label: "Experience", number: "03" },
  { id: "projects", label: "Projects", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];

export function Navigation({ isOpen, onClose }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-50 flex items-center justify-center"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            onClick={onClose}
            className="absolute top-8 right-8 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </motion.button>

          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-16"
            >
              Navigate
            </motion.h1>

            <nav className="space-y-8">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center gap-8 text-left hover:translate-x-4 transition-transform duration-300"
                >
                  <span className="text-blue-400 font-mono text-2xl group-hover:text-purple-400 transition-colors">
                    {item.number}
                  </span>
                  <span className="text-4xl lg:text-5xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.label}
                  </span>
                  <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1 group-hover:from-blue-400/50 transition-colors"></div>
                </motion.button>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16"
            >
              <p className="text-gray-400 text-lg">
                Click any section to jump there instantly
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}