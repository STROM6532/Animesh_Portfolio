import { motion } from "framer-motion";
import { ChevronDown, Download, Send, MapPin } from "lucide-react";
import profileImage from "@/assets/profile-animesh.png";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 particle-grid opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-glow-blue/10 rounded-full blur-3xl animate-float-slow" />

      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Open to Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text text-glow">Animesh</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
            >
              AI & Machine Learning Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0"
            >
              Passionate about building intelligent systems that solve real-world problems. 
              Currently pursuing B.Tech in Computer Science with a specialization in AI & ML.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground mb-8"
            >
              <MapPin size={16} className="text-primary" />
              <span>Tamluk, West Bengal, India</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToContact}
                className="btn-hero flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Get In Touch
              </button>
              <a
                href="/documents/ANIMESH_SAHOO_Resume.pdf"
                download
                className="btn-outline-hero flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-display font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-display font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-display font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Trainings</div>
              </div>
            </motion.div>
          </div>

          {/* Profile Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-primary/30 animate-rotate-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-accent/20 animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
            </div>

            {/* Profile Image Container */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glass-card shadow-glow animate-float p-1">
                <div className="w-full h-full rounded-full overflow-hidden gradient-border">
                  <img
                    src={profileImage}
                    alt="Animesh Sahoo"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full shadow-glow-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-medium gradient-text">🤖 AI/ML</span>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -left-8 glass-card px-4 py-2 rounded-full shadow-glow-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-sm font-medium gradient-text">🐍 Python</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 glass-card px-4 py-2 rounded-full shadow-glow-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-sm font-medium gradient-text">SQL</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
