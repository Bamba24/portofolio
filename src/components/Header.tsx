import { useState, useEffect, useContext } from "react";
import { Menu, X, Languages, Sun, Moon, Download } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "projects", "experience", "writing", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90;
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
    { en: "Overview", fr: "Profil", id: "hero" },
    { en: "Work", fr: "Projets", id: "projects" },
    { en: "Career", fr: "Parcours", id: "experience" },
    { en: "Writing", fr: "Articles", id: "writing" },
    { en: "Contact", fr: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between pointer-events-auto bg-white/85 dark:bg-[#121215]/85 backdrop-blur-xl border border-zinc-200/90 dark:border-white/10 rounded-full px-3 sm:px-4 py-2 shadow-lg shadow-black/5 dark:shadow-black/40 transition-all duration-300">
        
        {/* IDENTITÉ MINIATURE STYLE LEEROB / PACO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group cursor-pointer text-left pr-2"
          aria-label="Accueil"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-300 dark:border-white/15 shrink-0">
            <img
              src="/images/pp.png"
              alt="Bamba Diagne"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white dark:ring-zinc-900" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-tight text-zinc-900 dark:text-white leading-none">
              bamba.dev
            </span>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
              software engineer
            </span>
          </div>
        </button>

        {/* NAVIGATION PILLULES CENTRALE (DESKTOP) */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/90 p-1 rounded-full border border-zinc-200/60 dark:border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-2xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {isEn ? item.en : item.fr}
              </button>
            );
          })}
        </nav>

        {/* ACTIONS RAPIDES (CV, LANGUE, THÈME) */}
        <div className="hidden md:flex items-center gap-1.5">
          <a
            href="/cv-bamba.pdf"
            download="CV_Mouhamadou_Bamba_Diagne.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-mono font-semibold px-3 py-1.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90 transition-opacity"
            title={isEn ? "Download Resume (PDF)" : "Télécharger mon CV (PDF)"}
          >
            <Download size={12} />
            <span>CV</span>
          </a>

          {toggleLangue && (
            <button
              onClick={toggleLangue}
              className="flex items-center gap-1 text-[11px] font-mono font-semibold text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors px-2 py-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
              title={isEn ? "Passer en Français" : "Switch to English"}
            >
              <Languages size={13} />
              <span className="uppercase">{langue}</span>
            </button>
          )}

          {toggleTheme && (
            <button
              onClick={toggleTheme}
              title={theme === "light" ? "Mode sombre" : "Mode clair"}
              className="p-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          )}
        </div>

        {/* CONTRÔLES MOBILE */}
        <div className="flex items-center gap-1.5 md:hidden">
          <a
            href="/cv-bamba.pdf"
            download="CV_Mouhamadou_Bamba_Diagne.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
          >
            <Download size={11} />
            <span>CV</span>
          </a>

          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="p-1.5 text-zinc-600 dark:text-zinc-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          )}

          {toggleLangue && (
            <button
              onClick={toggleLangue}
              className="p-1 text-zinc-600 dark:text-zinc-300 font-mono text-[11px] uppercase"
            >
              {langue}
            </button>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 text-zinc-900 dark:text-white rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* MENU DÉROULANT FLOTTANT MOBILE */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="md:hidden pointer-events-auto mt-2 mx-auto max-w-sm bg-white/95 dark:bg-[#121215]/95 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-2xl p-4 shadow-2xl"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left w-full text-xs font-semibold px-3 py-2.5 rounded-xl transition-colors ${
                      activeSection === item.id
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {isEn ? item.en : item.fr}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
