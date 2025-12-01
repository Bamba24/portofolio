import { useState, useEffect, useContext } from 'react';
import { Menu, X, Languages, SunMoon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { LangueContext } from '../context/langueContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext) || { theme: 'light', toggleTheme: () => {} };
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? 'fr';
  const toggleLangue = contextLangue?.toggleLangue;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { en: 'Home', fr: 'Accueil', id: 'hero' },
    { en: 'About', fr: 'À propos', id: 'about' },
    { en: 'Skills', fr: 'Compétences', id: 'skills' },
    { en: 'Experience', fr: 'Expérience', id: 'experience' },
    { en: 'Education', fr: 'Formation', id: 'education' },
    { en: 'Projects', fr: 'Projets', id: 'projects' },
    { en: 'Contact', fr: 'Contact', id: 'contact' },
  ];

  // Couleurs cohérentes selon le thème
  const colors = {
    text: theme === 'light' ? 'text-gray-900' : 'text-gray-50',
    textSecondary: theme === 'light' ? 'text-gray-700' : 'text-gray-300',
    bgHover: theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700',
    bgMenu: theme === 'light' ? 'bg-white' : 'bg-gray-900',
    borderMenu: theme === 'light' ? 'border-gray-200' : 'border-gray-700',
    icon: theme === 'light' ? 'text-gray-600' : 'text-gray-300',
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? (theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-900 shadow-lg') : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <nav className="flex items-center justify-between py-4 px-4">
          <div className={`text-2xl font-bold ${colors.text}`}>Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 font-medium ${colors.textSecondary} hover:text-primary`}
              >
                {langue === 'fr' ? item.fr : item.en}
              </button>
            ))}

            {/* Bouton Langue */}
            <button
              onClick={toggleLangue}
              className={`p-2 rounded-full transition ${colors.bgHover}`}
              title={langue === 'fr' ? 'Switch to English' : 'Passer en Français'}
            >
              <Languages size={20} className={colors.icon} />
            </button>

            {/* Bouton Toggle Theme */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${colors.bgHover}`}
              title="Changer le thème"
            >
              <SunMoon size={20} className={colors.icon} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className={`${colors.textSecondary} md:hidden`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                  {langue === 'fr' ? item.fr : item.en}
                </button>
              ))}

              {/* Langue Mobile */}
              <button
                onClick={toggleLangue}
                className={`flex items-center gap-2 px-4 ${colors.textSecondary} hover:text-primary transition`}
              >
                <Languages size={18} />
                {langue === 'fr' ? 'EN' : 'FR'}
              </button>

              {/* Toggle Theme Mobile */}
              <button
                onClick={toggleTheme}
                className={`flex items-center gap-2 px-4 py-2 ${colors.textSecondary} hover:text-primary transition`}
              >
                <SunMoon size={18} />
                Thème
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
