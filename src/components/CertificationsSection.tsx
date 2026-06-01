import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink, Award, FileText } from "lucide-react";

const certifications = [
	{
		id: 1,
		title: "GitHub for Open Standards Development",
		issuer: "Linux Foundation",
		code: "LFD140",
		pdfPath: "/certificates/L.png",
		color: "primary",
		icon: "🐙",
	},
	{
		id: 2,
		title: "Generative AI Fundamentals",
		issuer: "IBM SkillsBuild",
		pdfPath: "/certificates/S.png",
		color: "accent",
		icon: "🤖",
	},
	{
		id: 3,
		title: "AWS Application Migration Service (AWS MGN)",
		issuer: "AWS & Simplilearn",
		pdfPath: "/certificates/AW.png",
		color: "primary",
		icon: "☁️",
	},
	{
		id: 4,
		title: "Bootcamp on Big Data & Data Science",
		issuer: "NIELIT Kolkata",
		pdfPath: "/certificates/N.png",
		color: "accent",
		icon: "📊",
	},
	{
		id: 5,
		title: "Software Engineering Job Simulation",
		issuer: "JPMorgan Chase",
		pdfPath: "/certificates/J.png",
		color: "primary",
		icon: "💼",
	},
	{
		id: 6,
		title: "GenAI Powered Data Analytics Job Simulation",
		issuer: "TATA",
		pdfPath: "/certificates/T.png",
		color: "accent",
		icon: "📈",
	},
	{
		id: 7,
		title: "Data Analytics Job Simulation",
		issuer: "Deloitte",
		pdfPath: "/certificates/D.png",
		color: "primary",
		icon: "📉",
	},
	{
		id: 8,
		title: "Solutions Architecture Job Simulation",
		issuer: "AWS",
		pdfPath: "/certificates/A.png",
		color: "accent",
		icon: "🏗️",
	},
	{
		id: 9,
		title: "Machine Learning Using Python",
		issuer: "Simplilern",
		pdfPath: "/certificates/M.png",
		color: "accent",
		icon: "💻",
	},
	{
		id: 10,
		title: "Python for Data Science",
		issuer: "Kaggle",
		pdfPath: "/certificates/Ps.png",
		color: "accent",
		icon: "💻",
	},
];

const CertificationsSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [selectedCert, setSelectedCert] = useState<
		typeof certifications[0] | null
	>(null);

	return (
		<section id="certifications" className="relative overflow-hidden">
			{/* Background */}
			<div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

			<div ref={ref} className="section-container relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="section-title">Certifications</h2>
					<p className="section-subtitle mx-auto">
						Industry-recognized credentials validating my skills
					</p>
				</motion.div>

				{/* Certifications Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{certifications.map((cert, index) => (
						<motion.button
							key={cert.id}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.08 }}
							onClick={() => setSelectedCert(cert)}
							className="glass-card-hover p-5 text-left group cursor-pointer"
						>
							<div className="flex items-start gap-3">
								<div
									className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
										cert.color === "primary"
											? "bg-primary/10"
											: "bg-accent/10"
									} group-hover:scale-110 transition-transform duration-300`}
								>
									{cert.icon}
								</div>
								<div className="flex-1 min-w-0">
									<h4 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
										{cert.title}
									</h4>
									<p className="text-xs text-muted-foreground mt-1">
										{cert.issuer}
									</p>
									{cert.code && (
										<span className="inline-block px-2 py-0.5 mt-2 rounded-full text-xs bg-primary/10 text-primary">
											{cert.code}
										</span>
									)}
								</div>
							</div>
							<div className="flex items-center gap-1 mt-4 text-xs text-muted-foreground group-hover:text-primary transition-colors">
								<FileText size={12} />
								<span>View Certificate</span>
							</div>
						</motion.button>
					))}
				</div>

				{/* Certificate Count */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ delay: 0.8 }}
					className="flex justify-center mt-10"
				>
					<div className="glass-card px-6 py-3 inline-flex items-center gap-3">
						<Award className="text-primary" size={20} />
						<span className="text-sm text-muted-foreground">
							<span className="text-primary font-bold">
								{certifications.length}+</span>{" "}
							Industry Certifications
						</span>
					</div>
				</motion.div>
			</div>

			{/* Certificate Modal */}
			<AnimatePresence>
				{selectedCert && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedCert(null)}
						className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xl flex items-center justify-center p-4"
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
							className="glass-card max-w-4xl w-full max-h-[90vh] overflow-hidden"
						>
							{/* Modal Header */}
							<div className="flex items-center justify-between p-6 border-b border-border/50">
								<div className="flex items-center gap-4">
									<div
										className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
											selectedCert.color === "primary"
												? "bg-primary/10"
												: "bg-accent/10"
										}`}
									>
										{selectedCert.icon}
									</div>
									<div>
										<h3 className="font-display font-bold text-lg text-foreground">
											{selectedCert.title}
										</h3>
										<p className="text-sm text-muted-foreground">
											{selectedCert.issuer}
										</p>
									</div>
								</div>
								<button
									onClick={() => setSelectedCert(null)}
									className="p-2 rounded-lg hover:bg-muted transition-colors"
								>
									<X size={20} />
								</button>
							</div>

							{/* Certificate Viewer */}
							<div className="p-6">
								<div className="w-full h-[60vh] rounded-xl overflow-hidden bg-muted/50 flex items-center justify-center">
									{selectedCert.pdfPath.endsWith(".pdf") ? (
										<iframe
											src={selectedCert.pdfPath}
											className="w-full h-full"
											title={selectedCert.title}
										/>
									) : (
										<img
											src={selectedCert.pdfPath}
											alt={selectedCert.title}
											className="max-w-full max-h-full object-contain rounded-lg"
										/>
									)}
								</div>

								<div className="flex justify-center mt-4">
									<a
										href={selectedCert.pdfPath}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 btn-outline-hero text-sm py-2 px-4"
									>
										<ExternalLink size={16} />
										Open Full Certificate
									</a>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default CertificationsSection;
