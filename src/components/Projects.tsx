import { useContext, useState } from 'react';
import { Smartphone, Globe, Code, ArrowUpRight } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Tes données de projets restent les mêmes (je les utilise ici)
   const projects = [
  {
    id: 1,
    titleFr: "Agence de création de sites web",
    titleEn: "Web Design Agency",
    descriptionFr:
      "Challenge : créer l’identité digitale d’une agence moderne capable de convertir des visiteurs en clients grâce à un design professionnel et une structure claire.",
    descriptionEn:
      "Challenge: build a modern web agency identity focused on converting visitors into clients through clean design and clear structure.",
    image: "/images/agence.png",
    category: "Web",
    icon: <Globe className="text-primary" size={24} />,
    technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    demo: "https://agence-beryl.vercel.app/",
    featuresFr: [
      "Pages services dynamiques",
      "Design orienté conversion",
      "Formulaire de contact",
      "Responsive design"
    ],
    featuresEn: [
      "Dynamic service pages",
      "Conversion-oriented design",
      "Contact form",
      "Responsive layout"
    ],
    status: [
      "Terminé"
    ],
    statusEn : [
      "Finished"
    ]
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
    status: [
      "En cours"
    ],
    statusEn : [
      "In building"
    ]
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
     status: [
      "En cours"
    ],
    statusEn : [
      "In building"
    ]
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
     status: [
      "Terminé"
    ],
    statusEn : [
      "Finished"
    ]
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
    status: [
      "Terminé"
    ],
    statusEn : [
      "Finished"
    ]
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
    status: [
      "Terminé"
    ],
    statusEn : [
      "Finished"
    ]
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
  demo: "https://expo.dev/@tonCompte/ecommerce-mobile",
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
  status: [
      "Terminé"
    ],
    statusEn : [
      "Finished"
    ]
  }
];
  const categories = ['Tous', 'Web', 'Mobile'];

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header & Filtres */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {langue === "fr" ? "Sélection de projets" : "Featured Projects"}
            </h2>
            <p className="text-gray-500 text-lg">
              {langue === "fr" 
                ? "Une immersion dans mes dernières réalisations web et mobiles." 
                : "A deep dive into my latest web and mobile creations."}
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-slate-50 border border-slate-100 rounded-sm">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-sm ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {langue === "fr" ? cat : (cat === "Tous" ? "All" : cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                {/* Image avec Overlay au survol */}
                <div className="relative aspect-video overflow-hidden bg-slate-100 mb-6 rounded-sm">
                  <img
                    src={project.image}
                    alt={project.titleFr}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter backdrop-blur-md ${
                      (langue === "fr" ? project.status[0] === "En cours" : project.statusEn[0] === "In building")
                      ? "bg-amber-50/80 text-amber-600 border border-amber-200"
                      : "bg-emerald-50/80 text-emerald-600 border border-emerald-200"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        (langue === "fr" ? project.status[0] === "En cours" : project.statusEn[0] === "In building")
                        ? "bg-amber-500" : "bg-emerald-500"
                      }`}></span>
                      {langue === "fr" ? project.status : project.statusEn}
                    </span>
                  </div>

                  {/* Hover Link */}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
                    >
                      <span className="bg-white text-blue-900 p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <ArrowUpRight size={24} />
                      </span>
                    </a>
                  )}
                </div>

                {/* Contenu Texte */}
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900">
                      {langue === "fr" ? project.titleFr : project.titleEn}
                    </h3>
                    <div className="text-gray-300 group-hover:text-blue-900 transition-colors">
                       {project.category === "Mobile" ? <Smartphone size={20}/> : <Globe size={20}/>}
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 line-clamp-4 leading-relaxed">
                    {langue === "fr" ? project.descriptionFr : project.descriptionEn}
                  </p>

                  {/* Technologies épurées */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
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
  
  
 