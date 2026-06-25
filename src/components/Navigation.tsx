import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", href: "#about", isExternal: false },
  { name: "Experience", href: "#experience", isExternal: false },
  { name: "Skills", href: "#skills", isExternal: false },
  { name: "Projects", href: "#projects", isExternal: false },
  { name: "Certifications", href: "#certifications", isExternal: false },
  { name: "Contact", href: "#contact", isExternal: false },
  { name: "Resume", href: "/documents/ANIMESH_SAHOO_Resume.pdf", isExternal: true },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scrolling to highlight active section and shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      const scrollPos = window.scrollY + 150;
      for (const item of navItems) {
        if (item.isExternal) continue;
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.getBoundingClientRect().height;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.href);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = isScrolled ? 70 : 90; // account for navbar size when shrunk
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(href);
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      
      {/* Floating glass pill capsule */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={`glass-pill rounded-full shadow-lg shadow-sky-900/5 pointer-events-auto border transition-all duration-300 flex items-center gap-1 ${
          isScrolled 
            ? "px-2.5 py-1 bg-white/45 backdrop-blur-xl border-white/50 scale-95 shadow-md" 
            : "px-3.5 py-2 bg-white/20 backdrop-blur-lg border-white/30"
        }`}
      >
        
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            if (item.isExternal) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 font-semibold text-gray-500 hover:text-sky-600 transition-all flex items-center gap-0.5 rounded-full hover:bg-white/40 ${
                    isScrolled ? "text-[11px]" : "text-xs"
                  }`}
                >
                  {item.name}
                  <ArrowUpRight size={12} className="opacity-70" />
                </a>
              );
            }
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative px-3 py-1.5 font-semibold rounded-full transition-all duration-300 ${
                  isActive ? "text-sky-700" : "text-gray-500 hover:text-sky-600 hover:bg-white/30"
                } ${isScrolled ? "text-[11px]" : "text-xs"}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-bg-upgrade"
                    className="absolute inset-0 bg-sky-50 border border-sky-100/50 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Header trigger */}
        <div className="flex md:hidden items-center justify-between gap-8 px-2 py-0.5">
          <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest">
            {navItems.find((item) => item.href === activeSection)?.name || "Menu"}
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1 rounded-full text-gray-500 hover:text-sky-600 hover:bg-white/40 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>

      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-14 left-4 right-4 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-4 flex flex-col gap-1 pointer-events-auto max-w-sm mx-auto"
          >
            {navItems.map((item) => {
              if (item.isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-600 hover:text-sky-600 hover:bg-white/50 rounded-xl transition-all"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={14} />
                  </a>
                );
              }
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-3 py-2 text-sm font-semibold rounded-xl transition-all ${
                    isActive 
                      ? "bg-sky-50 border border-sky-100 text-sky-700 font-bold" 
                      : "text-gray-600 hover:text-sky-600 hover:bg-white/50 border border-transparent"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
