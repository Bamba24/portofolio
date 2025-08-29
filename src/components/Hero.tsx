import { ChevronDown, Download } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LangueContext } from '../context/langueContext';

export default function Hero() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? "light";

  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
      <div className="container-max text-center">
        <div className="animate-fade-in">
          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 ${theme === "light" ? "text-gray-900" : "text-gray-50"}`}>
            {langue === 'fr' ? 'Bonjour, je suis ' : 'Hello, I am '}
            <span className={`text-primary ${theme === "light" ? "text-gray-900" : "text-gray-50"}`}>Bamba</span>
          </h1>
          <h2 className={`text-2xl md:text-3xl font-light ${theme === "light" ? "text-gray-600" : "text-gray-200"} mb-8`}>
            {langue === 'fr' ? 'Développeur Fullstack Web & Mobile' : 'Fullstack Web & Mobile Developer'}
          </h2>
          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto ${theme === "light" ? "text-gray-600" : "text-gray-200"}`}>
            {langue === 'fr'
              ? 'Passionné par les technologies modernes, je crée des applications web et mobile innovantes qui allient performance, design et expérience utilisateur exceptionnelle.'
              : 'Passionate about modern technologies, I create innovative web and mobile applications combining performance, design, and exceptional user experience.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={scrollToProjects} className={`btn-primary ${theme === "light" ? "bg-primary text-white" : "bg-gray-800 text-gray-200"} flex items-center gap-2`}>
              {langue === 'fr' ? 'Voir mes projets' : 'View My Projects'}
            </button>
            <button className={`btn-secondary flex items-center gap-2 ${theme === "light" ? "bg-gray-200 text-gray-900" : "bg-gray-700 text-gray-200"}`}>
              <Download size={20} />
              {langue === 'fr' ? 'Télécharger CV' : 'Download CV'}
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
};
