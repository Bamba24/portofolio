import { useState, useEffect, useContext } from "react";
import { Menu, X, Languages } from "lucide-react";
import { LangueContext } from "../context/langueContext";

export default function Header() {
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? "fr";
  const toggleLangue = contextLangue?.toggleLangue;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { en: "Home", fr: "Accueil", id: "hero" },
    { en: "About", fr: "À propos", id: "about" },
    { en: "Skills", fr: "Compétences", id: "skills" },
    { en: "Experience", fr: "Expérience", id: "experience" },
    { en: "Education", fr: "Formation", id: "education" },
    { en: "Projects", fr: "Projets", id: "projects" },
    { en: "Contact", fr: "Contact", id: "contact" },
  ];

  // 🎨 Palette Light Mode
  const colors = {
    text: "text-gray-900",
    textSecondary: "text-gray-700",
    bgHover: "hover:bg-gray-200",
    bgMenu: "bg-white",
    borderMenu: "border-gray-200",
    icon: "text-gray-600",
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? "bg-white shadow-lg" : "bg-white"}`}
    >
      <div className="container-max">
        <nav className="flex items-center justify-between py-4 px-4">
          <div className={`font-bold ${colors.text} bg-gradient-to-tl from-primary to-white top-6 w-10 h-10 rounded-lg text-white p-2 text-center`}>BD</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 font-medium ${colors.textSecondary} hover:text-primary`}
              >
                {langue === "fr" ? item.fr : item.en}
              </button>
            ))}

            {/* Lang Switch */}
            <button
              onClick={toggleLangue}
              className="p-2 rounded-full transition"
              title={langue === "fr" ? "Switch to English" : "Passer en Français"}
            >
              <Languages size={20} className={colors.icon} />
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className={`${colors.textSecondary} md:hidden`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`${colors.bgMenu} border-t ${colors.borderMenu} md:hidden`}>
            <div className="py-4 space-y-4 px-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 ${colors.textSecondary} hover:text-primary transition-colors duration-300`}
                >
                  {langue === "fr" ? item.fr : item.en}
                </button>
              ))}

              <button
                onClick={toggleLangue}
                className={`flex items-center gap-2 px-4 ${colors.textSecondary} hover:text-primary transition`}
              >
                <Languages size={18} />
                {langue === "fr" ? "EN" : "FR"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
