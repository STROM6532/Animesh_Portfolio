import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", isExternal: false },
  { name: "About", href: "/about", isExternal: false },
  { name: "Experience", href: "/experience", isExternal: false },
  { name: "Projects", href: "/projects", isExternal: false },
  { name: "Skills", href: "/skills", isExternal: false },
  { name: "Certifications", href: "/certifications", isExternal: false },
  { name: "Contact", href: "/contact", isExternal: false },
  { name: "Resume", href: "/resume", isExternal: false },
  { name: "GitHub", href: "https://github.com/animesh6532", isExternal: true },
];

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scrolling to shrink the navbar slightly
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      
      {/* Floating glass pill capsule */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={`glass-pill rounded-full shadow-lg shadow-sky-950/5 pointer-events-auto border transition-all duration-300 flex items-center gap-1 ${
          isScrolled 
            ? "px-2.5 py-1 bg-white/55 backdrop-blur-xl border-white/60 scale-95 shadow-md" 
            : "px-3.5 py-2.5 bg-white/30 backdrop-blur-lg border-white/40"
        }`}
      >
        
        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => {
            // Determine active route logic
            // For sub-routes like /projects/some-slug, highlight the "Projects" nav item.
            const isActive = item.href === "/" 
              ? location.pathname === "/" 
              : location.pathname.startsWith(item.href) && !item.isExternal;

            if (item.isExternal) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3.5 py-1.5 font-bold text-gray-600 hover:text-sky-600 transition-all flex items-center gap-0.5 rounded-full hover:bg-white/40 ${
                    isScrolled ? "text-[11px]" : "text-xs"
                  }`}
                >
                  {item.name}
                  <ArrowUpRight size={12} className="opacity-75" />
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3.5 py-1.5 font-bold rounded-full transition-all duration-350 ${
                  isActive ? "text-sky-700" : "text-gray-600 hover:text-sky-600 hover:bg-white/30"
                } ${isScrolled ? "text-[11px]" : "text-xs"}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-bg"
                    className="absolute inset-0 bg-sky-50 border border-sky-100/50 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Header trigger */}
        <div className="flex lg:hidden items-center justify-between gap-8 px-4 py-1">
          <Link to="/" className="text-xs font-black tracking-tighter text-sky-850 uppercase">
            Animesh.
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest bg-sky-50 border border-sky-100/55 px-2.5 py-0.5 rounded-full">
              {navItems.find((item) => {
                if (item.isExternal) return false;
                return item.href === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(item.href);
              })?.name || "Menu"}
            </span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1 rounded-full text-gray-500 hover:text-sky-600 hover:bg-white/40 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
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
            className="absolute top-14 left-4 right-4 bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-4 flex flex-col gap-1 pointer-events-auto max-w-sm mx-auto"
          >
            {navItems.map((item) => {
              if (item.isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2.5 text-xs font-bold text-gray-600 hover:text-sky-600 hover:bg-white/50 rounded-xl transition-all"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={14} />
                  </a>
                );
              }

              const isActive = item.href === "/" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2.5 text-xs font-bold rounded-xl transition-all ${
                    isActive 
                      ? "bg-sky-50 border border-sky-100 text-sky-700 font-extrabold" 
                      : "text-gray-600 hover:text-sky-600 hover:bg-white/50 border border-transparent"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
