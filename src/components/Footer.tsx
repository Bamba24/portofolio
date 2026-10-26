import { ArrowUp } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';

export default function Footer() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const isEn = langue === 'en';
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#1f2235] border-t border-slate-200 dark:border-[#ffc576]/20 text-slate-500 dark:text-[#9899a8] py-12 transition-colors duration-300">
      <div className="boyer-container flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* CRÉDITS STYLE JONATHAN BOYER */}
        <div className="text-center sm:text-left text-xs font-medium space-y-1">
          <p className="text-slate-700 dark:text-[#cbd5e1]">
            {isEn 
              ? "Design inspired by Jonathan Boyer — Integration & Development by" 
              : "Design inspiré par Jonathan Boyer — Intégration & développement par"}{" "}
            <span className="text-[#b45309] dark:text-[#ffc576] font-semibold">Mouhamadou Bamba Diagne</span>
          </p>
          <p className="text-slate-500 dark:text-[#9899a8] text-[11px]">
            © {currentYear} • {isEn ? "All rights reserved" : "Tous droits réservés"}
          </p>
        </div>

        {/* LIENS SOCIAUX RAPIDES & RETOUR EN HAUT */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
            <a 
              href="https://github.com/Bamba24" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-600 dark:text-[#9899a8] hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-300 dark:text-white/10">•</span>
            <a 
              href="https://www.linkedin.com/in/mouhamadou-bamba-diagne-59063a247/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-600 dark:text-[#9899a8] hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <button
            onClick={scrollToTop}
            title={isEn ? "Back to top" : "Retour en haut"}
            className="w-9 h-9 border border-slate-300 dark:border-[#ffc576]/40 flex items-center justify-center text-[#b45309] dark:text-[#ffc576] hover:bg-[#d97706] dark:hover:bg-[#ffc576] hover:text-white dark:hover:text-[#1f2235] transition-all rounded-xs ml-2 cursor-pointer shadow-2xs"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
