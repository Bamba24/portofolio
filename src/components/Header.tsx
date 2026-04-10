import { useState, useEffect, useContext } from "react";
import { Menu, X, Languages, Download } from "lucide-react";
import { LangueContext } from "../context/langueContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? "fr";
  const toggleLangue = contextLangue?.toggleLangue;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Pour ne pas coller au bord haut
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { en: "About", fr: "À propos", id: "about" },
    { en: "Skills", fr: "Skills", id: "skills" },
    { en: "Projects", fr: "Projets", id: "projects" },
    { en: "Contact", fr: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          
          {/* LOGO : Plus minimaliste */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-blue-900 text-white flex items-center justify-center font-bold text-lg rounded-sm group-hover:rotate-6 transition-transform">
              BD
            </div>
            <span className="hidden sm:block text-sm font-bold tracking-tighter uppercase text-slate-900">
              Bamba <span className="text-blue-900">Dev</span>
            </span>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 border-r border-slate-200 pr-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[13px] font-bold uppercase tracking-widest text-slate-500 hover:text-blue-900 transition-colors"
                >
                  {langue === "fr" ? item.fr : item.en}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Traduction */}
              <button
                onClick={toggleLangue}
                className="p-2 text-slate-400 hover:text-blue-900 transition-colors flex items-center gap-1"
              >
                <Languages size={18} />
                <span className="text-[10px] font-bold">{langue.toUpperCase()}</span>
              </button>

              {/* BOUTON CV */}
              <a
                href="/cv-bamba.pdf" // Mets ici le chemin vers ton fichier
                download
                className="flex items-center gap-2 px-5 py-2 bg-blue-900 text-white text-[12px] font-bold uppercase tracking-wider rounded-sm hover:bg-slate-800 transition-all shadow-md active:scale-95"
              >
                <Download size={14} />
                {langue === "fr" ? "Mon CV" : "My CV"}
              </a>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU : Slide Down */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg font-bold text-slate-900"
                >
                  {langue === "fr" ? item.fr : item.en}
                </button>
              ))}
              
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                <button
                  onClick={toggleLangue}
                  className="flex items-center gap-2 text-slate-500 font-bold"
                >
                  <Languages size={20} />
                  {langue === "fr" ? "Passer à l'Anglais" : "Switch to French"}
                </button>
                
                <a
                  href="/cv-bamba.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-4 bg-blue-900 text-white font-bold rounded-sm"
                >
                  <Download size={18} />
                  {langue === "fr" ? "Télécharger mon CV" : "Download CV"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}