import { useEffect, useContext } from 'react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Globe, Smartphone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LangueContext } from '../context/langueContext';
import { ProjectType } from './Projects';

interface ProjectDetailProps {
  project: ProjectType;
  allProjects: ProjectType[];
  onBack: () => void;
  onSelectProject: (project: ProjectType) => void;
}

export default function ProjectDetail({ project, allProjects, onBack, onSelectProject }: ProjectDetailProps) {
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? "fr";
  const isEn = langue === 'en';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  // Navigation projets précédent / suivant
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* BARRE DE NAVIGATION MINIMALISTE */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-blue-900 transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {isEn ? "Back to projects" : "Retour aux projets"}
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-sm flex items-center gap-1">
              {project.category === "Mobile" ? <Smartphone size={12} /> : <Globe size={12} />}
              {project.category}
            </span>
            <span>•</span>
            <span className={isEn ? project.statusEn === "In building" ? "text-amber-600" : "text-emerald-600" : project.status === "En cours" ? "text-amber-600" : "text-emerald-600"}>
              {isEn ? project.statusEn : project.status}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        
        {/* ENTÊTE DU PROJET */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {isEn ? project.titleEn : project.titleFr}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            {isEn ? project.descriptionEn : project.descriptionFr}
          </p>

          {/* BOUTONS D'ACTION CLAIRS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm active:scale-95"
              >
                <ExternalLink size={16} />
                {isEn ? "Live Demo" : "Démo en direct"}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm active:scale-95"
              >
                <Github size={16} />
                {isEn ? "Source Code" : "Code Source"}
              </a>
            )}
          </div>
        </motion.div>

        {/* APERÇU VISUEL UNIQUE & PROPRE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="aspect-video w-full overflow-hidden rounded-md border border-slate-100 bg-slate-50 shadow-sm"
        >
          <img
            src={project.image}
            alt={isEn ? project.titleEn : project.titleFr}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* SECTION DÉFI & SOLUTION (SI DISPONIBLE) */}
        {(project.challengeFr || project.challengeEn) && (
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-sm space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {isEn ? "The Challenge" : "Le Défi"}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {isEn ? project.challengeEn : project.challengeFr}
              </p>
            </div>
            {project.solutionFr && (
              <div className="p-6 bg-blue-50/60 border border-blue-100 rounded-sm space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-blue-900">
                  {isEn ? "The Solution" : "La Solution"}
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {isEn ? project.solutionEn : project.solutionFr}
                </p>
              </div>
            )}
          </div>
        )}

        {/* FONCTIONNALITÉS CLÉS */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">
            {isEn ? "Key Features" : "Fonctionnalités clés"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {(isEn ? project.featuresEn : project.featuresFr).map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-blue-900 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGIES UTILISÉES */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">
            {isEn ? "Technologies Used" : "Technologies utilisées"}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-medium rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* NAVIGATION BAS DE PAGE (PRÉCÉDENT / SUIVANT) */}
        <nav className="flex items-center justify-between pt-12 border-t border-slate-100">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="group flex items-center gap-3 text-left hover:text-blue-900 transition-colors"
          >
            <ArrowLeft size={18} className="text-slate-400 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {isEn ? "Previous" : "Précédent"}
              </p>
              <p className="text-sm font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                {isEn ? prevProject.titleEn : prevProject.titleFr}
              </p>
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="group flex items-center gap-3 text-right hover:text-blue-900 transition-colors"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {isEn ? "Next" : "Suivant"}
              </p>
              <p className="text-sm font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                {isEn ? nextProject.titleEn : nextProject.titleFr}
              </p>
            </div>
            <ArrowRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>

      </main>
    </div>
  );
}
