import { useContext } from 'react';
import { Github, Linkedin, MessageCircle, BookOpen } from 'lucide-react';
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
      icon: <Github size={48} />
    },
    {
      name: "LinkedIn",
      handle: "linkedin.com/in/bamba-diagne",
      url: "https://www.linkedin.com/in/mouhamadou-bamba-diagne-59063a247/",
      icon: <Linkedin size={48} />
    },
    {
      name: "WhatsApp",
      handle: "+221 77 825 71 62",
      url: "https://wa.me/221778257162",
      icon: <MessageCircle size={48} />
    },
    {
      name: "Blog Bamba.dev",
      handle: "bamba-dev.vercel.app",
      url: "https://bamba-dev.vercel.app/",
      icon: <BookOpen size={48} />
    }
  ];

  return (
    <section 
      id="social" 
      className="py-24 bg-[#f8fafc] dark:bg-[#1f2235] text-slate-900 dark:text-white border-t border-slate-200 dark:border-[#ffc576]/15 relative transition-colors duration-300"
    >
      <div className="boyer-container">
        
        {/* EN-TÊTE EXACT JONATHAN BOYER : RÉSEAUX SOCIAUX -> ME RETROUVER */}
        <div className="mb-14 text-left">
          <span className="section__top-title">
            {isEn ? "Social Networks" : "Réseaux sociaux"}
          </span>
          <h2 className="section__title !mb-3">
            {isEn ? "Find Me Online" : "Me retrouver"}
          </h2>
          <p className="text-slate-600 dark:text-[#9899a8] text-base max-w-xl">
            {isEn
              ? "Follow my open-source contributions, professional journey, or reach out directly."
              : "Suivez mes contributions open-source, mon actualité professionnelle ou contactez-moi directement."}
          </p>
        </div>

        {/* GRILLE DES LIENS SOCIAUX SIGNATURE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-7 bg-white dark:bg-[#2c304a] border border-slate-200 dark:border-[#ffc576]/60 rounded-sm text-left overflow-hidden transition-all duration-300 group hover:bg-[#d97706] dark:hover:bg-[#ffc576] block cursor-pointer shadow-md hover:shadow-2xl"
            >
              {/* Nom du réseau (Playfair Display) */}
              <strong className="font-serif text-2xl font-bold text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-[#1f2235] transition-colors block mb-1">
                {item.name}
              </strong>

              {/* Handle / URL */}
              <span className="text-sm font-medium text-[#b45309] dark:text-[#ffc576] group-hover:text-white/90 dark:group-hover:text-[#1f2235]/80 transition-colors block truncate pr-12">
                {item.handle}
              </span>

              {/* Grande icône filigrane en arrière-plan */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-900/10 dark:text-white/10 group-hover:text-white/25 dark:group-hover:text-[#1f2235]/25 transition-all duration-300 group-hover:scale-110 pointer-events-none">
                {item.icon}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
