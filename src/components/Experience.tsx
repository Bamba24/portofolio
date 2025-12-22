import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import {motion} from "framer-motion"

export default function Experience() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };

 const itemVariants = {
  hidden: { opacity: 0, x: -20 }, // Commencer plus bas
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6 } // Animation plus simple
  },
};


  const experiences = [
  {
    titleFr: "Développeur Fullstack – Agence Web",
    titleEn: "Fullstack Developer – Web Agency",
    company: "Projet Personnel",
    location: "Remote / Sénégal",
    period: "Février 2025 – Mars 2025",
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
      "Gestion du contenu via Markdown / CMS",
      "Optimisation SEO et performances",
      "Implémentation du mode sombre"
    ],
    missionsEn: [
      "Frontend development with Next.js",
      "Content management using Markdown / CMS",
      "SEO and performance optimization",
      "Dark mode implementation"
    ],
    stack: ["Next.js", "TailwindCSS", "Markdown", "SEO"]
  },
  {
    titleFr: "Développeur Fullstack – Application Coran",
    titleEn: "Fullstack Developer – Quran Application",
    company: "Projet Personnel",
    location: "Remote / Sénégal",
    period: "Avril 2025 – Mai 2025",
    type: "Projet",
    descriptionFr:
      "Application web de récital du Coran permettant la lecture des sourates et l’écoute audio, avec une interface simple et accessible.",
    descriptionEn:
      "Quran recital web application enabling surah reading and audio playback with a clean and accessible interface.",
    missions: [
      "Développement frontend avec Next.js et TailwindCSS",
      "Intégration d’API de récitations du Coran",
      "Gestion de la lecture audio",
      "Mise en place du mode sombre"
    ],
    missionsEn: [
      "Frontend development with Next.js and TailwindCSS",
      "Integration of Quran recitation APIs",
      "Audio playback management",
      "Dark mode implementation"
    ],
    stack: ["Next.js", "TailwindCSS", "API Coran"]
  },
  {
    titleFr: "Développeur Fullstack – E-commerce Chaussures",
    titleEn: "Fullstack Developer – Shoes E-Commerce",
    company: "Projet Personnel",
    location: "Remote / Sénégal",
    period: "Mai 2025 – Juin 2025",
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
    period: "Juin 2025 – Juillet 2025",
    type: "Projet",
    descriptionFr:
      "Développement d’une application mobile iOS et Android basée sur la plateforme e-commerce web, avec React Native et Expo.",
    descriptionEn:
      "Developed an iOS and Android mobile application based on the e-commerce web platform using React Native and Expo.",
    missions: [
      "Création des écrans produits et panier",
      "Connexion à l’API backend e-commerce",
      "Gestion de l’état global avec Context API",
      "Tests sur simulateurs iOS et Android"
    ],
    missionsEn: [
      "Building product and cart screens",
      "Connecting to the e-commerce backend API",
      "Global state management with Context API",
      "Testing on iOS and Android simulators"
    ],
    stack: ["React Native", "Expo", "TypeScript", "Context API"]
  },
  {
    titleFr: "Développeur Fullstack – Portfolio Personnel",
    titleEn: "Fullstack Developer – Personal Portfolio",
    company: "Projet Personnel",
    location: "Remote / Sénégal",
    period: "Juillet 2025 – Août 2025",
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
    <section id="experience" className={`section-padding bg-white text-primary`}>
      <motion.div className="container-max"
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        viewport={{ once: true}}
        transition={{duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {langue === 'fr' ? 'Expériences Professionnelles' : 'Professional Experiences'}
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            {langue === 'fr' ? "Mes projets réalisés sont considérés comme expériences professionnelles" : "My completed projects are presented as professional experiences"}
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 border-l-4 border-primary animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full"></div>
              
              <div className="bg-gray-50  rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900  mb-2">
                      {langue === 'fr' ? exp.titleFr : exp.titleEn}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-800  mb-2">
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm ml-2">
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-800 dark:text-gray-300 mb-6">
                  {langue === 'fr' ? exp.descriptionFr : exp.descriptionEn}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900  mb-3">
                    {langue === 'fr' ? 'Missions principales :' : 'Main Responsibilities:'}
                  </h4>
                  <ul className="space-y-2">
                    {(langue === "fr" ? exp.missions : exp.missionsEn).map((mission, missionIndex) => (
                      <li key={missionIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-gray-800 ">{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900  mb-3">
                    {langue === 'fr' ? 'Technologies utilisées :' : 'Technologies used:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
