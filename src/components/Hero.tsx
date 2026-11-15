import { ArrowRight, Download, Github, Linkedin, BookOpen, MapPin, Sparkles, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const isEn = langue === 'en';

  const bentoHighlights = [
    {
      label: isEn ? "Production Impact" : "Impact en Production",
      value: "40 000+",
      desc: isEn ? "Learners served on Xarala Academy platform" : "Apprenants sur la plateforme Xarala Academy",
      highlight: true
    },
    {
      label: isEn ? "Core Tech Stack" : "Stack de Prédilection",
      value: "Next.js & NestJS",
      desc: isEn ? "TypeScript, React, PostgreSQL & Docker" : "TypeScript, React, PostgreSQL & Docker",
      highlight: false
    },
    {
      label: isEn ? "Technical Writing" : "Veille & Blog Technique",
      value: "bamba.dev",
      desc: isEn ? "Bilingual articles & architecture insights" : "Articles d'ingénierie logicielle & retours d'expérience",
      highlight: false
    },
    {
      label: isEn ? "Availability" : "Disponibilité & Statut",
      value: isEn ? "Available" : "Disponible",
      desc: isEn ? "Open for full-time & freelance • Remote" : "Missions & opportunités CDI • Remote / Dakar",
      highlight: true
    }
  ];

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 border-b border-zinc-200 dark:border-white/10 transition-colors overflow-hidden"
    >
      {/* Halo lumineux d'arrière-plan très subtil */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/10 via-emerald-500/5 to-transparent blur-3xl -z-10 opacity-70"
      />

      <div className="portfolio-container relative z-10 w-full">
        
        {/* Grille principale : Présentation + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Colonne gauche : Profil & Valeur ajoutée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Badge Disponibilité & Localisation */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="status-badge">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
                <span>
                  {isEn 
                    ? "Available for opportunities & projects" 
                    : "Disponible pour opportunités & missions"}
                </span>
              </div>
              <span className="text-xs text-zinc-500 flex items-center gap-1 font-mono">
                <MapPin size={12} />
                Dakar, Sénégal • Remote
              </span>
            </div>

            {/* Titre Principal & Rôle précis */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.08]">
                Mouhamadou Bamba <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500">Diagne</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
                {isEn 
                  ? "Fullstack Software Engineer • TypeScript, Next.js & NestJS" 
                  : "Développeur Fullstack • TypeScript, Next.js & NestJS"}
              </p>
            </div>

            {/* Pitch & Valeur ajoutée orientée production */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              {isEn
                ? "I build high-performance web applications and real-time management platforms. Focused on clean architecture, scalable APIs, and smooth user experiences across production environments."
                : "Je conçois des applications web modernes et des outils de gestion en temps réel (CRM, POS, e-learning). Attaché à la propreté du code, à la robustesse des APIs et à la fluidité de l'expérience utilisateur en production."}
            </p>

            {/* CTAs d'action directe conformes aux standards de recrutement */}
            <div className="flex flex-wrap gap-3.5 items-center pt-2">
              <a 
                href="/cv-bamba.pdf"
                download="CV_Mouhamadou_Bamba_Diagne.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Download size={15} />
                <span>{isEn ? "Download Resume (PDF)" : "Télécharger mon CV (PDF)"}</span>
              </a>

              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                <span>{isEn ? "View Featured Work" : "Voir mes réalisations"}</span>
                <ArrowRight size={14} />
              </button>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                <span>{isEn ? "Get In Touch" : "Me contacter"}</span>
              </button>
            </div>

            {/* Liens réseaux rapides */}
            <div className="flex items-center gap-4 pt-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              <a 
                href="https://github.com/Bamba24" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a 
                href="https://www.linkedin.com/in/mouhamadou-bamba-diagne-59063a247/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a 
                href="https://bamba-dev.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <BookOpen size={14} />
                <span>bamba.dev</span>
              </a>
            </div>
          </motion.div>

          {/* Colonne droite : Photo de profil épurée */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-2xl group">
                <img
                  src="/images/pp.png"
                  alt="Mouhamadou Bamba Diagne"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Tag flottant Tech Lead */}
              <div className="absolute -bottom-4 right-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2.5 text-left">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Spécialisation
                  </p>
                  <p className="text-xs font-bold text-zinc-900 dark:text-white">
                    Next.js • NestJS • TypeScript
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bento Grid Highlights (Impact & Chiffres Clés) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left pt-6">
          {bentoHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
              className="bento-card p-5"
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                {item.label}
              </span>
              <p className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-1">
                {item.value}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
