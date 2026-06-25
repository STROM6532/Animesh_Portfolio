import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, BookOpen, Trophy } from "lucide-react";

const educationItems = [
  {
    institution: "Brainware University, Barasat",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Specialization in Artificial Intelligence & Machine Learning",
    duration: "2023 – 2027",
    type: "university"
  },
  {
    institution: "Gobindapur High School",
    degree: "Higher Secondary Education (Class XII - WBCHSE)",
    duration: "Graduated: 2023",
    type: "school"
  },
  {
    institution: "Sonapetya High School",
    degree: "Secondary Education (Class X - WBBSE)",
    duration: "Graduated: 2021",
    type: "school"
  }
];

const coursework = [
  "Data Structures & Algorithms",
  "Object Oriented Programming (OOP)",
  "Machine Learning Foundations",
  "Relational Databases (SQL)",
  "Feature Engineering & Analytics",
  "Model Tuning & Evaluation"
];

const academicHighlights = [
  {
    title: "Smart India Hackathon (SIH)",
    description: "Developed solutions for national challenge problem statements in a competitive team setting."
  },
  {
    title: "Nexathon Hackathon",
    description: "Engineered automated data analytics pipelines within compressed timelines."
  },
  {
    title: "Unstop Challenge Exposures",
    description: "Engaged in competitive algorithmic coding rounds and database analysis sprints."
  }
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Background blobs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-cyan-100/20 blur-[110px] -z-10 animate-blob-float" />

      <div ref={ref} className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-left mb-12"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic qualifications, specialized study paths, and competitive hackathon engagements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Qualifications timeline (7 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider pl-1 mb-2">Qualifications</h3>
            
            <div className="space-y-4">
              {educationItems.map((edu) => (
                <div 
                  key={edu.institution + edu.degree}
                  className={`glass-card rounded-2xl p-6 hover:border-sky-300/40 hover:bg-white/60 hover:shadow-xs transition-all duration-350 ${
                    edu.type === "university" ? "border-sky-200/60" : "border-white/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      edu.type === "university" 
                        ? "bg-sky-50 border border-sky-100 text-sky-600" 
                        : "bg-white/40 border border-white/80 text-gray-400"
                    }`}>
                      <GraduationCap size={20} />
                    </div>

                    <div className="space-y-1.5 min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-sm font-bold text-gray-900 truncate">{edu.institution}</h4>
                        <span className="text-[10px] font-semibold text-gray-400 flex items-center gap-1">
                          <Calendar size={12} />
                          {edu.duration}
                        </span>
                      </div>
                      
                      <p className="text-xs text-gray-600 font-semibold">{edu.degree}</p>
                      
                      {edu.specialization && (
                        <p className="text-xs text-sky-600 font-medium">{edu.specialization}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Academic Highlights / Coursework (5 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            
            {/* Academic highlights */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider pl-1 flex items-center gap-1.5">
                <Trophy size={14} className="text-sky-600" />
                Hackathons & Challenges
              </h3>
              
              <div className="space-y-4 bg-white/40 border border-white/60 rounded-2xl p-5">
                {academicHighlights.map((high) => (
                  <div key={high.title} className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                      <Award size={14} className="text-sky-500" />
                      {high.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed pl-5">
                      {high.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coursework list */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider pl-1 flex items-center gap-1.5">
                <BookOpen size={14} className="text-sky-600" />
                Core Coursework
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/40 border border-white/80 text-gray-600"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default EducationSection;
