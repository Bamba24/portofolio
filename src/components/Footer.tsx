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
    <footer className="border-t border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-400 py-10 transition-colors">
      <div className="portfolio-container flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* CRÉDITS */}
        <div className="text-center sm:text-left text-xs space-y-1">
          <p className="text-zinc-700 dark:text-zinc-300 font-medium">
            Mouhamadou Bamba Diagne —{" "}
            <span className="text-zinc-500 dark:text-zinc-400">
              {isEn ? "Fullstack Software Engineer" : "Ingénieur Logiciel Fullstack"}
            </span>
          </p>
          <p className="text-zinc-400 dark:text-zinc-500 text-[11px]">
            © {currentYear} • {isEn ? "Built with Next.js, React & Tailwind CSS" : "Conçu avec Next.js, React & Tailwind CSS"}
          </p>
        </div>

        {/* LIENS SOCIAUX RAPIDES & RETOUR EN HAUT */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href="https://github.com/Bamba24" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a 
              href="https://www.linkedin.com/in/mouhamadou-bamba-diagne-59063a247/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a 
              href="https://bamba-dev.vercel.app/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Blog
            </a>
          </div>

          <button
            onClick={scrollToTop}
            title={isEn ? "Back to top" : "Retour en haut"}
            className="w-8 h-8 rounded-lg border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
