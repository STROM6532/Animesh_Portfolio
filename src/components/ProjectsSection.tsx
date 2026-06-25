import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Brain, Cpu, Code2, ShieldCheck, HeartPulse, LineChart, TrendingUp, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "NeuroPath AI",
    tagline: "AI-Powered Career Guidance & Interview Platform",
    overview: "Built an AI-driven ecosystem that automates technical interview simulation, parses resume parameters, detects skill-gaps, and designs personalized learning paths to optimize placement preparation.",
    features: ["Mock interview simulation with conversational AI", "Automated resume parsing and optimization scoring", "Skill-gap analysis mapping custom study roadmaps"],
    tech: ["Next.js", "TypeScript", "Python", "AI/ML"],
    github: "https://github.com/animesh6532",
    hasDemo: true,
    icon: <Brain className="text-white" size={24} />,
    gradient: "from-sky-400 to-blue-500",
    visual: (
      <div className="w-full h-full p-6 font-mono text-[10px] text-gray-500 flex flex-col justify-between bg-white/10 rounded-2xl">
        <div className="flex items-center justify-between border-b border-gray-200/40 pb-3">
          <span className="font-bold text-gray-800">neuropath_core_agent.py</span>
          <span className="text-sky-600 font-bold">● ACTIVE</span>
        </div>
        <div className="space-y-2">
          <p className="text-gray-700 font-bold">{"{ 'candidate': 'Animesh Sahoo', 'role': 'AI Engineer' }"}</p>
          <div className="h-2 w-full bg-gray-200/50 rounded-full overflow-hidden">
            <div className="h-full w-[92%] bg-sky-500" />
          </div>
          <p className="text-[9px] text-gray-400">Model Accuracy: 92% (Tuned on technical datasets)</p>
        </div>
        <div className="pt-3 border-t border-gray-200/40 flex items-center justify-between text-[9px] text-gray-400">
          <span>GPU: 8%</span>
          <span>Latency: 180ms</span>
        </div>
      </div>
    )
  },
  {
    title: "StartupForge AI",
    tagline: "Multi-Agent Startup Intelligence Platform",
    overview: "Coordinated a team of specialized AI agents using LangGraph. Automates competitive market studies, forecasts product milestones, and builds financial viability projections for startups.",
    features: ["Multi-agent orchestration workflows using LangGraph", "Automated competitive landscape indexing", "Statistical financial runways and product timeline projection"],
    tech: ["Python", "LangGraph", "AI Agents", "LLMs"],
    github: "https://github.com/animesh6532",
    hasDemo: false,
    icon: <Cpu className="text-white" size={24} />,
    gradient: "from-blue-400 to-indigo-500",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-6 bg-white/10 rounded-2xl">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-10 h-10 rounded-full bg-white/60 border border-white/80 flex items-center justify-center text-gray-800 text-[10px] font-bold shadow-xs">Market</div>
          <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-white/60 border border-white/80 flex items-center justify-center text-gray-800 text-[10px] font-bold shadow-xs">Financial</div>
          <div className="absolute bottom-0 left-12 w-10 h-10 rounded-full bg-white/60 border border-white/80 flex items-center justify-center text-gray-800 text-[10px] font-bold shadow-xs">Scoping</div>
          <div className="w-12 h-12 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-850 text-xs font-extrabold shadow">Orch</div>
          {/* Connecting vector elements */}
          <div className="absolute w-px h-12 bg-gray-300/60 top-10 left-16 rotate-45" />
          <div className="absolute w-px h-12 bg-gray-300/60 top-10 right-16 -rotate-45" />
        </div>
      </div>
    )
  },
  {
    title: "NexTwin AI",
    tagline: "Industrial Digital Twin Platform",
    overview: "Monitors IoT industrial machinery sensor streams in real-time, detecting mechanical anomalies and projecting component degradation to schedule predictive maintenance.",
    features: ["Real-time sensor metrics integration & parsing", "ML degradation projection on mechanical parts", "Automated alerts system and predictive repair scheduling"],
    tech: ["Python", "FastAPI", "React", "Machine Learning"],
    github: "https://github.com/animesh6532",
    hasDemo: true,
    icon: <Code2 className="text-white" size={24} />,
    gradient: "from-sky-300 to-cyan-500",
    visual: (
      <div className="w-full h-full p-6 flex flex-col justify-between bg-white/10 rounded-2xl">
        <div className="flex items-center justify-between border-b border-gray-200/40 pb-3">
          <span className="text-[10px] font-bold text-gray-800 font-mono">SENSOR DEGRADATION GRAPH</span>
          <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/50">OK</span>
        </div>
        <div className="h-28 flex items-end gap-2 px-2 pt-4">
          <div className="w-full bg-sky-100 border border-sky-200/30 rounded-t-lg h-[25%]" />
          <div className="w-full bg-sky-200/50 border border-sky-300/30 rounded-t-lg h-[45%]" />
          <div className="w-full bg-sky-300/60 border border-sky-400/30 rounded-t-lg h-[80%]" />
          <div className="w-full bg-blue-400/80 border border-blue-500/30 rounded-t-lg h-[95%]" />
        </div>
      </div>
    )
  },
  {
    title: "Fraud Detect",
    tagline: "AI-Powered Fraud Intelligence Platform",
    overview: "Built an instant risk-scoring engine that indexes financial transactions, computes suspicion factors, and coordinates validation reviews to detect modern transaction anomalies.",
    features: ["Real-time transaction risk scoring & anomaly checks", "Statistical dashboard for fraud pattern indexing", "Investigation workflow queue for reviews coordinator"],
    tech: ["Python", "FastAPI", "Next.js", "Scikit-learn"],
    github: "https://github.com/animesh6532",
    hasDemo: false,
    icon: <ShieldCheck className="text-white" size={24} />,
    gradient: "from-blue-500 to-sky-600",
    visual: (
      <div className="w-full h-full flex items-center justify-center p-6 bg-white/10 rounded-2xl">
        <div className="bg-white/60 border border-gray-200 rounded-xl p-5 text-center space-y-2 w-44 shadow-sm">
          <p className="text-[9px] font-bold text-gray-400 font-mono">SUSPICION RATIO</p>
          <p className="text-3xl font-extrabold text-red-500">94.2%</p>
          <p className="text-[8px] font-bold bg-red-50 text-red-600 border border-red-200/50 py-1 rounded">ALERT: ANOMALOUS</p>
        </div>
      </div>
    )
  },
  {
    title: "CareBot+",
    tagline: "Privacy-First AI Healthcare Assistant",
    overview: "Designed a patient-focused healthcare companion providing private symptom checkers, emergency coordinator triggers, and medical chat workflows.",
    features: ["Private symptom evaluator with medical contextualization", "Emergency coordinates broadcast trigger", "Medications calendar tracker and chat histories"],
    tech: ["Next.js", "TypeScript", "MongoDB", "Gemini AI"],
    github: "https://github.com/animesh6532",
    hasDemo: true,
    icon: <HeartPulse className="text-white" size={24} />,
    gradient: "from-cyan-400 to-blue-500",
    visual: (
      <div className="w-full h-full p-6 flex flex-col justify-between bg-white/10 rounded-2xl">
        <div className="flex items-center gap-1.5 border-b border-gray-200/40 pb-3">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-[9px] font-bold text-gray-800">CareBot Core</span>
        </div>
        <div className="space-y-2">
          <p className="text-[9px] bg-white/60 p-2.5 rounded-xl text-gray-600 max-w-[80%]">
            Analyzing symptoms... Feature set matches standard seasonal indexes.
          </p>
          <p className="text-[9px] bg-sky-50 text-sky-850 border border-sky-200/40 p-2.5 rounded-xl self-end max-w-[80%] ml-auto">
            Recommended Action: Stay hydrated.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "NIFTY100 Financial Analytics",
    tagline: "Enterprise-Grade Financial Analytics Platform",
    overview: "Aggregated, cleaned, and structured NIFTY100 stock market indicators, implementing PostgreSQL schemas, Power BI dashboard views, and ML forecasting trend lines.",
    features: ["PostgreSQL database schema indexing ticker metadata", "Interactive Power BI executive dashboards", "Forecasting trend lines for market movements"],
    tech: ["Power BI", "PostgreSQL", "Python"],
    github: "https://github.com/animesh6532",
    hasDemo: false,
    icon: <LineChart className="text-white" size={24} />,
    gradient: "from-sky-400 to-indigo-500",
    visual: (
      <div className="w-full h-full p-6 flex flex-col justify-between bg-white/10 rounded-2xl">
        <div className="flex items-center justify-between border-b border-gray-200/40 pb-3">
          <div className="flex items-center gap-1.5">
            <TrendingUp size={14} className="text-sky-500" />
            <span className="text-[10px] font-bold text-gray-800 font-mono">NIFTY100 DAILY</span>
          </div>
          <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/40">
            +2.19%
          </span>
        </div>
        <div className="h-16 flex items-end">
          <svg className="w-full h-full stroke-sky-500 fill-transparent" viewBox="0 0 300 50">
            <path 
              d="M 0 45 L 35 40 L 70 42 L 105 28 L 140 32 L 175 12 L 210 18 L 245 5 L 300 2" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    )
  }
];

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative overflow-hidden bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-[20%] w-[450px] h-[450px] bg-sky-200/10 blur-[130px] -z-10 animate-blob-float" />

      <div ref={containerRef} className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-left mb-24"
        >
          <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-4">Case Studies</h2>
          <h3 className="editorial-heading">Featured Projects.</h3>
          <p className="editorial-subheading mt-2">
            Selected product launches bridging Artificial Intelligence, Machine Learning, and scalable architectures.
          </p>
        </motion.div>

        {/* Alternating Projects Strips */}
        <div className="space-y-36 md:space-y-52">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={project.title}
                className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                
                {/* Text Content Block */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`md:col-span-6 space-y-6 text-left ${
                    isEven ? "order-2 md:order-1" : "order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block">
                      {project.tagline}
                    </span>
                    <h4 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tighter">
                      {project.title}
                    </h4>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                    {project.overview}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-500">
                        <CheckCircle2 size={16} className="text-sky-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md active:translate-y-0 text-gray-700 text-xs font-bold transition-all shadow-xs"
                    >
                      <Github size={14} />
                      <span>View Code</span>
                    </a>
                    {project.hasDemo && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 hover:-translate-y-1 hover:shadow-md active:translate-y-0 text-white text-xs font-bold transition-all shadow-xs"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Large Visual Showcase (6 cols) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`md:col-span-6 flex justify-center ${
                    isEven ? "order-1 md:order-2" : "order-1"
                  }`}
                >
                  <div className="w-full relative group">
                    {/* Shadow ambient glow */}
                    <div className="absolute inset-0 bg-sky-200/20 rounded-2xl blur-xl group-hover:bg-sky-300/25 transition-all duration-300 -z-10" />
                    
                    {/* Card container */}
                    <div className="w-full h-64 sm:h-80 p-2 rounded-2xl border border-white/50 bg-white/20 backdrop-blur-md shadow-lg group-hover:scale-[1.01] transition-transform duration-300 overflow-hidden relative">
                      {project.visual}
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
