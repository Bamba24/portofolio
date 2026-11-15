import { useContext } from 'react';
import { ArrowRight, ExternalLink, Github, Sparkles, Layers, CheckCircle2, Globe, Terminal } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

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
  const isEn = langue === 'en';

  const projects: ProjectType[] = [
    {
      id: 8,
      titleFr: "Gestion de stock & ventes (POS / CRM) — Refonte Frontend Next.js",
      titleEn: "Stock & Sales Management (POS / CRM) — Next.js Frontend Redesign",
      descriptionFr:
        "Refonte et modernisation complète du frontend d'un CRM de gestion de stock et de point de vente. Initialement conçu en Python Django avec des templates HTML classiques, l'objectif était de migrer vers une architecture frontend moderne sous Next.js et de la connecter au backend existant.",
      descriptionEn:
        "Complete frontend redesign and modernization of a stock and point-of-sale CRM. Originally built with Python Django and server-rendered HTML templates, the goal was to migrate to a modern Next.js frontend architecture and connect it to the existing backend.",
      challengeFr: "Passer d'une application monolithique Python/Django basée sur des templates HTML à une interface frontend Next.js découplée, rapide et ergonomique, tout en assurant la liaison complète avec le backend.",
      challengeEn: "Transition from a monolithic Python/Django application using HTML templates to a fast, decoupled Next.js frontend while ensuring seamless integration with the backend.",
      solutionFr: "Refonte complète de l'interface sous Next.js (App Router) connectée à l'API backend Python/Django via TanStack Query, tableaux de données dynamiques avec TanStack Table, gestion d'état avec Zustand, validation stricte avec Zod, filtres synchronisés dans l'URL avec nuqs et conteneurisation Docker.",
      solutionEn: "Complete UI rewrite with Next.js (App Router) connected to the Python/Django backend API via TanStack Query, dynamic data tables with TanStack Table, client state with Zustand, strict validation with Zod, URL-synced filters with nuqs, and Docker containerization.",
      image: "/images/gestion-stock-crm.png",
      imagePosition: "contain",
      category: "Web Frontend",
      featured: true,
      technologies: ["Next.js", "TypeScript", "TanStack Query", "TanStack Table", "Zustand", "Zod", "nuqs", "TailwindCSS", "Docker"],
      demo: "https://crm2.noflai.com/",
      featuresFr: [
        "Migration de templates HTML Django/Python vers une architecture moderne Next.js (App Router)",
        "Liaison complète avec le backend et synchronisation des données via TanStack Query",
        "Suivi précis des stocks, alertes de seuil et enregistrement des ventes (POS)",
        "Tableaux de données avancés avec TanStack Table (tris, paginations, filtres URL nuqs)",
        "Validation stricte des formulaires avec Zod et gestion d'état client avec Zustand",
        "Conteneurisation avec Docker pour un déploiement reproductible"
      ],
      featuresEn: [
        "Migration from Django/Python HTML templates to a modern Next.js (App Router) frontend",
        "Full backend integration and asynchronous data synchronization via TanStack Query",
        "Inventory tracking, low-stock alerts, and point-of-sale (POS) workflows",
        "Advanced data tables with TanStack Table (sorting, pagination, nuqs URL filters)",
        "Strict form validation with Zod and client state management with Zustand",
        "Docker containerization for reproducible deployment"
      ],
      status: "Terminé",
      statusEn: "Completed"
    },
    {
      id: 9,
      titleFr: "Xarala Academy — Plateforme e-learning (+20 000 apprenants)",
      titleEn: "Xarala Academy — E-learning Platform (20,000+ learners)",
      descriptionFr:
        "Contribution au développement de la plateforme Xarala Academy, acteur majeur de la formation tech en Afrique francophone (plus de 20 000 apprenants). Implémentation continue de nouvelles fonctionnalités et gestion de données complexes en production.",
      descriptionEn:
        "Contributing to Xarala Academy, a major EdTech platform in French-speaking Africa (20,000+ learners). Ongoing implementation of production features and complex data management.",
      challengeFr: "Faire évoluer une plateforme e-learning en production utilisée par plus de 20 000 apprenants, en garantissant zéro régression, une gestion d'état fluide et des performances optimales.",
      challengeEn: "Evolve an active production e-learning platform used by over 20,000 learners, shipping features with zero regressions, smooth state management, and high performance.",
      solutionFr: "Développement et intégration de modules sous Next.js et TypeScript, consommation d'API GraphQL, gestion d'état avec Redux et TanStack Query, tableaux complexes avec TanStack Table et intégration continue via GitLab CI.",
      solutionEn: "Developing and integrating modules with Next.js and TypeScript, consuming GraphQL APIs, managing state with Redux and TanStack Query, rendering data grids with TanStack Table, and deploying via GitLab CI.",
      image: "/images/xarala-image-site.png",
      imagePosition: "contain",
      category: "Web",
      featured: true,
      technologies: ["Next.js", "React", "TypeScript", "GraphQL", "Redux", "TanStack Query", "TanStack Table", "TailwindCSS", "GitLab CI"],
      demo: "https://www.xarala.co/",
      featuresFr: [
        "Développement de fonctionnalités sur une plateforme en production (+20 000 apprenants)",
        "Intégration de requêtes GraphQL et gestion du cache serveur avec TanStack Query",
        "Gestion d'état global avec Redux et tableaux interactifs avec TanStack Table",
        "Collaboration agile Scrum, revues de code et pipelines CI/CD sur GitLab"
      ],
      featuresEn: [
        "Feature development on a live production platform (20,000+ learners)",
        "GraphQL API integration and server-cache synchronization with TanStack Query",
        "Global state management with Redux and interactive data grids with TanStack Table",
        "Agile Scrum collaboration, peer code reviews, and GitLab CI/CD workflows"
      ],
      status: "Production",
      statusEn: "Production"
    },
    {
      id: 3,
      titleFr: "Application Coran (Fullstack Next.js & NestJS)",
      titleEn: "Quran Application (Fullstack Next.js & NestJS)",
      descriptionFr:
        "Application fullstack moderne dédiée à la lecture et l'écoute du Saint Coran. Le frontend est conçu avec Next.js et TypeScript pour une navigation ultra-réactive, tandis que le backend est propulsé par une API robuste sous NestJS assurant la gestion des sourates et du streaming audio.",
      descriptionEn:
        "Modern fullstack application for reading and listening to the Holy Quran. Built with a reactive Next.js / TypeScript frontend and a robust NestJS backend API powering surah datasets and audio streaming.",
      challengeFr: "Développer une architecture fullstack découplée avec un frontend réactif et une API backend NestJS performante gérant les flux audio continus et la structuration des sourates.",
      challengeEn: "Build a decoupled fullstack architecture with a responsive Next.js frontend and a performant NestJS backend API handling continuous audio streaming and surah datasets.",
      solutionFr: "Architecture découplée complète : frontend réactif développé en Next.js (SSR / SSG) avec TailwindCSS et lecteur audio persistant, connecté à une API backend structurée et modulaire sous NestJS avec TypeScript.",
      solutionEn: "Full decoupled architecture: Next.js frontend (SSR / SSG) styled with TailwindCSS and persistent audio player, connected to a modular NestJS TypeScript backend API.",
      image: "/images/coran.png",
      imagePosition: "contain",
      category: "Fullstack",
      featured: true,
      technologies: ["Next.js", "NestJS", "TypeScript", "Node.js", "TailwindCSS", "REST API"],
      featuresFr: [
        "Architecture Fullstack terminée : Frontend Next.js & Backend NestJS",
        "API REST structurée et modulaire sous NestJS",
        "Lecture complète du texte des sourates en arabe et traductions",
        "Écoute audio en continu avec lecteur persistant",
        "Recherche rapide, filtres et mise en favoris",
        "Interface responsive adaptée aux mobiles, tablettes et desktop"
      ],
      featuresEn: [
        "Completed Fullstack Architecture: Next.js Frontend & NestJS Backend",
        "Modular and structured REST API built with NestJS",
        "Complete surah text reading with translations",
        "Continuous audio streaming with persistent player",
        "Fast search, filters, and bookmarking",
        "Responsive interface optimized for mobile, tablet, and desktop"
      ],
      status: "Terminé",
      statusEn: "Completed"
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
      imagePosition: "contain",
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
      status: "Production",
      statusEn: "Production"
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
      imagePosition: "contain",
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
      statusEn: "Completed"
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
      statusEn: "In progress"
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
      statusEn: "In progress"
    }
  ];

  const primarySpotlight = projects[0]; // POS / CRM
  const secondarySpotlights = projects.slice(1, 5); // Xarala, Coran, bamba.dev, E-commerce (Grille 2x2)
  const labProjects = projects.slice(5); // Spring Boot, Django (En cours de formation)

  return (
    <section
      id="projects"
      className="py-20 border-t border-zinc-200 dark:border-white/10 transition-colors relative"
    >
      <div className="portfolio-container">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <span className="section-tag">
              <Layers size={12} />
              {isEn ? "Featured Case Studies" : "Études de Cas & Réalisations"}
            </span>
            <h2 className="section-heading">
              {isEn ? "Selected Engineering Work" : "Systèmes Réalisés & Architecture"}
            </h2>
            <p className="section-desc">
              {isEn
                ? "Production applications, frontend migrations, and fullstack systems built with modern engineering standards."
                : "Applications en production, refontes d'interfaces modernes et architectures fullstack complètes."}
            </p>
          </div>
        </div>

        {/* SPOTLIGHT #1 : GRANDE CARTE HORIZONTALE ASYMÉTRIQUE (CRM & POS) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card overflow-hidden mb-6 text-left group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Aperçu avec barre de navigateur style Linear / Raycast — Image entière sans rognage */}
            <div
              onClick={() => onSelectProject?.(primarySpotlight, projects)}
              className="lg:col-span-7 bg-zinc-100 dark:bg-zinc-900/90 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-white/10 p-4 sm:p-6 flex flex-col justify-center cursor-pointer overflow-hidden"
            >
              {/* Browser top bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-white dark:bg-zinc-950 rounded-t-xl border border-b-0 border-zinc-200 dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                  <Globe size={10} className="text-emerald-500" />
                  crm2.noflai.com
                </span>
                <span className="text-[10px] font-mono text-emerald-500 font-semibold">
                  LIVE
                </span>
              </div>

              {/* Capture affichée en entier (full, sans rognage) */}
              <div className="w-full overflow-hidden rounded-b-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 flex items-center justify-center">
                <img
                  src={primarySpotlight.image}
                  alt={isEn ? primarySpotlight.titleEn : primarySpotlight.titleFr}
                  className="w-full h-auto max-h-[420px] object-contain group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Détails d'architecture à droite */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full flex items-center gap-1">
                    <Sparkles size={11} />
                    {isEn ? "Frontend Migration • Live" : "Refonte Frontend • Production"}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {primarySpotlight.category}
                  </span>
                </div>

                <h3
                  onClick={() => onSelectProject?.(primarySpotlight, projects)}
                  className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors cursor-pointer leading-tight"
                >
                  {isEn ? primarySpotlight.titleEn : primarySpotlight.titleFr}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {isEn ? primarySpotlight.descriptionEn : primarySpotlight.descriptionFr}
                </p>

                {/* Points d'architecture clés */}
                <div className="space-y-2 pt-1">
                  {(isEn ? primarySpotlight.featuresEn : primarySpotlight.featuresFr).slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {primarySpotlight.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject?.(primarySpotlight, projects)}
                  className="btn-primary !py-2 !px-4 !text-xs"
                >
                  <span>{isEn ? "Read Case Study" : "Lire l'étude de cas"}</span>
                  <ArrowRight size={13} />
                </button>

                {primarySpotlight.demo && (
                  <a
                    href={primarySpotlight.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary !py-2 !px-3.5 !text-xs"
                  >
                    <span>{isEn ? "Live App" : "Voir en direct"}</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* SPOTLIGHTS SECONDAIRES (GRILLE BENTO 2x2 : XARALA, CORAN, BAMBA.DEV, E-COMMERCE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {secondarySpotlights.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bento-card flex flex-col justify-between overflow-hidden group text-left"
            >
              <div>
                {/* Browser Frame Header + Image entière sans rognage */}
                <div
                  onClick={() => onSelectProject?.(project, projects)}
                  className="bg-zinc-100 dark:bg-zinc-900/80 p-3 sm:p-4 border-b border-zinc-200 dark:border-white/10 cursor-pointer"
                >
                  <div className="flex items-center justify-between px-3 py-1.5 bg-white dark:bg-zinc-950 rounded-t-lg border border-b-0 border-zinc-200 dark:border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400/70" />
                      <span className="w-2 h-2 rounded-full bg-amber-400/70" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 truncate max-w-[180px]">
                      {project.demo ? project.demo.replace(/^https?:\/\//, '') : project.category}
                    </span>
                    <span className="text-[9px] font-mono text-emerald-500 font-semibold uppercase">
                      {isEn ? project.statusEn : project.status}
                    </span>
                  </div>
                  <div className="w-full overflow-hidden rounded-b-lg border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={isEn ? project.titleEn : project.titleFr}
                      className="w-full h-auto max-h-[290px] object-contain group-hover:scale-[1.01] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3
                    onClick={() => onSelectProject?.(project, projects)}
                    className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors cursor-pointer mb-2 leading-snug"
                  >
                    {isEn ? project.titleEn : project.titleFr}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {isEn ? project.descriptionEn : project.descriptionFr}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject?.(project, projects)}
                  className="text-xs font-semibold text-zinc-900 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{isEn ? "Read Case Study" : "Lire l'étude de cas"}</span>
                  <ArrowRight size={13} />
                </button>

                <div className="flex items-center gap-2.5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Live</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* PARTIE 2 : TABLEAU D'INDEX "PROJETS EN FORMATION" (JAVA SPRING BOOT & PYTHON DJANGO) */}
        <div className="bento-card p-6 sm:p-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-zinc-200 dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <Terminal size={16} className="text-amber-500" />
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  {isEn ? "Ongoing Training Projects (Force-N)" : "Projets en Cours de Formation (Force-N)"}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {isEn
                    ? "Enterprise backend architectures currently under specialization."
                    : "Architectures d'entreprise Java Spring Boot et Python actuellement en spécialisation."}
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full self-start sm:self-auto">
              {labProjects.length} {isEn ? "in progress" : "en cours"}
            </span>
          </div>

          <div className="divide-y divide-zinc-200/70 dark:divide-white/5">
            {labProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject?.(proj, projects)}
                className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-3 group cursor-pointer hover:bg-zinc-50/60 dark:hover:bg-white/[0.02] -mx-3 px-3 rounded-lg transition-colors"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                      {isEn ? proj.titleEn : proj.titleFr}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1 pl-4">
                    {isEn ? proj.descriptionEn : proj.descriptionFr}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 pl-4 md:pl-0">
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white flex items-center gap-1 ml-2">
                    <span>{isEn ? "Inspect" : "Détails"}</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
