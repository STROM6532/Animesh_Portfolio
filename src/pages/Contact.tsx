import { useState } from "react";
import { Mail, Github, Linkedin, Download, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import premiumBg from "@/assets/premium_bg.png";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", botcheck: "" });
  const [loading, setLoading] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check for bots
    if (formData.botcheck) {
      toast.error("Spam detected.");
      return;
    }

    // 2. Client-side field validations
    const nameTrimmed = formData.name.trim();
    const emailTrimmed = formData.email.trim();
    const messageTrimmed = formData.message.trim();
    const subjectTrimmed = formData.subject.trim();

    if (!nameTrimmed || !emailTrimmed || !messageTrimmed) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (nameTrimmed.length < 2) {
      toast.error("Name must be at least 2 characters.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // 3. Duplicate submission/rate limit checker (prevent submits within 10 seconds)
    const now = Date.now();
    if (lastSubmissionTime && now - lastSubmissionTime < 10000) {
      toast.error("Please wait a few seconds before sending another message.");
      return;
    }

    setLoading(true);

    try {
      // Connect to Formspree API endpoint
      const response = await fetch("https://formspree.io/f/mjkbjgnw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: nameTrimmed,
          email: emailTrimmed,
          subject: subjectTrimmed || "Portfolio Contact Message",
          message: messageTrimmed
        })
      });

      if (response.ok) {
        toast.success("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "", botcheck: "" });
        setLastSubmissionTime(now);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Formspree submission returned an error status.");
      }
    } catch (error) {
      console.error("Submission failed, routing to mailto fallback: ", error);
      toast.error("API transmission failed. Opening default email client...");
      
      // Graceful mailto fallback pre-filled with the validated message inputs
      const mailtoUrl = `mailto:animeshsahoo451@gmail.com?subject=${encodeURIComponent(
        subjectTrimmed || "Portfolio Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${nameTrimmed}\nEmail: ${emailTrimmed}\n\nMessage:\n${messageTrimmed}`
      )}`;
      
      window.location.href = mailtoUrl;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-sky-200/50 selection:text-sky-850 relative">
      <div 
        className="fixed inset-0 pointer-events-none -z-20 opacity-[0.12] blur-[8px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${premiumBg})` }}
      />

      <Navigation />

      <main className="pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-transparent py-16 md:py-24">
          <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-sky-200/30 blur-[120px] -z-10 animate-blob-float" />
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-left max-w-4xl">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-4">Get In Touch</span>
              <h1 className="editorial-heading">Let's Build <br />Something Meaningful <br />Together.</h1>
              <p className="editorial-subheading mt-4 text-balance">
                If you are a recruiter looking for an engineering intern, a developer interested in collaborating, or just want to chat about software, I'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SHEET */}
        <section className="pb-24">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10 animate-fade-in">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column info (5 cols) */}
              <div className="lg:col-span-5 text-left space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Get in Touch Directly</h2>
                  <p className="text-sm text-gray-555 leading-relaxed font-semibold text-balance">
                    Whether you have an internship opening, a collaboration proposal, or just want to connect, feel free to use the form or reach out through my email or LinkedIn.
                  </p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="mailto:animeshsahoo451@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-white/60 hover:border-sky-300/40 hover:bg-white/70 transition-all font-semibold"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email Address</p>
                      <p className="text-xs text-gray-800 font-mono">animeshsahoo451@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-white/60 font-semibold">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Location</p>
                      <p className="text-xs text-gray-850">Tamluk, West Bengal, India</p>
                    </div>
                  </div>

                  <a 
                    href="/documents/ANIMESH_SAHOO_Resume.pdf"
                    download="Animesh_Sahoo_Resume.pdf"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-white/60 hover:border-sky-300/40 hover:bg-white/70 transition-all font-semibold"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                      <Download size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Interactive File</p>
                      <p className="text-xs text-gray-850">Download Print Resume</p>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://github.com/animesh6532"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/40 hover:bg-white/80 border border-gray-200 rounded-full text-gray-450 hover:text-sky-600 transition-all"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/animesh-sahoo-b03151302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/40 hover:bg-white/80 border border-gray-200 rounded-full text-gray-455 hover:text-sky-600 transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Right Column Form (7 cols) */}
              <div className="lg:col-span-7 w-full">
                <div className="glass-card rounded-3xl p-6 md:p-10 border border-white/50 shadow-2xl relative overflow-hidden text-left">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-60 pointer-events-none" />
                  
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    {/* Honeypot Spam Protection Field */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="botcheck"
                        value={formData.botcheck}
                        onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Your Name *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Animesh Sahoo"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white/45 backdrop-blur-xs text-xs font-semibold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-all focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Your Email *</label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="animesh@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white/45 backdrop-blur-xs text-xs font-semibold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-all focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Collaboration Opportunities"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white/45 backdrop-blur-xs text-xs font-semibold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-all focus:bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Your Message *</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Animesh, I would love to connect with you regarding..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white/45 backdrop-blur-xs text-xs font-semibold text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-all focus:bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-0.5 active:translate-y-0 text-white text-xs font-bold transition-all duration-200 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={13} className="animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={13} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
