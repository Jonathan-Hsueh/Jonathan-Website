import React from "react";
import { motion } from "motion/react";

export function SkillsSection() {
  const skills = [
    { name: "React", level: "Expert", color: "bg-blue-500", lightColor: "bg-blue-50" },
    { name: "TypeScript", level: "Expert", color: "bg-purple-500", lightColor: "bg-purple-50" },
    { name: "Node.js", level: "Advanced", color: "bg-green-500", lightColor: "bg-green-50" },
    { name: "Python", level: "Advanced", color: "bg-yellow-500", lightColor: "bg-yellow-50" },
    { name: "GraphQL", level: "Intermediate", color: "bg-pink-500", lightColor: "bg-pink-50" },
    { name: "AWS", level: "Intermediate", color: "bg-orange-500", lightColor: "bg-orange-50" },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-24 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <p className="text-2xl text-gray-600">Technologies I love working with</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${skill.lightColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${skill.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300`}>
                  {index + 1}
                </div>
                <span className={`px-3 py-1 ${skill.color} text-white text-sm font-medium rounded-full`}>
                  {skill.level}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-6 p-8 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-3xl shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl">🚀</span>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Always Learning</h3>
              <p className="text-gray-600 text-lg">Constantly exploring new technologies and best practices</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}