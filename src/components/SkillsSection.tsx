import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    color: "primary",
    skills: ["Python", "Java", "C", "SQL"],
  },
  {
    title: "AI / Machine Learning",
    icon: "🤖",
    color: "accent",
    skills: ["Machine Learning", "Deep Learning", ],
  },
  {
    title: "Libraries & Frameworks",
    icon: "📚",
    color: "primary",
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    title: "Development Tools",
    icon: "🛠️",
    color: "accent",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook","Google Colab"],
  },
  {
    title: "Cloud Platforms",
    icon: "☁️",
    color: "primary",
    skills: ["AWS (Basics)", "Google Cloud (Basics)"],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "accent",
    skills: ["MySQL"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 particle-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                  category.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                } group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                    }}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-default ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-glow-sm"
                        : "bg-accent/10 text-accent hover:bg-accent/20 hover:shadow-glow-accent"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Floating Elements */}
        <div className="hidden lg:block">
          <motion.div
            className="absolute top-1/4 right-10 text-6xl opacity-20"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            🐍
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 left-10 text-5xl opacity-20"
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            🤖
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/4 text-4xl opacity-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            ☁️
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
