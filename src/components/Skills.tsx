import { Globe, Server, Smartphone, Cpu, Layers } from 'lucide-react';
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
      icon: <Server size={24} className="text-amber-500 dark:text-amber-400" />,
      titleFr: "Backend Node.js, Express & NestJS",
      titleEn: "Backend Node.js, Express & NestJS",
      descriptionFr:
        "Conception d'APIs REST robustes, sécurisées et bien documentées. Modélisation de schémas relationnels (PostgreSQL, MySQL, Prisma), gestion des autorisations et clean architecture modulaire.",
      descriptionEn:
        "Designing robust, secure, and documented REST APIs. Relational schema modeling (PostgreSQL, MySQL, Prisma), auth flows, and modular clean architecture.",
      tags: ["Node.js", "Express.js", "NestJS", "Prisma", "PostgreSQL", "MySQL"]
    },
    {
      id: "frontend",
      icon: <Globe size={24} className="text-amber-500 dark:text-amber-400" />,
      titleFr: "Frontend React & Next.js",
      titleEn: "Frontend React & Next.js",
      descriptionFr:
        "Création d'applications web modernes et dynamiques avec Next.js (App Router) et React. Maîtrise de TypeScript, TailwindCSS, TanStack Query, validation Zod, requêtes GraphQL et optimisation SEO.",
      descriptionEn:
        "Building modern dynamic web apps with Next.js (App Router) and React. Advanced TypeScript, TailwindCSS, TanStack Query, Zod validation, GraphQL queries, and SEO optimization.",
      tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "TanStack Query", "Zod", "GraphQL"]
    },
    {
      id: "mobile",
      icon: <Smartphone size={24} className="text-amber-500 dark:text-amber-400" />,
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
      icon: <Cpu size={24} className="text-amber-500 dark:text-amber-400" />,
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
      className="py-24 border-t border-zinc-200 dark:border-white/10 transition-colors"
    >
      <div className="portfolio-container">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="text-left mb-12">
          <span className="section-tag">
            <Layers size={12} />
            {isEn ? "Engineering Capabilities" : "Mes domaines d'expertise"}
          </span>
          <h2 className="section-heading">
            {isEn ? "Technical Stack & Services" : "Compétences & Services"}
          </h2>
          <p className="section-desc">
            {isEn
              ? "From architecture design to production release, I provide end-to-end fullstack engineering for modern applications."
              : "De la conception architecturale à la mise en production, j'accompagne vos projets web et mobiles avec rigueur et performance."}
          </p>
        </div>

        {/* GRILLE DES 4 SERVICES BENTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bento-card p-7 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="mb-5 inline-flex p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 text-amber-500 dark:text-amber-400 group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                  {isEn ? service.titleEn : service.titleFr}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-6">
                  {isEn ? service.descriptionEn : service.descriptionFr}
                </p>
              </div>

              {/* Tags technologiques */}
              <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex flex-wrap gap-1.5">
                {service.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-semibold px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5 rounded-md font-mono"
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
