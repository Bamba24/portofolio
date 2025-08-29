import { Heart, Code } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LangueContext } from '../context/langueContext';

export default function Footer() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? "light";

  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";

  return (
    <footer className={`py-12 ${theme === "light" ? "bg-blue-900 text-white" : "bg-gray-800 text-gray-200"}`}>
      <div className="container-max">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code size={20} />
            <span className="text-lg font-semibold">
              {langue === 'fr'
                ? 'Mouhamadou Bamba Diagne - Développeur Fullstack'
                : 'Mouhamadou Bamba Diagne - Fullstack Developer'}
            </span>
          </div>
          
          <p className="text-blue-200 mb-6">
            {langue === 'fr'
              ? "Passionné par la création d'applications web et mobile innovantes"
              : "Passionate about creating innovative web and mobile applications"}
          </p>
          
          <div className="flex items-center justify-center gap-1 text-blue-200">
            <span>{langue === 'fr' ? 'Fait avec' : 'Made with'}</span>
            <Heart size={16} className="text-red-400" />
            <span>React & TypeScript</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-800">
            <p className="text-blue-200 text-sm">
              {langue === 'fr'
                ? '© 2024 Mouhamadou Bamba Diagne. Tous droits réservés.'
                : '© 2024 Mouhamadou Bamba Diagne. All rights reserved.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
