import { ArrowRight } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const isEn = langue === 'en';

  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Subtitle discret */}
          <p className="text-slate-400 dark:text-slate-400 font-medium tracking-wide uppercase text-xs">
            {isEn ? 'Hello, I am' : 'Bonjour, je suis'}
          </p>

          {/* Nom du développeur */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Mouhamadou Bamba <span className="text-blue-900 dark:text-blue-400">Diagne</span>
          </h1>

          {/* Rôle principal */}
          <p className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 font-light">
            {isEn ? 'Fullstack Web & Mobile Developer' : 'Développeur Web & Mobile Fullstack'}
          </p>

          {/* Court résumé de présentation */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed pt-2">
            {isEn
              ? 'I craft elegant, scalable web and mobile applications with high performance and smooth user experiences.'
              : 'Je conçois des applications web et mobiles performantes, élégantes et sur-mesure, avec un soin particulier apporté à l’expérience utilisateur.'}
          </p>

          {/* Actions épurées */}
          <div className="flex flex-wrap gap-5 items-center pt-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              {isEn ? 'View My Projects' : 'Voir mes réalisations'}
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
      </div>
    </section>
  );
}