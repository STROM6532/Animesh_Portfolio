import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, Award, GraduationCap } from "lucide-react";

const metrics = [
  {
    value: "6+",
    label: "Featured Projects",
    icon: <Code2 className="text-sky-600" size={20} />
  },
  {
    value: "2",
    label: "Internships Completed",
    icon: <Briefcase className="text-sky-600" size={20} />
  },
  {
    value: "5+",
    label: "Industry Certifications",
    icon: <Award className="text-sky-600" size={20} />
  },
  {
    value: "2027",
    label: "Expected Graduation",
    icon: <GraduationCap className="text-sky-600" size={20} />
  }
];

const ImpactMetrics = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-8 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="glass-card rounded-2xl p-5 hover:border-sky-300/40 hover:bg-white/60 hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between min-h-[120px] h-full"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  {metric.value}
                </span>
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center">
                  {metric.icon}
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
