import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const disciplines = [
  { num: "01", title: "Software Development", desc: "Building highly modular backend models and scalable user utilities." },
  { num: "02", title: "AI & Machine Learning", desc: "Deploying regression, classification, and agentic multi-node frameworks." },
  { num: "03", title: "Backend Engineering", desc: "Writing optimized API schemas, PostgreSQL logic, and server configurations." },
  { num: "04", title: "Financial Analytics", desc: "Mining financial trends, NIFTY100 indices, and anomalous statistics." },
  { num: "05", title: "Problem Solving", desc: "Refining algorithmic execution through coding challenges and hackathons." },
  { num: "06", title: "Product Thinking", desc: "Bridging engineering execution with user experience design and metrics." }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden bg-transparent">
      <div ref={ref} className="section-container">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Storytelling (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-4">About</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 leading-[1.08] mb-6">
                Shaping Code <br />
                Into Products.
              </h3>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-base text-gray-600 leading-relaxed font-medium"
            >
              I am Animesh Sahoo, a Computer Science undergraduate specialized in AI and Machine Learning. I view programming not just as writing syntax, but as building intelligent, user-ready systems.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-gray-500 leading-relaxed"
            >
              Throughout my work, I focus on integrating machine learning forecasting with backend APIs, database schemas, and analytics layers. I combine structural rigor with logical speed to ship production-ready projects.
            </motion.p>
          </div>

          {/* Right Column Disciplines List (7 cols) */}
          <div className="lg:col-span-7 space-y-2 mt-8 lg:mt-0">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1 mb-4">Core Disciplines</h4>
            
            <div className="divide-y divide-gray-200/60 border-t border-b border-gray-200/60">
              {disciplines.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.04 + 0.15 }}
                  className="py-5 flex items-start gap-6 group hover:pl-2 transition-all duration-300"
                >
                  <span className="font-mono text-xs text-sky-500 font-bold mt-0.5">{item.num}</span>
                  <div className="flex-1 sm:flex items-center justify-between gap-6">
                    <h5 className="text-base font-bold text-gray-900 group-hover:text-sky-600 transition-colors mb-1 sm:mb-0">
                      {item.title}
                    </h5>
                    <p className="text-xs text-gray-500 max-w-sm leading-relaxed sm:text-right">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
