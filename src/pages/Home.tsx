import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Calendar, GraduationCap, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import ImpactMetrics from "@/components/ImpactMetrics";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projectsData";
import profileImage from "@/assets/profile-animesh.png";
import premiumBg from "@/assets/premium_bg.png";

const Home = () => {
  // Display only the two flagship projects for the home page
  const featuredProjects = projectsData.filter(
    (project) => project.slug === "neuro-path-ai" || project.slug === "startupforge-ai"
  );

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-sky-200/50 selection:text-sky-850 relative">
      {/* Premium blurred background image layer */}
      <div 
        className="fixed inset-0 pointer-events-none -z-20 opacity-[0.12] blur-[8px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${premiumBg})` }}
      />

      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[100vh] lg:min-h-[105vh] flex items-center justify-center pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
          {/* Blurred sky-blue gradient blobs */}
          <div className="absolute top-[8%] left-[5%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-sky-200/40 blur-[120px] -z-10 animate-blob-float" />
          <div className="absolute bottom-[8%] right-[5%] w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full bg-blue-200/30 blur-[100px] -z-10 animate-blob-float" style={{ animationDelay: "3s" }} />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
              
              {/* Left Text Content (7 cols) */}
              <div className="lg:col-span-7 space-y-6 lg:space-y-10 text-left order-1">
                {/* Small Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-sky-200/50 bg-sky-50/50 backdrop-blur-md text-sky-900 text-xs font-bold tracking-wide"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  <span>Available For Internships</span>
                </motion.div>

                {/* Monumental Editorial Heading */}
                <div className="space-y-3 lg:space-y-6">
                  <span className="text-xs font-bold tracking-[0.25em] text-sky-600 uppercase block mb-1">Hi, I'm</span>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="text-5xl sm:text-7xl lg:text-[110px] xl:text-[120px] font-black tracking-tighter leading-[0.85] text-gray-900 uppercase block"
                  >
                    Animesh <br />
                    Sahoo
                  </motion.h1>
                </div>

                {/* Prominent Mission Statement */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-4 lg:space-y-6 pt-1 lg:pt-2 border-l-2 border-sky-200 pl-4 lg:pl-6"
                >
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 leading-[1.15] tracking-tight max-w-2xl text-balance">
                    Building AI Systems,<br />
                    Financial Intelligence Platforms,<br />
                    and Production-Ready Software.
                  </h2>
                  
                  {/* Muted Job Titles */}
                  <p className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-[0.18em] uppercase">
                    Software Developer • AI/ML Engineer • Python Developer
                  </p>
                </motion.div>

                {/* Introduction and Education Detail */}
                <div className="space-y-6 lg:space-y-8 max-w-lg">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="text-sm sm:text-base text-gray-500 leading-relaxed text-balance font-medium"
                  >
                    Computer Science (AI & ML) undergraduate passionate about building scalable software systems, AI-powered applications, and data-driven solutions.
                  </motion.p>

                  {/* Education Block */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-start gap-4 p-5 rounded-2xl border border-sky-100 bg-sky-50/20 backdrop-blur-xs max-w-sm"
                  >
                    <GraduationCap className="text-sky-600 mt-0.5 flex-shrink-0" size={22} />
                    <div className="text-xs space-y-1">
                      <p className="font-extrabold text-gray-900 font-sans tracking-tight">B.Tech Computer Science (AI & ML)</p>
                      <p className="text-gray-500 font-semibold">Brainware University</p>
                      <div className="flex items-center gap-1.5 text-gray-400 font-mono text-[10px] pt-1">
                        <Calendar size={12} />
                        <span>2023–2027</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Buttons & Actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="flex flex-wrap items-center gap-4 pt-4"
                >
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold shadow-md hover:shadow-lg hover:shadow-sky-500/15 hover:opacity-95 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
                  >
                    <span>Explore Projects</span>
                    <ArrowRight size={14} />
                  </Link>

                  <Link
                    to="/resume"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-xs text-gray-700 text-xs font-bold hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-200"
                  >
                    <span>View Resume</span>
                  </Link>

                  <div className="flex items-center gap-2 sm:pl-2">
                    <a
                      href="https://github.com/animesh6532"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-400 hover:text-sky-600 bg-white/50 border border-gray-200/50 rounded-full hover:bg-white/95 hover:-translate-y-0.5 transition-all"
                      title="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/animesh-sahoo-b03151302"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-400 hover:text-sky-600 bg-white/50 border border-gray-200/50 rounded-full hover:bg-white/95 hover:-translate-y-0.5 transition-all"
                      title="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Side Portrait Glass Frame (5 cols) */}
              <div className="lg:col-span-5 flex justify-center order-2 w-full pt-8 lg:pt-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[340px] xl:max-w-[360px]"
                >
                  <div className="bg-white/30 backdrop-blur-md p-3 border border-white/50 rounded-3xl shadow-2xl relative group overflow-hidden transition-all duration-300 hover:scale-[1.01]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-40 pointer-events-none" />
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
                      <img
                        src={profileImage}
                        alt="Animesh Sahoo"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop";
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* METRICS ROW */}
        <ImpactMetrics />

        {/* FEATURED WORK */}
        <section id="featured-work" className="relative overflow-hidden bg-transparent">
          <div className="absolute top-[20%] left-[20%] w-[450px] h-[450px] bg-sky-200/10 blur-[130px] -z-10 animate-blob-float" />

          <div className="section-container">
            {/* Section Header */}
            <div className="text-left mb-24">
              <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-4">Portfolio Centerpiece</h2>
              <h3 className="editorial-heading">Featured Work.</h3>
              <p className="editorial-subheading mt-2">
                Flagship products bridging Artificial Intelligence, agentic orchestration, and systems design.
              </p>
            </div>

            {/* Alternating Flagship Projects */}
            <div className="space-y-36 md:space-y-52">
              {featuredProjects.map((project, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={project.slug}
                    className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center animate-fade-in"
                  >
                    
                    {/* Text Block (6 cols) */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.05 }}
                      className={`md:col-span-6 space-y-6 text-left ${
                        isEven ? "order-2 md:order-1" : "order-2"
                      }`}
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block font-mono">
                          {project.tagline}
                        </span>
                        <h4 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tighter uppercase">
                          {project.title}
                        </h4>
                      </div>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                        {project.overview}
                      </p>

                      {/* Bullet features */}
                      <div className="space-y-2">
                        {project.features.slice(0, 3).map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-500">
                            <CheckCircle2 size={15} className="text-sky-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-gray-250/60 text-gray-700 hover:text-sky-600 hover:border-sky-300 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="pt-4 flex items-center gap-4">
                        <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 hover:-translate-y-1 hover:shadow-md active:translate-y-0 text-white text-xs font-bold transition-all shadow-xs"
                        >
                          <span>View Case Study</span>
                        </Link>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md active:translate-y-0 text-gray-700 text-xs font-bold transition-all shadow-xs"
                        >
                          <Github size={13} />
                          <span>GitHub</span>
                        </a>
                      </div>
                    </motion.div>

                    {/* Large Visual Showcase (6 cols) */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className={`md:col-span-6 flex justify-center ${
                        isEven ? "order-1 md:order-2" : "order-1"
                      }`}
                    >
                      <div className="w-full relative group">
                        {/* Shadow ambient glow */}
                        <div className="absolute inset-0 bg-sky-200/20 rounded-2xl blur-xl group-hover:bg-sky-300/25 transition-all duration-300 -z-10" />
                        
                        {/* Card container */}
                        <div className="w-full h-64 sm:h-80 p-2 rounded-2xl border border-white/50 bg-white/25 backdrop-blur-md shadow-lg group-hover:scale-[1.01] transition-transform duration-300 overflow-hidden relative">
                          {project.visual}
                        </div>
                      </div>
                    </motion.div>

                  </div>
                );
              })}
            </div>

            <div className="text-center pt-24">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-250 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg text-gray-800 text-xs font-bold transition-all duration-200"
              >
                <span>View All Projects</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
