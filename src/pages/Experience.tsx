import { motion } from "framer-motion";
import { Calendar, Briefcase, BarChart3, Database, TrendingUp, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import premiumBg from "@/assets/premium_bg.png";

const experiences = [
  {
    role: "Data Analytics Intern",
    company: "Bluestock Fintech",
    duration: "May 2026 – Present",
    overview: "Focused on building data pipelines and analytics dashboards for market analysis. I worked on database optimization, automated metric extraction, and created visualizations to track index performance.",
    responsibilities: [
      "Developed interactive Power BI dashboards that mapped key financial indicators for NIFTY100 companies.",
      "Structured relational database tables and indexes in PostgreSQL to handle daily stock market data ingestion.",
      "Created statistical preprocessing scripts to identify and filter out price outliers and anomalous data points.",
      "Worked with senior team members to design clean database schemas for recurring performance reports."
    ],
    impact: "By automating the ingestion and modeling of historical ticker data, we reduced weekly reporting cycles from 12 hours of manual queries to instant dashboard reloads, providing the team with rapid insight access.",
    achievements: [
      "Wrote automated database triggers to ensure consistent price indexing without data gaps.",
      "Designed an interactive dashboard scorecard tracking key performance indicators dynamically."
    ],
    tech: ["Financial Analytics", "Power BI", "PostgreSQL", "Python", "Pandas", "KPI Dashboards"],
    visual: (
      <div className="glass-card rounded-2xl p-6 w-full max-w-[360px] h-68 flex flex-col justify-between shadow-lg border border-white/50 relative overflow-hidden text-left font-mono">
        <div className="absolute inset-0 bg-radial-at-t from-sky-400/5 via-transparent to-transparent pointer-events-none" />
        <div className="flex items-center justify-between border-b border-gray-200/40 pb-3">
          <div className="flex items-center gap-1.5 text-gray-800">
            <BarChart3 size={15} className="text-sky-500" />
            <span className="text-[9px] font-bold">FINANCIAL METRICS</span>
          </div>
          <span className="text-[8px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200/50">ACTIVE</span>
        </div>
        <div className="space-y-2 py-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">NIFTY100 TICKERS</span>
            <span className="font-bold text-gray-900">100 / 100</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">LOAD PERFORMANCE</span>
            <span className="font-bold text-sky-600">Inst. (&lt;0.8s)</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">ANOMALY INDEX</span>
            <span className="font-bold text-emerald-600">0.02 (Low)</span>
          </div>
        </div>
        <div className="pt-2 border-t border-gray-200/30 flex justify-between text-[7px] text-gray-450">
          <span>Source: PostgreSQL Warehouse</span>
          <span>Refresh: Live (24h)</span>
        </div>
      </div>
    )
  },
  {
    role: "AI & ML Intern",
    company: "Kodacy × SPACE",
    duration: "Feb 2026 – Mar 2026",
    overview: "Researched and built time-series forecasting models for asset valuation. I wrote preprocessing and feature extraction scripts to transform raw stock data into clean inputs for machine learning models.",
    responsibilities: [
      "Developed Python-based time-series regression models to analyze asset trends.",
      "Wrote scripts to extract features like moving averages and Relative Strength Index (RSI).",
      "Evaluated model performance using metrics like Mean Absolute Error (MAE) and standard deviation.",
      "Cleaned and prepared raw historical CSV datasets containing millions of rows by handling null values and formatting inconsistencies."
    ],
    impact: "Delivered a time-series forecasting model with a low error margin, enabling the team to simulate different portfolio strategies with consistent historical data.",
    achievements: [
      "Trained scikit-learn models that achieved a Mean Absolute Error of less than 2% on test datasets.",
      "Built correlation matrices to analyze trends across different market sectors."
    ],
    tech: ["Stock Prediction", "Python", "Scikit-learn", "Pandas", "Time-Series Regression", "Jupyter Notebook"],
    visual: (
      <div className="glass-card rounded-2xl p-6 w-full max-w-[360px] h-68 flex flex-col justify-between shadow-lg border border-white/50 relative overflow-hidden text-left font-mono">
        <div className="absolute inset-0 bg-radial-at-t from-cyan-400/5 via-transparent to-transparent pointer-events-none" />
        <div className="flex items-center justify-between border-b border-gray-200/40 pb-3">
          <div className="flex items-center gap-1.5 text-gray-800">
            <Database size={15} className="text-sky-500" />
            <span className="text-[9px] font-bold">PREDICTOR NODE</span>
          </div>
          <span className="text-[8px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/50">COMPLETE</span>
        </div>
        <div className="flex-1 flex items-end justify-between px-1 py-3 border-b border-gray-200/20">
          <div className="w-5 bg-sky-100 border border-sky-200/30 rounded-t h-[40%]" />
          <div className="w-5 bg-sky-200/40 border border-sky-300/30 rounded-t h-[65%]" />
          <div className="w-5 bg-sky-300/60 border border-sky-400/30 rounded-t h-[85%]" />
          <div className="w-5 bg-blue-400/80 border border-blue-500/30 rounded-t h-[95%] animate-pulse" />
        </div>
        <div className="pt-2 flex justify-between text-[7px] text-gray-450">
          <span>Model: Random Forest Reg.</span>
          <span>Variance: 0.015</span>
        </div>
      </div>
    )
  }
];

const timelineMilestones = [
  { date: "May 2026", event: "Joined Bluestock Fintech", detail: "Assumed role of Data Analytics Intern, launching Power BI KPI dashboards." },
  { date: "Mar 2026", event: "Completed Stock Predictor", detail: "Shipped low-error time-series scikit-learn regression models." },
  { date: "Feb 2026", event: "Joined Kodacy × SPACE", detail: "Assumed role of AI & ML Intern, analyzing time-series datasets." }
];

const Experience = () => {
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
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-4">Case Studies</span>
              <h1 className="editorial-heading">Professional <br />Experience.</h1>
              <p className="editorial-subheading mt-4">
                Selected internships delivering data structures optimization, predictive analytics, and dashboard intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* CASE STUDIES DETAILS */}
        <section className="pb-24">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="space-y-36 md:space-y-48">
              {experiences.map((exp, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={exp.company}
                    className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start"
                  >
                    {/* Text block (7 cols) */}
                    <div className={`md:col-span-7 space-y-6 text-left ${
                      isEven ? "order-2 md:order-1" : "order-2"
                    }`}>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest flex items-center gap-1.5 font-mono">
                          <Calendar size={13} />
                          {exp.duration}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tighter">
                          {exp.role}
                        </h2>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                          {exp.company}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-semibold">
                        {exp.overview}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-4 pt-2">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Responsibilities</h4>
                        <div className="space-y-2.5">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-2.5 text-xs text-gray-500">
                              <CheckCircle2 size={15} className="text-sky-500 mt-0.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact statement */}
                      <div className="bg-sky-50/40 border border-sky-100/55 p-5 rounded-2xl space-y-2">
                        <h4 className="text-[10px] font-bold text-sky-700 uppercase tracking-wider">Quantified Impact</h4>
                        <p className="text-xs text-sky-900 leading-relaxed font-medium">
                          {exp.impact}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Key Achievements</h4>
                        <ul className="list-disc pl-5 text-xs text-gray-550 space-y-1 font-medium">
                          {exp.achievements.map((ach, aIdx) => (
                            <li key={aIdx}>{ach}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.tech.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:text-sky-600 hover:border-sky-300 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Visual Showcase (5 cols) */}
                    <div className={`md:col-span-5 flex justify-center ${
                      isEven ? "order-1 md:order-2" : "order-1"
                    }`}>
                      <div className="w-full relative group max-w-[360px]">
                        <div className="absolute inset-0 bg-sky-200/20 rounded-2xl blur-xl group-hover:bg-sky-300/25 transition-all duration-300 -z-10" />
                        <div className="w-full h-72 p-2 rounded-2xl border border-white/50 bg-white/20 backdrop-blur-md shadow-lg group-hover:scale-[1.01] transition-transform duration-300 flex items-center justify-center">
                          {exp.visual}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VISUAL TIMELINE */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-left mb-16">
              <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-3">Timeline</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-gray-900 leading-[1.05]">Career Progression.</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Connecting line for desktop timeline */}
              <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-px bg-sky-200 -z-10" />

              {timelineMilestones.map((mil, idx) => (
                <div 
                  key={mil.date}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between border border-white/60 hover:border-sky-300/40 hover:bg-white/70 hover:shadow-xs transition-all duration-300 text-left"
                >
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 font-mono text-[10px] font-bold">
                      <Calendar size={11} />
                      {mil.date}
                    </span>
                    <div>
                      <h4 className="text-sm font-extrabold text-gray-900 mb-1">{mil.event}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-semibold">{mil.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
