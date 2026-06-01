import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import profileImage from "@/assets/profile-animesh.png";

const education = [
  {
    degree: "B.Tech Computer Science Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Brainware University, Barasat",
    duration: "2023 – 2027",
    icon: "🎓",
  },
  {
    degree: "Class XII – WBCHSE",
    institution: "Gobindapur High School",
    duration: "2023",
    icon: "🏫",
  },
  {
    degree: "Class X – WBBSE",
    institution: "Sonapetya High School",
    duration: "2021",
    icon: "🏫",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div ref={ref} className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Driven by curiosity, powered by code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-glow-sm flex-shrink-0">
                  <img
                    src={profileImage}
                    alt="Animesh Sahoo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Animesh Sahoo
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    AI & Machine Learning Engineering Student
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-primary" />
                    <span>Tamluk, West Bengal, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="glass-card p-8">
              <h4 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  🎯
                </span>
                Career Objective
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                A results-driven Computer Science undergraduate specializing in <span className="text-primary font-medium">Artificial Intelligence & Machine Learning</span>, 
                with a solid foundation in Python, machine learning algorithms, and data-driven problem solving.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Actively seeking <span className="text-primary font-medium">internship and entry-level opportunities</span> to 
                apply technical expertise, collaborate on innovative projects, and contribute to building intelligent systems 
                that create meaningful impact.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Continuously expanding knowledge through <span className="text-primary font-medium">industry-recognized certifications</span>, 
                hands-on projects, and real-world training programs — committed to excellence in AI engineering.
              </p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-display font-semibold text-foreground flex items-center gap-2 mb-6">
              <GraduationCap className="text-primary" size={24} />
              Education
            </h4>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card-hover p-6 group"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h5>
                    {edu.specialization && (
                      <p className="text-sm text-primary font-medium mt-1">
                        {edu.specialization}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <Calendar size={12} className="text-primary" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
