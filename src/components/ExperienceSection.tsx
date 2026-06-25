import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, BarChart3, Database, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative overflow-hidden bg-transparent">
      {/* Background Blobs */}
      <div className="absolute top-[10%] left-[10%] w-[380px] h-[380px] rounded-full bg-sky-200/20 blur-[110px] -z-10 animate-blob-float" />
      <div className="absolute bottom-[10%] right-[10%] w-[320px] h-[320px] rounded-full bg-blue-100/20 blur-[100px] -z-10 animate-blob-float" style={{ animationDelay: "2s" }} />

      <div ref={ref} className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-left mb-20"
        >
          <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-4">Experience</h2>
          <h3 className="editorial-heading">Case Studies.</h3>
          <p className="editorial-subheading mt-2">
            Selected internships in financial analytics and machine learning development.
          </p>
        </motion.div>

        {/* Case Studies Stack */}
        <div className="space-y-32 md:space-y-48">
          
          {/* Case Study 1: Bluestock Fintech (Text Left, Visual Right) */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Text (7 cols) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="md:col-span-7 space-y-6 text-left"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest flex items-center gap-1.5">
                  <Calendar size={12} />
                  May 2026 – Present
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tighter">
                  Data Analytics Intern
                </h4>
                <p className="text-sm font-bold text-gray-400">Bluestock Fintech</p>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                Engineered an AI-powered financial intelligence model to automate statistical analysis of NIFTY100 index companies. Maintained backend database operations, processed metrics schemas, and deployed executive reporting panels.
              </p>

              <p className="text-xs text-gray-500 leading-relaxed">
                Focused on delivering high-fidelity Power BI dashboards, PostgreSQL query validation, and machine learning anomalies detection pipelines to generate scalable analytics.
              </p>

              {/* Focus badges */}
              <div className="pt-2">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Core Focus</p>
                <div className="flex flex-wrap gap-2">
                  {["Financial Analytics", "Power BI", "PostgreSQL", "NIFTY100 Analytics", "Machine Learning", "Reporting Solutions"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Visual (5 cols) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="glass-card rounded-2xl p-6 w-full max-w-[340px] h-64 flex flex-col justify-between shadow-lg border border-white/50 transition-all duration-300 hover:scale-[1.01]">
                <div className="flex items-center justify-between border-b border-gray-200/40 pb-3">
                  <div className="flex items-center gap-1.5 text-gray-800">
                    <BarChart3 size={16} className="text-sky-500" />
                    <span className="text-[9px] font-bold font-mono">FINANCIAL MATRIX</span>
                  </div>
                  <span className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200/50">
                    STABLE
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">NIFTY100 COMPANIES</span>
                    <span className="font-bold text-gray-900">100 / 100</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">KPI DASHBOARDS</span>
                    <span className="font-bold text-gray-900">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">ANOMALY INDEX</span>
                    <span className="font-bold text-emerald-600">0.02 (Low)</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Case Study 2: Kodacy x SPACE (Visual Left, Text Right) */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Visual (5 cols) - First in markup on desktop for left placement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:col-span-5 flex justify-center order-2 md:order-1"
            >
              <div className="glass-card rounded-2xl p-6 w-full max-w-[340px] h-64 flex flex-col justify-between shadow-lg border border-white/50 transition-all duration-300 hover:scale-[1.01]">
                <div className="flex items-center justify-between border-b border-gray-200/40 pb-3">
                  <div className="flex items-center gap-1.5 text-gray-800">
                    <Database size={16} className="text-sky-500" />
                    <span className="text-[9px] font-bold font-mono">PREDICTION NODE</span>
                  </div>
                  <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/50">
                    TRAINED
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">PREDICTION INDEX</span>
                    <span className="font-bold text-gray-900">NIFTY50 / NIFTY100</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">MODEL DEPLOYMENT</span>
                    <span className="font-bold text-gray-900">Complete</span>
                  </div>
                </div>
                {/* Mock chart */}
                <div className="h-16 flex items-end justify-between px-2 pt-2 border-t border-gray-200/20">
                  <div className="w-4 bg-sky-100 border border-sky-200/30 rounded-t-sm h-[40%]" />
                  <div className="w-4 bg-sky-200/40 border border-sky-300/30 rounded-t-sm h-[65%]" />
                  <div className="w-4 bg-sky-300/60 border border-sky-400/30 rounded-t-sm h-[85%]" />
                  <div className="w-4 bg-blue-400/80 border border-blue-500/30 rounded-t-sm h-[95%]" />
                </div>
              </div>
            </motion.div>

            {/* Text (7 cols) - Second in markup on desktop for right placement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-7 space-y-6 text-left order-1 md:order-2"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest flex items-center gap-1.5">
                  <Calendar size={12} />
                  Feb 2026 – Mar 2026
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tighter">
                  AI & ML Intern
                </h4>
                <p className="text-sm font-bold text-gray-400">Kodacy × SPACE</p>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                Built time-series forecasting models to predict stock market valuations. Programmed feature engineering scripts, preprocessing routines, and correlation mappings to automate raw datasets validations.
              </p>

              <p className="text-xs text-gray-500 leading-relaxed">
                Acquired training in scikit-learn models regression, utilizing Pandas and NumPy to build reliable analytical models in notebook environments.
              </p>

              {/* Focus badges */}
              <div className="pt-2">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Core Focus</p>
                <div className="flex flex-wrap gap-2">
                  {["Stock Prediction", "Python", "Scikit-learn", "Machine Learning", "Data Analysis"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
