import { useEffect, useContext } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Sun, Moon, Languages, CheckCircle2 } from 'lucide-react';
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
  const toggleLangue = contextLangue?.toggleLangue;

  const contextTheme = useContext(ThemeContext);
  const theme = contextTheme?.theme ?? "dark";
  const toggleTheme = contextTheme?.toggleTheme;

  const isEn = langue === 'en';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const originalTitle = document.title;
    const projectTitle = isEn ? project.titleEn : project.titleFr;
    document.title = `${projectTitle} — Mouhamadou Bamba Diagne`;

    return () => {
      document.title = originalTitle;
    };
  }, [project, isEn]);

  // Indexation pour la pagination précédent / suivant
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      
      {/* HEADER DE NAVIGATION DU PROJET */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 py-3.5">
        <div className="portfolio-container flex items-center justify-between">
          
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            <span>{isEn ? "Back to Projects" : "Retour aux réalisations"}</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Bouton changement de Thème */}
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                title={theme === "light" ? "Mode Sombre" : "Mode Clair"}
                className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-md border border-zinc-200 dark:border-white/10 cursor-pointer"
              >
                {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
              </button>
            )}

            {/* Bouton changement de Langue */}
            {toggleLangue && (
              <button
                onClick={toggleLangue}
                className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold rounded-md border border-zinc-200 dark:border-white/10"
              >
                <Languages size={14} />
                <span className="uppercase text-[11px]">{langue}</span>
              </button>
            )}

            {/* CTA Voir le site en direct */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2 !px-3.5 text-xs hidden sm:inline-flex"
              >
                <span>{isEn ? "Visit Live Site" : "Voir le site"}</span>
                <ExternalLink size={13} className="ml-1" />
              </a>
            )}
          </div>

        </div>
      </header>

      {/* PAGE HERO / EN-TÊTE DU PROJET */}
      <section className="relative pt-16 pb-12 border-b border-zinc-200 dark:border-white/10 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center filter blur-xl pointer-events-none"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="portfolio-container relative z-10 text-left">
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="section-tag !mb-0">
              {project.category}
            </span>
            <span className="status-badge !py-1 !px-2.5 !text-[11px]">
              {isEn ? project.statusEn : project.status}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
                {isEn ? project.titleEn : project.titleFr}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                {isEn ? project.descriptionEn : project.descriptionFr}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start lg:self-end shrink-0">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <span>{isEn ? "Visit Live Site" : "Voir le site en production"}</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* CONTENU PRINCIPAL ÉDITORIAL BENTO */}
      <main className="py-16">
        <div className="portfolio-container space-y-12 text-left">
          
          {/* BLOC 1 : CAPTURE DU PROJET SANS ROGNAGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bento-card overflow-hidden p-3 sm:p-5"
          >
            <div className="w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-200/60 dark:border-white/5">
              <img
                src={project.image}
                alt={isEn ? project.titleEn : project.titleFr}
                className="w-full h-auto max-h-[640px] object-contain rounded-lg"
              />
            </div>
          </motion.div>

          {/* BLOC 2 : COLONNES DÉFI & SOLUTION TECHNIQUE */}
          {(project.challengeFr || project.solutionFr) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Le Défi */}
              <div className="bento-card p-8">
                <span className="section-tag">
                  {isEn ? "Problem Statement" : "La problématique"}
                </span>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 mt-1">
                  {isEn ? "Goals & Technical Context" : "Contexte & Objectifs"}
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {isEn ? project.challengeEn : project.challengeFr}
                </p>
              </div>

              {/* La Solution */}
              <div className="bento-card p-8">
                <span className="section-tag">
                  {isEn ? "Technical Solution" : "L'Approche Technique"}
                </span>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 mt-1">
                  {isEn ? "Architecture & Stack" : "Architecture & Choix"}
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {isEn ? project.solutionEn : project.solutionFr}
                </p>
              </div>

            </div>
          )}

          {/* BLOC 3 : FONCTIONNALITÉS CLÉS & TECHNOLOGIES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Colonne Fonctionnalités */}
            <div className="lg:col-span-8 bento-card p-8 sm:p-10 space-y-6">
              <div>
                <span className="section-tag">
                  {isEn ? "Capabilities" : "Fonctionnalités"}
                </span>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                  {isEn ? "Key Features Implemented" : "Points Clés Réalisés"}
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                {(isEn ? project.featuresEn : project.featuresFr).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne Stack Technique */}
            <div className="lg:col-span-4 bento-card p-8 space-y-6">
              <div>
                <span className="section-tag">
                  {isEn ? "Stack" : "Technologies"}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-1">
                  {isEn ? "Tech Stack" : "Environnement"}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/70 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-zinc-200 dark:border-white/10 space-y-3">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="text-zinc-900 dark:text-white font-semibold block mb-0.5">
                    {isEn ? "Category" : "Catégorie"}
                  </span>
                  <span>{project.category}</span>
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="text-zinc-900 dark:text-white font-semibold block mb-0.5">
                    {isEn ? "Status" : "Statut"}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {isEn ? project.statusEn : project.status}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* BARRE DE PAGINATION PRÉCÉDENT / SUIVANT */}
          <div className="pt-8 border-t border-zinc-200 dark:border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Projet précédent */}
              <button
                onClick={() => onSelectProject(prevProject)}
                className="bento-card p-6 text-left group cursor-pointer"
              >
                <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mb-1.5 font-medium">
                  <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
                  {isEn ? "Previous Project" : "Projet précédent"}
                </span>
                <strong className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors block">
                  {isEn ? prevProject.titleEn : prevProject.titleFr}
                </strong>
              </button>

              {/* Projet suivant */}
              <button
                onClick={() => onSelectProject(nextProject)}
                className="bento-card p-6 text-right group cursor-pointer"
              >
                <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-end gap-1.5 mb-1.5 font-medium">
                  {isEn ? "Next Project" : "Projet suivant"}
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <strong className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors block">
                  {isEn ? nextProject.titleEn : nextProject.titleFr}
                </strong>
              </button>

            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
