import { useState, useEffect, useContext } from "react";
import { Menu, X, Languages, Download, Sun, Moon } from "lucide-react";
import { LangueContext } from "../context/langueContext";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? "fr";
  const toggleLangue = contextLangue?.toggleLangue;

  const contextTheme = useContext(ThemeContext);
  const theme = contextTheme?.theme ?? "light";
  const toggleTheme = contextTheme?.toggleTheme;

  const isEn = langue === 'en';

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
      const offset = 80;
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
    { en: "Services", fr: "Services", id: "skills" },
    { en: "Career", fr: "Parcours", id: "experience" },
    { en: "Projects", fr: "Projets", id: "projects" },
    { en: "Contact", fr: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 shadow-2xs" 
          : "py-5 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xs"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          
          {/* BRAND LOGO : Monogramme minimaliste BD */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center font-extrabold text-xs rounded-sm group-hover:bg-slate-900 transition-colors shadow-2xs">
              BD
            </div>
            <span className="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
              Bamba <span className="text-blue-900 dark:text-blue-400 font-semibold">Dev</span>
            </span>
          </button>

          {/* DESKTOP NAV LINKS : Style jonathan-boyer.fr */}
          <div className="hidden md:flex items-center gap-7">
            <div className="flex items-center gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {isEn ? item.en : item.fr}
                </button>
              ))}
            </div>

            {/* CONTROLES & ACTION */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                title={theme === "light" ? "Mode Sombre" : "Mode Clair"}
                className="p-1.5 text-slate-500 hover:text-blue-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
              </button>

              {/* Language Toggle Button */}
              <button
                onClick={toggleLangue}
                className="p-1.5 text-slate-500 hover:text-blue-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Languages size={17} />
                <span className="text-[10px] font-extrabold uppercase">{langue}</span>
              </button>

              {/* CTA CV Button */}
              <a
                href="/cv-bamba.pdf"
                download
                className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-900 hover:bg-blue-950 text-white text-[11px] font-bold uppercase tracking-wider rounded-sm transition-all shadow-xs active:scale-95 ml-1"
              >
                <Download size={13} />
                <span>{isEn ? "CV" : "Mon CV"}</span>
              </a>

            </div>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden p-2 text-slate-900 dark:text-white cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* MOBILE DRAWER MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-5 text-left">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-base font-bold text-slate-900 dark:text-white hover:text-blue-900 dark:hover:text-blue-400"
                >
                  {isEn ? item.en : item.fr}
                </button>
              ))}
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-xs font-bold uppercase text-slate-600 dark:text-slate-300"
                >
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                  {theme === "light" ? (isEn ? "Dark Mode" : "Mode Sombre") : (isEn ? "Light Mode" : "Mode Clair")}
                </button>

                <button
                  onClick={toggleLangue}
                  className="flex items-center gap-2 text-xs font-bold uppercase text-slate-600 dark:text-slate-300"
                >
                  <Languages size={18} />
                  {isEn ? "Switch to French" : "Passer à l'Anglais"}
                </button>
                
                <a
                  href="/cv-bamba.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-900 text-white text-xs font-bold uppercase tracking-wider rounded-sm mt-2"
                >
                  <Download size={16} />
                  {isEn ? "Download CV" : "Télécharger mon CV"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}