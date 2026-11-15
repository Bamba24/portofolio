import { useState, useEffect, useContext } from "react";
import { Menu, X, Languages, Sun, Moon, Download, ArrowUpRight } from "lucide-react";
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
    { en: "Projects", fr: "Projets", id: "projects" },
    { en: "Experience", fr: "Parcours", id: "experience" },
    { en: "Writing", fr: "Articles", id: "writing" },
    { en: "Skills", fr: "Compétences", id: "services" },
    { en: "Contact", fr: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="portfolio-container flex items-center justify-between">
        
        {/* LOGO MARQUE */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
          aria-label="Accueil"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-bold text-xs shadow-xs group-hover:scale-105 transition-transform font-mono">
            BD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Bamba Diagne
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400">
              Software Engineer
            </span>
          </div>
        </button>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer py-1"
                >
                  {isEn ? item.en : item.fr}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 pl-5 border-l border-zinc-200 dark:border-white/10">
            {/* BOUTON TÉLÉCHARGER CV */}
            <a
              href="/cv-bamba.pdf"
              download="CV_Mouhamadou_Bamba_Diagne.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors"
              title={isEn ? "Download CV (PDF)" : "Télécharger mon CV (PDF)"}
            >
              <Download size={13} />
              <span className="font-mono text-[11px]">CV.pdf</span>
            </a>

            {/* BOUTON LANGUE */}
            {toggleLangue && (
              <button
                onClick={toggleLangue}
                className="flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                title={isEn ? "Passer en Français" : "Switch to English"}
              >
                <Languages size={15} />
                <span className="uppercase font-mono text-[11px]">{langue}</span>
              </button>
            )}

            {/* BOUTON THÈME LIGHT / DARK */}
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                title={theme === "light" ? "Mode sombre" : "Mode clair"}
                className="p-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
              </button>
            )}

            {/* ACTION ME CONTACTER */}
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary !py-2 !px-3.5 !text-xs"
            >
              <span>{isEn ? "Contact" : "Me contacter"}</span>
            </button>
          </div>
        </nav>

        {/* BOUTON MENU MOBILE */}
        <div className="flex items-center gap-2 md:hidden">
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="p-1.5 text-zinc-600 dark:text-zinc-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          )}

          {toggleLangue && (
            <button
              onClick={toggleLangue}
              className="p-1.5 text-zinc-600 dark:text-zinc-300 font-mono text-xs uppercase"
            >
              {langue}
            </button>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-zinc-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            className="md:hidden bg-white dark:bg-[#121215] border-b border-zinc-200 dark:border-white/10 px-6 py-6 shadow-xl"
          >
            <ul className="flex flex-col gap-3 mb-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-left w-full text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white py-2 border-b border-zinc-100 dark:border-white/5"
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
                className="btn-secondary w-full justify-center"
              >
                <Download size={14} />
                <span>{isEn ? "Download CV (PDF)" : "Télécharger mon CV (PDF)"}</span>
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary w-full justify-center"
              >
                <span>{isEn ? "Get In Touch" : "Me contacter"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
