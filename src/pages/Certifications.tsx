import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, Award, FileText, CheckCircle2, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import premiumBg from "@/assets/premium_bg.png";

interface CertMetadata {
  category: string;
  completionDate?: string;
  credentialDetails?: string;
  customTitle?: string;
  customIssuer?: string;
  sortOrder?: number;
}

const certificateMetadataRegistry: Record<string, CertMetadata> = {
  // New certificates (with explicit sort order to maintain upload sequence)
  "IBM_SkillsBuild__Exploring_Artificial_Intelligence__2026": {
    category: "Artificial Intelligence",
    completionDate: "04 May 2026",
    credentialDetails: "Course ID: ALM-COURSE_382547 | Learning hours: 1 hr 30 mins",
    sortOrder: 1
  },
  "Microsoft_Learn__Describe_cloud_computing__2026": {
    category: "Cloud Computing",
    completionDate: "January 27, 2026",
    credentialDetails: "Verification URL: learn.microsoft.com/en-us/users/animeshsahoo-2655",
    sortOrder: 2
  },
  "Simplilearn_GoogleCloud__Exploring_Data_Transformation__2026": {
    category: "Data Science",
    completionDate: "13 February 2026",
    credentialDetails: "Certificate code: 9841251",
    sortOrder: 3
  },
  "Nestle_YEP__Solution_Creation_Entrepreneurship__2026": {
    category: "Entrepreneurship",
    completionDate: "8 May 2026",
    credentialDetails: "Nestle Youth Entrepreneurship Platform Academy",
    sortOrder: 4
  },
  "HackerRank__Problem_Solving_Basic__2026": {
    category: "Problem Solving",
    completionDate: "13 Feb 2026",
    credentialDetails: "Credential ID: 128ABAE5B073",
    sortOrder: 5
  },
  "Kodacy_SPACE__AI_ML_Internship__2026": {
    category: "Artificial Intelligence",
    completionDate: "25 March 2026",
    credentialDetails: "30 day virtual internship program | Certificate ID: 8a31d3af1d8c4b20",
    sortOrder: 6
  },
  "freeCodeCamp__Data_Analysis_with_Python__2026": {
    category: "Data Science",
    completionDate: "15 February 2026",
    credentialDetails: "Developer Certification (~300 hours) | Verification URL: freecodecamp.org/certification/fcc-905e7538-cb83-43bd-982d-61380b58829e/data-analysis-with-python-v7",
    sortOrder: 7
  },
  "IBM_SkillsBuild__Python_101_for_Data_Science__2026": {
    category: "Data Science",
    completionDate: "15 February 2026",
    credentialDetails: "Course: PY0101EN | Verification URL: courses.skillsbuild.skillsnetwork.site/certificates/26d2decf9ba14a61b42e517f190617f9",
    sortOrder: 8
  },
  // Existing certificates
  "AWS_Simplilearn__AWS_Application_Migration_Service__2026": {
    category: "Cloud Computing",
    completionDate: "15 March 2026",
    credentialDetails: "ID: AWS-AMS-2026 | Powered by AWS",
    sortOrder: 11
  },
  "Forage__AWS_Solutions_Architecture__2026": {
    category: "Cloud Computing",
    completionDate: "February 2026",
    credentialDetails: "AWS Solutions Architecture Virtual Experience",
    sortOrder: 12
  },
  "Forage__Deloitte_Data_Analytics__2026": {
    category: "Data Science",
    completionDate: "March 2026",
    credentialDetails: "Deloitte Data Analytics Virtual Experience",
    sortOrder: 13
  },
  "Forage__GenAI_Powered_Data_Analytics__2026": {
    category: "Artificial Intelligence",
    completionDate: "April 2026",
    credentialDetails: "GenAI Powered Data Analytics Virtual Experience",
    sortOrder: 14
  },
  "Forage__JPMorgan_Chase_Software_Engineering__2026": {
    category: "Professional Development",
    completionDate: "January 2026",
    credentialDetails: "JPMorgan Chase Software Engineering Experience",
    sortOrder: 15
  },
  "IBM_SkillsBuild__Getting_Started_with_Generative_AI__2026": {
    category: "Artificial Intelligence",
    completionDate: "January 2026",
    credentialDetails: "Getting Started with Generative AI",
    sortOrder: 16
  },
  "IBM_SkillsBuild__Machine_Learning_using_Python__2026": {
    category: "Artificial Intelligence",
    completionDate: "February 2026",
    credentialDetails: "Machine Learning using Python",
    sortOrder: 17
  },
  "Linux_Foundation__GitHub_for_Open_Standards_Development__2026": {
    category: "Professional Development",
    completionDate: "March 2026",
    credentialDetails: "GitHub for Open Standards Development",
    sortOrder: 18
  },
  "NIELIT_Kolkata__Bootcamp_on_Big_Data_and_Data_Science__2025": {
    category: "Data Science",
    completionDate: "December 2025",
    credentialDetails: "Bootcamp on Big Data and Data Science",
    sortOrder: 19
  },
  "Samsung_Innovation_Campus__Artificial_Intelligence__2025": {
    category: "Artificial Intelligence",
    completionDate: "November 2025",
    credentialDetails: "Samsung Innovation Campus Artificial Intelligence Course",
    sortOrder: 20
  }
};

