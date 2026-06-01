import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-display font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              AS<span className="text-primary">.</span>
            </motion.a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Animesh Sahoo. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/STROM6532"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/animesh-sahoo-b03151302"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:animeshsahoo451@gmail.com"
              className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Made with */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made </span>
            
            <span>by Animesh Sahoo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
