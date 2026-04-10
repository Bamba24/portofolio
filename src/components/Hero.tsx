import { ChevronDown, ArrowRight } from 'lucide-react';
import { useContext, useState, useEffect } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const [index, setIndex] = useState(0);

  const titles = langue === 'fr'
    ? ['Développeur Front-end', 'Développeur Back-end', 'Développeur Fullstack', 'Développeur Mobile']
    : ['Front-end Developer', 'Back-end Developer', 'Fullstack Developer', 'Mobile Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center bg-white text-black px-6">
      <div className="max-w-5xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Petite introduction discrète */}
          <p className="text-blue-900 font-medium mb-4 tracking-wide uppercase text-sm">
            {langue === 'fr' ? 'Portfolio Personnel' : 'Personal Portfolio'}
          </p>

          {/* Nom avec une taille de police plus équilibrée */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
            Mouhamadou bamba <span className="text-blue-900">Diagne</span>
          </h1>

          {/* Titre animé fluide et simple */}
          <div className="h-10 mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-2xl md:text-3xl text-gray-500 font-light"
              >
                {titles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description courte et aérée */}
          <p className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed">
            {langue === 'fr'
              ? 'Je conçois des applications web et mobiles performantes, avec une attention particulière portée au design et à l’expérience utilisateur.'
              : 'I design high-performance web and mobile applications, with a focus on design and user experience.'}
          </p>

          {/* Boutons épurés */}
          <div className="flex flex-wrap gap-6 items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-sm hover:bg-blue-950 transition-colors"
            >
              {langue === 'fr' ? 'Mes travaux' : 'My works'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-900 font-semibold border-b-2 border-gray-900 pb-1 hover:text-blue-900 hover:border-blue-900 transition-all"
            >
              {langue === 'fr' ? 'Me contacter' : 'Contact me'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator très fin en bas */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}