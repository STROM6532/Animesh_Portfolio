import React from "react";
import { 
  Brain, Cpu, Code2, ShieldCheck, HeartPulse, LineChart, 
  Eye, BarChart3, Database, MessageSquare, TrendingUp, 
  Mail, Video, Activity, Globe, Layout, Search, Layers, Server
} from "lucide-react";

export interface ProjectTable {
  name: string;
  columns: { name: string; type: string; desc: string }[];
}

export interface ProjectAPI {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  desc: string;
  requestBody?: string;
  responseBody: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  objectives: string[];
  tech: string[];
  techDetailed: {
    frontend?: string[];
    backend?: string[];
    ml?: string[];
    database?: string[];
    tools?: string[];
  };
  features: string[];
  workflow: string[];
  challenges: string;
  solutions: string;
  databaseDesign: {
    tables: ProjectTable[];
  };
  apiDesign: {
    endpoints: ProjectAPI[];
  };
  futureScope: string[];
  github: string;
  hasDemo: boolean;
  demoUrl?: string;
  icon: React.ReactNode;
  gradient: string;
  visual: React.ReactNode;
}

export const projectsData: ProjectData[] = [
  {
    slug: "neuro-path-ai",
    title: "NeuroPath AI",
    tagline: "AI-Powered Career Guidance & Interview Platform",
    overview: "An intelligent platform designed to streamline interview preparation and career mapping. It automatically parses resumes, conducts mock interview simulations using conversational AI agents, scores candidate metrics, and dynamically constructs learning roadmaps to close talent skill gaps.",
    problem: "Standard career guidance tools rely on generic questionnaires, leading to outdated, non-personalized advice. Meanwhile, candidates struggle to practice for interviews in realistic environments that test their specific skill profile and offer immediate feedback.",
    objectives: [
      "Deliver realistic conversational AI interview simulations.",
      "Analyze resumes automatically against custom job descriptions.",
      "Map personalized learning roadmaps with active learning nodes.",
      "Measure candidate performance with latency, confidence, and keyword tracking."
    ],
    tech: ["Next.js", "TypeScript", "Python", "FastAPI", "Gemini AI", "Tailwind CSS"],
    techDetailed: {
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
      backend: ["Python", "FastAPI", "Uvicorn", "LangChain"],
      ml: ["Gemini Pro API", "SentenceTransformers (Embeddings)", "NLTK"],
      database: ["MongoDB Atlas (Vector Search)"],
      tools: ["Docker", "Git", "Postman"]
    },
    features: [
      "Voice & Text Interview Simulator powered by LLMs.",
      "Resume scoring and ATS optimizer dashboard.",
      "Personalized learning roadmap generator with direct learning links.",
      "Performance metrics tracking with mock grade scales."
    ],
    workflow: [
      "User uploads resume and inputs target job description.",
      "System extracts skills and computes ATS matching index.",
      "AI interviewer agent queries candidate based on detected gaps.",
      "Symptom-checking engine compiles transcripts and logs score parameters."
    ],
    challenges: "Handling real-time low-latency response cycles for voice-based interviews while scoring transcripts on the fly without breaking conversational flow.",
    solutions: "Implemented an asynchronous chunk-based queue processing model in FastAPI, separating transcript generation from evaluations and routing through a caching layer.",
    databaseDesign: {
      tables: [
        {
          name: "candidates",
          columns: [
            { name: "id", type: "ObjectId", desc: "Unique identifier for the candidate." },
            { name: "name", type: "String", desc: "Full name of the user." },
            { name: "skills", type: "Array<String>", desc: "List of parsed core competencies." }
          ]
        },
        {
          name: "interview_sessions",
          columns: [
            { name: "id", type: "ObjectId", desc: "Session identifier." },
            { name: "candidate_id", type: "ObjectId", desc: "Reference to candidates table." },
            { name: "overall_score", type: "Number", desc: "Calculated rating out of 100." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/interviews/analyze-resume",
          desc: "Upload and extract skills and matching scores from a resume file.",
          requestBody: "Multipart Form Data: { file: File, target_role: string }",
          responseBody: "{ \"ats_score\": 88.5, \"parsed_skills\": [\"Python\", \"React\"], \"suggested_improvements\": [\"Add cloud experience\"] }"
        },
        {
          method: "POST",
          path: "/api/v1/interviews/session/respond",
          desc: "Send conversational interview user answers to receive the next AI prompt.",
          requestBody: "{ \"session_id\": \"sess_01\", \"response_text\": \"I use Redux for global state...\" }",
          responseBody: "{ \"next_question\": \"How do you handle middleware in Redux?\", \"latency_ms\": 150 }"
        }
      ]
    },
    futureScope: [
      "Integrate emotion detection models via webcam feeds.",
      "Partner with technical certification boards to auto-verify credentials."
    ],
    github: "https://github.com/animesh6532/NeuroPath_AI.git",
    hasDemo: true,
    icon: <Brain className="text-white" size={24} />,
    gradient: "from-sky-400 to-blue-500",
    visual: (
      <div className="w-full h-full p-4 font-mono text-[9px] text-gray-500 flex flex-col justify-between bg-sky-950/95 border border-sky-400/20 rounded-2xl relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl" />
        <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="font-bold text-sky-300">neuropath_core_agent.py</span>
          </div>
          <span className="text-emerald-400 font-bold">● ONLINE</span>
        </div>
        <div className="space-y-1.5 my-2 z-10">
          <div className="bg-white/5 p-2 rounded border border-white/10 space-y-1">
            <p className="text-gray-400 font-bold">{"{ 'candidate': 'Animesh Sahoo', 'domain': 'AI/ML' }"}</p>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-sky-400" />
            </div>
            <p className="text-[8px] text-sky-300">Resume Relevance: 92% (Tuned on Technical Stack)</p>
          </div>
          <div className="bg-white/5 p-1.5 rounded text-[8px] border border-white/5 flex justify-between">
            <span className="text-gray-400">Current Question:</span>
            <span className="text-sky-200 truncate max-w-[120px]">"Describe a complex ML pipeline..."</span>
          </div>
        </div>
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[8px] text-gray-450 z-10">
          <span>GPU: T4 (12%)</span>
          <span>Response latency: 180ms</span>
        </div>
      </div>
    )
  },
  {
    slug: "startupforge-ai",
    title: "StartupForge AI",
    tagline: "Multi-Agent Startup Intelligence Platform",
    overview: "An agentic system coordinating multiple specialized LLM agents to research market viability, automate competitive indexes, draft financial spreadsheets, and format pitch materials for early-stage ventures.",
    problem: "Founders spend hundreds of hours researching competitors, detailing addressable market size (TAM/SAM/SOM), and drafting product timelines. Traditional analysis methods are fragmented and lack mathematical synchronization.",
    objectives: [
      "Orchestrate a team of agents (Market Researcher, Financial Planner, Pitch Writer) using LangGraph.",
      "Automate data gathering from web indices to map active competitors.",
      "Formulate interactive Lean Canvas boards and timeline estimates."
    ],
    tech: ["Python", "LangGraph", "LangChain", "LLMs", "FastAPI", "React"],
    techDetailed: {
      frontend: ["React", "Tailwind CSS", "Framer Motion"],
      backend: ["Python", "FastAPI", "LangGraph Orchestrator", "Pydantic"],
      ml: ["Claude-3 / GPT-4 API", "OpenAI Embeddings"],
      database: ["Pinecone (Vector Database)"],
      tools: ["Tavily API (Web Search Agent)", "Docker"]
    },
    features: [
      "Multi-agent interactive graphs rendering active execution nodes.",
      "Live market indexing pipeline querying actual search engines.",
      "Dynamic interactive Lean Business Canvas generator.",
      "Investor pitch deck slides outline writer."
    ],
    workflow: [
      "User outlines startup idea and industry niche.",
      "LangGraph agent pool initiates search tasks across competitors.",
      "Financial agents synthesize budget and timeline metrics.",
      "Writer agent models pitch documents and formats business boards."
    ],
    challenges: "Preventing loop-locks and hallucinations where agents trigger circular search tasks without outputting concrete summaries.",
    solutions: "Structured explicit state machines with boundary rules and validation schemas that terminate search loops once required metrics are acquired.",
    databaseDesign: {
      tables: [
        {
          name: "startup_profiles",
          columns: [
            { name: "id", type: "UUID", desc: "Primary identifier for the profile." },
            { name: "concept_name", type: "String", desc: "Name of the concept." },
            { name: "market_analysis", type: "JSON", desc: "Compiled report from search agents." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/forge/initiate",
          desc: "Trigger the multi-agent graph pipelines to evaluate a startup idea.",
          requestBody: "{ \"concept\": \"On-demand autonomous agricultural drone mapping\" }",
          responseBody: "{ \"job_id\": \"job_998\", \"status\": \"running\", \"active_agent\": \"Market Researcher\" }"
        }
      ]
    },
    futureScope: [
      "Incorporate financial calculation tools to export ready-to-run Excel models.",
      "Add interactive pitch practice nodes matching specific VC profiles."
    ],
    github: "https://github.com/animesh6532/StartUp_Forge_AI",
    hasDemo: false,
    icon: <Cpu className="text-white" size={24} />,
    gradient: "from-blue-400 to-indigo-500",
    visual: (
      <div className="w-full h-full flex flex-col justify-between p-4 bg-slate-900 border border-indigo-500/20 rounded-2xl text-left font-sans">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono">Agent Pipeline Graph</span>
          <span className="text-[8px] font-bold bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">AGENTIC ORCHESTRATION</span>
        </div>
        <div className="relative flex-1 py-4 flex items-center justify-center gap-2">
          {/* Active SVG lines overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <svg className="w-full h-full stroke-indigo-500 fill-transparent" viewBox="0 0 200 80">
              <path d="M 35 40 L 95 40 M 105 40 L 165 40" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
          <div className="z-10 bg-white/5 border border-white/10 p-1.5 rounded-lg text-center w-14">
            <Search size={12} className="text-indigo-400 mx-auto mb-1" />
            <p className="text-[7px] font-bold text-gray-300">Research</p>
            <p className="text-[6px] text-green-400">Done</p>
          </div>
          <div className="z-10 bg-indigo-950/80 border border-indigo-400 p-2 rounded-lg text-center w-18 animate-pulse shadow-md shadow-indigo-500/10">
            <Cpu size={14} className="text-indigo-300 mx-auto mb-1" />
            <p className="text-[7px] font-bold text-white">Financials</p>
            <p className="text-[6px] text-indigo-300">Processing</p>
          </div>
          <div className="z-10 bg-white/5 border border-white/10 p-1.5 rounded-lg text-center w-14 opacity-50">
            <Layout size={12} className="text-gray-400 mx-auto mb-1" />
            <p className="text-[7px] font-bold text-gray-300">Pitch Deck</p>
            <p className="text-[6px] text-gray-500">Idle</p>
          </div>
        </div>
        <div className="text-[7px] text-gray-400 border-t border-white/10 pt-2 flex justify-between font-mono">
          <span>Active: langgraph_financial_agent</span>
          <span>Buffer: 95.8% Complete</span>
        </div>
      </div>
    )
  },
  {
    slug: "nextwin-ai",
    title: "NexTwin AI",
    tagline: "Industrial Digital Twin Platform",
    overview: "A sophisticated mechanical intelligence suite that aggregates real-time industrial telemetry, models structural machine wear, and alerts maintenance operators to anomalies prior to equipment degradation.",
    problem: "Sudden mechanical failure costs assembly lines billions in downtime. Standard threshold alerts trigger too late, failing to isolate component wear anomalies until breakdown occurs.",
    objectives: [
      "Parse and stream sensor parameters at high frequencies (50Hz).",
      "Model degradation indexes across key moving components (bearings, pistons).",
      "Provide maintenance teams with predictive anomaly warnings via real-time alerts."
    ],
    tech: ["Python", "FastAPI", "React", "Recharts", "Scikit-learn"],
    techDetailed: {
      frontend: ["React", "Tailwind CSS", "Recharts", "Lucide Icons"],
      backend: ["Python", "FastAPI", "Uvicorn", "WebSockets"],
      ml: ["LSTM Autoencoder (Anomaly Detection)", "XGBoost (RUL estimation)"],
      database: ["InfluxDB (Time Series Sensor Data)", "PostgreSQL"],
      tools: ["Git", "Docker"]
    },
    features: [
      "Real-time sensor telemetry dashboards with interactive line widgets.",
      "Anomaly detection triggers utilizing predictive neural networks.",
      "Remaining Useful Life (RUL) estimation indices.",
      "Maintenance workflow dispatch queues."
    ],
    workflow: [
      "IoT gateways stream sensor packets (Vibration, Temp, Pressure) via WebSockets.",
      "InfluxDB indexes and warehouses the high-frequency telemetry.",
      "ML pipelines continuously score sensor vectors using LSTM autoencoders.",
      "Dashboard triggers popups when anomaly parameters drift from nominal baselines."
    ],
    challenges: "Ingesting and processing millions of sensor values from multiple telemetry nodes in real-time without locking database transactions.",
    solutions: "Structured a split ingestion model leveraging Redis queue buffers to queue incoming streams before writing records to InfluxDB in micro-batches.",
    databaseDesign: {
      tables: [
        {
          name: "machine_telemetry",
          columns: [
            { name: "time", type: "Timestamp (Key)", desc: "Nanosecond timestamp." },
            { name: "machine_id", type: "String (Tag)", desc: "Unique machine asset ID." },
            { name: "temperature", type: "Float (Field)", desc: "Core temperature value." },
            { name: "vibration_rms", type: "Float (Field)", desc: "Vibration root-mean-square." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "GET",
          path: "/api/v1/sensors/live-status",
          desc: "Retrieve current metrics across active machinery telemetry nodes.",
          responseBody: "{ \"machine_1\": { \"health\": 98.4, \"temperature\": 72.5, \"vibration\": 0.12, \"status\": \"nominal\" } }"
        }
      ]
    },
    futureScope: [
      "Integrate AR rendering models to overlay real-time sensor stats directly onto tablets.",
      "Integrate automated parts ordering protocols based on RUL limits."
    ],
    github: "https://github.com/animesh6532/NexTwinAI",
    hasDemo: true,
    icon: <Code2 className="text-white" size={24} />,
    gradient: "from-sky-300 to-cyan-500",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-950 border border-cyan-500/20 rounded-2xl text-left font-mono text-[9px] relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-t from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
          <div className="flex items-center gap-1">
            <Activity size={12} className="text-cyan-400 animate-pulse" />
            <span className="font-bold text-gray-300 text-[8px] uppercase tracking-wider">IoT Sensor Telemetry</span>
          </div>
          <span className="text-cyan-400 font-extrabold text-[8px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/30">DEGRADATION MONITOR: OK</span>
        </div>
        <div className="h-20 flex items-end gap-1.5 px-1 py-2 z-10">
          <div className="w-full bg-cyan-950 border border-cyan-800/30 rounded h-[35%] flex items-center justify-center text-[7px] text-cyan-400">T:72°C</div>
          <div className="w-full bg-cyan-950 border border-cyan-800/30 rounded h-[55%] flex items-center justify-center text-[7px] text-cyan-400">V:0.12</div>
          <div className="w-full bg-cyan-950 border border-cyan-400/50 rounded h-[85%] flex items-center justify-center text-[7px] text-cyan-300 animate-pulse">P:94%</div>
          <div className="w-full bg-cyan-950 border border-cyan-800/30 rounded h-[45%] flex items-center justify-center text-[7px] text-cyan-400">F:12Hz</div>
        </div>
        <div className="text-[7px] text-cyan-500/80 pt-2 border-t border-white/10 flex justify-between z-10">
          <span>Node ID: twin_piston_04</span>
          <span>RUL: 142 Days Remaining</span>
        </div>
      </div>
    )
  },
  {
    slug: "xe-commerce",
    title: "XE-Commerce",
    tagline: "Next-Gen E-Commerce Suite",
    overview: "A highly scalable digital commerce system incorporating real-time inventory updates, machine learning recommendation lists, shopping trends, and user transaction dashboards.",
    problem: "E-Commerce websites suffer from slow product rendering times, poor recommending engines that show unrelated products, and high basket abandonment rates due to clunky checkouts.",
    objectives: [
      "Develop a high-speed web checkout with under-2s loading benchmarks.",
      "Embed collaborative filtering recommendation modules.",
      "Implement resilient, race-condition-free inventory tracking systems."
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Redux Toolkit"],
    techDetailed: {
      frontend: ["Next.js 14", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Mongoose"],
      ml: ["Collaborative Filtering (TF-IDF Similarity Module)"],
      database: ["MongoDB Atlas", "Redis (Session Caching)"],
      tools: ["Stripe SDK", "Docker", "Git"]
    },
    features: [
      "High-fidelity responsive catalog browser.",
      "Collaborative-recommendation widget based on page engagement.",
      "Resilient checkout pipelines with secure processing simulation.",
      "Real-time order validation trackers."
    ],
    workflow: [
      "User browses product catalog indexed on MongoDB.",
      "Recommendation engine calculates similarity factors against current cart.",
      "Stripe checkout simulation handles token validation and registers state.",
      "Warehouse status notifications alert product controllers."
    ],
    challenges: "Ensuring inventory counts do not result in over-allocation or race conditions during flash sales when multiple users pay at the same millisecond.",
    solutions: "Employed pessimistic locking strategies and atomic decrement queries in MongoDB database operations to reject orders exceeding physical limits.",
    databaseDesign: {
      tables: [
        {
          name: "products",
          columns: [
            { name: "id", type: "ObjectId", desc: "Identifier." },
            { name: "title", type: "String", desc: "Name of the product." },
            { name: "stock_quantity", type: "Number", desc: "Physical inventory left." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/orders/checkout",
          desc: "Process a cart transaction and lock matching inventories.",
          requestBody: "{ \"cart_items\": [{\"product_id\": \"p01\", \"qty\": 2}], \"payment_token\": \"tok_99\" }",
          responseBody: "{ \"order_id\": \"ord_105\", \"status\": \"paid\", \"tracking_url\": \"/track/105\" }"
        }
      ]
    },
    futureScope: [
      "Integrate cryptocurrency payments using modern blockchain nodes.",
      "Add interactive AR catalog models enabling virtual placements."
    ],
    github: "https://github.com/animesh6532/XE-commerce",
    hasDemo: true,
    icon: <Globe className="text-white" size={24} />,
    gradient: "from-cyan-400 to-blue-500",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900 border border-blue-500/20 rounded-2xl text-left font-sans text-[9px] relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="font-bold text-[8px] text-blue-400 tracking-wider">Product Intelligence Widget</span>
          <span className="text-[7px] text-gray-400 font-mono">ID: 88923</span>
        </div>
        <div className="space-y-2 py-3">
          <div className="bg-white/5 border border-white/10 p-2 rounded flex items-center justify-between">
            <div>
              <p className="font-bold text-white">Collaboration Filter Score</p>
              <p className="text-[7px] text-gray-400">Based on user shopping trends</p>
            </div>
            <span className="text-xs font-black text-emerald-400">+94.6%</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[8px]">
            <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
              <span className="text-gray-450 block">Conversion</span>
              <span className="font-bold text-white">4.8%</span>
            </div>
            <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
              <span className="text-gray-450 block">AOV</span>
              <span className="font-bold text-white">$142.00</span>
            </div>
          </div>
        </div>
        <div className="text-[8px] text-blue-400 flex items-center justify-between font-mono">
          <span>Stripe Gateway Connected</span>
          <span>Catalog Index: 12ms</span>
        </div>
      </div>
    )
  },
  {
    slug: "carebot-plus",
    title: "CareBot+",
    tagline: "Privacy-First AI Healthcare Assistant",
    overview: "A secure medical companion incorporating local LLM parsing to execute private symptom evaluation, schedule diagnostic timelines, and map nearby clinical centers.",
    problem: "Users seeking healthcare details struggle with search queries that broadcast sensitive personal symptoms to commercial advertising trackers, breaching data privacy standard protocols.",
    objectives: [
      "Compile a privacy-focused chat interface routing inputs through sanitized filters.",
      "Generate relative medical tags using contextual NLP classifiers.",
      "Enable emergency hospital maps queries based on localized location details."
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Gemini AI", "Tailwind CSS"],
    techDetailed: {
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      backend: ["Node.js", "Express", "Mongoose"],
      ml: ["Gemini Pro API (Sanitized Prompts)", "NLTK (Symptom Parser)"],
      database: ["MongoDB Atlas", "Redis (Session Store)"],
      tools: ["Git", "Docker"]
    },
    features: [
      "Privacy-first LLM symptom evaluator with locally run regex filters.",
      "Emergency clinical geolocation finder widgets.",
      "Medication calendar alarms timeline.",
      "Secure chat transcript exporter keys."
    ],
    workflow: [
      "User details symptom prompts in the encrypted chat box.",
      "Local parser filters out personally identifiable information (PII).",
      "Sanitized inputs query Gemini AI with specialized medical prompt constraints.",
      "CareBot returns potential alerts and maps clinical locations."
    ],
    challenges: "Providing reliable health information while protecting against medical liability and avoiding incorrect diagnosises.",
    solutions: "Engineered strict prompt boundaries that prefix outputs with structured medical disclaimers and redirect candidates to local emergency phone triggers when high-alert symptoms occur.",
    databaseDesign: {
      tables: [
        {
          name: "consultation_logs",
          columns: [
            { name: "id", type: "UUID", desc: "Consultation identifier." },
            { name: "sanitized_transcript", type: "String", desc: "Transcripts with PII removed." },
            { name: "risk_level", type: "String", desc: "Low, Medium, or High alert status." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/health/symptoms/check",
          desc: "Sanitize user prompt inputs and return safe clinical evaluations.",
          requestBody: "{ \"symptom_prompt\": \"I have a headache since morning\" }",
          responseBody: "{ \"suggested_actions\": [\"Stay hydrated\", \"Monitor temperature\"], \"alert\": \"nominal\", \"disclaimer\": \"Not medical advice\" }"
        }
      ]
    },
    futureScope: [
      "Incorporate wear-sensors API hooks to map live heart rate data.",
      "Partner with private clinical networks to schedule doctor consultations directly."
    ],
    github: "https://github.com/animesh6532/Carebot",
    hasDemo: true,
    icon: <HeartPulse className="text-white" size={24} />,
    gradient: "from-cyan-400 to-blue-500",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900 border border-teal-500/20 rounded-2xl text-left font-sans text-[9px] relative overflow-hidden">
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-gray-300">CareBot core_v2</span>
        </div>
        <div className="space-y-2 py-2">
          <p className="bg-white/5 border border-white/10 p-2 rounded-xl text-gray-300 max-w-[85%] leading-normal">
            Evaluating symptom clusters... Analysis matches seasonal congestion levels.
          </p>
          <p className="bg-teal-500/10 text-teal-300 border border-teal-500/20 p-2 rounded-xl self-end max-w-[85%] ml-auto text-right leading-normal">
            Action: Remain hydrated. Monitor temperature trends.
          </p>
        </div>
        <div className="text-[7px] text-teal-400 flex items-center justify-between font-mono">
          <span>PII Filter: Sanitized (100%)</span>
          <span>Confidence: 91.2%</span>
        </div>
      </div>
    )
  },
  {
    slug: "fraud-detect",
    title: "Fraud Detect",
    tagline: "AI-Powered Fraud Intelligence Platform",
    overview: "An enterprise-grade transaction auditing dashboard aggregating transaction records, computing dynamic risk factors, and managing investigator review queues.",
    problem: "Payment processing streams ingest millions of items hourly. Financial investigators lack unified review boards to inspect transaction anomalies in real-time before payments clear.",
    objectives: [
      "Compute risk probabilities on payment events within milliseconds.",
      "Generate modular anomaly matrices based on user spending locations.",
      "Assemble an interactive dashboard queue for investigations managers."
    ],
    tech: ["Python", "FastAPI", "Next.js", "Scikit-learn", "Tailwind CSS"],
    techDetailed: {
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Lucide Icons", "Recharts"],
      backend: ["Python", "FastAPI", "Uvicorn"],
      ml: ["Isolation Forest (Anomalies)", "Random Forest (Classification)"],
      database: ["PostgreSQL (Transaction indexing)"],
      tools: ["Git", "Docker", "Poetry"]
    },
    features: [
      "Dynamic risk score evaluator widget.",
      "Transaction anomaly mapping matrix charts.",
      "Investigator validation queue dashboard.",
      "Actionable incident resolution hooks."
    ],
    workflow: [
      "Credit card transactions register on the core API node.",
      "ML classifiers compute risk indicators based on location and frequency values.",
      "Suspicious logs get labeled and queued onto the inspection board.",
      "Managers review and release or lock the payment profiles."
    ],
    challenges: "Balancing high accuracy in fraud detection with low false positive rates to avoid locking accounts of legitimate users.",
    solutions: "Constructed dual-tier validation routing where transactions are graded by localized individual user rules before querying the general ML model.",
    databaseDesign: {
      tables: [
        {
          name: "transactions",
          columns: [
            { name: "id", type: "UUID", desc: "Unique transactional ID." },
            { name: "amount", type: "Decimal", desc: "Dollar amount of transaction." },
            { name: "risk_probability", type: "Float", desc: "Risk index score." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/fraud/evaluate",
          desc: "Analyze transactional telemetry and trigger warnings if risk indexes exceed thresholds.",
          requestBody: "{ \"transaction_id\": \"t_001\", \"amount\": 14500, \"location_ip\": \"102.3.4.1\" }",
          responseBody: "{ \"risk_score\": 94.2, \"flagged\": true, \"actions\": [\"hold_transaction\", \"sms_verification\"] }"
        }
      ]
    },
    futureScope: [
      "Integrate deep autoencoder networks to model fraud behavior across countries.",
      "Deploy localized transaction scanners running directly on POS devices."
    ],
    github: "https://github.com/animesh6532/Transaction_Fraud_Detection",
    hasDemo: false,
    icon: <ShieldCheck className="text-white" size={24} />,
    gradient: "from-blue-500 to-sky-600",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0F172A] border border-red-500/20 rounded-2xl text-left font-mono text-[9px] relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-b from-red-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="flex items-center justify-between border-b border-white/10 pb-2 z-10">
          <span className="text-red-400 font-extrabold uppercase tracking-widest text-[8px]">Suspicion Alert Node</span>
          <span className="text-[7px] text-gray-400">ID: tx_99827</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center space-y-1.5 z-10">
          <p className="text-gray-400 text-[8px] tracking-wide">SCORING RISK INDEX</p>
          <h5 className="text-4xl font-extrabold text-red-500 animate-pulse tracking-tight">94.2%</h5>
          <span className="bg-red-500/10 text-red-400 border border-red-500/30 px-3 py-0.5 rounded text-[8px] font-bold">CRITICAL ABNORMALITY</span>
        </div>
        <div className="text-[7px] text-gray-450 border-t border-white/10 pt-2 flex justify-between z-10">
          <span>Target: credit_card_swipe</span>
          <span>Latency: 12ms</span>
        </div>
      </div>
    )
  },
  {
    slug: "visioncart-ai",
    title: "VisionCart AI",
    tagline: "Product Recognition & Intelligent Shelf Optimization",
    overview: "A computer vision model that automates stock inventory counting and shelf optimization using edge product recognition, real-time object tracking, and automatic category tags labeling.",
    problem: "Retail managers manually audit stock items, leading to high counts errors, empty retail shelves, and slow shelf replenishment cycles.",
    objectives: [
      "Implement real-time product boundary categorization grids.",
      "Calculate stock quantities from live retail camera streams.",
      "Draft automated alert templates for out-of-stock items."
    ],
    tech: ["Python", "OpenCV", "PyTorch", "YOLOv8", "React"],
    techDetailed: {
      frontend: ["React", "Tailwind CSS", "Framer Motion"],
      backend: ["Python", "FastAPI", "WebSockets"],
      ml: ["YOLOv8 Object Detection", "PyTorch Classification"],
      database: ["PostgreSQL (Product Inventory registry)"],
      tools: ["Git", "Roboflow (Annotation)"]
    },
    features: [
      "Camera feed interface drawing bounding boxes on detected products.",
      "Accuracy metrics panels rendering model precision scores.",
      "Automatic stock update counters linked to APIs.",
      "Automated SEO copywriting tools for product listings."
    ],
    workflow: [
      "Camera captures shelving frames and streams frames to edge nodes.",
      "YOLOv8 network maps coordinates and classes product boxes.",
      "Inventory databases update items metrics based on calculated box counts.",
      "Visual panels notify clerks when shelf capacities drop below target ratios."
    ],
    challenges: "Overlapping objects and poor lighting conditions in retail stores leading to incorrect classification indexes.",
    solutions: "Leveraged spatial tracking to count items based on depth factors and augmented training datasets with severe lighting shifts.",
    databaseDesign: {
      tables: [
        {
          name: "shelves",
          columns: [
            { name: "id", type: "UUID", desc: "Shelf location identifier." },
            { name: "target_product_id", type: "String", desc: "Expected product on this shelf." },
            { name: "current_count", type: "Number", desc: "Detected quantity." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/vision/analyze-frame",
          desc: "Process camera frames to index bounding box coordinates and object counts.",
          requestBody: "Multipart Form Data: { image: File }",
          responseBody: "{ \"detected_items\": [{\"class\": \"soda_can\", \"confidence\": 0.94}], \"shelf_utilization\": 82.5 }"
        }
      ]
    },
    futureScope: [
      "Incorporate thermal profiling to detect temperature drifts in fresh produce sections.",
      "Develop robotic integration systems enabling autonomous navigation on store shelves."
    ],
    github: "https://github.com/animesh6532/VisionCart-AI",
    hasDemo: false,
    icon: <Eye className="text-white" size={24} />,
    gradient: "from-sky-400 to-indigo-500",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900 border border-sky-500/20 rounded-2xl text-left font-sans text-[9px] relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="font-bold text-[8px] text-sky-400 tracking-wider">YOLOv8 Detection Feed</span>
          <span className="text-[7px] text-emerald-400 font-mono">● LIVE STREAM</span>
        </div>
        <div className="relative flex-1 my-3 bg-black/40 border border-white/10 rounded flex items-center justify-center overflow-hidden">
          {/* Mock Camera frame layout */}
          <div className="absolute top-2 left-2 border-t-2 border-l-2 border-sky-400 w-3 h-3" />
          <div className="absolute top-2 right-2 border-t-2 border-r-2 border-sky-400 w-3 h-3" />
          <div className="absolute bottom-2 left-2 border-b-2 border-l-2 border-sky-400 w-3 h-3" />
          <div className="absolute bottom-2 right-2 border-b-2 border-r-2 border-sky-400 w-3 h-3" />
          
          <div className="border border-emerald-400 bg-emerald-500/10 px-2 py-1 rounded text-center text-emerald-300 text-[8px] z-10 shadow">
            <p className="font-bold font-mono">soda_can</p>
            <p className="text-[6px]">Conf: 94.8%</p>
          </div>
          <div className="absolute top-1/2 left-4 w-4/5 h-px bg-sky-400/50 animate-[bounce_2s_infinite]" />
        </div>
        <div className="text-[7px] text-sky-400 flex items-center justify-between font-mono">
          <span>FPS: 28.4</span>
          <span>Resolution: 640x640</span>
        </div>
      </div>
    )
  },
  {
    slug: "nifty100-financial-analytics",
    title: "NIFTY100 Financial Analytics Dashboard",
    tagline: "Enterprise-Grade Financial Analytics Platform",
    overview: "A robust financial system aggregating market indicators for the NIFTY100 indices, integrating relational schema architectures and interactive Power BI dashboards.",
    problem: "Financial analysts query indexes through scattered APIs, leading to slow comparative calculations and lack of unified trend analytics panels for executive reviews.",
    objectives: [
      "Create relational structures organizing stock tickers and market variables.",
      "Formulate interactive analytical dashboard views.",
      "Deploy trend evaluation modules forecasting stock indices values."
    ],
    tech: ["Python", "PostgreSQL", "Power BI", "Pandas", "NumPy"],
    techDetailed: {
      frontend: ["Power BI Desktop (Dashboard Visuals)", "HTML/CSS (Web Embeds)"],
      backend: ["Python (Scraper Scripts)"],
      ml: ["Prophet Model (Trend forecasting)", "Correlation Matrix"],
      database: ["PostgreSQL (Local warehouse)"],
      tools: ["Git", "Jupyter Notebook"]
    },
    features: [
      "Relational Postgres tables mapping daily ticker parameters.",
      "Interactive executive dashboards with sector analytics dashboards.",
      "Trend charts forecasting index movements.",
      "Automated PDF reporting builders."
    ],
    workflow: [
      "Python scripts query NSE indexes daily to scrape ticker logs.",
      "Postgres database filters outliers and writes clean transactions records.",
      "Power BI schemas consume the database views to update charts.",
      "Analysts utilize interactive cards to filter out volatility variables."
    ],
    challenges: "Handling stock split adjustments and missing ticker logs in the database tables without distorting historical trend lines.",
    solutions: "Engineered normalization triggers in SQL that check corporate events indexes and recalculate historical coefficients automatically.",
    databaseDesign: {
      tables: [
        {
          name: "ticker_history",
          columns: [
            { name: "ticker", type: "VARCHAR(12)", desc: "Stock ticker symbol (e.g. RELIANCE)." },
            { name: "trading_date", type: "DATE", desc: "Calendar date." },
            { name: "close_price", type: "DECIMAL(12,2)", desc: "Closing price." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "GET",
          path: "/api/v1/analytics/tickers/NIFTY100",
          desc: "Get performance summaries for the NIFTY100 index companies.",
          responseBody: "{ \"tickers_scraped\": 100, \"latest_sync\": \"2026-06-27\", \"sector_performance\": { \"IT\": +1.2, \"Banking\": -0.4 } }"
        }
      ]
    },
    futureScope: [
      "Incorporate sentiment parsing variables from economic articles.",
      "Add interactive portfolio simulators evaluating asset allocations."
    ],
    github: "https://github.com/animesh6532/nifty100-financial-intelligence",
    hasDemo: false,
    icon: <BarChart3 className="text-white" size={24} />,
    gradient: "from-sky-400 to-indigo-500",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900 border border-indigo-500/20 rounded-2xl text-left font-mono text-[9px] relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1">
            <TrendingUp size={12} className="text-emerald-400" />
            <span className="font-bold text-gray-300">NIFTY100 Market Monitor</span>
          </div>
          <span className="text-emerald-400 font-extrabold text-[8px] bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/30">+2.19%</span>
        </div>
        <div className="flex-1 flex items-center justify-center my-1">
          <svg className="w-full h-16 stroke-sky-400 fill-transparent" viewBox="0 0 200 60">
            <path d="M 0 50 L 25 45 L 50 48 L 75 32 L 100 38 L 125 15 L 150 20 L 175 5 L 200 2" strokeWidth="2.0" strokeLinecap="round" />
            <path d="M 0 50 L 25 45 L 50 48 L 75 32 L 100 38 L 125 15 L 150 20 L 175 5 L 200 2 L 200 60 L 0 60 Z" fill="url(#gradient-blue)" strokeWidth="0" opacity="0.1" />
            <defs>
              <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-[7px] text-gray-400 flex items-center justify-between pt-1 border-t border-white/10">
          <span>Database status: Normalized</span>
          <span>Indexed: 100/100 Tickers</span>
        </div>
      </div>
    )
  },
  {
    slug: "mutual-fund-intelligence",
    title: "Mutual Fund Industry Intelligence Dashboard",
    tagline: "Power BI Executive Dashboard",
    overview: "An executive-grade analytical portal visualizing market share analytics, asset allocation indices, and compounding metrics across mutual fund houses.",
    problem: "Fund houses manage assets across multiple asset classes (equity, debt, hybrid). Executive boards lack consolidated business dashboards tracking market share shifts and net inflow changes.",
    objectives: [
      "Structure multi-dimensional star schemas connecting fund indicators.",
      "Formulate interactive Power BI panels demonstrating AUM distributions.",
      "Deploy performance rating cards sorting funds by historical Sharpe ratios."
    ],
    tech: ["Power BI", "SQL Server", "Excel", "DAX", "Python"],
    techDetailed: {
      frontend: ["Power BI Desktop (Executive Canvas Layout)"],
      backend: ["SQL Server Integration Services (SSIS)"],
      database: ["SQL Server (Data Warehouse Database)"],
      tools: ["DAX Studio", "Excel Analytics"]
    },
    features: [
      "Star schema data warehouse models organizing assets details.",
      "Interactive Power BI executive dashboards outlining sector shifts.",
      "Asset Under Management (AUM) growth widgets.",
      "DAX calculated columns evaluating performance matrices."
    ],
    workflow: [
      "ETL routines load raw fund house reports into SQL Server databases.",
      "Data schemas organize values into structured fact and dimension tables.",
      "DAX calculations compute rolling averages and growth ratios.",
      "Power BI renders interactive maps and lists detailing market shares."
    ],
    challenges: "Standardizing different report schemas from multiple fund organizations into a single warehouse model.",
    solutions: "Formulated automated Python pre-processors that parse inbound reports, translate headers to standardized keys, and write records to SQL tables.",
    databaseDesign: {
      tables: [
        {
          name: "fact_aum_snapshots",
          columns: [
            { name: "snapshot_key", type: "INT (PK)", desc: "Calendar surrogate key." },
            { name: "fund_key", type: "INT (FK)", desc: "Fund dimension foreign key." },
            { name: "net_aum_amount", type: "DECIMAL(18,4)", desc: "Indexed AUM value." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "GET",
          path: "/api/v1/mutual-funds/aum-distribution",
          desc: "Retrieve aggregated AUM variables across active fund houses.",
          responseBody: "{ \"total_aum\": \"$4.2B\", \"yoy_growth_pct\": 12.8, \"top_performing_class\": \"Large Cap Equity\" }"
        }
      ]
    },
    futureScope: [
      "Link live API scraping triggers to automate intra-day valuations calculations.",
      "Integrate predictive models advising users on optimum fund allocations."
    ],
    github: "https://github.com/animesh6532/Mutual_Fund_Analytics",
    hasDemo: false,
    icon: <Database className="text-white" size={24} />,
    gradient: "from-blue-500 to-indigo-500",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-950 border border-blue-500/20 rounded-2xl text-left font-mono text-[9px] relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="font-bold text-[8px] text-blue-400 uppercase">Power BI Executive Canvas</span>
          <span className="text-[7px] text-gray-500">SSAS Star Schema</span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-2">
          <div className="bg-white/5 p-2 rounded border border-white/10 flex flex-col justify-between">
            <span className="text-[7px] text-gray-400 block">TOTAL AUM</span>
            <span className="text-lg font-black text-white">$4.82B</span>
            <span className="text-[6px] text-emerald-400">▲ +12.4% YoY</span>
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/10 flex flex-col justify-between">
            <span className="text-[7px] text-gray-400 block">AUM INFLOWS</span>
            <span className="text-lg font-black text-white">+$340M</span>
            <span className="text-[6px] text-cyan-400">Equity Lead</span>
          </div>
        </div>
        <div className="text-[7px] text-gray-450 border-t border-white/10 pt-2 flex justify-between">
          <span>Model: normalized_star_schema</span>
          <span>Refresh: Live (24h)</span>
        </div>
      </div>
    )
  },
  {
    slug: "mindhaven",
    title: "MindHaven",
    tagline: "Mental Health Support & Mood Tracking Platform",
    overview: "A compassionate, secure mental wellness tracker incorporating interactive mood analytics, therapy session loggers, and personalized stress-relief exercises.",
    problem: "Standard mental wellness trackers offer basic calendar logs without compiling emotional sentiment indicators or helping users identify stressors in their daily routines.",
    objectives: [
      "Implement secure mood logging checklists.",
      "Render sentiment charts evaluating emotional shifts.",
      "Compile dynamic recommendations tables suggesting mindfulness guidelines."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Framer Motion"],
    techDetailed: {
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
      backend: ["Node.js", "Express", "Mongoose"],
      database: ["MongoDB Atlas"],
      tools: ["Git", "ESLint"]
    },
    features: [
      "Interactive mood tracker rating checklists.",
      "Mood analytics dashboard graphing sentiment charts.",
      "Stress relief recommendations widget.",
      "Secure user diary notepad."
    ],
    workflow: [
      "User registers mood parameters and daily stressors in a dashboard.",
      "NLP algorithms evaluate text entries to index emotional scores.",
      "Dashboard charts display weekly stress indexes fluctuations.",
      "Care modules suggest customized breathing patterns and logs."
    ],
    challenges: "Formulating mental health tools while ensuring user data privacy and absolute compliance with medical storage standards.",
    solutions: "Deployed local client-side encryption modules that write scrambled texts to databases, ensuring only the owner holding keys can decrypt diary contents.",
    databaseDesign: {
      tables: [
        {
          name: "mood_logs",
          columns: [
            { name: "id", type: "ObjectId", desc: "Identifier." },
            { name: "user_id", type: "ObjectId", desc: "Reference to user." },
            { name: "mood_rating", type: "Number", desc: "Scale value from 1 to 10." },
            { name: "notes_encrypted", type: "String", desc: "AES-255 encrypted user log." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/mind/moods/log",
          desc: "Save user daily wellness metrics and mood attributes.",
          requestBody: "{ \"mood_score\": 8, \"stressors\": [\"work\", \"sleep\"], \"log_text\": \"gK9x9a... (Encrypted)\" }",
          responseBody: "{ \"status\": \"logged\", \"weekly_average\": 7.4, \"suggestions\": [\"Deep breathing\", \"Short walk\"] }"
        }
      ]
    },
    futureScope: [
      "Incorporate smart watch API prompts to trigger breathing exercises when high heart-rates occur.",
      "Establish secure video interfaces connecting users to certified counselors."
    ],
    github: "https://github.com/animesh6532/MindHaven",
    hasDemo: true,
    icon: <MessageSquare className="text-white" size={24} />,
    gradient: "from-sky-300 to-cyan-500",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900 border border-emerald-500/20 rounded-2xl text-left font-sans text-[9px] relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="font-bold text-[8px] text-emerald-400">MindHaven Wellness Tracker</span>
          <span className="text-[7px] text-gray-400 font-mono">End-to-End Encrypted</span>
        </div>
        <div className="space-y-2 py-3">
          <div className="bg-white/5 p-2 rounded border border-white/10 flex items-center justify-between">
            <div>
              <p className="font-bold text-white">Weekly Mood Index</p>
              <p className="text-[7px] text-gray-450">Emotional status: Balanced</p>
            </div>
            <span className="text-xs font-black text-emerald-400">8.4 / 10</span>
          </div>
          <div className="flex gap-1.5 text-[7px] text-gray-300">
            <span className="bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">Relaxed</span>
            <span className="bg-sky-500/10 border border-sky-500/20 px-2 py-1 rounded">Focused</span>
            <span className="bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded">Productive</span>
          </div>
        </div>
        <div className="text-[7px] text-emerald-400 flex items-center justify-between font-mono">
          <span>AES-256 Keys Loaded</span>
          <span>Wellness Score: Nom.</span>
        </div>
      </div>
    )
  },
  {
    slug: "stock-price-prediction",
    title: "Stock Price Prediction & Market Analysis Dashboard",
    tagline: "Time-Series Stock Forecasting Dashboard",
    overview: "A time-series analytical engine evaluating market pricing movements and forecasting asset valuations using regression algorithms and interactive pricing graphs.",
    problem: "Stock markets are highly volatile. Static charts fail to show projected price boundaries or help analysts evaluate prediction variances over multi-month windows.",
    objectives: [
      "Program clean feature engineering scripts compiling historical stock values.",
      "Deploy forecasting pipelines utilizing regression algorithms.",
      "Create high-performance chart widgets tracking forecast accuracy."
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook"],
    techDetailed: {
      frontend: ["React (Dashboard)", "Tailwind CSS", "Recharts"],
      backend: ["Python (FastAPI Interface)"],
      ml: ["Linear Regression", "Random Forest Regressor", "LSTM Neural Networks"],
      database: ["PostgreSQL (Pricing metrics warehouse)"],
      tools: ["Git", "Jupyter Notebook"]
    },
    features: [
      "Preprocessing routines resolving missing pricing inputs.",
      "Interactive stock charts showing real vs forecast prices.",
      "Dynamic statistical KPI grids tracking model precision.",
      "Volatility filters adjusting historical training lengths."
    ],
    workflow: [
      "Scraper scripts index daily stock closing pricing metrics.",
      "Preprocessing modules compile rolling moving averages and volatility index indicators.",
      "Machine learning regression models project prices across 30-day horizons.",
      "Web charts graph price pathways alongside error confidence envelopes."
    ],
    challenges: "Minimizing lag in forecasting results caused by sudden economic news shifts that regression models cannot anticipate.",
    solutions: "Integrated structural macro-economic metrics as auxiliary parameters and adjusted training weight distributions to favor recent pricing intervals.",
    databaseDesign: {
      tables: [
        {
          name: "price_predictions",
          columns: [
            { name: "prediction_id", type: "UUID", desc: "Unique identifier." },
            { name: "ticker", type: "VARCHAR(10)", desc: "Company ticker symbol." },
            { name: "forecast_date", type: "DATE", desc: "Projected date." },
            { name: "predicted_value", type: "DECIMAL", desc: "Model forecasted value." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "GET",
          path: "/api/v1/forecaster/predict",
          desc: "Calculate future price paths for a stock ticker.",
          responseBody: "{ \"ticker\": \"TCS\", \"horizon_days\": 30, \"predictions\": [{\"date\": \"2026-07-01\", \"price\": 3850.2}] }"
        }
      ]
    },
    futureScope: [
      "Incorporate deep reinforcement learning models to evaluate buying and selling triggers.",
      "Integrate live news sentiment feeds to dynamically adjust volatility coefficients."
    ],
    github: "https://github.com/animesh6532/Stock_Price_Prediction",
    hasDemo: true,
    icon: <LineChart className="text-white" size={24} />,
    gradient: "from-sky-400 to-blue-500",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900 border border-sky-500/20 rounded-2xl text-left font-mono text-[9px] relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="font-bold text-[8px] text-sky-400 uppercase">LSTM Pricing Forecaster</span>
          <span className="text-[7px] text-emerald-400">COMPILING 30D HORIZON</span>
        </div>
        <div className="flex-1 my-2 relative flex items-center justify-center">
          <svg className="w-full h-16 fill-transparent" viewBox="0 0 200 60">
            {/* Real Price line */}
            <path d="M 0 45 L 30 40 L 60 42 L 90 28 L 120 32" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2 2" />
            {/* Forecast Line */}
            <path d="M 120 32 L 150 18 L 175 22 L 200 5" stroke="#38bdf8" strokeWidth="2.0" strokeLinecap="round" />
            {/* Anomaly target dot */}
            <circle cx="120" cy="32" r="3" fill="#38bdf8" className="animate-ping" />
            <circle cx="120" cy="32" r="2" fill="#0ea5e9" />
          </svg>
        </div>
        <div className="text-[7px] text-sky-400 flex justify-between border-t border-white/10 pt-2">
          <span>Model: LSTM Time Series</span>
          <span>MAE Accuracy: 1.84%</span>
        </div>
      </div>
    )
  },
  {
    slug: "ai-fraud-email-detection",
    title: "AI Fraud Email Detection System",
    tagline: "AI-Powered Email Scanner & Threat Dashboard",
    overview: "A cybersecurity scanning system that parses incoming email payloads, evaluates text tokens for phishing indicators, and maps safety threat assessments on security dashboards.",
    problem: "Phishing scams damage organizational servers daily. Simple rule-based filters fail to block context-shifted emails that lack known spam keywords but contain manipulative prompts.",
    objectives: [
      "Train classification networks differentiating ham from spam emails.",
      "Perform text sanitization (lemmatization, token extraction) on email payloads.",
      "Deploy warning headers on flagged incoming messages."
    ],
    tech: ["Python", "NLTK", "Scikit-learn", "FastAPI", "React"],
    techDetailed: {
      frontend: ["React (Threat Center)", "Tailwind CSS"],
      backend: ["Python (FastAPI mail pipeline)"],
      ml: ["TF-IDF Vectorizer", "Naive Bayes Classifier", "SVM Classifier"],
      database: ["SQLite (Local mail threat storage)"],
      tools: ["Git", "NLTK Toolkit"]
    },
    features: [
      "Email ingestion API scanner pipelines.",
      "Keyword threat detection analysis metrics.",
      "Interactive phishing threat level gauges.",
      "Sanitization header logs widgets."
    ],
    workflow: [
      "FastAPI endpoints receive raw email content blocks.",
      "NLP preprocessors extract text tokens and remove noise elements.",
      "ML models score the token weights to calculate phishing probabilities.",
      "Dashboard flags suspect emails with high-contrast safety warning indicators."
    ],
    challenges: "Reducing false positive rates that block legitimate operational messages, slowing corporate communication channels.",
    solutions: "Formulated custom sender trust scores and whitelisting rules that act as secondary overrides for the machine learning classifiers.",
    databaseDesign: {
      tables: [
        {
          name: "flagged_emails",
          columns: [
            { name: "id", type: "INTEGER (PK)", desc: "Auto-increment key." },
            { name: "sender_address", type: "TEXT", desc: "Source email." },
            { name: "spam_score", type: "REAL", desc: "Spam index from 0.0 to 1.0." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/security/scan-email",
          desc: "Parse raw mail data and identify security risks.",
          requestBody: "{ \"sender\": \"bad-actor@suspicious.com\", \"body\": \"Verify your bank details immediately...\" }",
          responseBody: "{ \"is_phishing\": true, \"confidence\": 0.985, \"threat_level\": \"high\", \"flagged_words\": [\"bank details\", \"immediately\"] }"
        }
      ]
    },
    futureScope: [
      "Incorporate deep language models parsing multi-page PDF attachments.",
      "Deploy scanner plugins directly on Outlook and Gmail applications."
    ],
    github: "https://github.com/animesh6532/SPAM_Email_Detection",
    hasDemo: true,
    icon: <Mail className="text-white" size={24} />,
    gradient: "from-[#1E293B] to-[#475569]",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900 border border-slate-700 rounded-2xl text-left font-mono text-[9px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-red-400 font-extrabold uppercase tracking-widest text-[8px] flex items-center gap-1">
            <ShieldCheck size={12} /> Phishing Threat Center
          </span>
          <span className="text-[7px] text-gray-500 font-bold">Model v1.0.2</span>
        </div>
        <div className="space-y-1.5 my-2">
          <div className="bg-red-500/10 border border-red-500/30 p-2 rounded text-[8px] space-y-1">
            <div className="flex justify-between font-bold text-red-400">
              <span>SUSPECT SENDER</span>
              <span>CONFIDENCE: 98.5%</span>
            </div>
            <p className="text-gray-400 truncate text-[7px]">Subject: Urgent: Verify details immediately</p>
          </div>
          <div className="flex gap-1.5 text-[7px] font-bold text-gray-400">
            <span className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">Lemmatized</span>
            <span className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">TF-IDF Checked</span>
          </div>
        </div>
        <div className="text-[7px] text-gray-500 flex justify-between border-t border-white/10 pt-2">
          <span>Trigger: Naive Bayes NLP</span>
          <span className="text-red-400 font-bold">STATUS: FLAGGED</span>
        </div>
      </div>
    )
  },
  {
    slug: "anpr-lite",
    title: "ANPR Lite",
    tagline: "Automated Number Plate Recognition Pipeline",
    overview: "A computer vision system that captures vehicle camera streams, localizes license plates with bounding boxes, and parses numbers using optical character recognition pipelines.",
    problem: "Manual parking and toll audits trigger vehicle backlogs and register wrong license plate records due to fast vehicle speeds and varying camera angles.",
    objectives: [
      "Localize vehicle license plates in camera frames using OpenCV algorithms.",
      "Execute character parsing pipelines extracting plate numbers.",
      "Deploy SQLite transaction databases logging parking durations."
    ],
    tech: ["Python", "OpenCV", "Tesseract OCR", "SQLite", "Flask"],
    techDetailed: {
      frontend: ["HTML5 Canvas", "Tailwind CSS", "JavaScript"],
      backend: ["Python (Flask APIs)"],
      ml: ["Cascade Classifiers (Object Detection)", "Tesseract OCR engine"],
      database: ["SQLite (Local logs database)"],
      tools: ["Git", "Conda"]
    },
    features: [
      "Camera stream panel rendering bounding boxes around plates.",
      "OCR text parser output grids.",
      "SQLite parking logger database interfaces.",
      "Incident snapshot exporter tools."
    ],
    workflow: [
      "Vehicle triggers gate cameras sensor loops.",
      "OpenCV algorithms identify high-contrast plate zones in frames.",
      "Tesseract models parse characters from isolated sub-images.",
      "SQLite writes records matching license logs to gate access databases."
    ],
    challenges: "Parsing license plates under severe angles or when mud obscuring characters from camera viewfinders.",
    solutions: "Structured image perspective transformations that crop and warp localized plate frames before executing character segmentation routines.",
    databaseDesign: {
      tables: [
        {
          name: "gate_log_entries",
          columns: [
            { name: "entry_id", type: "INTEGER (PK)", desc: "Auto ID." },
            { name: "parsed_plate", type: "TEXT", desc: "Recognized license plate." },
            { name: "timestamp", type: "DATETIME", desc: "Entry timestamp." }
          ]
        }
      ]
    },
    apiDesign: {
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/anpr/parse-frame",
          desc: "Extract license plate characters from vehicle image files.",
          requestBody: "Multipart Form Data: { frame: File }",
          responseBody: "{ \"license_plate\": \"WB26M1004\", \"ocr_confidence\": 91.5, \"timestamp\": \"2026-06-27T11:40\" }"
        }
      ]
    },
    futureScope: [
      "Incorporate deep CNN object detectors replacing Cascade classifiers.",
      "Deploy integration systems linking logs with municipal traffic database channels."
    ],
    github: "https://github.com/animesh6532/Car_Number_Plate_Detection",
    hasDemo: true,
    icon: <Video className="text-white" size={24} />,
    gradient: "from-sky-300 to-cyan-500",
    visual: (
      <div className="w-full h-full p-4 flex flex-col justify-between bg-slate-900 border border-cyan-500/20 rounded-2xl text-left font-mono text-[9px] relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="font-bold text-[8px] text-cyan-400">ANPR OpenCV Pipeline</span>
          <span className="text-[7px] text-emerald-400">CAMERA ACTIVE</span>
        </div>
        <div className="relative flex-1 my-3 bg-black/60 border border-white/10 rounded flex flex-col items-center justify-center p-2">
          <div className="border border-sky-400/80 bg-sky-950/40 p-2 rounded text-center text-white font-extrabold text-[12px] tracking-widest z-10 w-4/5 shadow">
            WB26M1004
          </div>
          <span className="absolute top-2 left-2 text-[6px] text-sky-400 font-bold">PLATE REGION</span>
          <div className="absolute inset-x-2 top-1/2 h-0.5 bg-cyan-400/50 animate-[ping_1.5s_infinite]" />
        </div>
        <div className="text-[7px] text-cyan-400 flex items-center justify-between">
          <span>OCR Accuracy: 91.5%</span>
          <span>Buffer: 85ms</span>
        </div>
      </div>
    )
  }
];
