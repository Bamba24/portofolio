import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';

export default function Footer() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          
          {/* Logo / Nom */}
          <div className="flex items-center gap-3 mb-6 group cursor-default">
            <div className="w-10 h-10 border border-blue-700 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <Code size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">
              Bamba <span className="text-blue-400">Diagne</span>
            </span>
          </div>

          {/* Description courte */}
          <p className="text-blue-200/60 max-w-md text-center text-sm leading-relaxed mb-10">
            {langue === 'fr'
              ? "Architecte de solutions digitales, spécialisé dans le développement d'interfaces modernes et performantes au Sénégal."
              : "Digital solutions architect, specialized in developing modern and high-performance interfaces in Senegal."}
          </p>

          {/* Liens Sociaux Discrets */}
          <div className="flex gap-8 mb-12">
            {[
              { icon: <Github size={20} />, href: "https://github.com/Bamba24/" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mouhamadou-bamba-diagne-59063a247/" },
              { icon: <Mail size={20} />, href: "mailto:gameurbamba68@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                className="text-blue-200/50 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Crédits */}
          <div className="w-full pt-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200/40">
            <p>
              © {currentYear} — {langue === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}
            </p>
            
            <div className="flex items-center gap-2">
              <span>{langue === 'fr' ? 'Propulsé par' : 'Powered by'}</span>
              <div className="flex items-center gap-1.5 bg-blue-800/30 px-3 py-1 rounded-full">
                <Heart size={10} className="text-red-500 fill-red-500" />
                <span className="text-blue-200/60">React & Next.js</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}