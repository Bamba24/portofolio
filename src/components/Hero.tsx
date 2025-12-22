import { ChevronDown, Download } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {

  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const [index, setIndex] = useState(0)

     
  
  const titles = langue === 'fr'
  ? [
      'Développeur Front-end',
      'Développeur Back-end',
      'Développeur Fullstack',
      'Développeur Mobile',
    ]
    : [
      'Front-end Developer',
      'Back-end Developer',
      'Fullstack Developer',
      'Mobile Developer',
    ];

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500); // durée entre chaque titre
  
    return () => clearInterval(interval);
    }, [titles.length]);


  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
          <h1 className={`text-2xl  mb-6 text-gray-900}`}>
            {langue === 'fr' ? 'Bonjour, je suis ' : 'Hello, I am '}
          </h1>
          <p className='text-5xl font-bold mb-6 '>
            Mouhamadou bamba 
            <span className="text-blue-900"> Diagne</span>
          </p>
          <h2 className={` text-2xl md:text-3xl font-light text-primary mb-8 `}>
            {titles[index]}
          </h2>
          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto text-primary`}>
            {langue === 'fr'
              ? 'Passionné par les technologies modernes, je crée des applications web et mobile innovantes qui allient performance, design et expérience utilisateur.'
              : 'Passionate about modern technologies, I create innovative web and mobile applications combining performance, design, and  user experience.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-8 max-w-[600px] m-auto">
            <button onClick={scrollToProjects} className={`btn-primary bg-primary text-white  w-full text-center`}>
              {langue === 'fr' ? 'Voir mes projets' : 'View My Projects'}
            </button>
            <button onClick={scrollToContact} className={`btn-primary  gap-2 bg-gray-400 text-primary w-full `}>
              {langue === 'fr' ? 'Me contacter' : 'Contact me'}
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
