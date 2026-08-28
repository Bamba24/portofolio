import { Globe, Server, Smartphone, Wrench } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function Skills() {
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? "fr";
  const isEn = langue === 'en';

  const skillCategories = [
    {
      icon: <Globe size={24} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? "Frontend Development" : "Développement Frontend",
      description: isEn 
        ? "Building fast, interactive, and SEO-optimized web interfaces with React, Next.js, and TailwindCSS."
        : "Création d'interfaces web ultra-rapides, interactives et optimisées SEO avec React, Next.js et TailwindCSS.",
      skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML5/CSS3']
    },
    {
      icon: <Server size={24} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? "Backend & Databases" : "Backend & Base de données",
      description: isEn
        ? "Architecting secure REST APIs, authentication, and database schemas using Node.js, NestJS, and Prisma."
        : "Conception d'APIs REST sécurisées, gestion de bases de données et authentification avec Node.js, NestJS et Prisma.",
      skills: ['Node.js', 'NestJS', 'MySQL', 'Prisma', 'PostgreSQL']
    },
    {
      icon: <Smartphone size={24} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? "Mobile Applications" : "Applications Mobiles",
      description: isEn
        ? "Crafting seamless multiplatform mobile experiences for iOS and Android with React Native and Expo."
        : "Développement d'applications mobiles multi-plateformes intuitives (iOS & Android) avec React Native et Expo.",
      skills: ['React Native', 'Expo', 'React Navigation', 'Context API']
    },
    {
      icon: <Wrench size={24} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? "DevOps & AI Tools" : "DevOps & Outils IA",
      description: isEn
        ? "Deploying applications, setting up CI/CD workflows, and automating tasks with modern tools."
        : "Déploiement continu, automatisation et intégration des outils modernes de développement.",
      skills: ['Git', 'Vercel', 'Netlify', 'Railway', 'n8n', 'Claude Code']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section : Style jonathan-boyer.fr */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
            {isEn ? "My Technical Stack" : "Mes compétences"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? "Services & Expertise" : "Services & Compétences"}
          </h2>
        </div>

        {/* Grille 2x2 des piliers de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-7 bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-md flex flex-col justify-between space-y-6 hover:border-blue-900/30 dark:hover:border-blue-500/30 hover:shadow-sm transition-all"
            >
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-sm w-fit border border-slate-100 dark:border-slate-700 shadow-2xs">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Badges des technologies */}
              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-sm"
                  >
                    {skill}
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