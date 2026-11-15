import { useState, useContext } from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  BookOpen,
  MapPin,
  Copy,
  Check,
  Server,
  Globe,
  Smartphone,
  Cpu,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const isEn = langue === 'en';

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gameurbamba68@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const stackGroups = [
    {
      labelFr: "Frontend & Mobile",
      labelEn: "Frontend & Mobile",
      items: ["Next.js", "React", "React Native", "Expo", "TypeScript", "TailwindCSS", "TanStack Query", "GraphQL", "Zustand", "Zod"]
    },
    {
      labelFr: "Backend & Data",
      labelEn: "Backend & Data",
      items: ["NestJS", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "MySQL", "REST API"]
    },
    {
      labelFr: "DevOps & Automatisation",
      labelEn: "DevOps & Automation",
      items: ["Docker", "GitLab CI", "GitHub", "Automatisation", "Vercel", "Railway", "Linux / Bash"]
    }
  ];

  const capabilities = [
    {
      icon: <Server size={16} className="text-amber-500 dark:text-amber-400" />,
      titleFr: "Backend Node.js, Express & NestJS",
      titleEn: "Backend Node.js, Express & NestJS",
      descFr: "APIs REST/GraphQL sécurisées, modélisation PostgreSQL/MySQL avec Prisma et clean architecture.",
      descEn: "Secure REST/GraphQL APIs, PostgreSQL/MySQL schema modeling with Prisma, and clean architecture."
    },
    {
      icon: <Globe size={16} className="text-amber-500 dark:text-amber-400" />,
      titleFr: "Frontend React & Next.js",
      titleEn: "Frontend React & Next.js",
      descFr: "Interfaces dynamiques App Router, SSR/SSG, TanStack Query, validation Zod et optimisation SEO.",
      descEn: "Dynamic App Router UIs, SSR/SSG, TanStack Query, Zod schema validation, and SEO optimization."
    },
    {
      icon: <Smartphone size={16} className="text-amber-500 dark:text-amber-400" />,
      titleFr: "Mobile React Native & Expo",
      titleEn: "Mobile React Native & Expo",
      descFr: "Applications iOS & Android multiplateformes, animations fluides et synchronisation d'APIs.",
      descEn: "Cross-platform iOS & Android apps, fluid native feel, and remote API synchronization."
    },
    {
      icon: <Cpu size={16} className="text-amber-500 dark:text-amber-400" />,
      titleFr: "DevOps, Docker & Cloud",
      titleEn: "DevOps, Docker & Cloud",
      descFr: "Conteneurisation Docker, pipelines GitLab CI, scripts d'automatisation et déploiements cloud.",
      descEn: "Docker containerization, GitLab CI pipelines, workflow automation, and cloud deployments."
    }
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 transition-colors overflow-hidden"
    >
      {/* Subtle top radial spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-b from-amber-500/8 via-emerald-500/4 to-transparent blur-3xl -z-10"
      />

      <div className="portfolio-container relative z-10">
        
        {/* ASYMMETRIC BENTO GRID (STYLE LEEROB × LINEAR / RAYCAST) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 text-left">
          
          {/* CARTE 1 (8 COLONNES) : ÉDITORIAL & BIO AVEC BADGES INLINE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-8 bento-card p-6 sm:p-9 flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Top status bar */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="status-badge">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
                  <span>
                    {isEn
                      ? "Available for full-time & freelance"
                      : "Disponible pour opportunités & missions"}
                  </span>
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 font-mono">
                  <MapPin size={12} className="text-amber-500" />
                  Dakar, Sénégal • Remote
                </span>
              </div>

              {/* Name & Headline */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.12]">
                  Mouhamadou Bamba Diagne
                </h1>
                <p className="text-base sm:text-lg font-medium text-amber-600 dark:text-amber-400 mt-1.5 font-mono">
                  {isEn
                    ? "Fullstack Software Engineer — TypeScript, Next.js & NestJS"
                    : "Développeur Fullstack — TypeScript, Next.js & NestJS"}
                </p>
              </div>

              {/* Editorial Bio with Inline Company Pills (Lee Robinson style) */}
              <div className="space-y-4 text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  {isEn ? (
                    <>
                      Passionate about software engineering and modern interface design, I build real-world production applications — with hands-on experience at{" "}
                      <a
                        href="https://xarala.co"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 mx-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-semibold text-xs align-baseline hover:border-amber-500/50 transition-colors"
                      >
                        <img src="/images/xarala.png" alt="Xarala" className="w-3.5 h-3.5 object-contain" />
                        Xarala Academy
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://primelec-services.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 mx-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-semibold text-xs align-baseline hover:border-amber-500/50 transition-colors"
                      >
                        <img src="/images/primelec.png" alt="Primelec" className="w-3.5 h-3.5 object-contain" />
                        Primelec Services
                      </a>
                      , spanning high-traffic e-learning platforms, commercial POS/inventory systems, and mobile apps.
                    </>
                  ) : (
                    <>
                      Passionné par l’ingénierie logicielle et le développement d'interfaces modernes, j'interviens sur des applications concrètes en production acquises notamment au sein de{" "}
                      <a
                        href="https://xarala.co"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 mx-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-semibold text-xs align-baseline hover:border-amber-500/50 transition-colors"
                      >
                        <img src="/images/xarala.png" alt="Xarala" className="w-3.5 h-3.5 object-contain" />
                        Xarala Academy
                      </a>{" "}
                      et{" "}
                      <a
                        href="https://primelec-services.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 mx-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-semibold text-xs align-baseline hover:border-amber-500/50 transition-colors"
                      >
                        <img src="/images/primelec.png" alt="Primelec" className="w-3.5 h-3.5 object-contain" />
                        Primelec Services
                      </a>
                      , allant de plateformes e-learning à fort trafic à des systèmes de gestion commerciale (POS, stocks) et des applications mobiles complètes.
                    </>
                  )}
                </p>

                <p>
                  {isEn ? (
                    <>
                      My approach relies on a clean, maintainable architecture built around{" "}
                      <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-white/10">TypeScript</span>,{" "}
                      <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-white/10">Next.js</span>, and{" "}
                      <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-white/10">NestJS</span>, paired with workflow automation and DevOps practices (Docker, GitLab CI).
                    </>
                  ) : (
                    <>
                      Ma démarche repose sur une architecture robuste et maintenable articulée autour de{" "}
                      <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-white/10">TypeScript</span>,{" "}
                      <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-white/10">Next.js</span> et{" "}
                      <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-white/10">NestJS</span>, tout en garantissant une expérience utilisateur ergonomique et réactive. J'y intègre également la conception d'automatisations et les fondamentaux du DevOps (Docker, GitLab CI).
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="pt-6 mt-6 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="/cv-bamba.pdf"
                  download="CV_Mouhamadou_Bamba_Diagne.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary !py-2.5 !px-4 !text-xs"
                >
                  <Download size={14} />
                  <span>{isEn ? "Download CV (PDF)" : "Télécharger mon CV"}</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary !py-2.5 !px-3.5 !text-xs font-mono"
                  title="Copier gameurbamba68@gmail.com"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {isEn ? "Email copied!" : "Email copié !"}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>gameurbamba68@gmail.com</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Bamba24"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/10 transition-colors"
                  title="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mouhamadou-bamba-diagne-59063a247/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/10 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://bamba-dev.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono font-semibold"
                  title="Blog technique bamba.dev"
                >
                  <BookOpen size={14} className="text-amber-500" />
                  <span>bamba.dev</span>
                  <ExternalLink size={11} className="opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* CARTE 2 (4 COLONNES) : PORTRAIT & MÉTRIQUES DE PRODUCTION */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="lg:col-span-4 bento-card p-5 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Portrait Frame */}
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/10 mb-4">
              <img
                src="/images/pp.png"
                alt="Mouhamadou Bamba Diagne"
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="text-xs font-mono font-semibold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                  @Bamba24
                </span>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[11px] font-semibold bg-amber-500 text-zinc-950 px-2.5 py-1 rounded-md flex items-center gap-1 hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  <span>{isEn ? "See Work" : "Voir Projets"}</span>
                  <ArrowRight size={11} />
                </button>
              </div>
            </div>

            {/* Key Impact Numbers */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200/70 dark:border-white/5">
                <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400 block">
                  {isEn ? "EdTech Impact" : "Impact EdTech"}
                </span>
                <strong className="text-lg font-extrabold text-zinc-900 dark:text-white">
                  40 000+
                </strong>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block leading-tight mt-0.5">
                  {isEn ? "Xarala learners" : "Apprenants Xarala"}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200/70 dark:border-white/5">
                <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400 block">
                  {isEn ? "SaaS & POS" : "SaaS & POS"}
                </span>
                <strong className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                  Production
                </strong>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block leading-tight mt-0.5">
                  CRM & E-learning
                </span>
              </div>
            </div>
          </motion.div>

          {/* CARTE 3 (7 COLONNES) : STACK TECHNIQUE PAR DOMAINES (STYLE BENTO) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            id="services"
            className="lg:col-span-7 bento-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Terminal size={15} className="text-amber-500" />
                <h2 className="text-sm font-mono uppercase tracking-wider font-bold text-zinc-900 dark:text-white">
                  {isEn ? "Core Engineering Stack" : "Stack Technique & Écosystème"}
                </h2>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">
                TypeScript-first
              </span>
            </div>

            <div className="space-y-4">
              {stackGroups.map((group, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 block">
                    {isEn ? group.labelEn : group.labelFr}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-white/10 hover:border-amber-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARTE 4 (5 COLONNES) : DOMAINES D'INTERVENTION */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-mono uppercase tracking-wider font-bold text-zinc-900 dark:text-white">
                {isEn ? "What I Deliver" : "Domaines d'Expertise"}
              </h2>
              <span className="text-[11px] font-mono text-emerald-500 font-semibold">
                End-to-End
              </span>
            </div>

            <div className="space-y-3.5">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-2.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-white/5"
                >
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 shrink-0 mt-0.5">
                    {cap.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-zinc-900 dark:text-white">
                      {isEn ? cap.titleEn : cap.titleFr}
                    </h3>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed mt-0.5">
                      {isEn ? cap.descEn : cap.descFr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
