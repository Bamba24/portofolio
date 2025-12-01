import { useContext, useState } from 'react';
import { Github, ExternalLink, Smartphone, Globe, Code } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { LangueContext } from '../context/langueContext';

export default function Projects() {
  const { theme } = useContext(ThemeContext) || { theme: 'light' };
  const { langue } = useContext(LangueContext) || { langue: 'fr' };

  const projects = [
    {
      titleFr: 'Site Immobilier',
      titleEn: 'Real Estate Website',
      descriptionFr: 'Site vitrine immobilier simple développé en HTML, CSS et JavaScript.',
      descriptionEn: 'Simple real estate showcase website built with HTML, CSS, and JavaScript.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web',
      icon: <Globe className="text-primary" size={24} />,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/tonCompte/immobilier',
      demo: 'https://immobilier-demo.com',
      featuresFr: ['Liste de biens', 'Filtre par prix et localisation', 'Design responsive'],
      featuresEn: ['Property listings', 'Filter by price and location', 'Responsive design']
    },
    {
      titleFr: 'E-Commerce Chaussures',
      titleEn: 'Shoes E-Commerce',
      descriptionFr: 'Plateforme e-commerce de vente de chaussures avec Next.js, MySQL et TypeScript.',
      descriptionEn: 'E-commerce platform for selling shoes built with Next.js, MySQL, and TypeScript.',
      image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web',
      icon: <Globe className="text-primary" size={24} />,
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'TailwindCSS'],
      github: 'https://github.com/tonCompte/ecommerce-chaussures',
      demo: 'https://ecommerce-chaussures.com',
      featuresFr: ['Gestion produits', 'Panier et paiement', 'Dashboard admin', 'Responsive'],
      featuresEn: ['Product management', 'Cart & payment', 'Admin dashboard', 'Responsive']
    },
    {
      titleFr: 'App Mobile E-Commerce',
      titleEn: 'E-Commerce Mobile App',
      descriptionFr: 'Version mobile de l’e-commerce de chaussures avec React Native et Expo.',
      descriptionEn: 'Mobile version of the shoe e-commerce built with React Native and Expo.',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile',
      icon: <Smartphone className="text-primary" size={24} />,
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
      github: 'https://github.com/tonCompte/app-chaussures',
      demo: 'https://expo.dev/@tonCompte/app-chaussures',
      featuresFr: ['Navigation par onglets', 'Panier et commandes', 'Notifications push', 'Mode hors-ligne'],
      featuresEn: ['Tab navigation', 'Cart & orders', 'Push notifications', 'Offline mode']
    },
    {
      titleFr: 'Récital Coran',
      titleEn: 'Quran Recital',
      descriptionFr: 'Application web pour récital du Coran avec Next.js et NestJS (TypeORM).',
      descriptionEn: 'Quran recital web app built with Next.js and NestJS (TypeORM).',
      image: 'https://images.pexels.com/photos/2088176/pexels-photo-2088176.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web',
      icon: <Code className="text-primary" size={24} />,
      technologies: ['Next.js', 'NestJS', 'TypeORM', 'TailwindCSS'],
      github: 'https://github.com/tonCompte/recital-coran',
      demo: 'https://recital-coran.com',
      featuresFr: ['Lecture audio', 'Liste des sourates', 'Mode sombre', 'Responsive'],
      featuresEn: ['Audio playback', 'Surah list', 'Dark mode', 'Responsive']
    },
    {
      titleFr: 'Blog Portfolio',
      titleEn: 'Portfolio Blog',
      descriptionFr: 'Blog personnel intégré au portfolio avec Next.js et NestJS.',
      descriptionEn: 'Personal blog integrated into portfolio with Next.js and NestJS.',
      image: 'https://images.pexels.com/photos/207413/pexels-photo-207413.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web',
      icon: <Code className="text-primary" size={24} />,
      technologies: ['Next.js', 'NestJS', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com/tonCompte/blog-portfolio',
      demo: 'https://blog-portfolio.com',
      featuresFr: ['Articles', 'Commentaires', 'Gestion admin', 'Mode sombre'],
      featuresEn: ['Articles', 'Comments', 'Admin management', 'Dark mode']
    }
  ];

  const categories = ['Tous', 'Web', 'Mobile'];
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className={`section-padding ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-gray-50'}`}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-gray-50'}`}>
            {langue === "fr" ? "Mes Projets" : "My Projects"}
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
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
                {langue === "fr" 
                  ? cat 
                  : cat === "Tous" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 ${
                theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-200'
              }`}
            >
              <div className="relative">
                <img src={project.image} alt={langue === "fr" ? project.titleFr : project.titleEn} className="w-full h-48 object-cover" />
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
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {langue === "fr" ? project.descriptionFr : project.descriptionEn}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">
                    {langue === "fr" ? "Fonctionnalités :" : "Features:"}
                  </h4>
                  <ul className="space-y-1">
                    {(langue === "fr" ? project.featuresFr : project.featuresEn).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`text-primary mt-1 ${theme === "light" ? "" : "text-white"}`}>•</span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{feat}</span>
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
                  <a href={project.github} className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Github size={20} /> Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 hover:text-primary transition-colors">
                    <ExternalLink size={20} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
