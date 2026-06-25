import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Download, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden bg-transparent">
      {/* Background blobs */}
      <div className="absolute bottom-[8%] left-[12%] w-[420px] h-[420px] rounded-full bg-sky-200/20 blur-[120px] -z-10 animate-blob-float" />

      <div ref={ref} className="section-container">
        
        {/* Large Glass Card final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="glass-card rounded-2xl p-8 md:p-14 text-center space-y-8 border border-white/50 shadow-xl relative overflow-hidden"
        >
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/10 opacity-60 pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest block">
              Contact
            </span>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] text-gray-900 text-balance max-w-3xl mx-auto">
              Let's Build Something Meaningful Together.
            </h3>
            <p className="text-base sm:text-lg text-gray-500 font-medium max-w-xl mx-auto text-balance">
              Open to internships, collaborations, and exciting software engineering opportunities.
            </p>
          </div>

          {/* Location detail */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-medium relative z-10">
            <MapPin size={14} className="text-sky-500" />
            <span>Tamluk, West Bengal, India</span>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 relative z-10">
            <a
              href="mailto:animeshsahoo451@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1 hover:opacity-95 text-white text-xs font-bold transition-all duration-200"
            >
              <Send size={14} />
              <span>Email Me</span>
            </a>

            <a
              href="/documents/ANIMESH_SAHOO_Resume.pdf"
              download="Animesh_Sahoo_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white hover:bg-gray-50 hover:-translate-y-1 hover:shadow-lg text-gray-700 text-xs font-bold transition-all duration-200"
            >
              <Download size={14} />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center gap-2 sm:pl-2">
              <a
                href="https://github.com/animesh6532"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-sky-600 bg-white/50 border border-gray-200/50 rounded-full hover:bg-white/95 transition-all"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/animesh-sahoo-b03151302"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-sky-600 bg-white/50 border border-gray-200/50 rounded-full hover:bg-white/95 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
