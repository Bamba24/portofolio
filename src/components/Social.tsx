import { useContext } from 'react';
import { Github, Linkedin, MessageCircle, BookOpen, Share2, ArrowUpRight } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Social() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const socialLinks = [
    {
      name: "GitHub",
      handle: "github.com/Bamba24",
      url: "https://github.com/Bamba24",
      icon: <Github size={24} />
    },
    {
      name: "LinkedIn",
      handle: "linkedin.com/in/bamba-diagne",
      url: "https://www.linkedin.com/in/mouhamadou-bamba-diagne-59063a247/",
      icon: <Linkedin size={24} />
    },
    {
      name: "WhatsApp",
      handle: "+221 77 825 71 62",
      url: "https://wa.me/221778257162",
      icon: <MessageCircle size={24} />
    },
    {
      name: "Blog Bamba.dev",
      handle: "bamba-dev.vercel.app",
      url: "https://bamba-dev.vercel.app/",
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <section 
      id="social" 
      className="py-24 border-t border-zinc-200 dark:border-white/10 transition-colors"
    >
      <div className="portfolio-container">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="mb-12 text-left">
          <span className="section-tag">
            <Share2 size={12} />
            {isEn ? "Online Presence" : "Réseaux & Écosystème"}
          </span>
          <h2 className="section-heading">
            {isEn ? "Connect & Follow My Work" : "Me retrouver en ligne"}
          </h2>
          <p className="section-desc">
            {isEn
              ? "Follow my open-source commits, read my engineering articles, or connect on LinkedIn and WhatsApp."
              : "Suivez mes contributions open-source, lisez mes articles techniques ou écrivez-moi directement."}
          </p>
        </div>

        {/* GRILLE DES LIENS SOCIAUX BENTO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {socialLinks.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bento-card p-6 text-left group cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <strong className="text-lg font-bold text-zinc-900 dark:text-white block mb-1">
                {item.name}
              </strong>

              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block truncate">
                {item.handle}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
