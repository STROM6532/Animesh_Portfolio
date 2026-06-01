import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "animeshsahoo451@gmail.com",
    href: "mailto:animeshsahoo451@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    label: "Phone",
    value: "+91 8250986973",
    href: "tel:+918250986973",
  },
  {
    icon: <MapPin size={24} />,
    label: "Location",
    value: "Tamluk, West Bengal, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/animesh-sahoo-b03151302",
    color: "primary",
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    href: "https://github.com/STROM6532",
    color: "accent",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 particle-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Let's connect and explore opportunities together
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Contact Info Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="group block"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300 group-hover:scale-110">
                          {info.icon}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors break-all">
                          {info.value}
                        </p>
                      </a>
                    ) : (
                      <div>
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                          {info.icon}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        <p className="font-medium text-foreground">
                          {info.value}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl ${
                      link.color === "primary"
                        ? "bg-primary/10 text-primary hover:bg-primary hover:text-background"
                        : "bg-accent/10 text-accent hover:bg-accent hover:text-background"
                    } transition-all duration-300 font-medium`}
                  >
                    {link.icon}
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="mailto:animeshsahoo451@gmail.com"
                  className="btn-hero flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Email
                </a>
                <a
                  href="/documents/ANIMESH_SAHOO_Resume.pdf"
                  download
                  className="btn-outline-hero flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            Open to AI/ML internships, entry-level positions, and collaborative projects
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
