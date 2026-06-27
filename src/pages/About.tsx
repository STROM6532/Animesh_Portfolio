import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Trophy, Compass, Shield, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import profileImage from "@/assets/profile-animesh.png";
import premiumBg from "@/assets/premium_bg.png";

const timelineEvents = [
  {
    year: "2026",
    title: "Fintech Analytics & Forecasting",
    desc: "Began Data Analytics internship at Bluestock Fintech, building anomaly detection modules, and AI & ML internship at Kodacy × SPACE engineering stock market predictive trend lines."
  },
  {
    year: "2025",
    title: "AI Specializations & Hackathons",
    desc: "Acquired certifications in Big Data & Data Science (NIELIT Kolkata) and AI (Samsung Innovation Campus). Participated in Smart India Hackathon (SIH) and Nexathon."
  },
  {
    year: "2023",
    title: "B.Tech Undergrad Launch",
    desc: "Graduated High School (Class XII WBCHSE) with a focus on core sciences, and commenced B.Tech in Computer Science and Engineering with AI & ML specialization at Brainware University."
  },
  {
    year: "2021",
    title: "Foundations & Coding",
    desc: "Graduated Class X (WBBSE) from Sonapetya High School and initialized programmatic studies in Python and algorithm basics."
  }
];

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

const About = () => {
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
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-4">Biography</span>
              <h1 className="editorial-heading">Shaping Code <br />Into Products.</h1>
              <p className="editorial-subheading mt-4">
                Personal story, core mission, career goals, and academic timeline of a Software Developer specialized in AI/ML architectures.
              </p>
            </div>
          </div>
        </section>

        {/* BIOGRAPHY & PHOTO GRID */}
        <section className="pb-24">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column Biography (7 cols) */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="space-y-4">
                  <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Who I Am</h2>
                  <p className="editorial-body">
                    I am Animesh Sahoo, a Computer Science undergraduate specialized in Artificial Intelligence and Machine Learning. I view programming not merely as writing syntax, but as building intelligent, user-ready systems that solve real-world problems.
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium">
                    My engineering journey focuses on bridging the gap between time-series predictive modeling, backend data integrity, and intuitive data visualizations. I blend structural precision with rapid execution cycles to ship projects that perform under real loads.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 pt-4">
                  <div className="p-5 rounded-2xl bg-white/40 border border-white/60 space-y-2">
                    <Compass className="text-sky-600" size={20} />
                    <h3 className="text-xs font-bold text-gray-900">My Mission</h3>
                    <p className="text-[10px] text-gray-500 leading-normal">
                      To design localized and privacy-first intelligence tools that automate redundant analytical tasks.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/40 border border-white/60 space-y-2">
                    <Target className="text-sky-600" size={20} />
                    <h3 className="text-xs font-bold text-gray-900">Career Goals</h3>
                    <p className="text-[10px] text-gray-500 leading-normal">
                      To engineer enterprise-grade machine learning pipelines and scale data schemas in high-volume environments.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/40 border border-white/60 space-y-2">
                    <Shield className="text-sky-600" size={20} />
                    <h3 className="text-xs font-bold text-gray-900">Tech Philosophy</h3>
                    <p className="text-[10px] text-gray-500 leading-normal">
                      Clean architecture, relational integrity, low-latency API cycles, and human-centric UI layouts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column Profile Photo Box (5 cols) */}
              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-full">
                  <div className="bg-white/30 backdrop-blur-md p-3.5 border border-white/50 rounded-3xl shadow-2xl relative group overflow-hidden transition-all duration-300 hover:scale-[1.01]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-40 pointer-events-none" />
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
                      <img
                        src={profileImage}
                        alt="Animesh Sahoo Portrait"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop";
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-left mb-14">
              <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-3">Academic Base</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-gray-900 leading-[1.05]">Education.</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {educationItems.map((edu) => (
                <div 
                  key={edu.degree}
                  className={`glass-card rounded-2xl p-6 hover:border-sky-300/40 hover:bg-white/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full border ${
                    edu.type === "university" ? "border-sky-200/50" : "border-white/50"
                  }`}
                >
                  <div className="space-y-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      edu.type === "university" 
                        ? "bg-sky-50 border border-sky-100 text-sky-600" 
                        : "bg-white/40 border border-white/80 text-gray-400"
                    }`}>
                      <GraduationCap size={20} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-extrabold text-gray-900 leading-snug">{edu.degree}</h4>
                      <p className="text-xs font-semibold text-gray-500">{edu.institution}</p>
                      {edu.specialization && (
                        <p className="text-xs text-sky-600 font-bold tracking-tight">{edu.specialization}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200/30 flex items-center gap-1.5 text-[10px] text-gray-400 font-bold font-mono">
                    <Calendar size={12} />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE TIMELINE */}
        <section className="py-24 relative overflow-hidden bg-transparent">
          <div className="absolute bottom-[10%] right-[10%] w-[320px] h-[320px] rounded-full bg-blue-100/20 blur-[100px] -z-10 animate-blob-float" />
          
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-left mb-16">
              <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-3">Milestones</h2>
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-gray-900 leading-[1.05]">The Journey.</h3>
            </div>

            <div className="relative border-l border-sky-150 pl-6 md:pl-10 space-y-12 max-w-3xl mx-auto">
              {timelineEvents.map((evt, idx) => (
                <motion.div 
                  key={evt.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative group text-left"
                >
                  {/* Timeline bullet dot */}
                  <span className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-sky-500 border border-white group-hover:scale-125 transition-transform shadow" />
                  
                  <div className="space-y-1">
                    <span className="inline-block text-xs font-bold font-mono bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-full border border-sky-100 mb-1">
                      {evt.year}
                    </span>
                    <h4 className="text-base font-extrabold text-gray-900 leading-snug group-hover:text-sky-600 transition-colors">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                      {evt.desc}
                    </p>
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

export default About;
