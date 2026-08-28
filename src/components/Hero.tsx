import { ArrowRight, Sparkles } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const isEn = langue === 'en';

  return (
    <section id="hero" className="min-h-[88vh] flex items-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-6 pt-24 pb-16 transition-colors duration-300">
      <div className="max-w-5xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLONNE GAUCHE : TEXTE & ACTIONS (Aligné à gauche) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Subtitle discret */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-400">
                {isEn ? 'Hello, I am' : 'Bonjour, je suis'}
              </span>
            </div>

            {/* Nom principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Mouhamadou Bamba <span className="text-blue-900 dark:text-blue-400">Diagne</span>
            </h1>

            {/* Rôle du développeur */}
            <p className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 font-light">
              {isEn ? 'Fullstack Web & Mobile Developer' : 'Développeur Web & Mobile Fullstack'}
            </p>

            {/* Description épurée */}
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              {isEn
                ? 'I craft elegant, scalable web and mobile applications with high performance, clean architecture, and smooth user experiences.'
                : 'Je conçois des applications web et mobiles performantes, sur-mesure et élégantes, avec un soin particulier apporté à l’expérience utilisateur et à la propreté du code.'}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-xs active:scale-95"
              >
                {isEn ? 'View My Work' : 'Voir mes réalisations'}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider border-b-2 border-slate-800 dark:border-slate-200 pb-1 hover:text-blue-900 dark:hover:text-blue-400 hover:border-blue-900 dark:hover:border-blue-400 transition-all"
              >
                {isEn ? 'Get in Touch' : 'Me contacter'}
              </button>
            </div>
          </motion.div>

          {/* COLONNE DROITE : PORTRAIT & BADGE DISPONIBILITE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-xs sm:max-w-sm">
              
              {/* Cadre d'image épuré avec légère bordure */}
              <div className="relative aspect-square rounded-md overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                <img
                  src="/images/pp.png"
                  alt="Mouhamadou Bamba Diagne"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Badge Flottant "Disponible" */}
              <div className="absolute -bottom-4 right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-md shadow-lg flex items-center gap-2.5">
                <Sparkles size={16} className="text-amber-500 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {isEn ? "Status" : "Statut"}
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    {isEn ? "Available for projects" : "Disponible pour des projets"}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}