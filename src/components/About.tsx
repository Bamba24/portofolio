import { User, Heart, Code, Zap, CheckCircle2 } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function About() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const values = [
    {
      icon: <Code size={22} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? 'Quality Code' : 'Code de qualité',
      desc: isEn ? 'I follow industry best practices and write maintainable, scalable applications.' : 'Je respecte les meilleures pratiques et développe des applications propres et maintenables.'
    },
    {
      icon: <Zap size={22} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? 'Performance & SEO' : 'Performance & SEO',
      desc: isEn ? 'Fast loading speeds, smooth UX, and search engine optimization by default.' : 'Applications ultra-rapides, UX fluide et optimisation SEO intégrée dès la conception.'
    },
    {
      icon: <Heart size={22} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? 'Continuous Learning' : 'Passion & Apprentissage',
      desc: isEn ? 'Passionate about web & mobile tech, constantly expanding my technical stack.' : 'Passionné par l’écosystème web et mobile, constamment en veille technologique.'
    },
    {
      icon: <User size={22} className="text-blue-900 dark:text-blue-400" />,
      title: isEn ? 'Teamwork & Agility' : 'Collaboration Agile',
      desc: isEn ? 'Effective communication, version control discipline, and agile project flow.' : 'Communication fluide, rigueur sur Git et travail d’équipe efficace en méthode agile.'
    }
  ];

  const highlights = [
    isEn ? "Xarala Academy Certified Developer" : "Développeur certifié Xarala Academy",
    isEn ? "Fullstack JavaScript Mastery (React / Next.js / Node.js)" : "Maîtrise complète de l'écosystème JavaScript (React / Next.js / Node.js)",
    isEn ? "Cross-platform Mobile Development (React Native & Expo)" : "Développement mobile multiplateforme (React Native & Expo)",
    isEn ? "Relational Databases & ORMs (MySQL, PostgreSQL, Prisma)" : "Bases de données relationnelles & ORMs (MySQL, PostgreSQL, Prisma)"
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section : Style jonathan-boyer.fr */}
        <div className="mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
            {isEn ? "About Me" : "À propos"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? "My Journey & Philosophy" : "Mon Parcours & Philosophie"}
          </h2>
        </div>

        {/* Grille Asymétrique : Texte de présentation et points forts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          <motion.div 
            className="lg:col-span-7 space-y-4 text-left"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {isEn
                ? "Fullstack and Mobile developer trained at Xarala Academy, I have built solid expertise across the modern JavaScript & TypeScript ecosystem through concrete projects and real-world company internships."
                : "Développeur fullstack et mobile formé chez Xarala Academy, j'ai acquis une solide expertise de l'écosystème JavaScript & TypeScript à travers des projets d'application concrets et des stages en entreprise."}
            </p>
            
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {isEn
                ? "My philosophy centers on technical rigor, clean architecture, and intuitive design to solve complex business problems."
                : "Ma philosophie repose sur la rigueur technique, la propreté de l'architecture et la simplicité du design pour transformer vos besoins complexes en produits numériques simples et performants."}
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-md border border-slate-200/80 dark:border-slate-800 shadow-xs"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              {isEn ? "Key Highlights" : "Points forts"}
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Grille 4 Valeurs (Alignée à gauche) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-md flex flex-col justify-between space-y-4 hover:border-blue-900/30 transition-all shadow-xs"
            >
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-sm w-fit border border-slate-100 dark:border-slate-700">
                  {value.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {value.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}