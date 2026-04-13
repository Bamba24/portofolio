import { MapPin, Briefcase } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function Experience() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };

   const experiences = [
  {
  titleFr: "Stagiaire Développeur Fullstack & Mobile",
  titleEn: "Fullstack & Mobile Developer Intern",
  company: "Primelec Services",
  location: "France",
  period: "Janvier 2026 – Mars 2026",
  type: "Stage",
  descriptionFr:
    "Stage en développement fullstack JavaScript et mobile au sein de Primelec Services avec participation à des projets réels.",
  descriptionEn:
    "Internship in fullstack JavaScript and mobile development at Primelec Services, contributing to real-world projects.",
  missions: [
    "Développement d’interfaces web avec React / Next.js",
    "Participation au développement mobile avec React Native",
    "Correction de bugs et amélioration des performances",
    "Travail en équipe sur des projets réels"
  ],
  missionsEn: [
    "Frontend development using React / Next.js",
    "Participation in mobile development with React Native",
    "Bug fixing and performance improvements",
    "Team collaboration on real projects"
  ],
  stack: ["React", "Next.js", "React Native", "TypeScript"]
}, 
  {
    titleFr: "Développeur Fullstack – Agence Web",
    titleEn: "Fullstack Developer – Web Agency",
    company: "Projet Personnel",
    location: "Remote / Sénégal",
    type: "Projet",
    descriptionFr:
      "Création d’un site vitrine d’agence web visant à présenter des services digitaux avec une structure orientée conversion et une identité visuelle moderne.",
    descriptionEn:
      "Built a web agency website to showcase digital services with a conversion-focused structure and modern visual identity.",
    missions: [
      "Développement frontend avec Next.js et TailwindCSS",
      "Structuration des pages services et landing sections",
      "Optimisation des performances et du SEO",
      "Intégration d’un formulaire de contact"
    ],
    missionsEn: [
      "Frontend development using Next.js and TailwindCSS",
      "Structuring service pages and landing sections",
      "Performance and SEO optimization",
      "Contact form integration"
    ],
    stack: ["Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    titleFr: "Développeur Fullstack – Blog Personnel",
    titleEn: "Fullstack Developer – Personal Blog",
    company: "Projet Personnel",
    location: "Remote / Sénégal",
    period: "Mars 2025 – Avril 2025",
    type: "Projet",
    descriptionFr:
      "Développement d’un blog personnel optimisé pour le SEO avec gestion des articles, publication de contenu technique et mode sombre.",
    descriptionEn:
      "Developed a personal blog optimized for SEO with article management, technical content publishing, and dark mode.",
    missions: [
      "Développement frontend avec Next.js",
      "Gestion du contenu via Markdown",
      "Optimisation SEO et performances",
    ],
    missionsEn: [
      "Frontend development with Next.js",
      "Content management using Markdown",
      "SEO and performance optimization",
    ],
    stack: ["Next.js", "TailwindCSS", "Markdown", "SEO"]
  },
  {
    titleFr: "Développeur Fullstack – Application Coran",
    titleEn: "Fullstack Developer – Quran Application",
    company: "Projet Personnel",
    location: "Remote / Sénégal",
    type: "Projet",
    descriptionFr:
      "Application web de récital du Coran permettant la lecture des sourates et l’écoute audio, avec une interface simple et accessible.",
    descriptionEn:
      "Quran recital web application enabling surah reading and audio playback with a clean and accessible interface.",
    missions: [
      "Développement frontend avec Next.js et TailwindCSS",
      "Intégration d’API de récitations du Coran",
      "Gestion de la lecture audio",
    ],
    missionsEn: [
      "Frontend development with Next.js and TailwindCSS",
      "Integration of Quran recitation APIs",
      "Audio playback management",
    ],
    stack: ["Next.js", "TailwindCSS", "API Coran"]
  },
  {
    titleFr: "Développeur Fullstack – E-commerce Chaussures",
    titleEn: "Fullstack Developer – Shoes E-Commerce",
    company: "Projet Personnel",
    location: "Remote / Sénégal",
    type: "Projet",
    descriptionFr:
      "Développement d’une plateforme e-commerce de vente de chaussures avec gestion des produits, panier, commandes et base de données.",
    descriptionEn:
      "Developed a shoe e-commerce platform with product management, cart, orders, and database integration.",
    missions: [
      "Développement frontend avec Next.js et TailwindCSS",
      "Gestion de la base de données avec MySQL et Prisma",
      "Implémentation du panier et du système de commande",
      "Création d’un dashboard administrateur"
    ],
    missionsEn: [
      "Frontend development with Next.js and TailwindCSS",
      "Database management using MySQL and Prisma",
      "Shopping cart and order system implementation",
      "Admin dashboard creation"
    ],
    stack: ["Next.js", "TypeScript", "MySQL", "Prisma", "TailwindCSS"]
  },
  {
    titleFr: "Développeur Mobile – Application E-commerce",
    titleEn: "Mobile Developer – E-Commerce Mobile App",
    company: "Projet Personnel",
    location: "Remote / Sénégal",
    type: "Projet",
    descriptionFr:
      "Développement d’une application mobile iOS et Android basée sur la plateforme e-commerce web, avec React Native et Expo.",
    descriptionEn:
      "Developed an iOS and Android mobile application based on the e-commerce web platform using React Native and Expo.",
    missions: [
      "Création des écrans produits et panier",
      "Connexion à l’API backend e-commerce",
      "Gestion de l’état global avec Context API",
    ],
    missionsEn: [
      "Building product and cart screens",
      "Connecting to the e-commerce backend API",
      "Global state management with Context API",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Context API"]
  },
  {
    titleFr: "Développeur Fullstack – Portfolio Personnel",
    titleEn: "Fullstack Developer – Personal Portfolio",
    company: "Projet Personnel",
    location: "Remote / Sénégal",
    type: "Projet",
    descriptionFr:
      "Création de mon portfolio personnel afin de présenter mes projets, expériences et compétences en développement web et mobile.",
    descriptionEn:
      "Built my personal portfolio to showcase my projects, experiences, and web & mobile development skills.",
    missions: [
      "Développement frontend avec React et TailwindCSS",
      "Intégration des projets et expériences professionnelles",
      "Animations avec Framer Motion",
      "Optimisation UX et responsive design"
    ],
    missionsEn: [
      "Frontend development with React and TailwindCSS",
      "Integration of projects and professional experiences",
      "Animations using Framer Motion",
      "UX optimization and responsive design"
    ],
    stack: ["React", "TailwindCSS", "Framer Motion"]
  }
];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Titre de section minimaliste */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {langue === 'fr' ? 'Parcours & Expériences' : 'Career & Experience'}
          </h2>
          <p className="text-gray-500 text-lg italic">
            {langue === 'fr' 
              ? "Une immersion dans mes projets et mon évolution technique." 
              : "An insight into my projects and technical evolution."}
          </p>
        </div>

        <div className="relative">
          {/* Ligne verticale ultra-fine */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Point de jonction au centre */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-white border-2 border-blue-900 rounded-full -translate-x-1/2 top-1.5 z-10 hidden md:block"></div>

                {/* Contenu de l'expérience */}
                <div className="md:w-1/2">
                  <div className={`p-6 border border-slate-100 rounded-sm hover:border-blue-900 transition-colors duration-300 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {langue === 'fr' ? exp.titleFr : exp.titleEn}
                    </h3>
                    <div className={`flex items-center gap-3 text-sm text-gray-400 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <span className="flex items-center gap-1"><Briefcase size={14}/> {exp.company}</span>
                      <span className="flex items-center gap-1"><MapPin size={14}/> {exp.location}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {langue === 'fr' ? exp.descriptionFr : exp.descriptionEn}
                    </p>

                    {/* Missions simplifiées */}
                    <ul className={`text-sm text-gray-500 space-y-1 mb-6 ${
                      index % 2 === 0 ? "md:items-end" : "md:items-start"
                    }`}>
                      {(langue === 'fr' ? exp.missions : exp.missionsEn).slice(0, 5).map((m, i) => (
                        <li key={i} className="flex gap-2 opacity-80">
                          {index % 2 !== 0 && <span>•</span>}
                          {m}
                          {index % 2 === 0 && <span className="hidden md:inline">•</span>}
                        </li>
                      ))}
                    </ul>

                    {/* Stack technique discrète */}
                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      {exp.stack.map((tech, i) => (
                        <span key={i} className="text-[10px] font-bold text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Espace vide pour l'autre côté de la timeline (Desktop) */}
                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}