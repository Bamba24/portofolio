import { useEffect, useContext } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Globe, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LangueContext } from '../context/langueContext';

export interface ProjectType {
  id: number;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  challengeFr?: string;
  challengeEn?: string;
  solutionFr?: string;
  solutionEn?: string;
  image: string;
  category: string;
  technologies: string[];
  demo?: string;
  github?: string;
  featuresFr: string[];
  featuresEn: string[];
  status: string;
  statusEn: string;
}

interface ProjectModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? "fr";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isEn = langue === 'en';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        />

        {/* MODAL CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-lg shadow-2xl overflow-hidden z-10 my-auto border border-slate-100 dark:border-slate-800"
        >
          
          {/* BOUTON FERMER */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full backdrop-blur-md transition-all shadow-lg active:scale-95"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* BANNIÈRE IMAGE DU PROJET */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={isEn ? project.titleEn : project.titleFr}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-900 text-white text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                    {project.category === "Mobile" ? <Smartphone size={12} /> : <Globe size={12} />}
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                    (isEn ? project.statusEn === "In building" : project.status === "En cours")
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  }`}>
                    {isEn ? project.statusEn : project.status}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                  {isEn ? project.titleEn : project.titleFr}
                </h2>
              </div>

              {/* ACTION CTAS IN HEADER */}
              <div className="flex items-center gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md active:scale-95"
                  >
                    <ExternalLink size={14} />
                    {isEn ? "Live Demo" : "Démo en direct"}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md active:scale-95"
                  >
                    <Github size={14} />
                    {isEn ? "Code Source" : "Code Source"}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* CONTENU DE LA MODAL */}
          <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto space-y-8">
            
            {/* PRESENTATION GENERALE */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-900 dark:text-blue-400 mb-3">
                {isEn ? "Overview" : "Présentation générale"}
              </h3>
              <p className="text-base text-gray-700 dark:text-slate-300 leading-relaxed font-normal">
                {isEn ? project.descriptionEn : project.descriptionFr}
              </p>
            </div>

            {/* CHALLENGE & SOLUTION (SI DISPONIBLE) */}
            {(project.challengeFr || project.challengeEn) && (
              <div className="grid md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-sm border border-slate-100 dark:border-slate-800">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                    {isEn ? "The Challenge" : "Le Défi"}
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {isEn ? project.challengeEn : project.challengeFr}
                  </p>
                </div>
                {project.solutionFr && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-blue-900 dark:text-blue-400 mb-2">
                      {isEn ? "The Solution" : "La Solution"}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isEn ? project.solutionEn : project.solutionFr}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* FONCTIONNALITES CLES */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-900 dark:text-blue-400 mb-4">
                {isEn ? "Key Features" : "Fonctionnalités clés"}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {(isEn ? project.featuresEn : project.featuresFr).map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-sm border border-slate-100 dark:border-slate-800/80"
                  >
                    <CheckCircle2 size={16} className="text-blue-900 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNOLOGIES UTILISEES */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-900 dark:text-blue-400 mb-3">
                {isEn ? "Technologies & Tools" : "Technologies & Outils"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 text-blue-900 dark:text-blue-300 text-xs font-semibold rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* FOOTER DE LA MODAL */}
          <div className="p-4 md:p-6 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <span className="text-xs font-bold uppercase text-slate-400">
              {project.category} Project
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
            >
              {isEn ? "Close" : "Fermer"}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
