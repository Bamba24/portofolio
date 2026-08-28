import { useState, useContext } from 'react';
import { MapPin, Briefcase, ExternalLink, Calendar, Building2 } from 'lucide-react';
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
  descriptionFr: string;
  descriptionEn: string;
  missions: string[];
  missionsEn: string[];
  stack: string[];
}

export default function Experience() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const [activeTab, setActiveTab] = useState<'Tous' | 'Stages' | 'Projets'>('Tous');

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
      logoBg: "bg-blue-900 text-white",
      descriptionFr:
        "Stage en développement fullstack JavaScript et mobile au sein de Primelec Services avec participation active à des projets d'entreprises réels.",
      descriptionEn:
        "Internship in fullstack JavaScript and mobile development at Primelec Services, contributing to real-world corporate projects.",
      missions: [
        "Développement d’interfaces web dynamiques avec React & Next.js",
        "Participation au développement d'applications mobiles avec React Native",
        "Correction de bugs, optimisation des performances et refonte UI",
        "Collaboration en équipe en méthode agile sur des projets clients"
      ],
      missionsEn: [
        "Frontend web development with React & Next.js",
        "Participation in mobile application development using React Native",
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
      period: "Octobre 2025 – Décembre 2025",
      duration: "3 mois",
      type: "Stage",
      logoText: "XA",
      logoBg: "bg-emerald-700 text-white",
      descriptionFr:
        "Stage intensif en développement Fullstack et Mobile chez Xarala Academy. Réalisation d'applications web et mobiles d'apprentissage et de gestion.",
      descriptionEn:
        "Intensive Fullstack & Mobile development internship at Xarala Academy. Built web and mobile learning and management applications.",
      missions: [
        "Conception d'APIs REST avec Node.js, Express et NestJS",
        "Modélisation et gestion de bases de données avec MySQL et Prisma",
        "Création d'interfaces web réactives avec React.js et Next.js",
        "Développement d'interfaces mobiles multiplateformes avec React Native & Expo",
        "Revue de code en équipe et bonnes pratiques d'architecture"
      ],
      missionsEn: [
        "REST API design using Node.js, Express, and NestJS",
        "Database modeling and management using MySQL and Prisma",
        "Building reactive web interfaces with React.js and Next.js",
        "Cross-platform mobile UI development using React Native & Expo",
        "Peer code reviews and architectural best practices"
      ],
      stack: ["React", "Next.js", "Node.js", "NestJS", "MySQL", "Prisma", "React Native"]
    },
    {
      id: 3,
      titleFr: "Développeur Fullstack – Agence Web Digitale",
      titleEn: "Fullstack Developer – Digital Web Agency",
      company: "Projet Personnel",
      location: "Remote / Sénégal",
      type: "Projet",
      logoText: "AW",
      logoBg: "bg-slate-800 text-white",
      descriptionFr:
        "Conception d’une plateforme vitrine complète pour une agence digitale, orientée conversion et haute performance.",
      descriptionEn:
        "Built a complete showcase platform for a digital agency, conversion-focused with high performance.",
      missions: [
        "Développement frontend avec Next.js et TailwindCSS",
        "Structure modulaire des services et animations fluides",
        "Optimisation SEO et temps de chargement"
      ],
      missionsEn: [
        "Frontend development using Next.js and TailwindCSS",
        "Modular service page structure and smooth animations",
        "SEO and load speed optimization"
      ],
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"]
    },
    {
      id: 4,
      titleFr: "Développeur Fullstack – E-Commerce Chaussures",
      titleEn: "Fullstack Developer – Shoes E-Commerce",
      company: "Projet Personnel",
      location: "Remote / Sénégal",
      type: "Projet",
      logoText: "EC",
      logoBg: "bg-indigo-900 text-white",
      descriptionFr:
        "Plateforme e-commerce complète avec gestion du catalogue, panier dynamique, commandes et tableau de bord administrateur.",
      descriptionEn:
        "Comprehensive e-commerce platform with catalog management, dynamic cart, orders, and admin dashboard.",
      missions: [
        "Développement frontend avec Next.js et TailwindCSS",
        "Base de données relationnelle avec MySQL & Prisma ORM",
        "Gestion du panier et tunnel de commande"
      ],
      missionsEn: [
        "Frontend development with Next.js and TailwindCSS",
        "Relational database management with MySQL & Prisma ORM",
        "Shopping cart and checkout flow management"
      ],
      stack: ["Next.js", "TypeScript", "MySQL", "Prisma", "TailwindCSS"]
    },
    {
      id: 5,
      titleFr: "Développeur Mobile – Application E-Commerce",
      titleEn: "Mobile Developer – E-Commerce App",
      company: "Projet Personnel",
      location: "Remote / Sénégal",
      type: "Projet",
      logoText: "MB",
      logoBg: "bg-violet-800 text-white",
      descriptionFr:
        "Application mobile iOS et Android synchronisée avec la plateforme e-commerce web, développée avec React Native et Expo.",
      descriptionEn:
        "iOS and Android mobile app synchronized with the web e-commerce platform, built with React Native and Expo.",
      missions: [
        "Création des vues produits, filtres et panier mobile",
        "Connexion aux APIs REST backend",
        "Gestion d'état global avec Context API"
      ],
      missionsEn: [
        "Building product views, filters, and mobile cart",
        "Connecting to REST backend APIs",
        "Global state management with Context API"
      ],
      stack: ["React Native", "Expo", "TypeScript", "Context API"]
    }
  ];

  const filteredExperiences = experiences.filter(exp => {
    if (activeTab === 'Stages') return exp.type === 'Stage';
    if (activeTab === 'Projets') return exp.type === 'Projet';
    return true;
  });

  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section : Style jonathan-boyer.fr */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
              {isEn ? "Career & Internships" : "Parcours professionnel"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isEn ? "Experiences & Internships" : "Stages & Expériences"}
            </h2>
          </div>

          {/* Onglets de filtrage : Stages vs Projets */}
          <div className="flex gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm">
            {[
              { id: 'Tous', labelFr: 'Tous', labelEn: 'All' },
              { id: 'Stages', labelFr: 'Stages Professionnels', labelEn: 'Internships' },
              { id: 'Projets', labelFr: 'Projets', labelEn: 'Projects' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'Tous' | 'Stages' | 'Projets')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-sm ${
                  activeTab === tab.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isEn ? tab.labelEn : tab.labelFr}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des cartes d'expérience épurées */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-md p-6 sm:p-8 hover:border-blue-900/30 dark:hover:border-blue-500/30 transition-all shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  
                  {/* Entreprise & Logo */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-md font-extrabold text-sm flex items-center justify-center shadow-xs shrink-0 ${exp.logoBg}`}>
                      {exp.logoText}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          exp.type === 'Stage' 
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}>
                          {exp.type} {exp.duration && `• ${exp.duration}`}
                        </span>

                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {isEn ? exp.titleEn : exp.titleFr}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Période & Lien externe */}
                  <div className="flex sm:flex-col items-start sm:items-end justify-between gap-2 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-400">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 dark:text-blue-400 hover:underline uppercase tracking-wider"
                      >
                        <Building2 size={13} />
                        <span>{exp.company}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {isEn ? exp.descriptionEn : exp.descriptionFr}
                </p>

                {/* Missions clés */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {isEn ? "Key Missions & Impact:" : "Missions clés :"}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    {(isEn ? exp.missionsEn : exp.missions).map((mission, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-900 dark:text-blue-400 font-bold">•</span>
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack technique */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                  {exp.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-semibold rounded-sm"
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