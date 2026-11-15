import { useContext, useState } from 'react';
import { ArrowRight, ExternalLink, Github, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectType {
  id: number;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  challengeFr?: string;
  challengeEn?: string;
  solutionFr?: string;
  solutionEn?: string;
  image: string;
  imagePosition?: 'top' | 'center' | 'contain';
  category: string;
  featured?: boolean;
  technologies: string[];
  demo?: string;
  github?: string;
  featuresFr: string[];
  featuresEn: string[];
  status: string;
  statusEn: string;
}

interface ProjectsProps {
  onSelectProject?: (project: ProjectType, allProjects: ProjectType[]) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const [selectedCategory, setSelectedCategory] = useState<'Tous' | 'Phares' | 'Fullstack' | 'Web'>('Tous');
  const isEn = langue === 'en';

  const projects: ProjectType[] = [
    {
      id: 8,
      titleFr: "Gestion de stock & ventes (POS / CRM)",
      titleEn: "Stock & Sales Management (POS / CRM)",
      descriptionFr:
        "Plateforme de gestion de stock et de point de vente permettant aux commerçants de suivre leurs stocks, leurs ventes et de piloter leurs agents en temps réel. J'ai réalisé l'implémentation complète du frontend.",
      descriptionEn:
        "A stock and point-of-sale management platform that lets merchants track inventory and sales and manage their agents in real time. I built the entire frontend.",
      challengeFr: "Concevoir une interface de gestion claire et fiable pour des commerçants, avec un suivi précis des stocks et des ventes, et un déploiement reproductible.",
      challengeEn: "Design a clear and reliable management interface for merchants, with accurate stock and sales tracking and a reproducible deployment.",
      solutionFr: "Implémentation complète du frontend avec Next.js (App Router) consommant une API GraphQL via TanStack Query, tableaux de données avec TanStack Table, validation des formulaires avec Zod, état client avec Zustand, filtres synchronisés dans l'URL avec nuqs, et conteneurisation avec Docker pour le déploiement.",
      solutionEn: "Full frontend implementation with Next.js (App Router) consuming a GraphQL API through TanStack Query, data tables with TanStack Table, form validation with Zod, client state with Zustand, URL-synced filters with nuqs, and Docker containerization for deployment.",
      image: "/images/gestion-stock-crm.png",
      imagePosition: "top",
      category: "Fullstack",
      featured: true,
      technologies: ["Next.js", "GraphQL", "TanStack Query", "TanStack Table", "Zod", "Zustand", "nuqs", "TailwindCSS", "Docker"],
      demo: "https://crm2.noflai.com/",
      featuresFr: [
        "Authentification sécurisée : connexion, inscription, réinitialisation de mot de passe",
        "Suivi précis des inventaires et alertes de stock faible",
        "Enregistrement des ventes et pilotage des caisses / agents en direct",
        "Tableaux de données interactifs avec TanStack Table (tris, paginations, exports)",
        "Recherche et filtres multicritères persistés dans l'URL (nuqs)",
        "Validation stricte des formulaires côté client avec Zod & React Hook Form",
        "Conteneurisation complète avec Docker et Dockerfile multi-stage"
      ],
      featuresEn: [
        "Secure authentication: sign in, sign up, password recovery",
        "Precise inventory tracking and low-stock alerts",
        "Real-time sales logging and agent / cashier supervision",
        "Interactive tables with TanStack Table (sort, pagination, export)",
        "URL-persisted multicriteria search and filtering (nuqs)",
        "Strict client validation with Zod and React Hook Form",
        "Full containerization with Docker multi-stage build"
      ],
      status: "Terminé",
      statusEn: "Finished"
    },
    {
      id: 9,
      titleFr: "Xarala Academy — Plateforme e-learning",
      titleEn: "Xarala Academy — E-learning Platform",
      descriptionFr:
        "Contribution au développement de la plateforme Xarala, acteur majeur de la formation tech en Afrique francophone (+40 000 apprenants). Implémentation continue de nouvelles fonctionnalités sur la plateforme en production.",
      descriptionEn:
        "Contributing to Xarala, a major edtech training platform in French-speaking Africa (+40,000 learners). Ongoing implementation of production features and UI improvements.",
      challengeFr: "Faire évoluer une plateforme en production utilisée par des dizaines de milliers d'apprenants, en garantissant zéro régression et des performances optimales.",
      challengeEn: "Evolve an active production platform used by tens of thousands of learners, shipping features with zero regressions and high performance.",
      solutionFr: "Implémentation de modules complets dans la base de code Next.js existante, respect des conventions d'équipe, tests et optimisation continue de l'expérience utilisateur.",
      solutionEn: "Implementing features within the existing Next.js codebase, maintaining team standards, and continuously optimizing learner UX.",
      image: "/images/xarala-image-site.png",
      imagePosition: "top",
      category: "Web",
      featured: true,
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "GitLab CI"],
      demo: "https://www.xarala.co/",
      featuresFr: [
        "Implémentation de nouvelles fonctionnalités sur l'espace apprenant",
        "Travail direct sur une base de code en production à fort trafic (+40k apprenants)",
        "Collaboration continue en équipe selon la méthodologie agile et GitLab CI",
        "Optimisation de la réactivité et des temps de chargement"
      ],
      featuresEn: [
        "Implementation of new features in the student workspace",
        "Direct contributions to a high-traffic production codebase (40k+ learners)",
        "Agile team collaboration and GitLab CI workflows",
        "Performance and load-time optimizations"
      ],
      status: "Terminé",
      statusEn: "Finished"
    },
    {
      id: 2,
      titleFr: "bamba.dev — Blog Technique Ingénierie",
      titleEn: "bamba.dev — Software Engineering Blog",
      descriptionFr:
        "Mon blog technique bilingue (FR/EN) dédié à l'ingénierie logicielle : tutoriels approfondis, retours d'expérience sur Next.js, architecture d'APIs, bases de données, DevOps et Cloud.",
      descriptionEn:
        "My bilingual (FR/EN) software engineering blog: in-depth tutorials, hands-on insights on Next.js, API architecture, databases, DevOps, and Cloud.",
      challengeFr: "Construire un blog ultra-rapide, parfaitement indexé par Google (SEO) et partageable proprement avec des aperçus riches sur les réseaux sociaux.",
      challengeEn: "Build an ultra-fast blog with optimal Google SEO indexing and rich Open Graph / Twitter Card social share previews.",
      solutionFr: "Next.js App Router avec pré-rendu statique des articles (SSG via generateStaticParams), métadonnées dynamiques, routes internationalisées (/fr, /en) et accessibilité soignée.",
      solutionEn: "Next.js App Router with static generation (SSG), dynamic metadata generation, localized routes (/fr, /en), and accessibility compliance.",
      image: "/images/bambadev-image.png",
      imagePosition: "top",
      category: "Web",
      featured: true,
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "next-international", "Vercel"],
      demo: "https://bamba-dev.vercel.app/en/posts",
      featuresFr: [
        "Articles pré-rendus statiquement avec generateStaticParams",
        "Génération automatique des balises Open Graph et Twitter Cards par article",
        "Support bilingue complet FR / EN avec routes localisées",
        "Moteur de recherche et filtrage par tags",
        "Mode sombre natif et typographie éditoriale",
        "Conformité accessibilité (skip links, ARIA)"
      ],
      featuresEn: [
        "Statically pre-rendered articles with generateStaticParams",
        "Dynamic Open Graph and Twitter Cards per post and locale",
        "Complete bilingual FR / EN support with localized paths",
        "Fast search and tag-based filtering",
        "Native dark mode and refined typography",
        "Accessibility compliance (skip links, ARIA)"
      ],
      status: "Terminé",
      statusEn: "Finished"
    },
    {
      id: 4,
      titleFr: "Plateforme E-commerce Fullstack Next.js, Prisma & MySQL",
      titleEn: "E-Commerce Platform — Fullstack Next.js, Prisma & MySQL",
      descriptionFr:
        "Plateforme e-commerce complète développée intégralement en architecture fullstack avec Next.js (App Router, Server Components & Server Actions), connectée à une base de données relationnelle MySQL via l'ORM Prisma.",
      descriptionEn:
        "Full-fledged e-commerce platform built end-to-end with fullstack Next.js (App Router, Server Components & Server Actions), powered by Prisma ORM and a relational MySQL database.",
      challengeFr: "Concevoir une solution e-commerce 100% fullstack Next.js avec gestion synchronisée des flux d'achats, panier en temps réel et modélisation relationnelle robuste sous MySQL.",
      challengeEn: "Engineer a 100% fullstack Next.js e-commerce solution with synchronized checkout flows, real-time cart state, and robust MySQL relational modeling.",
      solutionFr: "Stack full Next.js avec Server Actions pour les mutations de données, validation typée de bout en bout avec TypeScript, modélisation relationnelle avec Prisma ORM et persistance des catalogues, commandes et utilisateurs sous MySQL.",
      solutionEn: "Full Next.js stack utilizing Server Actions for data mutations, end-to-end TypeScript validation, Prisma ORM schema modeling, and MySQL persistence for catalog, orders, and users.",
      image: "/images/e-commerce.png",
      imagePosition: "top",
      category: "Fullstack",
      featured: true,
      technologies: ["Next.js", "Prisma", "MySQL", "TypeScript", "TailwindCSS", "Server Actions"],
      featuresFr: [
        "Architecture Fullstack 100% Next.js (App Router & Server Actions)",
        "Modélisation de base de données relationnelle MySQL avec Prisma ORM",
        "Catalogue interactif avec filtres par catégorie et prix",
        "Gestion d'état du panier d'achat et tunnel de commande optimisé",
        "Dashboard d'administration pour la gestion des produits et commandes",
        "Interface responsive et performante optimisée pour la conversion"
      ],
      featuresEn: [
        "100% Next.js Fullstack Architecture (App Router & Server Actions)",
        "Relational MySQL database modeling with Prisma ORM",
        "Interactive catalog with category and price filters",
        "Real-time shopping cart state management and optimized checkout flow",
        "Admin dashboard for product and order management",
        "High-performance responsive interface optimized for conversion"
      ],
      status: "Terminé",
      statusEn: "Finished"
    },
    {
      id: 3,
      titleFr: "Application Coran (Fullstack Next.js & NestJS)",
      titleEn: "Quran Application (Fullstack Next.js & NestJS)",
      descriptionFr:
        "Application fullstack moderne dédiée à la lecture et l'écoute du Saint Coran. Le frontend est conçu avec Next.js et TypeScript pour une navigation ultra-réactive, tandis que le backend est propulsé par une API robuste sous NestJS assurant la gestion des données, des sourates et de la distribution audio.",
      descriptionEn:
        "Modern fullstack application for reading and listening to the Holy Quran. Built with a reactive Next.js / TypeScript frontend and a robust NestJS backend API powering data management, audio streaming, and reciters.",
      challengeFr: "Développer une architecture fullstack découplée avec un frontend réactif et une API backend NestJS performante gérant les flux audio continus et la structuration des sourates.",
      challengeEn: "Build a decoupled fullstack architecture with a responsive Next.js frontend and a performant NestJS backend API handling continuous audio streaming and surah datasets.",
      solutionFr: "Architecture découplée : frontend réactif développé en Next.js (SSR / SSG) avec TailwindCSS et lecteur audio persistant, connecté à une API backend structurée et modulaire sous NestJS avec TypeScript.",
      solutionEn: "Decoupled architecture: Next.js frontend (SSR / SSG) styled with TailwindCSS and persistent audio player, connected to a modular NestJS TypeScript backend API.",
      image: "/images/coran.png",
      imagePosition: "top",
      category: "Fullstack",
      technologies: ["Next.js", "NestJS", "TypeScript", "Node.js", "TailwindCSS", "REST API"],
      featuresFr: [
        "Architecture Fullstack : Frontend Next.js & Backend NestJS",
        "API REST structurée et modulaire sous NestJS",
        "Lecture complète du texte des sourates en arabe et traductions",
        "Écoute audio en continu avec lecteur persistant",
        "Recherche rapide et mise en favoris",
        "Interface responsive adaptée aux mobiles et tablettes"
      ],
      featuresEn: [
        "Fullstack Architecture: Next.js Frontend & NestJS Backend",
        "Modular and structured REST API built with NestJS",
        "Complete surah text reading with translations",
        "Continuous audio streaming with persistent player",
        "Fast search and bookmarking",
        "Responsive interface optimized for mobile and tablets"
      ],
      status: "En cours",
      statusEn: "In building"
    },
    {
      id: 10,
      titleFr: "Application Entreprise Java Spring Boot & Next.js",
      titleEn: "Enterprise App Java Spring Boot & Next.js",
      descriptionFr:
        "Application d'entreprise fullstack avec architecture découplée en cours de formation : API backend sous Java Spring Boot et interface réactive sous Next.js.",
      descriptionEn:
        "Enterprise fullstack application under training: backend API with Java Spring Boot paired with a Next.js frontend.",
      challengeFr: "Structurer une API REST d'entreprise respectant les standards de clean architecture avec persistance JPA / Hibernate.",
      challengeEn: "Structure an enterprise REST API following clean architecture principles with JPA / Hibernate persistence.",
      solutionFr: "Backend Java Spring Boot avec Spring Security, Spring Data JPA et frontend Next.js en TypeScript pour l'interaction utilisateur.",
      solutionEn: "Java Spring Boot backend with Spring Security and Spring Data JPA, connected to a Next.js TypeScript frontend.",
      image: "/images/default-project.svg",
      imagePosition: "center",
      category: "Fullstack",
      technologies: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "Docker"],
      featuresFr: [
        "API RESTful architecturée selon les principes SOLID",
        "Authentification sécurisée par JWT",
        "Gestion des entités relationnelles avec Spring Data JPA",
        "Frontend réactif Next.js avec validation typée"
      ],
      featuresEn: [
        "RESTful API following SOLID principles",
        "JWT-based secure authentication",
        "Relational entity management with Spring Data JPA",
        "Reactive Next.js frontend with typed validation"
      ],
      status: "En cours",
      statusEn: "In building"
    },
    {
      id: 11,
      titleFr: "Application Python Django & Angular",
      titleEn: "Python Django & Angular Application",
      descriptionFr:
        "Application web fullstack en cours de formation combinant le framework Python Django pour la logique métier et l'écosystème modulaire d'Angular pour l'UI.",
      descriptionEn:
        "Fullstack web app under training combining Python Django for business logic and Angular for the UI.",
      image: "/images/default-project.svg",
      imagePosition: "center",
      category: "Fullstack",
      technologies: ["Python", "Django", "Angular", "TypeScript", "PostgreSQL"],
      featuresFr: [
        "Backend développé avec Django REST Framework (DRF)",
        "Administration native et ORM Django",
        "Frontend développé sous Angular avec TypeScript",
        "Sécurisation des requêtes et tokens d'authentification"
      ],
      featuresEn: [
        "Backend built with Django REST Framework (DRF)",
        "Native Django admin and ORM integration",
        "Angular frontend with TypeScript modules",
        "Secured requests and token authentication"
      ],
      status: "En cours",
      statusEn: "In building"
    }
  ];

  const categories: Array<{ id: 'Tous' | 'Phares' | 'Fullstack' | 'Web'; labelFr: string; labelEn: string }> = [
    { id: 'Tous', labelFr: 'Tous les projets', labelEn: 'All Projects' },
    { id: 'Phares', labelFr: '★ Projets Phares', labelEn: '★ Featured Work' },
    { id: 'Fullstack', labelFr: 'Fullstack', labelEn: 'Fullstack' },
    { id: 'Web', labelFr: 'Web Frontend', labelEn: 'Web Frontend' }
  ];

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : selectedCategory === 'Phares'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="projects" 
      className="py-24 border-t border-zinc-200 dark:border-white/10 transition-colors relative"
    >
      <div className="portfolio-container">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <span className="section-tag">
              <Layers size={12} />
              {isEn ? "Curated Work & Systems" : "Réalisations & Systèmes"}
            </span>
            <h2 className="section-heading">
              {isEn ? "Featured Case Studies & Projects" : "Projets & Études de Cas"}
            </h2>
            <p className="section-desc">
              {isEn 
                ? "A curated selection of production applications, real-time client systems, and fullstack architectures." 
                : "Une sélection rigoureuse d'applications réelles en production, outils métiers et architectures fullstack."}
            </p>
          </div>

          {/* Filtres de catégorie Bento */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {isEn ? cat.labelEn : cat.labelFr}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets modernes Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="bento-card flex flex-col justify-between overflow-hidden group text-left h-full"
              >
                {/* Aperçu image avec cadrage soigné */}
                <div 
                  onClick={() => onSelectProject?.(project, projects)}
                  className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 cursor-pointer border-b border-zinc-100 dark:border-white/5"
                >
                  <img
                    src={project.image}
                    alt={isEn ? project.titleEn : project.titleFr}
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      project.imagePosition === 'top'
                        ? 'object-cover object-top'
                        : project.imagePosition === 'contain'
                        ? 'object-contain p-3'
                        : 'object-cover object-center'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 dark:bg-black/25 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Badge Statut & Catégorie */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider bg-white/90 dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-white/10 backdrop-blur-md rounded-md shadow-xs">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-md backdrop-blur-md flex items-center gap-1">
                        <Sparkles size={10} />
                        Production
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider bg-zinc-900/85 text-zinc-100 border border-white/10 backdrop-blur-md rounded-md">
                    {isEn ? project.statusEn : project.status}
                  </div>
                </div>

                {/* Corps de la carte */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Tags technologiques */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-850 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] font-mono text-zinc-400 self-center">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Titre */}
                    <h3 
                      onClick={() => onSelectProject?.(project, projects)}
                      className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors mb-2.5 cursor-pointer leading-snug"
                    >
                      {isEn ? project.titleEn : project.titleFr}
                    </h3>

                    {/* Description concise */}
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-5">
                      {isEn ? project.descriptionEn : project.descriptionFr}
                    </p>
                  </div>

                  {/* Actions au bas de la carte */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between mt-auto">
                    {/* Action "Étude de cas" */}
                    <button
                      onClick={() => onSelectProject?.(project, projects)}
                      className="text-xs font-semibold text-zinc-900 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>{isEn ? "Case Study" : "Étude de cas"}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Liens externes directs */}
                    <div className="flex items-center gap-1.5">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          title="Visiter le site en ligne"
                          className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          title="Code source GitHub"
                          className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                          <Github size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
