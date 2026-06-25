import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Settings, Cpu, Database, Wrench, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Terminal className="text-sky-600" size={18} />,
    skills: ["Python", "Java", "SQL", "C"]
  },
  {
    title: "Software Development",
    icon: <Settings className="text-sky-600" size={18} />,
    skills: ["OOP", "DSA", "REST APIs", "Debugging"]
  },
  {
    title: "AI & Machine Learning",
    icon: <Cpu className="text-sky-600" size={18} />,
    skills: [
      "Machine Learning",
      "Classification",
      "Regression",
      "Feature Engineering",
      "Model Evaluation"
    ]
  },
  {
    title: "Databases",
    icon: <Database className="text-sky-600" size={18} />,
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools",
    icon: <Wrench className="text-sky-600" size={18} />,
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"]
  },
  {
    title: "Cloud",
    icon: <Cloud className="text-sky-600" size={18} />,
    skills: ["AWS", "GCP"]
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Background blobs */}
      <div className="absolute top-[40%] left-[10%] w-[350px] h-[350px] rounded-full bg-cyan-100/30 blur-[100px] -z-10 animate-blob-float" />

      <div ref={ref} className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-left mb-12"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive mapping of technologies, engineering models, databases, and environments I use.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: categoryIndex * 0.04 }}
              className="glass-card rounded-2xl p-6 hover:border-sky-300/40 hover:bg-white/60 hover:shadow-md transition-all duration-300 h-full flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-5 border-b border-gray-200/30 pb-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100/50 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xs font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/40 border border-white/80 text-gray-700 hover:scale-105 hover:bg-white/85 hover:text-sky-600 hover:border-sky-300/60 hover:shadow-md hover:shadow-sky-100/40 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
