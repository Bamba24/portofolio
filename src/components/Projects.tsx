import { useContext, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
  /** Cadrage de l'image : 'top' pour les captures pleine page (hautes) */
  imagePosition?: 'top' | 'center';
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
      solutionFr: "Implémentation complète du frontend avec Next.js (App Router), interface responsive en TailwindCSS, parcours d'authentification complet et conteneurisation avec Docker pour le déploiement.",
      solutionEn: "Full frontend implementation with Next.js (App Router), responsive TailwindCSS UI, complete authentication flow, and Docker containerization for deployment.",
      image: "/images/Gestion de stock-image-crm.png",
      category: "Web",
      technologies: ["Next.js", "TailwindCSS", "Docker"],
      demo: "https://crm2.noflai.com/",
      featuresFr: [
        "Authentification : connexion, inscription, mot de passe oublié",
        "Suivi des stocks et des ventes",
        "Pilotage des agents en temps réel",
        "SEO et métadonnées Open Graph",
        "Conteneurisation et déploiement avec Docker"
      ],
      featuresEn: [
        "Authentication: login, sign-up, password reset",
        "Stock and sales tracking",
        "Real-time agent management",
        "SEO and Open Graph metadata",
        "Docker containerization and deployment"
      ],
      status: "Terminé",
      statusEn: "Finished"
    },
    {
      id: 9,
      titleFr: "Xarala Academy — Plateforme e-learning",
      titleEn: "Xarala Academy — E-learning Platform",
      descriptionFr:
        "Contribution au développement de la plateforme Xarala, acteur de la formation tech en Afrique francophone (40 000+ apprenants). J'implémente de nouvelles fonctionnalités sur la plateforme en production.",
      descriptionEn:
        "Contributing to the Xarala platform, a leading tech training provider in French-speaking Africa (40,000+ learners). I implement new features on the production platform.",
      challengeFr: "Faire évoluer une plateforme en production utilisée par des milliers d'apprenants, en livrant de nouvelles fonctionnalités sans dégrader l'expérience ni les performances.",
      challengeEn: "Evolve a production platform used by thousands of learners, shipping new features without degrading user experience or performance.",
      solutionFr: "Implémentation de fonctionnalités au sein de la base de code Next.js existante, dans le respect de l'architecture et des conventions de l'équipe.",
      solutionEn: "Implementing features within the existing Next.js codebase while following the team's architecture and conventions.",
      image: "/images/xarala-image-site.png",
      imagePosition: "top",
      category: "Web",
      technologies: ["Next.js", "TailwindCSS"],
      demo: "https://www.xarala.co/",
      featuresFr: [
        "Implémentation de nouvelles fonctionnalités",
        "Travail sur une application en production",
        "Collaboration avec l'équipe technique"
      ],
      featuresEn: [
        "Implementing new features",
        "Working on a production application",
        "Collaborating with the engineering team"
      ],
      status: "En cours",
      statusEn: "In building"
    },
    {
      id: 1,
      titleFr: "Agence de création de sites web",
      titleEn: "Web Design Agency",
      descriptionFr:
        "Une plateforme vitrine complète conçue pour une agence digitale moderne. Le projet met en avant une expérience utilisateur fluide, un design orienté conversion et une architecture performante.",
      descriptionEn:
        "A comprehensive showcase platform designed for a modern digital agency. The project highlights a fluid UX, conversion-oriented layout, and high-performance architecture.",
      challengeFr: "Créer une identité digitale élégante capable de capter l'attention des prospects et de convertir le trafic en demandes de devis qualifiées.",
      challengeEn: "Build an elegant digital identity capable of capturing prospect interest and converting traffic into qualified lead inquiries.",
      solutionFr: "Développement avec Next.js et TailwindCSS avec un découpage modulaire des services, des animations subtiles et un tunnel de contact optimisé.",
      solutionEn: "Developed with Next.js and TailwindCSS featuring modular service sections, subtle micro-interactions, and an optimized contact flow.",
      image: "/images/agence.png",
      category: "Web",
      technologies: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
      demo: "https://agence-beryl.vercel.app/",
      featuresFr: [
        "Pages services dynamiques et modulaires",
        "Design ultra-réactif orienté conversion",
        "Formulaire de contact avec validation",
        "Optimisation SEO et temps de chargement"
      ],
      featuresEn: [
        "Dynamic and modular service pages",
        "Ultra-responsive conversion-focused UI",
        "Validated contact form",
        "SEO and page speed optimization"
      ],
      status: "Terminé",
      statusEn: "Finished"
    },
    {
      id: 2,
      titleFr: "bamba.dev — Blog technique",
      titleEn: "bamba.dev — Tech Blog",
      descriptionFr:
        "Mon blog technique bilingue (FR/EN) dédié à l'ingénierie logicielle : tutoriels, analyses et retours d'expérience sur Python, les bases de données, le DevOps, le Cloud, l'IA, NestJS, JavaScript et React.",
      descriptionEn:
        "My bilingual (FR/EN) tech blog about software engineering: tutorials, analyses, and hands-on insights on Python, databases, DevOps, Cloud, AI, NestJS, JavaScript, and React.",
      challengeFr: "Construire un blog rapide, bien référencé et partageable : chaque article doit être correctement indexé par les moteurs de recherche et s'afficher proprement lors d'un partage sur les réseaux sociaux, dans deux langues.",
      challengeEn: "Build a fast, well-indexed, and shareable blog: every article must be properly indexed by search engines and render nicely when shared on social media, in two languages.",
      solutionFr: "Next.js App Router avec pré-rendu statique des articles via generateStaticParams, métadonnées dynamiques et balises Open Graph / Twitter Cards par article et par langue, routes internationalisées (/fr, /en) et mode sombre.",
      solutionEn: "Next.js App Router with static pre-rendering of articles via generateStaticParams, dynamic metadata and per-article, per-locale Open Graph / Twitter Cards, localized routes (/fr, /en), and dark mode.",
      image: "/images/bambadev-image.png",
      category: "Web",
      technologies: ["Next.js", "TailwindCSS", "next-international", "Vercel"],
      demo: "https://bamba-dev.vercel.app/en/posts",
      featuresFr: [
        "Articles pré-rendus statiquement (generateStaticParams)",
        "SEO : métadonnées dynamiques, Open Graph et Twitter Cards",
        "Bilingue FR / EN avec routes localisées",
        "Recherche et filtrage des articles par tag",
        "Mode clair / sombre",
        "Accessibilité (lien d'évitement, attributs ARIA)"
      ],
      featuresEn: [
        "Statically pre-rendered articles (generateStaticParams)",
        "SEO: dynamic metadata, Open Graph and Twitter Cards",
        "Bilingual FR / EN with localized routes",
        "Article search and tag filtering",
        "Light / dark mode",
        "Accessibility (skip link, ARIA attributes)"
      ],
      status: "Terminé",
      statusEn: "Finished"
    },
    {
      id: 3,
      titleFr: "Application Coran",
      titleEn: "Quran Application",
      descriptionFr:
        "Challenge : concevoir une application spirituelle simple, rapide et accessible permettant la lecture et l’écoute du Coran sur tous les supports.",
      descriptionEn:
        "Challenge: design a simple, fast, and accessible spiritual app for reading and listening to the Quran on any device.",
      challengeFr: "Proposer une interface fluide pour la lecture des sourates et l'écoute audio en continu sans interruption.",
      challengeEn: "Provide a fluid UI for surah reading and continuous audio streaming.",
      solutionFr: "Consommation d'APIs REST dédiées avec gestion du lecteur audio HTML5 et mise en cache des récitations.",
      solutionEn: "Integration of dedicated Quran REST APIs with HTML5 audio player and caching.",
      image: "/images/coran.png",
      category: "Web",
      technologies: ["Next.js", "Nest.js", "API Coran", "TailwindCSS"],
      featuresFr: [
        "Lecture des sourates",
        "Audio des récitations",
        "Interface épurée"
      ],
      featuresEn: [
        "Surah reading",
        "Audio recitations",
        "Clean UI"
      ],
      status: "En cours",
      statusEn: "In building"
    },
    {
      id: 4,
      titleFr: "E-commerce Chaussures",
      titleEn: "Shoes E-Commerce",
      descriptionFr:
        "Challenge : développer une plateforme e-commerce complète avec gestion des produits, panier, paiement et expérience utilisateur fluide.",
      descriptionEn:
        "Challenge: build a complete e-commerce platform with product management, cart, payment, and smooth user experience.",
      challengeFr: "Gérer l'état du panier dynamiquement et modéliser la base de données relationnelle des commandes.",
      challengeEn: "Dynamically manage shopping cart state and model relational database for orders.",
      solutionFr: "Architecture Next.js App Router combinée à Prisma ORM et MySQL pour la gestion du catalogue et du panier.",
      solutionEn: "Next.js App Router architecture paired with Prisma ORM and MySQL.",
      image: "/images/e-commerce.png",
      category: "Web",
      technologies: ["Next.js", "TypeScript", "Prisma", "MySQL"],
      featuresFr: [
        "Catalogue produits",
        "Panier & paiement",
        "Dashboard admin",
        "Responsive"
      ],
      featuresEn: [
        "Product catalog",
        "Cart & payment",
        "Admin dashboard",
        "Responsive"
      ],
      status: "Terminé",
      statusEn: "Finished"
    },
    {
      id: 5,
      titleFr: "Portfolio Développeur",
      titleEn: "Developer Portfolio",
      descriptionFr:
        "Histoire : un portfolio pensé comme une vitrine personnelle pour présenter mes compétences, mes projets et mon identité de développeur.",
      descriptionEn:
        "Story: a personal showcase designed to present my skills, projects, and developer identity.",
      image: "/images/portfolio.png",
      category: "Web",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
      demo: "https://portofolio-one-lake.vercel.app/",
      featuresFr: [
        "Présentation personnelle",
        "Animations modernes",
        "Section projets",
        "Responsive"
      ],
      featuresEn: [
        "Personal presentation",
        "Modern animations",
        "Projects section",
        "Responsive"
      ],
      status: "Terminé",
      statusEn: "Finished"
    },
    {
      id: 6,
      titleFr: "Landing Page SaaS",
      titleEn: "SaaS Landing Page",
      descriptionFr:
        "Challenge : créer une landing page performante pour un produit SaaS, pensée pour capter l’attention et maximiser les conversions.",
      descriptionEn:
        "Challenge: build a high-converting landing page for a SaaS product focused on clarity and performance.",
      image: "/images/sass.png",
      category: "Web",
      technologies: ["Html5", "CSS3"],
      demo: "https://sass-phi-eight.vercel.app/",
      featuresFr: [
        "Hero impactant",
        "Call-to-action clair",
        "Sections marketing",
        "Optimisée conversion"
      ],
      featuresEn: [
        "Impactful hero section",
        "Clear call-to-action",
        "Marketing sections",
        "Conversion optimized"
      ],
      status: "Terminé",
      statusEn: "Finished"
    },
    {
      id: 7,
      titleFr: "Application Mobile E-Commerce",
      titleEn: "E-Commerce Mobile App",
      descriptionFr:
        "Challenge : concevoir une application mobile performante permettant aux utilisateurs d’acheter des produits facilement depuis leur smartphone, avec une navigation fluide.",
      descriptionEn:
        "Challenge: build a high-performance mobile application allowing users to shop easily from their smartphones with a smooth experience.",
      image: "/images/mobile.jpeg",
      category: "Mobile",
      technologies: ["React Native", "Expo", "MySQL"],
      featuresFr: [
        "Navigation par onglets",
        "Ajout au panier mobile",
        "Interface tactile fluide"
      ],
      featuresEn: [
        "Tab navigation",
        "Mobile cart management",
        "Smooth touch UI"
      ],
      status: "Terminé",
      statusEn: "Finished"
    }
  ];

  const categories = ['Tous', 'Web', 'Mobile'];

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section : Style jonathan-boyer.fr */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
              {isEn ? "My Work" : "Mes réalisations"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {isEn ? "Projects" : "Projets"}
            </h2>
          </div>

          <div className="flex gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-sm ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isEn ? (cat === "Tous" ? "All" : cat) : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets avec Image preview */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-md overflow-hidden hover:border-blue-900/30 dark:hover:border-blue-500/30 transition-all duration-300 shadow-xs text-left"
              >
                {/* Image du projet */}
                <div 
                  onClick={() => onSelectProject?.(project, projects)}
                  className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer border-b border-slate-100 dark:border-slate-800"
                >
                  <img
                    src={project.image}
                    alt={isEn ? project.titleEn : project.titleFr}
                    className={`w-full h-full object-cover ${project.imagePosition === 'top' ? 'object-top' : ''} group-hover:scale-103 transition-transform duration-500`}
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                      (isEn ? project.statusEn === "In building" : project.status === "En cours")
                      ? "bg-amber-500/90 text-white"
                      : "bg-emerald-600/90 text-white"
                    }`}>
                      {isEn ? project.statusEn : project.status}
                    </span>
                  </div>
                </div>

                {/* Body du projet */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    {/* Tags technologies */}
                    <p className="text-xs font-semibold text-slate-400 tracking-wider">
                      {project.technologies.slice(0, 4).join(', ')}
                    </p>

                    <h3 
                      onClick={() => onSelectProject?.(project, projects)}
                      className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {isEn ? project.titleEn : project.titleFr}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {isEn ? project.descriptionEn : project.descriptionFr}
                    </p>
                  </div>

                  {/* Bouton d'action En savoir plus */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject?.(project, projects)}
                      className="text-xs font-bold text-blue-900 dark:text-blue-400 group-hover:underline uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <span>{isEn ? "Read more" : "En savoir plus"}</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        title={isEn ? "View demo" : "Voir la démo"}
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}