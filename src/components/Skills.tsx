import { Code, Database, Smartphone, Globe, Server } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function Skills() {
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? "fr";
  const isEn = langue === 'en';

  const services = [
    {
      icon: <Globe size={24} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? "Frontend Development" : "Développement Frontend",
      description: isEn 
        ? "Building fast, reactive, and responsive interfaces with React, Next.js, TypeScript, and TailwindCSS."
        : "Création d'applications dynamiques et réactives avec React, Next.js, TypeScript et TailwindCSS.",
      techs: ['React', 'Next.js', 'TypeScript', 'TailwindCSS']
    },
    {
      icon: <Server size={24} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? "Backend & APIs" : "Backend & APIs REST",
      description: isEn
        ? "Architecture, RESTful APIs, authentication, and database integrations with Node.js, NestJS, and Prisma."
        : "Conception d'APIs performantes, gestion de bases de données et authentification avec Node.js, NestJS, MySQL et Prisma.",
      techs: ['Node.js', 'NestJS', 'MySQL', 'Prisma', 'PostgreSQL']
    },
    {
      icon: <Smartphone size={24} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? "Mobile Apps" : "Développement Mobile",
      description: isEn
        ? "Developing cross-platform mobile apps for iOS and Android using React Native and Expo."
        : "Développement d'applications mobiles intuitives et performantes pour iOS et Android avec React Native et Expo.",
      techs: ['React Native', 'Expo', 'React Navigation']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section : Style jonathan-boyer.fr */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
            {isEn ? "My Skills" : "Mes compétences"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? "Services" : "Services"}
          </h2>
        </div>

        {/* Grille de services 3 colonnes épurée */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 rounded-md flex flex-col justify-between space-y-4 hover:border-blue-900/30 transition-all"
            >
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-sm w-fit border border-slate-100 dark:border-slate-700 shadow-2xs">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {service.techs.map((tech, idx) => (
                  <span key={idx} className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {tech}{idx < service.techs.length - 1 ? ' •' : ''}
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