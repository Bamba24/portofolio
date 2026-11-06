import { Globe, Server, Smartphone, Cpu } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function Skills() {
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? "fr";
  const isEn = langue === 'en';

  const services = [
    {
      id: "backend",
      icon: <Server size={34} className="text-[#d97706] dark:text-[#ffc576]" />,
      titleFr: "Backend Node.js, express.js et Nest.js",
      titleEn: "Backend Node.js, express.js and Nest.js",
      descriptionFr:
        "Conception d'APIs REST robustes, sécurisées et bien documentées. Modélisation de schémas de données relationnels (PostgreSQL, MySQL, Prisma), gestion des autorisations et clean architecture.",
      descriptionEn:
        "Designing robust, secure, and documented REST APIs. Relational database modeling (PostgreSQL, MySQL, Prisma), authentication flows, and clean architecture.",
      tags: ["Node.js", "Express.js", "NestJS", "Prisma", "PostgreSQL", "MySQL"]
    },
    {
      id: "frontend",
      icon: <Globe size={34} className="text-[#d97706] dark:text-[#ffc576]" />,
      titleFr: "Frontend React & Next.js",
      titleEn: "Frontend React & Next.js",
      descriptionFr:
        "Création d'applications web modernes et dynamiques avec Next.js (App Router) et React. Maîtrise de TypeScript, TailwindCSS, TanStack Query, gestion d'état et optimisation SEO poussée.",
      descriptionEn:
        "Building modern dynamic web apps with Next.js (App Router) and React. Advanced TypeScript, TailwindCSS, TanStack Query, client/server state, and in-depth SEO optimization.",
      tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "TanStack Query", "Zod", "GraphQL"]
    },
    {
      id: "mobile",
      icon: <Smartphone size={34} className="text-[#d97706] dark:text-[#ffc576]" />,
      titleFr: "Développement Mobile React Native & Expo",
      titleEn: "Mobile Development React Native & Expo",
      descriptionFr:
        "Développement d'applications mobiles multiplateformes pour Android et iOS. Expérience utilisateur native, intégration d'APIs distantes, animations fluides et gestion des flux hors-ligne.",
      descriptionEn:
        "Cross-platform mobile apps for Android and iOS using React Native & Expo. Fluid native-feeling UI, remote API integration, and offline-capable data workflows.",
      tags: ["React Native", "Expo", "React Navigation", "Context API", "Mobile UX"]
    },
    {
      id: "devops",
      icon: <Cpu size={34} className="text-[#d97706] dark:text-[#ffc576]" />,
      titleFr: "DevOps, Docker & Déploiement Cloud",
      titleEn: "DevOps, Docker & Cloud Deployment",
      descriptionFr:
        "Conteneurisation d'environnements avec Docker et Docker Compose. Gestion de versions et pipelines avec GitLab et GitHub, automatisation de tâches et déploiement continu sur plateformes cloud (Vercel, Railway, VPS).",
      descriptionEn:
        "Containerizing environments with Docker and Docker Compose. Version control and pipelines with GitLab and GitHub, workflow automation, and continuous deployment across cloud platforms (Vercel, Railway, VPS).",
      tags: ["Docker", "GitLab", "GitHub", "Automatisation", "Vercel", "Railway", "Linux / Bash", "CI/CD"]
    }
  ];

 

  return (
    <section 
      id="services" 
      className="py-24 bg-slate-100/70 dark:bg-[#313552] text-slate-900 dark:text-white border-t border-slate-200 dark:border-[#ffc576]/15 relative transition-colors duration-300"
    >
      <div className="boyer-container">
        
        {/* EN-TÊTE EXACT JONATHAN BOYER : MES COMPÉTENCES -> SERVICES */}
        <div className="text-left mb-16">
          <span className="section__top-title">
            {isEn ? "My Skills" : "Mes compétences"}
          </span>
          <h2 className="section__title">
            {isEn ? "Services & Solutions" : "Services"}
          </h2>
          <p className="text-slate-600 dark:text-[#cbd5e1] max-w-2xl text-base sm:text-lg">
            {isEn
              ? "From architecture design to production release, I provide end-to-end fullstack development for modern applications."
              : "De la conception architecturale à la mise en ligne, j'accompagne vos projets web et mobiles avec un haut niveau d'exigence technique."}
          </p>
        </div>

        {/* GRILLE DES 4 SERVICES STYLE JONATHAN BOYER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-slate-200 dark:border-[#ffc576]/30 bg-white dark:bg-[#1f2235]/60 hover:bg-white dark:hover:bg-[#1f2235] hover:border-[#d97706] dark:hover:border-[#ffc576] transition-all duration-300 rounded-sm text-left flex flex-col justify-between group shadow-sm dark:shadow-lg"
            >
              <div>
                <div className="mb-6 inline-flex p-3 rounded-xs border border-slate-200 dark:border-[#ffc576]/30 bg-slate-50 dark:bg-[#313552] group-hover:border-[#d97706] dark:group-hover:border-[#ffc576] group-hover:scale-105 transition-all">
                  {service.icon}
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#b45309] dark:group-hover:text-[#ffc576] transition-colors leading-snug">
                  {isEn ? service.titleEn : service.titleFr}
                </h3>

                <p className="text-slate-600 dark:text-[#9899a8] leading-relaxed text-sm sm:text-base mb-6">
                  {isEn ? service.descriptionEn : service.descriptionFr}
                </p>
              </div>

              {/* Tags technologiques */}
              <div className="pt-4 border-t border-slate-100 dark:border-[#ffc576]/15 flex flex-wrap gap-2">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-slate-50 dark:bg-[#313552] text-[#b45309] dark:text-[#ffc576] border border-slate-200 dark:border-[#ffc576]/20 rounded-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
