import { User, Heart, Code, Zap } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function About() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };

  // Animation pour les cartes de valeurs
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const values = [
    {
      icon: <Code size={28} className="text-blue-900" />,
      title: langue === 'fr' ? 'Code de qualité' : 'Quality Code',
      desc: langue === 'fr' ? 'Je respecte les bonnes pratiques et développe des applications maintenables.' : 'I follow best practices and develop maintainable applications.'
    },
    {
      icon: <Zap size={28} className="text-blue-900" />,
      title: langue === 'fr' ? 'Performance' : 'Performance',
      desc: langue === 'fr' ? 'Applications rapides et optimisées pour une expérience fluide.' : 'Fast and optimized applications for a smooth experience.'
    },
    {
      icon: <Heart size={28} className="text-blue-900" />,
      title: langue === 'fr' ? 'Passion' : 'Passion',
      desc: langue === 'fr' ? 'Une passion pour le développement et l’apprentissage continu.' : 'Passionate about development and continuous learning.'
    },
    {
      icon: <User size={28} className="text-blue-900" />,
      title: langue === 'fr' ? 'Collaboration' : 'Collaboration',
      desc: langue === 'fr' ? 'Travail efficace en équipe et communication transparente.' : 'Effective teamwork and transparent communication.'
    }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'Node.js',
    'NestJS', 'MySQL', 'Prisma', 'TailwindCSS', 'Firebase'
  ];

  return (
    <section id="about" className="py-24 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Partie Haute : Texte + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {langue === 'fr' ? 'À propos de moi' : 'About Me'}
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                {langue === 'fr'
                  ? "Développeur fullstack et mobile formé chez Xarala Academy, j'ai acquis une maîtrise complète de l'écosystème JavaScript à travers des projets concrets."
                  : "Fullstack and mobile developer trained at Xarala Academy, I have gained complete mastery of the JavaScript ecosystem through concrete projects."}
              </p>
              <p>
                {langue === 'fr'
                  ? "Mon approche allie rigueur technique et créativité pour transformer vos idées en solutions numériques performantes."
                  : "My approach combines technical rigor and creativity to turn your ideas into high-performing digital solutions."}
              </p>
            </div>

            {/* Badges Tech épurés */}
            <div className="flex flex-wrap gap-2 mt-10">
              {technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Décoration minimaliste derrière l'image */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-900 -z-10 rounded-sm"></div>
            <div className="bg-slate-100 aspect-square overflow-hidden rounded-sm">
              <img 
                src="/images/pp.png" 
                alt="Mouhamadou Bamba Diagne" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Partie Basse : Valeurs */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={item} className="flex flex-col items-start">
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}