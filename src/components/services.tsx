import { useContext } from 'react';
import { Globe, Smartphone, Zap, Search} from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function Services() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };

  const services = [
    {
      id: 1,
      icon: <Globe className="text-blue-900" size={32} />,
      titleFr: "Développement Web",
      titleEn: "Web Development",
      descriptionFr: "Création de sites vitrines et applications web complexes, performants et optimisés pour tous les écrans.",
      descriptionEn: "Creation of showcase sites and complex web applications, high-performance and optimized for all screens.",
      features: ["React / Next.js", "Tailwind CSS", "Dashboard Admin"]
    },
    {
      id: 2,
      icon: <Smartphone className="text-blue-900" size={32} />,
      titleFr: "Applications Mobiles",
      titleEn: "Mobile Apps",
      descriptionFr: "Développement d'applications mobiles intuitives pour iOS et Android avec une expérience utilisateur fluide.",
      descriptionEn: "Development of intuitive mobile applications for iOS and Android with a smooth user experience.",
      features: ["React Native", "Expo", "API Integration"]
    },
    {
      id: 3,
      icon: <Zap className="text-blue-900" size={32} />,
      titleFr: "Optimisation Performance",
      titleEn: "Performance Optimization",
      descriptionFr: "Audit et amélioration de la vitesse de chargement pour garantir une rétention maximale des utilisateurs.",
      descriptionEn: "Audit and improvement of loading speeds to ensure maximum user retention.",
      features: ["Core Web Vitals", "Image Opti", "Caching"]
    },
    {
      id: 4,
      icon: <Search className="text-blue-900" size={32} />,
      titleFr: "SEO & Visibilité",
      titleEn: "SEO & Visibility",
      descriptionFr: "Optimisation technique pour les moteurs de recherche afin d'augmenter votre présence organique sur Google.",
      descriptionEn: "Technical optimization for search engines to increase your organic presence on Google.",
      features: ["Semantic HTML", "Metadata", "Indexing"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">
            {langue === "fr" ? "Mes Services" : "My Services"}
          </h2>
          <div className="w-12 h-1 bg-blue-900"></div>
        </div>

        {/* Grille de Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              {/* Petite barre d'accentuation au hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="mb-6 inline-block p-3 bg-white rounded-sm shadow-sm group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">
                {langue === "fr" ? service.titleFr : service.titleEn}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {langue === "fr" ? service.descriptionFr : service.descriptionEn}
              </p>

              <ul className="space-y-2">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <div className="w-1 h-1 bg-blue-900 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action discret */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm italic">
            {langue === "fr" 
              ? "Besoin d'un service sur mesure ? Parlons-en." 
              : "Need a custom service? Let's talk."}
          </p>
        </div>
      </div>
    </section>
  );
}