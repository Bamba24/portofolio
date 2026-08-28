import { useEffect, useContext } from 'react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Globe, Smartphone, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { LangueContext } from '../context/langueContext';
import { ThemeContext } from '../context/ThemeContext';
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

  const contextTheme = useContext(ThemeContext);
  const theme = contextTheme?.theme ?? "light";

  const isEn = langue === 'en';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  // Trouve les projets précédent et suivant pour la navigation
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* STICKY TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2.5 px-4 py-2 bg-slate-100 dark:bg-slate-900 hover:bg-blue-900 hover:text-white dark:hover:bg-blue-900 text-slate-700 dark:text-slate-300 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {isEn ? "Back to projects" : "Retour aux projets"}
          </button>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {project.category}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
              {isEn ? project.titleEn : project.titleFr}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm"
              >
                <ExternalLink size={14} />
                <span className="hidden sm:inline">{isEn ? "Live Demo" : "Démo en direct"}</span>
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="pb-24">
        
        {/* HERO SECTION AVEC BANNIÈRE IMAGE */}
        <section className="relative bg-slate-900 overflow-hidden">
          <div className="relative h-[50vh] md:h-[65vh] w-full">
            <img
              src={project.image}
              alt={isEn ? project.titleEn : project.titleFr}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto px-6 -mt-32 md:-mt-40 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-lg border border-slate-100 dark:border-slate-800 shadow-2xl space-y-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 bg-blue-900 text-white text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm">
                  {project.category === "Mobile" ? <Smartphone size={13} /> : <Globe size={13} />}
                  {project.category}
                </span>
                
                <span className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full ${
                  (isEn ? project.statusEn === "In building" : project.status === "En cours")
                    ? "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                    : "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                }`}>
                  {isEn ? project.statusEn : project.status}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {isEn ? project.titleEn : project.titleFr}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {isEn ? project.descriptionEn : project.descriptionFr}
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md active:scale-95"
                  >
                    <ExternalLink size={16} />
                    {isEn ? "Visit Live Project" : "Visiter le projet"}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md active:scale-95"
                  >
                    <Github size={16} />
                    {isEn ? "View Source Code" : "Voir le code source"}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* DETAILED CASE STUDY CONTENT GRID */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* MAIN COLUMN (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* CHALLENGE & SOLUTION */}
              {(project.challengeFr || project.challengeEn) && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-sm text-blue-900 dark:text-blue-400">
                      <Sparkles size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {isEn ? "Case Study Breakdown" : "Analyse du projet"}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900/60 rounded-sm border border-slate-100 dark:border-slate-800">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                        {isEn ? "The Challenge" : "Le Défi"}
                      </h3>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                        {isEn ? project.challengeEn : project.challengeFr}
                      </p>
                    </div>

                    {project.solutionFr && (
                      <div className="p-6 bg-blue-50/50 dark:bg-blue-950/30 rounded-sm border border-blue-100 dark:border-blue-900/50">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-blue-900 dark:text-blue-400 mb-3">
                          {isEn ? "The Solution" : "La Solution"}
                        </h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                          {isEn ? project.solutionEn : project.solutionFr}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* FONCTIONNALITES CLES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded-sm text-blue-900 dark:text-blue-400">
                    <Layers size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {isEn ? "Key Features & Capabilities" : "Fonctionnalités clés"}
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {(isEn ? project.featuresEn : project.featuresFr).map((feature, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white dark:bg-slate-900 rounded-sm border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-3"
                    >
                      <CheckCircle2 size={18} className="text-blue-900 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* SIDEBAR COLUMN (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* STACK TECHNIQUE */}
              <div className="p-6 bg-slate-50 dark:bg-slate-900/80 rounded-sm border border-slate-100 dark:border-slate-800 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {isEn ? "Technologies Used" : "Technologies utilisées"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-sm shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* SPECIFICATIONS PROJET */}
              <div className="p-6 bg-slate-50 dark:bg-slate-900/80 rounded-sm border border-slate-100 dark:border-slate-800 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {isEn ? "Project Information" : "Informations projet"}
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">{isEn ? "Category" : "Catégorie"}</span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">{project.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500">{isEn ? "Status" : "Statut"}</span>
                    <span className="font-bold text-blue-900 dark:text-blue-400">
                      {isEn ? project.statusEn : project.status}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* NAVIGATION PRECEDENT / SUIVANT */}
        <section className="max-w-6xl mx-auto px-6 mt-20 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <button
              onClick={() => onSelectProject(prevProject)}
              className="group flex items-center gap-4 text-left p-4 rounded-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-all w-full sm:w-auto"
            >
              <ArrowLeft size={20} className="text-slate-400 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {isEn ? "Previous project" : "Projet précédent"}
                </p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                  {isEn ? prevProject.titleEn : prevProject.titleFr}
                </p>
              </div>
            </button>

            <button
              onClick={onBack}
              className="px-6 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-blue-900 dark:hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-sm"
            >
              {isEn ? "All Projects" : "Tous les projets"}
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="group flex items-center justify-end gap-4 text-right p-4 rounded-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-all w-full sm:w-auto"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {isEn ? "Next project" : "Projet suivant"}
                </p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
                  {isEn ? nextProject.titleEn : nextProject.titleFr}
                </p>
              </div>
              <ArrowRight size={20} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>
        </section>

      </main>

    </div>
  );
}
