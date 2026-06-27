import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projectsData";
import premiumBg from "@/assets/premium_bg.png";

const Projects = () => {
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
              <h1 className="editorial-heading">Featured <br />Projects.</h1>
              <p className="editorial-subheading mt-4">
                Thirteen custom product launches across Machine Learning, Computer Vision, Systems Architecture, and Data Intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="pb-24">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {projectsData.map((project, idx) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.05 }}
                  className="glass-card rounded-3xl overflow-hidden border border-white/60 hover:border-sky-300/40 hover:bg-white/60 hover:shadow-xl hover:scale-[1.01] transition-all duration-350 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Preview Header (Large hero visual) */}
                    <div className="w-full aspect-[16/10] bg-slate-950 p-2 overflow-hidden border-b border-gray-200/40 relative">
                      <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        {project.visual}
                      </div>
                    </div>

                    {/* Project metadata */}
                    <div className="p-6 text-left space-y-4">
                      <div className="space-y-1.5">
                        <span className="text-[9px] font-bold text-sky-600 uppercase tracking-wider block font-mono">
                          {project.tagline}
                        </span>
                        <h2 className="text-xl font-black text-gray-900 tracking-tight leading-snug group-hover:text-sky-600 transition-colors uppercase">
                          {project.title}
                        </h2>
                      </div>

                      {/* Problem Statement (Short summary snippet) */}
                      <p className="text-xs text-gray-500 leading-relaxed font-semibold line-clamp-3">
                        <span className="font-bold text-gray-800">Problem:</span> {project.problem}
                      </p>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {project.tech.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white border border-gray-200 text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions / Call-to-actions */}
                  <div className="px-6 pb-6 pt-4 border-t border-gray-150/40 flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 hover:scale-102 active:scale-98 transition-all duration-200"
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={13} />
                    </Link>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-450 hover:text-sky-600 bg-white/45 border border-gray-200 rounded-full hover:bg-white/85 transition-all duration-200"
                        title="View GitHub Repository"
                      >
                        <Github size={14} />
                      </a>
                      {project.hasDemo && (
                        <a
                          href={project.demoUrl || project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-sky-600 hover:text-sky-700 bg-sky-50 border border-sky-150 rounded-full hover:bg-white/85 transition-all duration-200"
                          title="View Live Demo"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
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

export default Projects;
