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

  // Indexation pour la pagination précédent / suivant style Jonathan Boyer
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1f2235] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      
      {/* HEADER DE NAVIGATION DU PROJET */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#1f2235]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#ffc576]/15 py-4">
        <div className="boyer-container flex items-center justify-between">
          
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-[#9899a8] hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-[#d97706] dark:text-[#ffc576]" />
            <span>{isEn ? "Back to Projects" : "Retour aux réalisations"}</span>
          </button>

          <div className="flex items-center gap-4">
            {/* Bouton changement de Thème */}
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                title={theme === "light" ? "Mode Sombre" : "Mode Clair"}
                className="p-1.5 text-slate-600 dark:text-white/70 hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors cursor-pointer"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            )}

            {/* Bouton changement de Langue */}
            {toggleLangue && (
              <button
                onClick={toggleLangue}
                className="p-1.5 text-slate-600 dark:text-white/70 hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors flex items-center gap-1 text-xs font-semibold"
              >
                <Languages size={15} />
                <span className="uppercase text-[11px]">{langue}</span>
              </button>
            )}

            {/* CTA Voir le site en direct */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-boyer !py-1.5 !px-3.5 text-xs hidden sm:inline-flex"
              >
                <span>{isEn ? "Visit Site" : "Voir le site"}</span>
                <ExternalLink size={13} className="ml-1.5" />
              </a>
            )}
          </div>

        </div>
      </header>

      {/* PAGE HEADER STYLE JONATHAN BOYER */}
      <section className="relative pt-20 pb-16 border-b border-slate-200 dark:border-[#ffc576]/15 overflow-hidden">
        {/* Arrière-plan avec dégradé et preview */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center filter blur-xs pointer-events-none"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/90 via-[#f8fafc] to-[#f8fafc] dark:from-[#1f2235]/80 dark:via-[#1f2235] dark:to-[#1f2235] pointer-events-none" />

        <div className="boyer-container relative z-10 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <span className="section__top-title">
                {project.category} • {isEn ? project.statusEn : project.status}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mt-1">
                {isEn ? project.titleEn : project.titleFr}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-boyer"
                >
                  <span>{isEn ? "Visit Live Site" : "Voir le site"}</span>
                  <ArrowRight size={13} className="icon-arrow" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-boyer !border-slate-300 dark:!border-white/30 !text-slate-700 dark:!text-white/80 hover:!border-[#d97706] dark:hover:!border-[#ffc576] hover:!text-white dark:hover:!text-[#1f2235]"
                >
                  <Github size={14} className="mr-2" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-xl sm:text-2xl text-slate-600 dark:text-[#cbd5e1] font-light max-w-3xl leading-relaxed">
            {isEn ? project.descriptionEn : project.descriptionFr}
          </p>
        </div>
      </section>

      {/* CONTENU PRINCIPAL ÉDITORIAL (BLOCS STYLE BOYER) */}
      <main className="py-20">
        <div className="boyer-container space-y-16 text-left">
          
          {/* BLOC 1 : CAPTURE PLEINE LARGEUR SANS ROGNAGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="boyer-card overflow-hidden border border-slate-200 dark:border-[#ffc576]/30 bg-white dark:bg-[#181a29] shadow-xl p-2 sm:p-4"
          >
            <div className="w-full overflow-hidden bg-slate-50 dark:bg-[#141622] rounded-xs flex items-center justify-center">
              <img
                src={project.image}
                alt={isEn ? project.titleEn : project.titleFr}
                className="w-full h-auto max-h-[640px] object-contain rounded-xs"
              />
            </div>
          </motion.div>

          {/* BLOC 2 : COLONNES DÉFI & SOLUTION TECHNIQUE */}
          {(project.challengeFr || project.solutionFr) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Le Défi */}
              <div className="bg-white dark:bg-[#313552] border border-slate-200 dark:border-[#ffc576]/25 p-8 rounded-sm shadow-xs">
                <span className="section__top-title">
                  {isEn ? "The Challenge" : "La problématique"}
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {isEn ? "Goals & Technical Context" : "Contexte & Objectifs"}
                </h2>
                <p className="text-base text-slate-600 dark:text-[#9899a8] leading-relaxed">
                  {isEn ? project.challengeEn : project.challengeFr}
                </p>
              </div>

              {/* La Solution */}
              <div className="bg-white dark:bg-[#313552] border border-slate-200 dark:border-[#ffc576]/25 p-8 rounded-sm shadow-xs">
                <span className="section__top-title">
                  {isEn ? "The Solution" : "L'Approche Technique"}
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {isEn ? "Architecture & Stack" : "Architecture & Choix"}
                </h2>
                <p className="text-base text-slate-600 dark:text-[#9899a8] leading-relaxed">
                  {isEn ? project.solutionEn : project.solutionFr}
                </p>
              </div>

            </div>
          )}

          {/* BLOC 3 : FONCTIONNALITÉS CLÉS & TECHNOLOGIES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Colonne Fonctionnalités */}
            <div className="lg:col-span-8 bg-white dark:bg-[#313552] border border-slate-200 dark:border-[#ffc576]/25 p-8 sm:p-10 rounded-sm space-y-6 shadow-xs">
              <div>
                <span className="section__top-title">
                  {isEn ? "Capabilities" : "Fonctionnalités"}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {isEn ? "Key Features Implemented" : "Points Clés Réalisés"}
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                {(isEn ? project.featuresEn : project.featuresFr).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#d97706] dark:text-[#ffc576] shrink-0 mt-1" />
                    <span className="text-base text-slate-700 dark:text-[#cbd5e1] leading-relaxed font-normal">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne Stack Technique */}
            <div className="lg:col-span-4 bg-white dark:bg-[#313552] border border-slate-200 dark:border-[#ffc576]/25 p-8 rounded-sm space-y-6 shadow-xs">
              <div>
                <span className="section__top-title">
                  {isEn ? "Stack" : "Technologies"}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  {isEn ? "Tech Stack" : "Environnement"}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 bg-slate-100 dark:bg-[#1f2235] text-[#b45309] dark:text-[#ffc576] border border-slate-200 dark:border-[#ffc576]/30 rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/10 space-y-3">
                <div className="text-xs text-slate-500 dark:text-[#9899a8]">
                  <span className="text-slate-900 dark:text-white font-bold block mb-1">
                    {isEn ? "Category:" : "Catégorie :"}
                  </span>
                  <span>{project.category}</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-[#9899a8]">
                  <span className="text-slate-900 dark:text-white font-bold block mb-1">
                    {isEn ? "Status:" : "Statut :"}
                  </span>
                  <span className="text-[#b45309] dark:text-[#ffc576] font-semibold">
                    {isEn ? project.statusEn : project.status}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* BARRE DE PAGINATION EXACTE STYLE JONATHAN BOYER */}
          <div className="pt-10 border-t border-slate-200 dark:border-[#ffc576]/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Projet précédent */}
              <button
                onClick={() => onSelectProject(prevProject)}
                className="boyer-card p-6 text-left group cursor-pointer border border-slate-200 dark:border-[#ffc576]/30 hover:border-[#d97706] dark:hover:border-[#ffc576] transition-all"
              >
                <span className="section__top-title !text-xs !mb-1 flex items-center gap-1.5">
                  <ArrowLeft size={13} className="text-[#d97706] dark:text-[#ffc576] group-hover:-translate-x-1 transition-transform" />
                  {isEn ? "Previous Project" : "Projet précédent"}
                </span>
                <strong className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#b45309] dark:group-hover:text-[#ffc576] transition-colors block mt-1">
                  {isEn ? prevProject.titleEn : prevProject.titleFr}
                </strong>
              </button>

              {/* Projet suivant */}
              <button
                onClick={() => onSelectProject(nextProject)}
                className="boyer-card p-6 text-right group cursor-pointer border border-slate-200 dark:border-[#ffc576]/30 hover:border-[#d97706] dark:hover:border-[#ffc576] transition-all"
              >
                <span className="section__top-title !text-xs !mb-1 flex items-center justify-end gap-1.5">
                  {isEn ? "Next Project" : "Projet suivant"}
                  <ArrowRight size={13} className="text-[#d97706] dark:text-[#ffc576] group-hover:translate-x-1 transition-transform" />
                </span>
                <strong className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#b45309] dark:group-hover:text-[#ffc576] transition-colors block mt-1">
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
