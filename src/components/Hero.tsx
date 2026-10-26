import { ArrowRight, Sparkles, Code2 } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const isEn = langue === 'en';

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center bg-[#f8fafc] dark:bg-[#1f2235] text-slate-900 dark:text-white pt-32 pb-20 overflow-hidden transition-colors duration-300"
    >
      {/* ÉLÉMENT GÉOMÉTRIQUE ROTATIF SIGNATURE JONATHAN BOYER */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-20 w-80 h-80 opacity-20 dark:opacity-15 select-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#d97706] dark:text-[#ffc576] animate-spin-slow">
          <polygon
            points="100,10 120,40 155,25 160,60 195,65 180,95 200,120 170,135 175,170 140,165 125,195 95,180 70,200 55,170 20,175 25,140 -5,125 10,95 -10,70 20,55 15,20 50,25 65,-5 95,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
        </svg>
      </div>

      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 w-96 h-96 opacity-15 dark:opacity-10 select-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#d97706] dark:text-[#ffc576] animate-spin-slow">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
          <polygon
            points="100,20 180,100 100,180 20,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="boyer-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* COLONNE GAUCHE : IDENTITÉ & TEXTE JONATHAN BOYER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Intro Hello */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d97706] dark:bg-[#ffc576] animate-pulse"></span>
              <span className="text-[#b45309] dark:text-[#ffc576] font-medium text-lg sm:text-xl tracking-wide">
                {isEn ? 'Hello, I am' : 'Bonjour, je suis'}
              </span>
            </div>

            {/* Titre Principal (Playfair Display) */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
              Mouhamadou Bamba <span className="text-[#d97706] dark:text-[#ffc576]">Diagne</span>
            </h1>

            {/* Métier / Titre de fonction */}
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-[#cbd5e1] font-light">
              {isEn ? 'Fullstack Web & Mobile Developer' : 'Développeur Web & Mobile Fullstack'}
            </p>

            {/* Pitch & Valeur ajoutée */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#9899a8] max-w-xl leading-relaxed">
              {isEn
                ? 'Specialized in building high-performance web applications and mobile platforms with clean architectures, smooth interactions, and production rigor.'
                : 'Spécialisé dans la conception d’applications web et mobiles modernes, robustes et sur-mesure (React, Next.js, Node.js, Spring Boot & React Native) avec un soin rigoureux apporté à l’architecture et à l’expérience utilisateur.'}
            </p>

            {/* Actions CTAs */}
            <div className="flex flex-wrap gap-4 items-center pt-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-boyer"
              >
                <span>{isEn ? 'View My Work' : 'Voir mes réalisations'}</span>
                <ArrowRight size={14} className="icon-arrow" />
              </button>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-boyer !border-slate-300 dark:!border-white/30 !text-slate-700 dark:!text-white/80 hover:!border-[#d97706] dark:hover:!border-[#ffc576] hover:!text-white dark:hover:!text-[#1f2235]"
              >
                <span>{isEn ? 'Get In Touch' : 'Me contacter'}</span>
                <ArrowRight size={14} className="icon-arrow" />
              </button>

              <a
                href="https://github.com/Bamba24"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#9899a8] hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors ml-2"
              >
                <Code2 size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* COLONNE DROITE : PORTRAIT ÉPURÉ AVEC ACCENT DORÉ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Cadre photo avec subtile ombre */}
              <div className="relative aspect-square rounded-sm overflow-hidden bg-slate-100 dark:bg-[#313552] border border-slate-200 dark:border-[#ffc576]/30 shadow-2xl group">
                <img
                  src="/images/pp.png"
                  alt="Mouhamadou Bamba Diagne"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-[#1f2235]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Badge Flottant Disponibilité */}
              <div className="absolute -bottom-5 -right-3 sm:right-2 bg-white dark:bg-[#313552] border border-slate-200 dark:border-[#ffc576]/60 px-4 py-3 rounded-sm shadow-xl flex items-center gap-3">
                <Sparkles size={18} className="text-[#d97706] dark:text-[#ffc576] shrink-0 animate-bounce" />
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#9899a8]">
                    {isEn ? "Status" : "Disponibilité"}
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    {isEn ? "Available for projects" : "Disponible pour missions & projets"}
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
