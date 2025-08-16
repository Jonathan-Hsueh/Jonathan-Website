import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting cloud solutions.",
      achievements: ["Improved app performance by 40%", "Led team of 5 developers", "Migrated legacy systems to microservices"],
      gradient: "from-blue-400 to-purple-600"
    },
    {
      title: "Full Stack Developer", 
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "New York, NY",
      description: "Built MVP from scratch using modern web technologies. Collaborated with designers and product managers to deliver user-centric solutions.",
      achievements: ["Delivered 15+ features", "Reduced load times by 60%", "Implemented CI/CD pipeline"],
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      location: "Boston, MA", 
      description: "Developed responsive websites and web applications for various clients across different industries.",
      achievements: ["Built 20+ client websites", "Achieved 98% client satisfaction", "Improved SEO rankings"],
      gradient: "from-pink-400 to-orange-500"
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-24 px-6 bg-gradient-to-r from-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Work Experience</h2>
          <p className="text-2xl text-gray-600">My professional journey</p>
        </motion.div>
        
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-96 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  {index + 1}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{exp.title}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="font-semibold text-lg">{exp.company}</div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Key Achievements:</h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center gap-3 mt-8">
            {experiences.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full opacity-50"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}