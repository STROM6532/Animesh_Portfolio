import { useState } from "react";
import { Download, Printer, Briefcase, GraduationCap, Award, Compass, MapPin, Mail, Phone, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import premiumBg from "@/assets/premium_bg.png";

const Resume = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "projects" | "achievements">("experience");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-sky-200/50 selection:text-sky-850 relative">
      {/* Background layer, hidden when printing */}
      <div 
        className="fixed inset-0 pointer-events-none -z-20 opacity-[0.12] blur-[8px] bg-cover bg-center bg-no-repeat print:hidden"
        style={{ backgroundImage: `url(${premiumBg})` }}
      />

      <div className="print:hidden">
        <Navigation />
      </div>

      <main className="pt-24 md:pt-32 print:pt-0">
        {/* HERO SECTION - Hidden during printing */}
        <section className="relative overflow-hidden bg-transparent py-12 md:py-16 print:hidden">
          <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-sky-200/30 blur-[120px] -z-10 animate-blob-float" />
          
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-left max-w-4xl">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-4">Interactive Curriculum Vitae</span>
              <h1 className="editorial-heading">Interactive <br />Resume.</h1>
              <p className="editorial-subheading mt-4">
                Structured digital overview of technical competencies, academic journey, and professional case studies.
              </p>
            </div>
          </div>
        </section>

        {/* RESUME VIEWER */}
        <section className="pb-24 print:pb-0">
          <div className="max-w-[1100px] mx-auto px-6 relative z-10 print:px-0">
            
            {/* Action Bar - Hidden when printing */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 mb-6 rounded-2xl bg-white/40 border border-white/60 print:hidden">
              <span className="text-xs text-gray-500 font-bold font-mono">ANIMESH_SAHOO_RESUME.pdf</span>
              <div className="flex items-center gap-3">
                <a
                  href="/documents/ANIMESH_SAHOO_Resume.pdf"
                  download="Animesh_Sahoo_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Download size={13} />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-xs font-bold transition-all shadow-xs"
                >
                  <Printer size={13} />
                  <span>Print Resume</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Resume Paper */}
            <div className="bg-white border border-gray-250/70 rounded-3xl shadow-xl p-8 md:p-12 text-left grid md:grid-cols-12 gap-8 md:gap-12 print:border-none print:shadow-none print:p-0 print:rounded-none">
              
              {/* Left Column (4 cols) */}
              <div className="md:col-span-4 space-y-8 border-b md:border-b-0 md:border-r border-gray-200/60 pb-8 md:pb-0 md:pr-8 print:col-span-4 print:border-r print:border-gray-200 print:pr-6">
                {/* Profile Detail */}
                <div className="space-y-3">
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase leading-none">Animesh Sahoo</h2>
                    <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest mt-1">Software & AI Engineer</p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                    Computer Science undergraduate passionate about scale database warehousing, forecasting engines, and agentic networks.
                  </p>
                </div>

                {/* Contact Coordinates */}
                <div className="space-y-3 text-xs">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-1.5">Contact</h3>
                  <div className="space-y-2.5 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail size={13} className="text-gray-400" />
                      <span className="font-mono truncate">animeshsahoo451@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={13} className="text-gray-400" />
                      <span className="font-mono">+91 6296767590</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-gray-400" />
                      <span>Tamluk, West Bengal, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe size={13} className="text-gray-400" />
                      <a href="https://github.com/animesh6532" target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 truncate">github.com/animesh6532</a>
                    </div>
                  </div>
                </div>

                {/* Core Coding Competencies */}
                <div className="space-y-3 text-xs">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-1.5">Technical Stack</h3>
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <h4 className="text-[9px] font-bold text-gray-400 uppercase">Languages</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Python", "Java", "SQL", "C", "JavaScript"].map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[10px] font-semibold">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[9px] font-bold text-gray-400 uppercase">AI / ML / CV</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Scikit-learn", "YOLOv8", "OpenCV", "LangGraph", "Gemini API"].map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 text-[10px] font-bold">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-[9px] font-bold text-gray-400 uppercase">Databases</h4>
                      <div className="flex flex-wrap gap-1">
                        {["PostgreSQL", "InfluxDB", "MongoDB", "MySQL", "SQL Server"].map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[10px] font-semibold">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (8 cols) */}
              <div className="md:col-span-8 space-y-8 print:col-span-8">
                
                {/* Print only Header sections */}
                <div className="hidden print:block border-b border-gray-200 pb-6 mb-6">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Professional Experience</h3>
                  <div className="space-y-6 text-left">
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-sm">
                        <h4 className="text-gray-900">Data Analytics Intern</h4>
                        <span className="text-xs text-gray-400">May 2026 – Present</span>
                      </div>
                      <p className="text-xs text-sky-700 font-bold mb-2">Bluestock Fintech</p>
                      <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                        <li>Engineered Power BI dashboards to automate stock intelligence reviews of NIFTY100 companies.</li>
                        <li>Maintained optimized PostgreSQL schemas and implemented transaction anomaly checkers.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-sm">
                        <h4 className="text-gray-900">AI & ML Intern</h4>
                        <span className="text-xs text-gray-400">Feb 2026 – Mar 2026</span>
                      </div>
                      <p className="text-xs text-sky-700 font-bold mb-2">Kodacy × SPACE</p>
                      <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                        <li>Built scikit-learn time-series forecasting models predicting pricing indicators.</li>
                        <li>Preprocessed raw CSV datasets, cleaning data null values and mapping correlations.</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-8 mb-4">Education</h3>
                  <div className="space-y-4 text-left">
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-xs">
                        <h4 className="text-gray-900">Brainware University</h4>
                        <span className="text-[10px] text-gray-450 font-mono">2023 – 2027</span>
                      </div>
                      <p className="text-[11px] text-gray-600 font-semibold">B.Tech in Computer Science and Engineering (AI & ML Specialization)</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-xs">
                        <h4 className="text-gray-900">Gobindapur High School</h4>
                        <span className="text-[10px] text-gray-450 font-mono">Graduated: 2023</span>
                      </div>
                      <p className="text-[11px] text-gray-600 font-semibold">Higher Secondary (Class XII WBCHSE)</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Tabs Header - Hidden during print */}
                <div className="flex border-b border-gray-200/60 print:hidden">
                  {[
                    { id: "experience", label: "Experience", icon: <Briefcase size={13} /> },
                    { id: "education", label: "Education", icon: <GraduationCap size={13} /> },
                    { id: "projects", label: "Projects Summary", icon: <Award size={13} /> },
                    { id: "achievements", label: "Honors", icon: <Compass size={13} /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-1.5 px-4 py-3.5 border-b-2 font-bold text-xs transition-colors -mb-px ${
                        activeTab === tab.id
                          ? "border-sky-500 text-sky-600"
                          : "border-transparent text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab content panel - Hidden during print */}
                <div className="pt-2 text-left print:hidden">
                  {activeTab === "experience" && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h4 className="text-sm font-extrabold text-gray-950">Data Analytics Intern</h4>
                          <span className="text-[10px] font-bold text-gray-400 font-mono">May 2026 – Present</span>
                        </div>
                        <p className="text-xs text-sky-700 font-bold">Bluestock Fintech</p>
                        <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                          Engineered Power BI dashboards and optimized relational PostgreSQL tables to automate stock intelligence reviews of NIFTY100 index listings. Deployed transaction anomaly scanners.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h4 className="text-sm font-extrabold text-gray-950">AI & ML Intern</h4>
                          <span className="text-[10px] font-bold text-gray-400 font-mono">Feb 2026 – Mar 2026</span>
                        </div>
                        <p className="text-xs text-sky-700 font-bold">Kodacy × SPACE</p>
                        <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                          Built Python time-series regression models mapping pricing tracks. Cleared data omissions on incoming reports and mapped cross-sector correlation metrics in interactive environments.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "education" && (
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h4 className="text-sm font-extrabold text-gray-950">Brainware University</h4>
                          <span className="text-[10px] font-bold text-gray-400 font-mono">2023 – 2027</span>
                        </div>
                        <p className="text-xs text-sky-700 font-bold">B.Tech Computer Science (AI & ML)</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h4 className="text-sm font-extrabold text-gray-950">Gobindapur High School</h4>
                          <span className="text-[10px] font-bold text-gray-400 font-mono">Graduated: 2023</span>
                        </div>
                        <p className="text-xs text-gray-600 font-bold">Class XII (Higher Secondary WBCHSE)</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <h4 className="text-sm font-extrabold text-gray-950">Sonapetya High School</h4>
                          <span className="text-[10px] font-bold text-gray-400 font-mono">Graduated: 2021</span>
                        </div>
                        <p className="text-xs text-gray-600 font-bold">Class X (Secondary Education WBBSE)</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "projects" && (
                    <div className="space-y-4">
                      <div className="space-y-1 bg-gray-50/50 p-3.5 border border-gray-150/40 rounded-xl">
                        <h4 className="text-xs font-extrabold text-gray-900 uppercase">NeuroPath AI</h4>
                        <p className="text-[10px] text-gray-500 font-medium">AI Career Guidance & voice-interview mock platform with ATS validation scoring.</p>
                      </div>
                      <div className="space-y-1 bg-gray-50/50 p-3.5 border border-gray-150/40 rounded-xl">
                        <h4 className="text-xs font-extrabold text-gray-900 uppercase">StartupForge AI</h4>
                        <p className="text-[10px] text-gray-500 font-medium">Agentic LangGraph system automating market studies and pitch spreadsheet writes.</p>
                      </div>
                      <div className="space-y-1 bg-gray-50/50 p-3.5 border border-gray-150/40 rounded-xl">
                        <h4 className="text-xs font-extrabold text-gray-900 uppercase">NexTwin AI</h4>
                        <p className="text-[10px] text-gray-500 font-medium">Digital twin IoT telemetry aggregator calculating mechanical RUL parameters.</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "achievements" && (
                    <div className="space-y-4">
                      <div className="flex items-start gap-2.5 text-xs text-gray-600">
                        <Award size={16} className="text-sky-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-extrabold text-gray-900">Smart India Hackathon (SIH)</p>
                          <p className="text-[10px] text-gray-450 font-semibold">Formulated national digital solutions representing university teams.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-gray-600">
                        <Award size={16} className="text-sky-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-extrabold text-gray-900">Nexathon Coding Challenge</p>
                          <p className="text-[10px] text-gray-450 font-semibold">Built automation scripts mapping telemetry inputs within 24h rounds.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
