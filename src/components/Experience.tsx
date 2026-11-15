import { useState, useContext } from 'react';
import { MapPin, ExternalLink, Calendar, Briefcase } from 'lucide-react';
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
      logoBg: "bg-white dark:bg-zinc-900",
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
      period: "Juin 2026 – Octobre 2026",
      duration: "5 mois",
      type: "Stage",
      logoText: "XA",
      logoBg: "bg-white dark:bg-zinc-900",
      logoImage: "/images/xarala.png",
      descriptionFr:
        "Immersion complète au sein de l'équipe technique de Xarala Academy, avec participation active sur des applications concrètes en production dont la plateforme e-learning et le CRM de gestion commerciale.",
      descriptionEn:
        "Full technical immersion within Xarala Academy's engineering team, actively contributing to production applications including the e-learning platform and the business management CRM.",
      missions: [
        "Développement frontend de l'application CRM de gestion de stock et de ventes (POS) avec Next.js, GraphQL, TanStack Query, Zustand et Zod",
        "Contribution au développement de nouvelles fonctionnalités et amélioration de l'UI sur la plateforme e-learning Xarala Academy",
        "Collaboration d'équipe en méthodologie agile Scrum, revues de code et intégration continue via GitLab",
        "Intégration et consommation d'APIs sécurisées avec TypeScript, validation des données et requêtes GraphQL / REST"
      ],
      missionsEn: [
        "Frontend development for the Stock & Sales Management CRM (POS) using Next.js, GraphQL, TanStack Query, Zustand, and Zod",
        "Feature development and UI improvements on the production Xarala Academy e-learning platform",
        "Agile Scrum team collaboration, peer code reviews, and CI workflows on GitLab",
        "Secure API integration and data handling with TypeScript, schema validation, and GraphQL / REST endpoints"
      ],
      stack: ["Next.js", "React", "TypeScript", "Python", "GraphQL", "PostgreSQL", "Zod", "Zustand", "TanStack Query", "GitLab"]
    }
  ];

  const filtered = activeTab === 'Tous'
    ? experiences
    : experiences.filter(e => e.type === 'Stage');

  return (
    <section 
      id="experience" 
      className="py-24 border-t border-zinc-200 dark:border-white/10 transition-colors"
    >
      <div className="portfolio-container">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <span className="section-tag">
              <Briefcase size={12} />
              {isEn ? "Career & Track Record" : "Mon parcours"}
            </span>
            <h2 className="section-heading">
              {isEn ? "Work Experience" : "Expériences professionnelles"}
            </h2>
            <p className="section-desc">
              {isEn
                ? "Hands-on engineering experience on live applications, production SaaS, and tech platforms."
                : "Expériences concrètes acquises en agence et sur des plateformes SaaS en production."}
            </p>
          </div>

          {/* Onglets Filtre */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-white/10 self-start md:self-end">
            {(['Tous', 'Stages'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-white dark:bg-[#18181b] text-zinc-900 dark:text-white shadow-xs border border-zinc-200/80 dark:border-white/10"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* TIMELINE / CARTES D'EXPÉRIENCE BENTO */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bento-card p-6 sm:p-8 text-left"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  
                  {/* Titre & Entreprise */}
                  <div className="flex items-start gap-4">
                    {/* LOGO ENTREPRISE REEL */}
                    <div className="w-12 h-12 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center justify-center shrink-0 p-2 overflow-hidden shadow-xs">
                      {exp.logoImage ? (
                        <img
                          src={exp.logoImage}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="font-bold text-amber-500 dark:text-amber-400 text-sm">
                          {exp.logoText}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                        {isEn ? exp.titleEn : exp.titleFr}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {exp.url ? (
                          <a 
                            href={exp.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="font-medium hover:text-zinc-900 dark:hover:text-white hover:underline inline-flex items-center gap-1"
                          >
                            <span>{exp.company}</span>
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="font-medium text-zinc-900 dark:text-white">{exp.company}</span>
                        )}
                        <span>•</span>
                        <span className="flex items-center gap-1 text-xs">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Période / Badge */}
                  <div className="self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 dark:bg-zinc-800/60 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 rounded-full font-mono">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>

                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                  {isEn ? exp.descriptionEn : exp.descriptionFr}
                </p>

                {/* Missions */}
                <div className="space-y-2 mb-6">
                  {(isEn ? exp.missionsEn : exp.missions).map((mission, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2.5">
                      <span className="text-amber-500 dark:text-amber-400 font-bold text-sm leading-relaxed">•</span>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {mission}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex flex-wrap gap-1.5">
                  {exp.stack.map((tech, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-semibold px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5 rounded-md font-mono"
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
