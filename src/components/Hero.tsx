import { ChevronDown, Download } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import {motion} from 'framer-motion';

export default function Hero() {

  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center bg-white text-black" : "bg-gray-800 text-white"}`}>
      <motion.div className="container-max text-center"
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.8}}
      >
        <div className="animate-fade-in">
          <h1 className={`text-5xl md:text-7xl font-bold  mb-6 text-gray-900" : "text-white"}`}>
            {langue === 'fr' ? 'Bonjour, je suis ' : 'Hello, I am '}
            <span className={` text-blue-900" : "text-blue-900"}`}>Bamba</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl font-light text-primary mb-8`}>
            {langue === 'fr' ? 'Développeur Fullstack Web & Mobile' : 'Fullstack Web & Mobile Developer'}
          </h2>
          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto text-primary`}>
            {langue === 'fr'
              ? 'Passionné par les technologies modernes, je crée des applications web et mobile innovantes qui allient performance, design et expérience utilisateur exceptionnelle.'
              : 'Passionate about modern technologies, I create innovative web and mobile applications combining performance, design, and exceptional user experience.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={scrollToProjects} className={`btn-primary bg-gray-600 text-white flex items-center gap-2`}>
              {langue === 'fr' ? 'Voir mes projets' : 'View My Projects'}
            </button>
            <button className={`btn-secondary flex items-center gap-2 bg-gray-400 text-gray-900`}>
              <Download size={20} />
              {langue === 'fr' ? 'Télécharger CV' : 'Download CV'}
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </motion.div>
    </section>
  );
};
