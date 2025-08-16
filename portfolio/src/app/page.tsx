"use client"

import React, { useState } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Navigation } from "@/components/frames/Navigation";
import { HeroSection } from "@/components/frames/HeroSection";
import { SkillsSection } from "@/components/frames/SkillsSection";
import { ExperienceSection } from "@/components/frames/ExperienceSection";
import { ProjectsSection } from "@/components/frames/ProjectsSection";
import { ContactSection } from "@/components/frames/ContactSection";

export default function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 scroll-smooth">
      {/* Fixed Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsNavigationOpen(true)}
        className="fixed top-8 right-8 z-40 w-14 h-14 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center group transition-all duration-300 hover:scale-110"
      >
        <Menu className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
      </motion.button>

      {/* Navigation Overlay */}
      <Navigation 
        isOpen={isNavigationOpen} 
        onClose={() => setIsNavigationOpen(false)} 
      />

      {/* Scroll Snap Container */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <div className="snap-start">
          <HeroSection />
        </div>
        <div className="snap-start">
          <SkillsSection />
        </div>
        <div className="snap-start">
          <ExperienceSection />
        </div>
        <div className="snap-start">
          <ProjectsSection />
        </div>
        <div className="snap-start">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}