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
      titleFr: 'Développeur Fullstack - Projet E-Commerce',
      titleEn: 'Fullstack Developer - E-Commerce Project',
      company: 'Projet Personnel',
      location: 'Remote / Sénégal',
      period: 'Mars 2025 - Avril 2025',
      type: 'Projet',
      descriptionFr: 'Développement d’une plateforme de vente de chaussures avec Next.js, MySQL, TypeScript et Prisma.',
      descriptionEn: 'Developed a shoe e-commerce platform with Next.js, MySQL, TypeScript, and Prisma.',
      missions: [
        'Développement frontend avec Next.js et TailwindCSS',
        'Gestion de la base de données avec MySQL et Prisma',
        'Intégration des fonctionnalités de panier et commande',
        'Gestion de l’authentification et rôles utilisateurs'
      ],
      missionsEn: [
        'Frontend development with Next.js and TailwindCSS',
        'Database management with MySQL and Prisma',
        'Integration of shopping cart and ordering features',
        'Authentication management and user roles'
      ],
      stack: ['Next.js', 'TypeScript', 'MySQL', 'Prisma', 'TailwindCSS', 'Stripe']
    },
    {
      titleFr: 'Développeur Mobile - Version Mobile E-Commerce',
      titleEn: 'Mobile Developer - E-Commerce Mobile App',
      company: 'Projet Personnel',
      location: 'Remote / Sénégal',
      period: 'Avril 2025 - Mai 2025',
      type: 'Projet',
      descriptionFr: 'Application mobile basée sur le projet e-commerce web pour iOS et Android avec React Native et Expo.',
      descriptionEn: 'Mobile app based on the e-commerce web project for iOS & Android using React Native and Expo.',
      missions: [
        'Développement d’écrans produits et panier',
        'Connexion à l’API backend du site e-commerce',
        'Gestion de l’état global avec Context API',
        'Test et déploiement sur simulateurs iOS et Android'
      ],
      missionsEn: [
        'Developing product and shopping cart screens',
        "Connecting to the e-commerce site's backend API",
        'Managing global state with Context API',
        'Testing and deployment on iOS and Android simulators'
      ],
      stack: ['React Native', 'Expo', 'TypeScript', 'Axios', 'Context API']
    },
    {
      titleFr: 'Développeur Fullstack - Projet Recital Coran',
      titleEn: 'Fullstack Developer - Quran Recital Project',
      company: 'Projet Personnel',
      location: 'Remote / Sénégal',
      period: 'Mai 2025 - Juin 2025',
      type: 'Projet',
      descriptionFr: 'Application web de récital du Coran avec Next.js et NestJS, gestion des récitateurs et sourates.',
      descriptionEn: 'Quran recital web app with Next.js and NestJS, managing reciters and surahs.',
      missions: [
        'Création d’API avec NestJS et TypeORM',
        'Développement frontend avec Next.js et TailwindCSS',
        'Gestion des médias audio et affichage des récitateurs',
        'Implémentation de l’authentification et rôles admin/utilisateur'
      ],
      missionsEn: [
        'API Creation with NestJS and TypeORM',
        'Frontend Development with Next.js and TailwindCSS',
        'Audio Media Management and Reciter Display',
        'Authentication Implementation and Admin/User Roles'
      ],
      stack: ['Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'TailwindCSS']
    },
    {
      titleFr: 'Développeur Fullstack - Blog Personnel',
      titleEn: 'Fullstack Developer - Personal Blog',
      company: 'Projet Personnel',
      location: 'Remote / Sénégal',
      period: 'Juin 2025 - Juillet 2025',
      type: 'Projet',
      descriptionFr: 'Développement d’un blog avec Next.js et NestJS, intégration CMS et gestion des articles.',
      descriptionEn: 'Developed a blog with Next.js and NestJS, CMS integration and article management.',
      missions: [
        'Création d’API backend pour gestion articles et commentaires',
        'Développement frontend responsive avec Next.js',
        'Intégration d’un CMS pour publication d’articles',
        'Optimisation SEO et performances'
      ],
      missionsEn: [
        'Creation of a backend API for article and comment management',
        'Responsive frontend development with Next.js',
        'Integration of a CMS for article publishing',
        'SEO and performance optimization'
      ],
      stack: ['Next.js', 'NestJS', 'TypeORM', 'TailwindCSS', 'SEO']
    },
    {
      titleFr: 'Développeur Fullstack - Portfolio Personnel',
      titleEn: 'Fullstack Developer - Personal Portfolio',
      company: 'Projet Personnel',
      location: 'Remote / Sénégal',
      period: 'Juillet 2025 - Août 2025',
      type: 'Projet',
      descriptionFr: 'Création de mon portfolio personnel pour présenter mes projets et compétences en développement.',
      descriptionEn: 'Created my personal portfolio to showcase my projects and development skills.',
      missions: [
        'Développement frontend avec Next.js et TailwindCSS',
        'Intégration des projets et expériences professionnelles',
        'Gestion du thème clair/sombre et responsive design',
        'Optimisation des animations et UX'
      ],
      missionsEn: [
        'Frontend development with Next.js and TailwindCSS',
        'Project integration and professional experiences',
        'Light/dark theme management and responsive design',
        'Animation and UX optimization'
      ],
      stack: ['Next.js', 'TailwindCSS', 'TypeScript', 'React', 'Framer Motion']
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                      {langue === 'fr' ? exp.titleFr : exp.titleEn}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-2">
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
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {langue === 'fr' ? exp.descriptionFr : exp.descriptionEn}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-50 mb-3">
                    {langue === 'fr' ? 'Missions principales :' : 'Main Responsibilities:'}
                  </h4>
                  <ul className="space-y-2">
                    {(langue === "fr" ? exp.missions : exp.missionsEn).map((mission, missionIndex) => (
                      <li key={missionIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-50 mb-3">
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
