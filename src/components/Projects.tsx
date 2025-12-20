import { useContext, useState } from 'react';
import { Github, ExternalLink, Smartphone, Globe, Code } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function Projects() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };

    const projects = [
  {
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
    demo: "https://agence-web.com",
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
    ]
  },
  {
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
    demo: "https://blog-dev.com",
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
    ]
  },
  {
    titleFr: "Application Coran",
    titleEn: "Quran Application",
    descriptionFr:
      "Challenge : concevoir une application spirituelle simple, rapide et accessible permettant la lecture et l’écoute du Coran sur tous les supports.",
    descriptionEn:
      "Challenge: design a simple, fast, and accessible spiritual app for reading and listening to the Quran on any device.",
    image: "/images/coran.png",
    category: "Web",
    icon: <Code className="text-primary" size={24} />,
    technologies: ["Next.js", "API Coran", "TailwindCSS"],
    featuresFr: [
      "Lecture des sourates",
      "Audio des récitations",
      "Mode sombre",
      "Interface épurée"
    ],
    featuresEn: [
      "Surah reading",
      "Audio recitations",
      "Dark mode",
      "Clean UI"
    ]
  },
  {
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
    ]
  },
  {
    titleFr: "Portfolio Développeur",
    titleEn: "Developer Portfolio",
    descriptionFr:
      "Histoire : un portfolio pensé comme une vitrine personnelle pour présenter mes compétences, mes projets et mon identité de développeur.",
    descriptionEn:
      "Story: a personal showcase designed to present my skills, projects, and developer identity.",
    image: "/images/portfolio1.png",
    category: "Web",
    icon: <Code className="text-primary" size={24} />,
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    demo: "https://portfolio-dev.com",
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
    ]
  },
  {
    titleFr: "Landing Page SaaS",
    titleEn: "SaaS Landing Page",
    descriptionFr:
      "Challenge : créer une landing page performante pour un produit SaaS, pensée pour capter l’attention et maximiser les conversions.",
    descriptionEn:
      "Challenge: build a high-converting landing page for a SaaS product focused on clarity and performance.",
    image: "/images/sass.png",
    category: "Web",
    icon: <Globe className="text-primary" size={24} />,
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    demo: "https://landing-saas.com",
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
    ]
  }
];



  const categories = ['Tous', 'Web', 'Mobile'];
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  // 🔥 Animation du container (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.20, // animation entre les cards
      },
    },
  };

  // 🔥 Animation de chaque card
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6},
    },
  };

  return (
    <section id="projects" className="section-padding bg-white text-primary">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {langue === "fr" ? "Mes Projets" : "My Projects"}
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-black">
            {langue === "fr" 
              ? "Découvrez mes réalisations récentes, des sites web aux applications mobiles." 
              : "Discover my recent work, from websites to mobile applications."}
          </p>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {langue === "fr" ? cat : cat === "Tous" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 🔥 Grille animée */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 bg-white text-gray-900"
              variants={cardVariants}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={langue === "fr" ? project.titleFr : project.titleEn}
                  className="w-full h-48 object-cover"
                />

                <div className="absolute top-4 left-4 bg-white rounded-full p-2">
                  {project.icon}
                </div>

                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {langue === "fr" ? project.titleFr : project.titleEn}
                </h3>

                <p className="mb-4 text-primary">
                  {langue === "fr" ? project.descriptionFr : project.descriptionEn}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">
                    {langue === "fr" ? "Fonctionnalités :" : "Features:"}
                  </h4>

                  <ul className="space-y-1">
                    {(langue === "fr" ? project.featuresFr : project.featuresEn).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-primary text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.demo} className="flex items-center gap-2 hover:text-primary transition-colors">
                    <ExternalLink size={20} /> Visiter le site
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
