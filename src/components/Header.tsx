import { useState, useEffect, useContext } from "react";
import { Menu, X, Languages, Sun, Moon, ArrowRight, Download } from "lucide-react";
import { LangueContext } from "../context/langueContext";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? "fr";
  const toggleLangue = contextLangue?.toggleLangue;

  const contextTheme = useContext(ThemeContext);
  const theme = contextTheme?.theme ?? "dark";
  const toggleTheme = contextTheme?.toggleTheme;

  const isEn = langue === "en";

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
    { en: "Services", fr: "Services", id: "services" },
    { en: "Projects", fr: "Réalisations", id: "projects" },
    { en: "Career", fr: "Parcours", id: "experience" },
    { en: "Social", fr: "Me retrouver", id: "social" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/90 dark:bg-[#1f2235]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-[#ffc576]/15 shadow-sm dark:shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="boyer-container flex items-center justify-between">
        
        {/* LOGO STYLE JONATHAN BOYER */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group cursor-pointer text-left"
          aria-label="Accueil"
        >
          <div className="w-9 h-9 border border-[#d97706] dark:border-[#ffc576] flex items-center justify-center font-serif text-[#b45309] dark:text-[#ffc576] text-base font-bold transition-all duration-300 group-hover:bg-[#d97706] dark:group-hover:bg-[#ffc576] group-hover:text-white dark:group-hover:text-[#1f2235]">
            BD
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#d97706] dark:group-hover:text-[#ffc576] transition-colors leading-tight">
              Bamba Diagne
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-[#9899a8] font-medium">
              Portfolio
            </span>
          </div>
        </button>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="boyer-nav-link text-slate-700 dark:text-white/80 hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors cursor-pointer py-1"
                >
                  {isEn ? item.en : item.fr}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-white/10">
            {/* BOUTON TÉLÉCHARGER CV */}
            <a
              href="/cv-bamba.pdf"
              download="CV_Mouhamadou_Bamba_Diagne.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-white/80 hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors p-1"
              title={isEn ? "Download CV (PDF)" : "Télécharger mon CV (PDF)"}
            >
              <Download size={15} />
              <span className="uppercase text-[11px] tracking-wider">CV</span>
            </a>

            {/* BOUTON LANGUE */}
            {toggleLangue && (
              <button
                onClick={toggleLangue}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-white/70 hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors p-1"
                title={isEn ? "Passer en Français" : "Switch to English"}
              >
                <Languages size={15} />
                <span className="uppercase text-[11px] tracking-wider">{langue}</span>
              </button>
            )}

            {/* BOUTON THÈME LIGHT / DARK */}
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                title={theme === "light" ? "Mode sombre" : "Mode clair"}
                className="p-1.5 text-slate-600 dark:text-white/70 hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            )}

            {/* ACTION ME CONTACTER */}
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-boyer"
            >
              <span>{isEn ? "Get In Touch" : "Me contacter"}</span>
              <ArrowRight size={13} className="icon-arrow" />
            </button>
          </div>
        </nav>

        {/* BOUTON MENU MOBILE */}
        <div className="flex items-center gap-3 md:hidden">
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="p-1.5 text-slate-600 dark:text-white/70 hover:text-[#d97706] dark:hover:text-[#ffc576]"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          )}

          {toggleLangue && (
            <button
              onClick={toggleLangue}
              className="p-1.5 text-slate-600 dark:text-white/70 hover:text-[#d97706] dark:hover:text-[#ffc576]"
            >
              <span className="uppercase text-xs font-bold">{langue}</span>
            </button>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-900 dark:text-white hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* TIROIR MOBILE */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#1f2235] border-b border-slate-200 dark:border-[#ffc576]/20 px-6 py-6 shadow-xl"
          >
            <ul className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-left w-full text-sm uppercase font-semibold text-slate-700 dark:text-white/80 hover:text-[#d97706] dark:hover:text-[#ffc576] py-2 border-b border-slate-100 dark:border-white/5"
                  >
                    {isEn ? item.en : item.fr}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <a
                href="/cv-bamba.pdf"
                download="CV_Mouhamadou_Bamba_Diagne.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-boyer w-full justify-center !border-slate-300 dark:!border-white/30"
              >
                <Download size={14} className="mr-2" />
                <span>{isEn ? "Download CV" : "Télécharger mon CV"}</span>
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="btn-boyer w-full justify-center"
              >
                <span>{isEn ? "Get In Touch" : "Me contacter"}</span>
                <ArrowRight size={14} className="icon-arrow" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
