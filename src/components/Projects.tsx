import { useContext, useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
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
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const isEn = langue === 'en';

  const projects: ProjectType[] = [
    {
      id: 8,
      titleFr: "Gestion de stock & ventes (POS)",
      titleEn: "Stock & Sales Management (POS)",
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
      category: "Web",
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
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      demo: "https://www.xarala.co/",
      featuresFr: [
        "Implémentation de nouvelles fonctionnalités sur l'espace apprenant",
        "Travail direct sur une base de code en production à fort trafic",
        "Collaboration continue en équipe selon la méthodologie agile",
        "Optimisation de la réactivité et des temps de chargement"
      ],
      featuresEn: [
        "Implementation of new features in the student workspace",
        "Direct contributions to a high-traffic production codebase",
        "Agile team collaboration and peer reviews",
        "Performance and load-time optimizations"
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
      id: 2,
      titleFr: "bamba.dev — Blog Technique Ingénierie",
      titleEn: "bamba.dev — Software Engineering Blog",
      descriptionFr:
        "Mon blog technique bilingue (FR/EN) dédié à l'ingénierie logicielle : tutoriels approfondis, retours d'expérience sur Python, Next.js, bases de données, DevOps, Cloud et IA.",
      descriptionEn:
        "My bilingual (FR/EN) software engineering blog: in-depth tutorials, hands-on insights on Python, Next.js, databases, DevOps, Cloud, and AI.",
      challengeFr: "Construire un blog ultra-rapide, parfaitement indexé par Google (SEO) et partageable proprement avec des aperçus riches sur les réseaux sociaux.",
      challengeEn: "Build an ultra-fast blog with optimal Google SEO indexing and rich Open Graph / Twitter Card social share previews.",
      solutionFr: "Next.js App Router avec pré-rendu statique des articles (SSG via generateStaticParams), métadonnées dynamiques, routes internationalisées (/fr, /en) et accessibilité soignée.",
      solutionEn: "Next.js App Router with static generation (SSG), dynamic metadata generation, localized routes (/fr, /en), and accessibility compliance.",
      image: "/images/bambadev-image.png",
      imagePosition: "top",
      category: "Web",
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
      id: 10,
      titleFr: "Application Entreprise Java Spring Boot & Next.js",
      titleEn: "Enterprise App Java Spring Boot & Next.js",
      descriptionFr:
        "Application d'entreprise fullstack avec architecture découplée : API backend robuste sous Java Spring Boot et interface réactive sous Next.js.",
      descriptionEn:
        "Enterprise fullstack application with decoupled architecture: robust Java Spring Boot backend API paired with a Next.js frontend.",
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
        "Application web fullstack combinant la robustesse du framework Python Django pour la logique métier et l'écosystème modulaire d'Angular pour l'UI.",
      descriptionEn:
        "Fullstack web app combining Python Django's robust business logic and ORM with Angular's structured component ecosystem.",
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

  const categories = ['Tous', 'Web', 'Fullstack'];

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="projects" 
      className="py-24 bg-[#f8fafc] dark:bg-[#1f2235] text-slate-900 dark:text-white border-t border-slate-200 dark:border-[#ffc576]/15 relative transition-colors duration-300"
    >
      <div className="boyer-container">
        
        {/* EN-TÊTE EXACT JONATHAN BOYER : MES CLIENTS & RÉALISATIONS -> PROJETS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <span className="section__top-title">
              {isEn ? "My Work & Clients" : "Mes réalisations"}
            </span>
            <h2 className="section__title !mb-2">
              {isEn ? "Featured Projects" : "Projets"}
            </h2>
            <p className="text-slate-600 dark:text-[#9899a8] text-base max-w-xl">
              {isEn 
                ? "A curated selection of real-world applications, client platforms, and technical projects." 
                : "Une sélection d'applications réelles en production, plateformes clients et projets d'ingénierie logicielle."}
            </p>
          </div>

          {/* FILTRES DE CATÉGORIE STYLE BOYER */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#d97706] text-white dark:bg-[#ffc576] dark:text-[#1f2235] font-bold shadow-xs"
                    : "bg-white dark:bg-[#313552] text-slate-600 dark:text-[#9899a8] hover:text-[#d97706] dark:hover:text-[#ffc576] border border-slate-200 dark:border-[#ffc576]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRILLE DE PROJETS IDENTIQUE AU DESIGN DE JONATHAN BOYER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="boyer-card flex flex-col justify-between overflow-hidden group text-left h-full"
              >
                {/* Image avec cadrage haut pour capture nette */}
                <div 
                  onClick={() => onSelectProject?.(project, projects)}
                  className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-[#181a29] cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={isEn ? project.titleEn : project.titleFr}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                      project.imagePosition === 'top'
                        ? 'object-cover object-top'
                        : project.imagePosition === 'contain'
                        ? 'object-contain p-2'
                        : 'object-cover object-center'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 dark:bg-[#1f2235]/30 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Badge Statut */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/95 dark:bg-[#1f2235]/90 text-[#b45309] dark:text-[#ffc576] border border-slate-200 dark:border-[#ffc576]/40 backdrop-blur-xs rounded-xs shadow-xs">
                    {isEn ? project.statusEn : project.status}
                  </div>
                </div>

                {/* Corps de la carte */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Tags technologiques */}
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#b45309] dark:text-[#ffc576] mb-2 line-clamp-1">
                      {project.technologies.slice(0, 4).join(', ')}
                    </p>

                    {/* Titre en Playfair Display */}
                    <h3 
                      onClick={() => onSelectProject?.(project, projects)}
                      className="font-serif text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#b45309] dark:group-hover:text-[#ffc576] transition-colors mb-3 cursor-pointer leading-snug"
                    >
                      {isEn ? project.titleEn : project.titleFr}
                    </h3>

                    {/* Description concise */}
                    <p className="text-sm text-slate-600 dark:text-[#9899a8] leading-relaxed line-clamp-3 mb-6">
                      {isEn ? project.descriptionEn : project.descriptionFr}
                    </p>
                  </div>

                  {/* Actions au bas de la carte */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between mt-auto">
                    {/* Action "En savoir plus" style Jonathan Boyer */}
                    <button
                      onClick={() => onSelectProject?.(project, projects)}
                      className="btn-boyer !py-1.5 !px-4 text-[11px]"
                    >
                      <span>{isEn ? "Learn More" : "En savoir plus"}</span>
                      <ArrowRight size={13} className="icon-arrow" />
                    </button>

                    {/* Liens externes directs */}
                    <div className="flex items-center gap-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          title="Visiter le site en ligne"
                          className="p-2 text-slate-500 dark:text-[#9899a8] hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          title="Code source GitHub"
                          className="p-2 text-slate-500 dark:text-[#9899a8] hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors"
                        >
                          <Github size={16} />
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
