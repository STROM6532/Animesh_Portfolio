import { motion } from "framer-motion";
import { Terminal, Settings, Cpu, Database, Wrench, Cloud, MonitorPlay, Layers } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import premiumBg from "@/assets/premium_bg.png";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core scripting and compiler languages used to author backend routines and algorithms.",
    icon: <Terminal className="text-sky-600 dark:text-sky-400" size={18} />,
    skills: ["Python", "Java (OOP)", "SQL", "C"]
  },
  {
    title: "Software Development",
    description: "Methodologies, structural design paradigms, and systemic logic used to program applications.",
    icon: <Settings className="text-sky-600 dark:text-sky-400" size={18} />,
    skills: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms (DSA)", "Problem Solving", "Debugging"]
  },
  {
    title: "Machine Learning & AI",
    description: "Supervised classifiers, regression analysis, and preprocessing parameters modeling computational predictions.",
    icon: <Cpu className="text-sky-600 dark:text-sky-400" size={18} />,
    skills: ["Machine Learning", "Classification", "Regression", "Feature Engineering", "Model Evaluation"]
  },
  {
    title: "Data Science & Analytics",
    description: "Data libraries, manipulation engines, and plotting frameworks used to extract insights.",
    icon: <Layers className="text-sky-600 dark:text-sky-400" size={18} />,
    skills: ["Pandas", "NumPy", "Matplotlib", "Data Analysis", "Data Visualization"]
  },
  {
    title: "Frameworks & Libraries",
    description: "Environments, modeling toolkits, and software bundles helping train pipelines.",
    icon: <MonitorPlay className="text-sky-600 dark:text-sky-400" size={18} />,
    skills: ["Scikit-learn", "Jupyter Notebook"]
  },
  {
    title: "Databases",
    description: "Relational engines and indexing warehouses utilized to write and fetch transactional logs.",
    icon: <Database className="text-sky-600 dark:text-sky-400" size={18} />,
    skills: ["MySQL", "PostgreSQL"]
  },
  {
    title: "Tools & Platforms",
    description: "Collaborative systems, version repositories, and development environments for code writing.",
    icon: <Wrench className="text-sky-600 dark:text-sky-400" size={18} />,
    skills: ["Git", "GitHub", "Google Colab", "VS Code"]
  },
  {
    title: "Cloud (Basics)",
    description: "Distributed server computing resources and infrastructure nodes deployment basics.",
    icon: <Cloud className="text-sky-600 dark:text-sky-400" size={18} />,
    skills: ["AWS", "Google Cloud Platform (GCP)"]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-sky-200/50 selection:text-sky-850 relative">
      <div 
        className="fixed inset-0 pointer-events-none -z-20 opacity-[0.12] blur-[8px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${premiumBg})` }}
      />

      <Navigation />

      <main className="pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-transparent py-16 md:py-24">
          <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-sky-200/30 blur-[120px] -z-10 animate-blob-float" />
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-left max-w-4xl">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-4">Core Competency</span>
              <h1 className="editorial-heading">Technical <br />Skills.</h1>
              <p className="editorial-subheading mt-4 text-balance">
                A breakdown of my technical stack, tools, and methodologies. I focus on backend stability, database performance, and practical machine learning implementation.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS GRID INDEX */}
        <section className="pb-24">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            {/* Introductory statement */}
            <div className="max-w-3xl mb-12 text-left">
              <p className="text-base text-gray-500 leading-relaxed font-semibold">
                My engineering approach is built around using the right tool for the job. While my academic studies focus on Artificial Intelligence and Machine Learning, I spend a significant amount of time building backend services, designing normalized database schemas, and writing clean, object-oriented code. Below are the key areas where I have hands-on project experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="glass-card rounded-2xl p-6 border border-white/50 shadow-md hover:border-sky-300/40 hover:bg-white/60 hover:shadow-xl hover:scale-[1.01] transition-all duration-350 flex flex-col justify-between h-full group animate-fade-in"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-3 border-b border-gray-250/20 pb-3">
                        <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
                          {category.icon}
                        </div>
                        <h3 className="text-sm font-extrabold text-gray-900 dark:text-gray-100 tracking-tight leading-none uppercase">
                          {category.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-4 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5 text-left pt-3 border-t border-gray-100 dark:border-gray-800/20 mt-auto">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-full text-xs font-extrabold bg-sky-50/50 hover:bg-sky-50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/30 text-sky-800 dark:text-sky-300 hover:text-sky-900 dark:hover:text-sky-200 transition-all duration-200 cursor-default shadow-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
