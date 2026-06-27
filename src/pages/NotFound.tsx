import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import premiumBg from "@/assets/premium_bg.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-sky-200/50 selection:text-sky-850 relative flex flex-col justify-between">
      <div 
        className="fixed inset-0 pointer-events-none -z-20 opacity-[0.12] blur-[8px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${premiumBg})` }}
      />

      <Navigation />

      <main className="flex-grow flex items-center justify-center pt-32 pb-16">
        <div className="max-w-md w-full px-6 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500 mx-auto animate-bounce">
            <AlertTriangle size={32} />
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter uppercase leading-none">404 Error</h1>
            <p className="text-xs font-bold text-sky-600 uppercase tracking-widest font-mono">Page Not Found</p>
            <p className="text-sm text-gray-500 leading-relaxed font-semibold">
              The route <code className="bg-red-50 text-red-650 px-1.5 py-0.5 rounded font-mono text-[11px]">{location.pathname}</code> does not exist or has been relocated.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold shadow-md hover:shadow-lg hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200"
            >
              <ArrowLeft size={14} />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
