import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Trophy, Users, Lightbulb, Target, Zap } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Artificial Intelligence Training",
    organization: "Samsung Innovation Campus",
    description: "Comprehensive AI training program covering fundamentals to advanced concepts in artificial intelligence and machine learning.",
    icon: "🤖",
    type: "training",
  },
  {
    id: 2,
    title: "Blockchain, Big Data & Data Science Internship",
    organization: "NIELIT Kolkata",
    description: "Hands-on internship experience working with blockchain technology, big data processing, and data science methodologies.",
    icon: "⛓️",
    type: "internship",
  },

];

const achievements = [
  {
    title: "Smart India Hackathon (SIH)",
    description: "Participated in India's largest hackathon, developing innovative solutions for real-world problems.",
    icon: <Trophy className="text-yellow-500" />,
  },
  {
    title: "Nexathon",
    description: "Competed in Nexathon, showcasing technical skills and creative problem-solving abilities.",
    icon: <Zap className="text-primary" />,
  },
  {
    title: "Unstop Challenges",
    description: "Actively participated in various Unstop challenges, enhancing competitive coding skills.",
    icon: <Target className="text-accent" />,
  },
];

const highlights = [
  { icon: <Users size={20} />, text: "Team Collaboration" },
  { icon: <Lightbulb size={20} />, text: "Analytical Thinking" },
  { icon: <Target size={20} />, text: "Problem-Solving" },
  { icon: <Zap size={20} />, text: "Innovation Mindset" },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 particle-grid opacity-15" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Training & Experience</h2>
          <p className="section-subtitle mx-auto">
            Professional development and competitive achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="relative">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg font-display font-semibold text-foreground mb-8 flex items-center gap-2"
            >
              <Briefcase className="text-primary" size={20} />
              Training & Internships
            </motion.h3>

            {/* Timeline Line */}
            <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative pl-16 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors">
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                  </div>

                  <div className="glass-card-hover p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                        {exp.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h4>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${
                            exp.type === "internship" 
                              ? "bg-accent/10 text-accent" 
                              : "bg-primary/10 text-primary"
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-sm text-primary font-medium mt-1">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Highlights */}
          <div className="space-y-8">
            {/* Achievements */}
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-lg font-display font-semibold text-foreground mb-6 flex items-center gap-2"
              >
                <Trophy className="text-yellow-500" size={20} />
                Competitive Exposure
              </motion.h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass-card-hover p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-card p-6"
            >
              <h4 className="font-display font-semibold text-foreground mb-4">
                Key Strengths
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-primary">{highlight.icon}</span>
                    {highlight.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
