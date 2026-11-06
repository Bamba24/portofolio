import { useState, useContext } from 'react';
import { MapPin, ExternalLink, Calendar } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion, AnimatePresence } from "framer-motion";

export interface ExperienceItem {
  id: number;
  titleFr: string;
  titleEn: string;
  company: string;
  url?: string;
  location: string;
  period: string;
  duration?: string;
  type: 'Stage' | 'Projet';
  logoText: string;
  logoBg: string;
  logoImage?: string;
  descriptionFr: string;
  descriptionEn: string;
  missions: string[];
  missionsEn: string[];
  stack: string[];
}

export default function Experience() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const [activeTab, setActiveTab] = useState<'Tous' | 'Stages'>('Tous');

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      titleFr: "Stagiaire Développeur Fullstack & Mobile",
      titleEn: "Fullstack & Mobile Developer Intern",
      company: "Primelec Services",
      url: "https://primelec-services.com",
      location: "France / Remote",
      period: "Janvier 2026 – Mars 2026",
      duration: "3 mois",
      type: "Stage",
      logoText: "PS",
      logoBg: "bg-white dark:bg-[#1f2235]",
      logoImage: "/images/primelec.png",
      descriptionFr:
        "Stage en développement fullstack JavaScript et mobile au sein de Primelec Services avec participation active à des projets d'entreprises réels.",
      descriptionEn:
        "Internship in fullstack JavaScript and mobile development at Primelec Services, contributing to real-world corporate projects.",
      missions: [
        "Développement d’interfaces web dynamiques avec React & Next.js",
        "Participation au développement d'applications mobiles avec React Native & Expo",
        "Correction de bugs, optimisation des performances et refonte UI",
        "Collaboration en équipe en méthode agile sur des projets clients"
      ],
      missionsEn: [
        "Frontend web development with React & Next.js",
        "Participation in mobile application development using React Native & Expo",
        "Bug fixing, performance optimization, and UI refactoring",
        "Agile team collaboration on live client projects"
      ],
      stack: ["React", "Next.js", "React Native", "TypeScript", "TailwindCSS"]
    },
    {
      id: 2,
      titleFr: "Stagiaire Développeur Web & Mobile Fullstack",
      titleEn: "Web & Mobile Fullstack Developer Intern",
      company: "Xarala Academy",
      url: "https://xarala.co",
      location: "Dakar / Remote, Sénégal",
      period: "juin 2026 – octobre 2026",
      duration: "4 mois",
      type: "Stage",
      logoText: "XA",
      logoBg: "bg-white dark:bg-[#1f2235]",
      logoImage: "/images/xarala.png",
      descriptionFr:
        "Immersion complète au sein de l'équipe technique de Xarala Academy, acteur majeur de l'EdTech en Afrique de l'Ouest (plus de 40 000 apprenants).",
      descriptionEn:
        "Full technical immersion within Xarala Academy's engineering team, a leading EdTech platform in West Africa (40,000+ learners).",
      missions: [
        "Développement et maintenance d'applications web Next.js / TypeScript en production",
        "Création de modules pour la plateforme e-learning et l'espace étudiant",
        "Conception d'APIs REST avec Node.js, NestJS et Prisma ORM",
        "Collaboration continue sur Git / GitHub en méthodologie agile Scrum"
      ],
      missionsEn: [
        "Development and maintenance of production Next.js / TypeScript web applications",
        "Building e-learning student platform modules",
        "Designing REST APIs with Node.js, NestJS, and Prisma ORM",
        "Continuous Git / GitHub collaboration following agile Scrum sprints"
      ],
      stack: ["Next.js", "React", "Python", "Graphql", "TypeScript", "PostgreSql", "zod", "zustand", "tanstackQuery"]
    }
  ];

  const filtered = activeTab === 'Tous'
    ? experiences
    : experiences.filter(e => e.type === 'Stage');

  return (
    <section 
      id="experience" 
      className="py-24 bg-[#f8fafc] dark:bg-[#1f2235] text-slate-900 dark:text-white border-t border-slate-200 dark:border-[#ffc576]/15 relative transition-colors duration-300"
    >
      <div className="boyer-container">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div>
            <span className="section__top-title">
              {isEn ? "Career & Track Record" : "Mon parcours"}
            </span>
            <h2 className="section__title !mb-2">
              {isEn ? "Work Experience" : "Expériences professionnelles"}
            </h2>
            <p className="text-slate-600 dark:text-[#9899a8] text-base max-w-xl">
              {isEn
                ? "Hands-on engineering experience on live applications and tech platforms."
                : "Expériences concrètes acquises en agence et sur des plateformes à fort impact."}
            </p>
          </div>

          {/* Onglets Filtre */}
          <div className="flex items-center gap-2 self-start md:self-end">
            {(['Tous', 'Stages'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#d97706] text-white dark:bg-[#ffc576] dark:text-[#1f2235] font-bold shadow-xs"
                    : "bg-white dark:bg-[#313552] text-slate-600 dark:text-[#9899a8] hover:text-[#d97706] dark:hover:text-[#ffc576] border border-slate-200 dark:border-[#ffc576]/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* TIMELINE / CARTES D'EXPÉRIENCE */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="boyer-card p-8 sm:p-10 text-left border border-slate-200 dark:border-[#ffc576]/25 hover:border-[#d97706] dark:hover:border-[#ffc576] transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                  
                  {/* Titre & Entreprise */}
                  <div className="flex items-start gap-4">
                    {/* LOGO ENTREPRISE REEL */}
                    <div className="w-14 h-14 rounded-xs bg-white dark:bg-[#1f2235] border border-slate-200 dark:border-[#ffc576]/40 flex items-center justify-center shrink-0 p-2 overflow-hidden shadow-xs">
                      {exp.logoImage ? (
                        <img
                          src={exp.logoImage}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="font-serif font-bold text-[#b45309] dark:text-[#ffc576] text-base">
                          {exp.logoText}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        {isEn ? exp.titleEn : exp.titleFr}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[#b45309] dark:text-[#ffc576]">
                        {exp.url ? (
                          <a 
                            href={exp.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="font-semibold hover:underline inline-flex items-center gap-1"
                          >
                            <span>{exp.company}</span>
                            <ExternalLink size={13} />
                          </a>
                        ) : (
                          <span className="font-semibold">{exp.company}</span>
                        )}
                        <span className="text-slate-300 dark:text-white/20">•</span>
                        <span className="text-slate-500 dark:text-[#9899a8] flex items-center gap-1">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Période / Badge */}
                  <div className="flex items-center gap-3 self-start lg:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-[#1f2235] text-xs font-semibold text-[#b45309] dark:text-[#ffc576] border border-slate-200 dark:border-[#ffc576]/30 rounded-xs">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                  </div>

                </div>

                {/* Description */}
                <p className="text-base text-slate-600 dark:text-[#cbd5e1] leading-relaxed mb-6">
                  {isEn ? exp.descriptionEn : exp.descriptionFr}
                </p>

                {/* Missions */}
                <div className="space-y-2.5 mb-8 pl-1">
                  {(isEn ? exp.missionsEn : exp.missions).map((mission, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-3">
                      <span className="text-[#d97706] dark:text-[#ffc576] font-bold text-sm leading-relaxed">•</span>
                      <span className="text-sm text-slate-600 dark:text-[#9899a8] leading-relaxed">
                        {mission}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
                  {exp.stack.map((tech, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-slate-100 dark:bg-[#1f2235] text-[#b45309] dark:text-[#ffc576] border border-slate-200 dark:border-[#ffc576]/20 rounded-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
