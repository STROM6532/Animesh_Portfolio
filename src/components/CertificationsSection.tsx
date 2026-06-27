import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink, Award, FileText, CheckCircle2 } from "lucide-react";

// Dynamically discover all certificates in public/certificates at build-time using Vite glob
const files = import.meta.glob('/public/certificates/*.{png,jpg,jpeg,webp,pdf}', { eager: true });

const dynamicCertifications = (() => {
  const filePaths = Object.keys(files);
  const certMap = new Map<string, { id: number; title: string; issuer: string; year: string; icon: string; imgPath: string; pdfPath: string }>();

  let idCounter = 1;

  filePaths.forEach(filePath => {
    // filePath example: "/public/certificates/Issuer__Title__Year.ext"
    const basename = filePath.split('/').pop()?.split('.').slice(0, -1).join('.');
    if (!basename) return;

    const parts = basename.split('__');
    if (parts.length < 2) return;

    const issuerRaw = parts[0];
    const titleRaw = parts[1];
    const yearRaw = parts[2] || '2025';
    const ext = filePath.split('.').pop()?.toLowerCase();
    
    // Use Vite-resolved URL if available
    const resolvedUrl = (files[filePath] as { default?: string })?.default || filePath.replace('/public', '');

    // Format names (convert underscores to spaces)
    const issuer = issuerRaw.replace(/_/g, ' ');
    const title = titleRaw.replace(/_/g, ' ');
    const year = yearRaw.replace(/_/g, ' ');

    // Assign appropriate emoji icons based on keywords
    let icon = "📜";
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("ai") || lowerTitle.includes("artificial intelligence") || lowerTitle.includes("generative")) {
      icon = "🤖";
    } else if (lowerTitle.includes("python") || lowerTitle.includes("programming") || lowerTitle.includes("software")) {
      icon = "🐍";
    } else if (lowerTitle.includes("cloud") || lowerTitle.includes("aws") || lowerTitle.includes("migration")) {
      icon = "☁️";
    } else if (lowerTitle.includes("data science") || lowerTitle.includes("analytics") || lowerTitle.includes("big data")) {
      icon = "📊";
    } else if (lowerTitle.includes("linux")) {
      icon = "🐧";
    }

    const existing = certMap.get(basename) || {
      id: idCounter++,
      title,
      issuer,
      year,
      icon,
      imgPath: '',
      pdfPath: ''
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
    const yearDiff = b.year.localeCompare(a.year);
    if (yearDiff !== 0) return yearDiff;
    return a.title.localeCompare(b.title);
  });
})();

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<{ title: string; pdfPath: string; imgPath?: string } | null>(null);

  return (
    <section id="certifications" className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Background decoration */}
      <div className="absolute top-[30%] right-[20%] w-[320px] h-[320px] rounded-full bg-blue-100/20 blur-[100px] -z-10 animate-blob-float" />

      <div ref={ref} className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-left mb-12"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Verified academic credentials and technical specializations in core AI/ML architectures and cloud solutions.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dynamicCertifications.map((cert, idx) => (
            <motion.div
              key={cert.title + cert.issuer}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-sky-300/40 hover:bg-white/60 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              {/* Certificate Preview Image */}
              <div className="w-full aspect-[16/10] bg-gray-50 border-b border-gray-200/50 overflow-hidden relative">
                <img 
                  src={cert.imgPath || "/placeholder.svg"} 
                  alt={cert.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl" role="img" aria-label={cert.title}>{cert.icon}</span>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 leading-snug">{cert.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">{cert.issuer}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200/30 flex items-center justify-between">
                  {cert.pdfPath || cert.imgPath ? (
                    <button
                      onClick={() => setSelectedCert({ 
                        title: cert.title, 
                        pdfPath: cert.pdfPath || cert.imgPath, 
                        imgPath: cert.imgPath 
                      })}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 hover:scale-102 active:scale-98 transition-all duration-200"
                    >
                      <FileText size={14} />
                      <span>View Document</span>
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600">
                      <CheckCircle2 size={14} />
                      <span>Program Completed</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal View Tool */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-gray-200 rounded-2xl max-w-4xl w-full max-h-[85vh] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Award className="text-sky-600" size={18} />
                  <h3 className="font-bold text-sm text-gray-900 truncate max-w-[280px] sm:max-w-md">
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

              {/* Viewer */}
              <div className="p-6 flex-1 overflow-auto bg-gray-50 flex items-center justify-center">
                {selectedCert.pdfPath.endsWith(".pdf") ? (
                  <iframe
                    src={selectedCert.pdfPath}
                    className="w-full h-[55vh] rounded border border-gray-200 bg-white"
                    title={selectedCert.title}
                  />
                ) : (
                  <img
                    src={selectedCert.pdfPath}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[55vh] object-contain rounded border border-gray-200 bg-white"
                  />
                )}
              </div>

              {/* Actions */}
              <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3 bg-white">
                <a
                  href={selectedCert.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <ExternalLink size={14} />
                  <span>Open Full Document</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
