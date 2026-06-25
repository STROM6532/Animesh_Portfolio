import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200/50 py-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Subtitles */}
        <div className="text-center md:text-left space-y-1.5">
          <p className="text-sm font-bold text-gray-800">Animesh Sahoo</p>
          <p className="text-xs text-gray-500 font-medium">
            Software Developer • AI/ML Engineer • Python Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/animesh6532"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-gray-400 hover:text-sky-600 bg-white/40 border border-white/60 hover:bg-white/80 rounded-full transition-all"
            title="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/animesh-sahoo-b03151302"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-gray-400 hover:text-sky-600 bg-white/40 border border-white/60 hover:bg-white/80 rounded-full transition-all"
            title="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:animeshsahoo451@gmail.com"
            className="p-2.5 text-gray-400 hover:text-sky-600 bg-white/40 border border-white/60 hover:bg-white/80 rounded-full transition-all"
            title="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-xs text-gray-450 font-medium">
            © 2026 Animesh Sahoo. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
