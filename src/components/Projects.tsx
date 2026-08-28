import { useContext, useState } from 'react';
import { Smartphone, Globe, Code, ArrowUpRight, Eye } from 'lucide-react';
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

  const projects: ProjectType[] = [
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
    icon: <Globe className="text-primary" size={24} />,
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
    id:2,
    titleFr: "Blog Personnel",
    titleEn: "Personal Blog",
    descriptionFr:
      "Histoire : un espace pour partager des idées, documenter mon parcours de développeur et publier du contenu technique optimisé pour le SEO.",
    descriptionEn:
      "Story: a space to share ideas, document my developer journey, and publish SEO-optimized technical content.",
    image: "/images/blog.png",
    category: "Web",
    icon: <Code className="text-primary" size={24} />,
    technologies: ["Next.js", "Markdown", "TailwindCSS"],
    demo: "https://blog-app-lx4p.vercel.app/",
    featuresFr: [
      "Articles en Markdown",
      "SEO optimisé",
      "Mode sombre",
      "Navigation fluide"
    ],
    featuresEn: [
      "Markdown articles",
      "SEO optimized",
      "Dark mode",
      "Smooth navigation"
    ],
    status: "En cours",
    statusEn: "In building"
  },
  {
    id:3,
    titleFr: "Application Coran",
    titleEn: "Quran Application",
    descriptionFr:
      "Challenge : concevoir une application spirituelle simple, rapide et accessible permettant la lecture et l’écoute du Coran sur tous les supports.",
    descriptionEn:
      "Challenge: design a simple, fast, and accessible spiritual app for reading and listening to the Quran on any device.",
    image: "/images/coran.png",
    category: "Web",
    icon: <Code className="text-primary" size={24} />,
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
    id:4,
    titleFr: "E-commerce Chaussures",
    titleEn: "Shoes E-Commerce",
    descriptionFr:
      "Challenge : développer une plateforme e-commerce complète avec gestion des produits, panier, paiement et expérience utilisateur fluide.",
    descriptionEn:
      "Challenge: build a complete e-commerce platform with product management, cart, payment, and smooth user experience.",
    image: "/images/e-commerce.png",
    category: "Web",
    icon: <Globe className="text-primary" size={24} />,
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
    id:5,
    titleFr: "Portfolio Développeur",
    titleEn: "Developer Portfolio",
    descriptionFr:
      "Histoire : un portfolio pensé comme une vitrine personnelle pour présenter mes compétences, mes projets et mon identité de développeur.",
    descriptionEn:
      "Story: a personal showcase designed to present my skills, projects, and developer identity.",
    image: "/images/portfolio.png",
    category: "Web",
    icon: <Code className="text-primary" size={24} />,
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
    id:6,
    titleFr: "Landing Page SaaS",
    titleEn: "SaaS Landing Page",
    descriptionFr:
      "Challenge : créer une landing page performante pour un produit SaaS, pensée pour capter l’attention et maximiser les conversions.",
    descriptionEn:
      "Challenge: build a high-converting landing page for a SaaS product focused on clarity and performance.",
    image: "/images/sass.png",
    category: "Web",
    icon: <Globe className="text-primary" size={24} />,
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
    id:7,
    titleFr: "Application Mobile E-commerce",
    titleEn: "E-Commerce Mobile App",
    descriptionFr:
      "Challenge : concevoir une application mobile performante permettant aux utilisateurs d’acheter des produits facilement depuis leur smartphone, avec une navigation fluide et une expérience optimisée.",
    descriptionEn:
      "Challenge: build a high-performance mobile application allowing users to shop easily from their smartphones with a smooth and optimized experience.",
    image: "/images/mobile.jpeg",
    category: "Mobile",
    icon: <Smartphone className="text-primary" size={24} />,
    technologies: ["React Native", "Expo", "MySQL"],
    featuresFr: [
      "Navigation par onglets",
      "Ajout au panier",
      "Notifications push",
      "Interface mobile intuitive"
    ],
    featuresEn: [
      "Tab navigation",
      "Add to cart",
      "Push notifications",
      "Intuitive mobile UI"
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
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section : Style jonathan-boyer.fr */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
              {langue === "fr" ? "Mes réalisations" : "My Work"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {langue === "fr" ? "Projets" : "Projects"}
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
                {langue === "fr" ? cat : (cat === "Tous" ? "All" : cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets épurée */}
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
                className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-md overflow-hidden hover:shadow-md transition-all duration-300"
              >
                {/* Image du projet */}
                <div 
                  onClick={() => onSelectProject?.(project, projects)}
                  className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={langue === "fr" ? project.titleFr : project.titleEn}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                      (langue === "fr" ? project.status === "En cours" : project.statusEn === "In building")
                      ? "bg-amber-500/90 text-white"
                      : "bg-emerald-600/90 text-white"
                    }`}>
                      {langue === "fr" ? project.status : project.statusEn}
                    </span>
                  </div>
                </div>

                {/* Body du projet */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    {/* Tags technologies style jonathan-boyer.fr */}
                    <p className="text-xs font-semibold text-slate-400 tracking-wider">
                      {project.technologies.slice(0, 4).join(', ')}
                    </p>

                    <h3 
                      onClick={() => onSelectProject?.(project, projects)}
                      className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {langue === "fr" ? project.titleFr : project.titleEn}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {langue === "fr" ? project.descriptionFr : project.descriptionEn}
                    </p>
                  </div>

                  {/* Bouton d'action En savoir plus */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProject?.(project, projects)}
                      className="text-xs font-bold text-blue-900 dark:text-blue-400 group-hover:underline uppercase tracking-wider flex items-center gap-1.5"
                    >
                      <span>{langue === "fr" ? "En savoir plus" : "Read more"}</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        title={langue === "fr" ? "Voir la démo" : "View demo"}
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