const getCategoryBadgeStyles = (category: string) => {
  switch (category) {
    case "Artificial Intelligence":
      return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-800/50";
    case "Cloud Computing":
      return "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/30 dark:text-sky-300 dark:border-sky-800/50";
    case "Data Science":
      return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800/50";
    case "Problem Solving":
      return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800/50";
    case "Entrepreneurship":
      return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800/50";
    case "Professional Development":
      return "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-800/50";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950/30 dark:text-gray-300 dark:border-gray-800/50";
  }
};

// Automatically audit and discover all certificates in public/certificates at build-time using Vite glob
const files = import.meta.glob('/public/certificates/*.{png,jpg,jpeg,webp,pdf}', { eager: true });

const dynamicCertifications = (() => {
  const filePaths = Object.keys(files);
  const certMap = new Map<string, { id: number; basename: string; title: string; issuer: string; year: string; icon: string; imgPath: string; pdfPath: string; category: string; completionDate?: string; credentialDetails?: string }>();

  let idCounter = 1;

  filePaths.forEach(filePath => {
    // filePath example: "/public/certificates/Issuer__Title__Year.ext"
    const basename = filePath.split('/').pop()?.split('.').slice(0, -1).join('.');
    if (!basename) return;

    const parts = basename.split('__');
    if (parts.length < 2) return;

    const issuerRaw = parts[0];
    const titleRaw = parts[1];
    const yearRaw = parts[2] || '2026';
    const ext = filePath.split('.').pop()?.toLowerCase();
    
    // Resolve URL correctly
    const resolvedUrl = (files[filePath] as { default?: string })?.default || filePath.replace('/public', '');

    // Format names (convert underscores to spaces)
    const issuer = issuerRaw.replace(/_/g, ' ');
    const title = titleRaw.replace(/_/g, ' ');
    const year = yearRaw.replace(/_/g, ' ');

    // Match with rich metadata registry
    const registryEntry = certificateMetadataRegistry[basename];
    const category = registryEntry?.category || "Professional Development";
    const completionDate = registryEntry?.completionDate || (yearRaw !== '2026' ? `${yearRaw}` : undefined);
    const credentialDetails = registryEntry?.credentialDetails || undefined;
    const finalTitle = registryEntry?.customTitle || title;
    const finalIssuer = registryEntry?.customIssuer || issuer;

    // Assign custom category icons based on category
    let icon = "📜";
    if (category === "Artificial Intelligence") icon = "🤖";
    else if (category === "Cloud Computing") icon = "☁️";
    else if (category === "Data Science") icon = "📊";
    else if (category === "Problem Solving") icon = "🧠";
    else if (category === "Entrepreneurship") icon = "💡";
    else if (category === "Professional Development") icon = "💼";

    const existing = certMap.get(basename) || {
      id: idCounter++,
      basename,
      title: finalTitle,
      issuer: finalIssuer,
      year,
      icon,
      imgPath: '',
      pdfPath: '',
      category,
      completionDate,
      credentialDetails
    };

    if (ext && ['png', 'jpg', 'jpeg', 'webp'].includes(ext)) {
      existing.imgPath = resolvedUrl;
    } else if (ext === 'pdf') {
      existing.pdfPath = resolvedUrl;
    }

    certMap.set(basename, existing);
  });

  // Sort by year (descending) and then title alphabetically
  return Array.from(certMap.values()).sort((a, b) => {
    const aOrder = certificateMetadataRegistry[a.basename]?.sortOrder ?? 999;
    const bOrder = certificateMetadataRegistry[b.basename]?.sortOrder ?? 999;
    return aOrder - bOrder;
  });
})();

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<{ title: string; pdfPath: string; imgPath?: string } | null>(null);
  const [zoomScale, setZoomScale] = useState(1);

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
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-4">Credentials</span>
              <h1 className="editorial-heading">Professional <br />Certifications.</h1>
              <p className="editorial-subheading mt-4 text-balance">
                Acquiring theoretical foundations to complement hands-on project execution. These certifications verify my training in cloud computing, machine learning, and data analysis.
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS GRID */}
        <section className="pb-24">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            {/* Introductory statement */}
            <div className="max-w-3xl mb-12 text-left">
              <p className="text-base text-gray-500 leading-relaxed font-semibold">
                I believe that solid foundations are critical for building reliable software. I supplement my hands-on coding and project-building with structured training programs and certifications from organizations like Simplilearn, IBM SkillsBuild, and Microsoft. This structured learning helps me stay aligned with industry standards and best practices.
              </p>
            </div>

            {dynamicCertifications.length === 0 ? (
              <div className="text-center py-16 bg-white/40 border border-white/60 rounded-3xl p-8 max-w-md mx-auto">
                <Award size={36} className="text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-bold text-gray-700">No Certificates Found</p>
                <p className="text-xs text-gray-500 mt-1">Please drop your image files into public/certificates directory.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {dynamicCertifications.map((cert, idx) => (
                  <motion.div
                    key={cert.title + cert.issuer}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-85px" }}
                    transition={{ duration: 0.4, delay: idx * 0.03 }}
                    className="glass-card rounded-2xl overflow-hidden hover:border-sky-300/40 hover:bg-white/60 hover:shadow-xl hover:scale-[1.01] transition-all duration-350 flex flex-col justify-between h-full border border-white/50 group"
                  >
                    {/* Certificate Preview Image (Object-Contain inside Glass Container) */}
                    <div className="w-full aspect-[4/3] bg-slate-950/5 backdrop-blur-sm border-b border-gray-200/50 overflow-hidden relative flex items-center justify-center p-4">
                      <img 
                        src={cert.imgPath || "/placeholder.svg"} 
                        alt={cert.title} 
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    </div>

                    <div className="p-6 text-left flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4 gap-2">
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border font-mono ${getCategoryBadgeStyles(cert.category)}`}>
                            {cert.category}
                          </span>
                          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100 font-mono">
                            {cert.year}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug uppercase tracking-tight">{cert.title}</h3>
                        <p className="text-xs text-gray-500 font-semibold mb-3">{cert.issuer}</p>

                        {/* Extracted Information Section */}
                        <div className="mt-4 pt-4 border-t border-gray-200/30 space-y-2 text-left">
                          {cert.completionDate && (
                            <div className="flex items-start gap-2">
                              <span className="text-xs font-semibold text-gray-400 uppercase w-20 shrink-0">Completed:</span>
                              <span className="text-xs text-gray-700 font-semibold">{cert.completionDate}</span>
                            </div>
                          )}
                          {cert.credentialDetails && (
                            <div className="flex items-start gap-2">
                              <span className="text-xs font-semibold text-gray-400 uppercase w-20 shrink-0">Credentials:</span>
                              <span className="text-xs text-gray-600 font-mono break-words leading-tight">{cert.credentialDetails}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-gray-200/30 flex items-center justify-between">
                        <button
                          onClick={() => {
                            setZoomScale(1); // reset zoom level when opening a card
                            setSelectedCert({ 
                              title: cert.title, 
                              pdfPath: cert.pdfPath || cert.imgPath, 
                              imgPath: cert.imgPath 
                            });
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 hover:scale-102 active:scale-98 transition-all duration-200"
                        >
                          <FileText size={14} />
                          <span>View Certificate</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* MODAL VIEW SYSTEM */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white border border-gray-200 rounded-2xl max-w-4xl w-full max-h-[85vh] shadow-2xl overflow-hidden flex flex-col relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center gap-2">
                    <Award className="text-sky-600" size={18} />
                    <h3 className="font-bold text-sm text-gray-900 truncate max-w-[280px] sm:max-w-md uppercase">
                      {selectedCert.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Viewer Container */}
                <div className="p-6 flex-1 overflow-hidden bg-gray-50 flex items-center justify-center relative min-h-[50vh]">
                  {selectedCert.pdfPath.endsWith(".pdf") ? (
                    <iframe
                      src={selectedCert.pdfPath}
                      className="w-full h-[55vh] rounded border border-gray-200 bg-white"
                      title={selectedCert.title}
                    />
                  ) : (
                    <div className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden bg-gray-100 rounded-xl border border-gray-200/50">
                      {/* Zoomable Image Container */}
                      <motion.div
                        className="w-full h-full flex items-center justify-center"
                        style={{ overflow: "hidden" }}
                      >
                        <motion.img
                          src={selectedCert.pdfPath}
                          alt={selectedCert.title}
                          drag={zoomScale > 1}
                          dragConstraints={{
                            left: -200 * (zoomScale - 1),
                            right: 200 * (zoomScale - 1),
                            top: -150 * (zoomScale - 1),
                            bottom: 150 * (zoomScale - 1)
                          }}
                          dragElastic={0.1}
                          animate={{ scale: zoomScale }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          className={`max-w-full max-h-[50vh] object-contain rounded select-none shadow-md ${
                            zoomScale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"
                          }`}
                        />
                      </motion.div>

                      {/* Floating Zoom Controls Bar */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/50 shadow-lg z-10 select-none animate-fade-in">
                        <button
                          onClick={() => setZoomScale(prev => Math.max(prev - 0.25, 1))}
                          disabled={zoomScale <= 1}
                          className="p-1.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                          title="Zoom Out"
                        >
                          <ZoomOut size={16} />
                        </button>
                        <span className="text-[10px] font-bold font-mono px-1 w-10 text-center text-gray-700">
                          {Math.round(zoomScale * 100)}%
                        </span>
                        <button
                          onClick={() => setZoomScale(prev => Math.min(prev + 0.25, 3))}
                          disabled={zoomScale >= 3}
                          className="p-1.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                          title="Zoom In"
                        >
                          <ZoomIn size={16} />
                        </button>
                        <div className="w-px h-4 bg-gray-200 mx-1" />
                        <button
                          onClick={() => setZoomScale(1)}
                          disabled={zoomScale === 1}
                          className="p-1.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                          title="Reset Zoom"
                        >
                          <RotateCcw size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3 bg-white">
                  <a
                    href={selectedCert.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <ExternalLink size={14} />
                    <span>Open Full Document</span>
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Certifications;

