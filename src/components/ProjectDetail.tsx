import { useEffect, useContext } from 'react';
import { ArrowLeft, ExternalLink, Github, Sun, Moon, Languages, ArrowRight } from 'lucide-react';
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
  const theme = contextTheme?.theme ?? "light";
  const toggleTheme = contextTheme?.toggleTheme;

  const isEn = langue === 'en';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  // Navigation projets précédent / suivant
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* NAVBAR STICKY : Style jonathan-boyer.fr + Thème */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {isEn ? "Réalisations" : "Réalisations"}
          </button>

          <div className="flex items-center gap-3">
            {/* Bouton changement de Thème */}
            <button
              onClick={toggleTheme}
              title={theme === "light" ? "Mode Sombre" : "Mode Clair"}
              className="p-2 text-slate-400 hover:text-blue-900 dark:hover:text-white transition-colors"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Bouton changement de Langue */}
            {toggleLangue && (
              <button
                onClick={toggleLangue}
                className="p-2 text-slate-400 hover:text-blue-900 dark:hover:text-white transition-colors flex items-center gap-1"
              >
                <Languages size={18} />
                <span className="text-[10px] font-bold">{langue.toUpperCase()}</span>
              </button>
            )}

            {/* CTA Voir le site */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-xs"
              >
                <span>{isEn ? "Voir le site" : "Voir le site"}</span>
                <ArrowRight size={14} />
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="pb-20">
        
        {/* PAGE HEADER : Bannière d'en-tête jonathan-boyer.fr */}
        <section className="relative bg-slate-900 text-white py-16 md:py-24 px-6 overflow-hidden">
          {/* Image de fond avec overlay sombre */}
          <div className="absolute inset-0 z-0">
            <img
              src={project.image}
              alt=""
              className="w-full h-full object-cover opacity-20 blur-sm scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/80" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                {project.category}
              </span>
              <span className="text-slate-600">•</span>
              <span className={`text-xs font-bold uppercase tracking-widest ${
                (isEn ? project.statusEn === "In building" : project.status === "En cours")
                  ? "text-amber-400"
                  : "text-emerald-400"
              }`}>
                {isEn ? project.statusEn : project.status}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                {isEn ? project.titleEn : project.titleFr}
              </h1>

              <div className="flex items-center gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md active:scale-95 whitespace-nowrap"
                  >
                    {isEn ? "Voir le site" : "Voir le site"}
                    <ArrowRight size={14} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md active:scale-95 whitespace-nowrap"
                  >
                    <Github size={14} />
                    {isEn ? "GitHub" : "GitHub"}
                  </a>
                )}
              </div>
            </div>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl pt-2">
              {isEn ? project.descriptionEn : project.descriptionFr}
            </p>
          </div>
        </section>

        {/* BLOCS DE CONTENU : Style .bloc de jonathan-boyer.fr */}
        <section className="max-w-4xl mx-auto px-6 pt-16 space-y-16">
          
          {/* BLOC 1 : IMAGE ET PRESENTATION DU DEFI */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="aspect-video w-full overflow-hidden rounded-md border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-100 dark:bg-slate-900">
              <img
                src={project.image}
                alt={isEn ? project.titleEn : project.titleFr}
                className="w-full h-full object-cover"
              />
            </div>

            {(project.challengeFr || project.challengeEn) && (
              <div className="grid md:grid-cols-2 gap-8 items-start pt-4">
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isEn ? "The Challenge" : "Le Défi"}
                  </h2>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {isEn ? project.challengeEn : project.challengeFr}
                  </p>
                </div>

                {project.solutionFr && (
                  <div className="space-y-3">
                    <h2 className="text-xl font-bold text-blue-900 dark:text-blue-400">
                      {isEn ? "The Solution" : "La Solution"}
                    </h2>
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {isEn ? project.solutionEn : project.solutionFr}
                    </p>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* BLOC 2 : FONCTIONNALITES CLES & STACK TECHNIQUE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 pt-8 border-t border-slate-100 dark:border-slate-800/80"
          >
            {/* Liste des fonctionnalités */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {isEn ? "Key Features" : "Fonctionnalités principales"}
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                {(isEn ? project.featuresEn : project.featuresFr).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-blue-900 dark:text-blue-400 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack technique */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {isEn ? "Tech Stack" : "Environnement Technique"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                {isEn 
                  ? "Technologies and libraries leveraged to build and deploy this project."
                  : "Technologies et outils utilisés pour concevoir, développer et déployer ce projet."}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </section>

        {/* PAGINATION EN BAS : Style jonathan-boyer.fr */}
        <nav className="max-w-4xl mx-auto px-6 mt-20 pt-10 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            
            <button
              onClick={() => onSelectProject(prevProject)}
              className="group text-left space-y-1 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                {isEn ? "Projet précédent" : "Projet précédent"}
              </span>
              <strong className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors block">
                {isEn ? prevProject.titleEn : prevProject.titleFr}
              </strong>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="group text-right space-y-1 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                {isEn ? "Projet suivant" : "Projet suivant"}
              </span>
              <strong className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors block">
                {isEn ? nextProject.titleEn : nextProject.titleFr}
              </strong>
            </button>

          </div>
        </nav>

      </main>
    </div>
  );
}
