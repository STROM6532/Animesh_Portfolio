import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp, Lightbulb, Target, Wrench, TrendingUp } from "lucide-react";

const projects = [
{
    id: 1,
    title: "NeuroPath AI",
    tagline: "AI-Powered Career Guidance & Interview Platform",
    icon: "🧠",
    overview:
      "Built an AI-powered platform that provides resume analysis, mock interviews, skill-gap detection, and personalized career guidance.",
    problem:
      "Students struggle to identify skill gaps and prepare effectively for technical interviews.",
    solution:
      "Developed a modular AI platform integrating resume analysis, interview simulation, and feedback generation to help candidates prepare with confidence.",
    technologies: ["Python", "AI/ML", "NLP", "Flask/FastAPI", "REST APIs", "GitHub"],
    outcomes: [
      "Automated resume analysis workflow",
      "Personalized interview preparation",
      "AI-generated feedback system",
      "Improved career guidance process",
    ],
    metrics: [
      { label: "Modules", value: "4+" },
      { label: "Interview Prompts", value: "120+" },
      { label: "Skill-Score Accuracy", value: "92%" },
    ],
    badges: ["AI/ML", "Backend", "Python", "FastAPI", "Machine Learning", "REST APIs"],
    githubLink: "https://github.com/animesh6532",
  },
  {
    id: 2,
    title: "Transaction Fraud Detection",
    tagline: "Machine Learning Fraud Detection System",
    icon: "💳",
    overview:
      "Built an intelligent fraud detection model to identify suspicious financial transactions using behavior-based analytics.",
    problem:
      "Traditional rule-based systems fail to detect modern fraud patterns.",
    solution:
      "Developed ML classification models using feature engineering and anomaly detection techniques to minimize false positives.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    outcomes: [
      "Fraud prediction pipeline",
      "Feature engineering implementation",
      "Classification model evaluation",
      "Data preprocessing automation",
    ],
    metrics: [
      { label: "Detection Rate", value: "94%" },
      { label: "Feature Sets", value: "18+" },
      { label: "Latency", value: "< 200ms" },
    ],
    badges: ["Python", "Machine Learning", "Backend", "Scikit-learn", "REST APIs", "Data Engineering"],
    githubLink: "https://github.com/animesh6532",
  },
  {
    id: 3,
    title: "Stock Price Prediction",
    tagline: "Machine Learning Market Forecasting",
    icon: "📈",
    overview:
      "Developed a stock market prediction system using historical market data and engineered time-series features.",
    problem:
      "Stock markets are noisy and hard to forecast, making data-driven insights essential for investor decisions.",
    solution:
      "Created regression models and backtesting pipelines to forecast prices while validating performance on historical datasets.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    outcomes: [
      "Time-series analysis",
      "Regression modeling",
      "Financial data visualization",
      "Prediction accuracy evaluation",
    ],
    metrics: [
      { label: "Backtests", value: "50+" },
      { label: "Model Types", value: "3" },
      { label: "Prediction Horizon", value: "7 days" },
    ],
    badges: ["Python", "Machine Learning", "Data Visualization", "Pandas", "NumPy", "Regression"],
    githubLink: "https://github.com/animesh6532",
  },
  {
    id: 4,
    title: "WellnessAI",
    tagline: "AI Healthcare Assistant",
    icon: "🏥",
    overview:
      "Built an AI-powered healthcare assistant using modern LLM architecture for contextual medical guidance.",
    problem:
      "Healthcare queries are often fragmented and difficult for users to interpret in real time.",
    solution:
      "Designed a conversational assistant with a secure backend and REST APIs to deliver reliable AI-powered medical support.",
    technologies: ["Python", "Flask", "Node.js", "LLM APIs"],
    outcomes: [
      "Secure backend architecture",
      "AI-powered medical assistance",
      "REST API integration",
      "Conversational AI implementation",
    ],
    metrics: [
      { label: "API Services", value: "5" },
      { label: "LLM Flows", value: "10+" },
      { label: "Response Time", value: "< 250ms" },
    ],
    badges: ["AI/ML", "Python", "Backend", "Flask", "Node.js", "REST APIs"],
    githubLink: "https://github.com/animesh6532",
    liveLink: "https://github.com/animesh6532",
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card overflow-hidden group"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
              {project.icon}
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-primary font-medium">{project.tagline}</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <p className="text-muted-foreground mt-4 leading-relaxed">
          {project.overview}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 space-y-6 border-t border-border/50 pt-6">
          {/* Problem Statement */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Target size={16} className="text-destructive" />
              Problem Statement
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-6">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Lightbulb size={16} className="text-primary" />
              Solution
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-6">
              {project.solution}
            </p>
          </div>

          {/* All Technologies */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Wrench size={16} className="text-accent" />
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2 pl-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
              {project.liveLink && (
  <a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl 
               bg-primary/10 text-primary font-medium text-sm 
               hover:bg-primary hover:text-white transition-all"
  >
    <ExternalLink size={16} />
    Live Project
  </a>
)}

          {/* Outcomes */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <TrendingUp size={16} className="text-green-500" />
              Outcomes & Learning
            </div>
            <ul className="space-y-2 pl-6">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-4 border-t border-border/50 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp size={16} />
          </>
        ) : (
          <>
            View Details <ChevronDown size={16} />
          </>
        )}
      </button>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 particle-grid opacity-15" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Real-world applications showcasing AI & ML expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/animesh6532"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline-hero"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
