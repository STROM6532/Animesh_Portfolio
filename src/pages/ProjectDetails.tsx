import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Database, Server, Cpu, CheckCircle2, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projectsData";
import premiumBg from "@/assets/premium_bg.png";

// Bespoke SVG Architecture diagram builder based on project slug
const renderBespokeArchitecture = (slug: string) => {
  switch (slug) {
    case "neuro-path-ai":
      return (
        <svg className="w-full max-w-lg h-60 mx-auto" viewBox="0 0 500 240">
          <defs>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          {/* Client uploads */}
          <rect x="20" y="90" width="90" height="50" rx="8" fill="url(#blueGrad)" opacity="0.85" />
          <text x="65" y="120" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">Resume PDF</text>
          
          <path d="M 110 115 L 155 115" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="160,115 152,110 152,120" fill="#94a3b8" />

          {/* Parser Engine */}
          <rect x="160" y="60" width="110" height="110" rx="10" fill="none" stroke="#38bdf8" strokeWidth="2" />
          <text x="215" y="85" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">FastAPI Core</text>
          <rect x="175" y="100" width="80" height="25" rx="4" fill="#f0f9ff" stroke="#bae6fd" />
          <text x="215" y="116" fill="#0369a1" fontSize="9" fontWeight="bold" textAnchor="middle">NLTK Tokenizer</text>
          <rect x="175" y="133" width="80" height="25" rx="4" fill="#f0f9ff" stroke="#bae6fd" />
          <text x="215" y="149" fill="#0369a1" fontSize="9" fontWeight="bold" textAnchor="middle">Gemini LLM API</text>

          <path d="M 270 100 L 315 80" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="320,78 310,77 315,85" fill="#94a3b8" />
          
          <path d="M 270 130 L 315 150" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="320,152 315,145 310,153" fill="#94a3b8" />

          {/* Outputs */}
          <rect x="320" y="50" width="110" height="50" rx="8" fill="#e0f2fe" stroke="#7dd3fc" />
          <text x="375" y="75" fill="#0369a1" fontSize="9" fontWeight="bold" textAnchor="middle">ATS Scorer</text>
          <text x="375" y="88" fill="#64748b" fontSize="8" textAnchor="middle">Score: 92% nominal</text>

          <rect x="320" y="130" width="110" height="50" rx="8" fill="#e0f2fe" stroke="#7dd3fc" />
          <text x="375" y="155" fill="#0369a1" fontSize="9" fontWeight="bold" textAnchor="middle">Learning Paths</text>
          <text x="375" y="168" fill="#64748b" fontSize="8" textAnchor="middle">Vector Embeddings</text>
        </svg>
      );
    case "startupforge-ai":
      return (
        <svg className="w-full max-w-lg h-60 mx-auto" viewBox="0 0 500 240">
          <defs>
            <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
          {/* User Input */}
          <rect x="10" y="90" width="100" height="50" rx="8" fill="url(#purpleGrad)" />
          <text x="60" y="120" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">Startup Concept</text>
          
          <path d="M 110 115 L 145 115" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="150,115 142,110 142,120" fill="#94a3b8" />

          {/* LangGraph orchestrator */}
          <rect x="150" y="30" width="140" height="170" rx="12" fill="none" stroke="#4f46e5" strokeWidth="2" />
          <text x="220" y="50" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">LangGraph Orchestrator</text>
          
          {/* Internal Nodes */}
          <rect x="165" y="70" width="110" height="25" rx="4" fill="#e0e7ff" stroke="#c7d2fe" />
          <text x="220" y="86" fill="#312e81" fontSize="8" fontWeight="bold" textAnchor="middle">Market Agent</text>
          
          <rect x="165" y="105" width="110" height="25" rx="4" fill="#e0e7ff" stroke="#c7d2fe" />
          <text x="220" y="121" fill="#312e81" fontSize="8" fontWeight="bold" textAnchor="middle">Financial Agent</text>
          
          <rect x="165" y="140" width="110" height="25" rx="4" fill="#e0e7ff" stroke="#c7d2fe" />
          <text x="220" y="156" fill="#312e81" fontSize="8" fontWeight="bold" textAnchor="middle">Pitch Writer Agent</text>

          <path d="M 290 115 L 335 115" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="340,115 332,110 332,120" fill="#94a3b8" />

          {/* Final Outputs */}
          <rect x="340" y="90" width="120" height="50" rx="8" fill="#e0f2fe" stroke="#38bdf8" />
          <text x="400" y="112" fill="#0369a1" fontSize="9" fontWeight="bold" textAnchor="middle">Market Analytics Deck</text>
          <text x="400" y="125" fill="#64748b" fontSize="8" textAnchor="middle">TAM/SAM/SOM Projections</text>
        </svg>
      );
    case "nextwin-ai":
      return (
        <svg className="w-full max-w-lg h-60 mx-auto" viewBox="0 0 500 240">
          <defs>
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
          {/* Sensors */}
          <rect x="10" y="85" width="90" height="60" rx="8" fill="url(#cyanGrad)" />
          <text x="55" y="112" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">IoT Telemetry</text>
          <text x="55" y="128" fill="white" fontSize="8" textAnchor="middle">Vibrations, Temp</text>
          
          <path d="M 100 115 L 145 115" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
          <polygon points="150,115 142,110 142,120" fill="#94a3b8" />

          {/* Stream gateway */}
          <rect x="150" y="55" width="120" height="120" rx="10" fill="none" stroke="#0891b2" strokeWidth="2" />
          <text x="210" y="80" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">FastAPI Engine</text>
          <rect x="165" y="95" width="90" height="25" rx="4" fill="#ecfeff" stroke="#c5f2f7" />
          <text x="210" y="111" fill="#0891b2" fontSize="8" fontWeight="bold" textAnchor="middle">WebSocket Route</text>
          <rect x="165" y="130" width="90" height="25" rx="4" fill="#ecfeff" stroke="#c5f2f7" />
          <text x="210" y="146" fill="#0891b2" fontSize="8" fontWeight="bold" textAnchor="middle">Redis Ingestion</text>

          <path d="M 270 115 L 315 115" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="320,115 312,110 312,120" fill="#94a3b8" />

          {/* Database & Anomaly */}
          <rect x="320" y="85" width="120" height="60" rx="8" fill="#ecfeff" stroke="#22d3ee" />
          <text x="380" y="108" fill="#0891b2" fontSize="9" fontWeight="bold" textAnchor="middle">LSTM Anomaly Core</text>
          <text x="380" y="122" fill="#64748b" fontSize="8" textAnchor="middle">InfluxDB Storage</text>
          <text x="380" y="134" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">Alert: RUL check</text>
        </svg>
      );
    default:
      // High-quality generic pipeline diagram for other projects
      return (
        <svg className="w-full max-w-lg h-60 mx-auto" viewBox="0 0 500 240">
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          {/* Input stage */}
          <rect x="20" y="90" width="90" height="50" rx="8" fill="url(#skyGrad)" />
          <text x="65" y="120" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">Client Layer</text>

          <path d="M 110 115 L 165 115" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="170,115 162,110 162,120" fill="#94a3b8" />

          {/* Processing server */}
          <rect x="170" y="55" width="130" height="110" rx="10" fill="none" stroke="#0284c7" strokeWidth="2" />
          <text x="235" y="80" fill="#0f172a" fontSize="10" fontWeight="bold" textAnchor="middle">Application APIs</text>
          <rect x="185" y="95" width="100" height="25" rx="4" fill="#f0f9ff" stroke="#e0f2fe" />
          <text x="235" y="111" fill="#0369a1" fontSize="8" fontWeight="bold" textAnchor="middle">Python / Node.js</text>
          <rect x="185" y="128" width="100" height="25" rx="4" fill="#f0f9ff" stroke="#e0f2fe" />
          <text x="235" y="144" fill="#0369a1" fontSize="8" fontWeight="bold" textAnchor="middle">ML Scoring Node</text>

          <path d="M 300 115 L 355 115" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="360,115 352,110 352,120" fill="#94a3b8" />

          {/* Database */}
          <rect x="360" y="90" width="100" height="50" rx="8" fill="#f0f9ff" stroke="#7dd3fc" />
          <text x="410" y="115" fill="#0369a1" fontSize="9" fontWeight="bold" textAnchor="middle">Database Schema</text>
          <text x="410" y="128" fill="#64748b" fontSize="8" textAnchor="middle">Relational / Vector</text>
        </svg>
      );
  }
};

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-slate-50 relative selection:bg-sky-200">
        <Navigation />
        <div className="max-w-md space-y-4">
          <AlertCircle size={48} className="text-red-500 mx-auto" />
          <h1 className="text-2xl font-black text-slate-900">Project Not Found</h1>
          <p className="text-sm text-slate-500">
            We couldn't locate any details matching slug <code className="bg-red-50 text-red-600 px-1.5 py-0.5 rounded font-mono">/projects/{slug}</code>.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition-colors shadow-sm"
          >
            <ArrowLeft size={14} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-sky-200/50 selection:text-sky-850 relative">
      <div 
        className="fixed inset-0 pointer-events-none -z-20 opacity-[0.12] blur-[8px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${premiumBg})` }}
      />

      <Navigation />

      <main className="pt-24 md:pt-32">
        {/* HERO BANNER SECTION */}
        <section className="relative overflow-hidden bg-slate-950 text-white py-20 md:py-32">
          {/* Subtle color glow matching tag gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[130px] -z-10" />

          <div className="max-w-[1400px] mx-auto px-6 text-left space-y-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs text-sky-400 font-bold hover:text-sky-300 transition-all font-mono"
            >
              <ArrowLeft size={13} />
              <span>Back To Projects</span>
            </Link>

            <div className="space-y-4 max-w-4xl">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block font-mono">
                {project.tagline}
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white uppercase">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed max-w-2xl text-balance">
                {project.overview}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-bold transition-all shadow-sm"
              >
                <Github size={14} />
                <span>View GitHub Repository</span>
              </a>
              {project.hasDemo && (
                <a
                  href={project.demoUrl || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <ExternalLink size={14} />
                  <span>Live Demonstration</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* STORYTELLING CASE STUDY DETAILS */}
        <section className="py-20 max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Storytelling Column (8 cols) */}
            <div className="lg:col-span-8 space-y-16 text-left">
              
              {/* Problem & Objectives */}
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">The Challenge & Objectives</h2>
                <div className="space-y-4 text-gray-600 font-medium">
                  <p className="leading-relaxed">
                    <span className="font-bold text-gray-900">Problem Statement:</span> {project.problem}
                  </p>
                </div>
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Objectives</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.objectives.map((obj, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2 text-xs text-gray-500 bg-white/40 border border-white/60 p-3 rounded-xl">
                        <CheckCircle2 size={15} className="text-sky-500 mt-0.5 flex-shrink-0" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Architecture & Flow Diagrams */}
              <div className="space-y-6">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">System Architecture & Workflow</h2>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  The diagram below illustrates how user payloads translate through API routes, scoring nodes, and vector databases.
                </p>
                <div className="bg-white/50 border border-white/75 rounded-2xl p-6 shadow-inner flex items-center justify-center">
                  {renderBespokeArchitecture(project.slug)}
                </div>
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Workflow Diagram Steps</h3>
                  <div className="relative border-l border-sky-150 pl-6 space-y-6 ml-2 text-left">
                    {project.workflow.map((step, sIdx) => (
                      <div key={sIdx} className="relative">
                        <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-sky-500 border border-white shadow-xs" />
                        <div className="text-xs">
                          <span className="font-bold text-gray-900 block font-mono uppercase mb-0.5">Step 0{sIdx + 1}</span>
                          <span className="text-gray-500 leading-relaxed font-semibold">{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Database Design */}
              {project.databaseDesign.tables.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-gray-200/50 pb-3">
                    <Database className="text-sky-600" size={20} />
                    <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Database Schema Design</h2>
                  </div>
                  <div className="space-y-6">
                    {project.databaseDesign.tables.map((table) => (
                      <div key={table.name} className="space-y-2 bg-white/40 border border-white/60 p-5 rounded-2xl">
                        <h4 className="text-xs font-bold text-sky-700 font-mono">TABLE: {table.name}</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs text-left">
                            <thead>
                              <tr className="border-b border-gray-250 text-gray-450 uppercase font-mono text-[10px]">
                                <th className="pb-2 font-bold">Field Name</th>
                                <th className="pb-2 font-bold">Data Type</th>
                                <th className="pb-2 font-bold">Description</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200/30">
                              {table.columns.map((col) => (
                                <tr key={col.name} className="text-gray-600">
                                  <td className="py-2.5 font-bold font-mono text-gray-900">{col.name}</td>
                                  <td className="py-2.5 font-mono text-sky-700">{col.type}</td>
                                  <td className="py-2.5 font-semibold text-gray-500">{col.desc}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* API Design */}
              {project.apiDesign.endpoints.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 border-b border-gray-200/50 pb-3">
                    <Server className="text-sky-600" size={20} />
                    <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">API Route Specifications</h2>
                  </div>
                  <div className="space-y-6">
                    {project.apiDesign.endpoints.map((ep) => (
                      <div key={ep.path} className="space-y-4 bg-white/40 border border-white/60 p-5 rounded-2xl">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-black ${
                            ep.method === "POST" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                            ep.method === "GET" ? "bg-sky-50 text-sky-700 border border-sky-100" : "bg-gray-100 text-gray-700"
                          }`}>
                            {ep.method}
                          </span>
                          <span className="font-mono text-xs font-bold text-gray-900">{ep.path}</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-semibold">{ep.desc}</p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 pt-1 font-mono text-[9px]">
                          {ep.requestBody && (
                            <div className="space-y-1">
                              <span className="text-[8px] font-bold text-gray-450 uppercase">Request Body Payload</span>
                              <pre className="p-3 bg-slate-900 text-slate-300 rounded-lg overflow-x-auto border border-slate-800 leading-normal max-h-40">{ep.requestBody}</pre>
                            </div>
                          )}
                          <div className={`${ep.requestBody ? "" : "col-span-2"} space-y-1`}>
                            <span className="text-[8px] font-bold text-gray-450 uppercase">Response JSON</span>
                            <pre className="p-3 bg-slate-900 text-slate-300 rounded-lg overflow-x-auto border border-slate-800 leading-normal max-h-40">{ep.responseBody}</pre>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges & Solutions */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Technical Challenges & Solutions</h2>
                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-red-50/30 border border-red-100 text-left space-y-2">
                    <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider font-mono">The Obstacle</h3>
                    <p className="text-xs text-red-950 font-medium leading-relaxed">{project.challenges}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-100 text-left space-y-2">
                    <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono">The Mitigation</h3>
                    <p className="text-xs text-emerald-950 font-medium leading-relaxed">{project.solutions}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Taxonomy Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8 text-left lg:sticky lg:top-24">
              
              {/* Product Launch Mockup box */}
              <div className="glass-card rounded-2xl p-2 border border-white/50 bg-white/20 backdrop-blur-md shadow-lg overflow-hidden relative">
                <div className="w-full h-56 rounded-xl overflow-hidden relative bg-slate-950">
                  {project.visual}
                </div>
              </div>

              {/* Tech Stack taxonomy breakdown */}
              <div className="glass-card rounded-2xl p-6 border border-white/50 space-y-6">
                <div className="flex items-center gap-2 border-b border-gray-200/40 pb-3">
                  <Cpu className="text-sky-600" size={18} />
                  <h3 className="text-sm font-bold text-gray-900">Technical Taxonomy</h3>
                </div>

                <div className="space-y-4 text-xs">
                  {project.techDetailed.ml && project.techDetailed.ml.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono">AI & Machine Learning</span>
                      <div className="flex flex-wrap gap-1">
                        {project.techDetailed.ml.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 font-bold">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.techDetailed.frontend && project.techDetailed.frontend.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono">Client-Side Logic</span>
                      <div className="flex flex-wrap gap-1">
                        {project.techDetailed.frontend.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full bg-white border border-gray-250 text-gray-650 font-bold">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.techDetailed.backend && project.techDetailed.backend.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono">API Frameworks</span>
                      <div className="flex flex-wrap gap-1">
                        {project.techDetailed.backend.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full bg-white border border-gray-250 text-gray-650 font-bold">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.techDetailed.database && project.techDetailed.database.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono">Data Stores</span>
                      <div className="flex flex-wrap gap-1">
                        {project.techDetailed.database.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full bg-white border border-gray-250 text-gray-650 font-bold">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.techDetailed.tools && project.techDetailed.tools.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono">Environments & SDKs</span>
                      <div className="flex flex-wrap gap-1">
                        {project.techDetailed.tools.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full bg-white border border-gray-250 text-gray-650 font-bold">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Future Scope */}
              <div className="glass-card rounded-2xl p-6 border border-white/50 space-y-4">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider font-mono">Future Roadmap</h3>
                <div className="space-y-2.5">
                  {project.futureScope.map((scope, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0 animate-pulse" />
                      <span>{scope}</span>
                    </div>
                  ))}
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

export default ProjectDetails;
