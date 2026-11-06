import { Code, Zap, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function About() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const values = [
    {
      icon: <Code size={22} className="text-[#d97706] dark:text-[#ffc576]" />,
      title: isEn ? 'Clean Code & Architecture' : 'Code propre & Architecture',
      desc: isEn 
        ? 'I write modular, maintainable, and typed code following SOLID principles and design patterns.' 
        : 'Je conçois des architectures modulaires, typées et maintenables dans le respect des bonnes pratiques de clean code.'
    },
    {
      icon: <Zap size={22} className="text-[#d97706] dark:text-[#ffc576]" />,
      title: isEn ? 'Performance & Core Web Vitals' : 'Performance & Vitesse',
      desc: isEn 
        ? 'Instant rendering, bundle optimization, SSR/SSG caching, and ultra-smooth fluid navigation.' 
        : 'Temps de chargement minimaux, optimisation des bundles, SSR/SSG et fluidité totale des interactions.'
    },
    {
      icon: <Layers size={22} className="text-[#d97706] dark:text-[#ffc576]" />,
      title: isEn ? 'Fullstack & Mobile Versatility' : 'Polyvalence Web & Mobile',
      desc: isEn 
        ? 'From relational schemas and REST APIs to mobile apps and modern reactive interfaces.' 
        : 'De la modélisation de base de données aux APIs REST jusqu’aux interfaces web Next.js et applications mobiles React Native.'
    },
    {
      icon: <ShieldCheck size={22} className="text-[#d97706] dark:text-[#ffc576]" />,
      title: isEn ? 'Production Rigor & Delivery' : 'Rigueur & Déploiement',
      desc: isEn 
        ? 'Git discipline, Docker containerization, automated testing, and CI/CD pipelines.' 
        : 'Discipline Git, conteneurisation Docker, vérifications strictes et déploiement reproductible en production.'
    }
  ];

  const highlights = [
    isEn ? "Fullstack development with TypeScript, Next.js & NestJS" : "Développement Fullstack avec TypeScript, Next.js & NestJS",
    isEn ? "Cross-platform mobile apps with React Native & Expo" : "Développement mobile multiplateforme avec React Native & Expo",
    isEn ? "Workflow & task automation" : "Conception d'automatisations de processus",
    isEn ? "DevOps fundamentals with Docker & GitLab" : "Fondamentaux DevOps avec Docker & GitLab",
    isEn ? "Relational databases & ORMs (PostgreSQL, MySQL, Prisma)" : "Bases de données relationnelles & ORMs (PostgreSQL, MySQL, Prisma)"
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#1f2235] text-slate-900 dark:text-white border-t border-slate-200 dark:border-[#ffc576]/10 transition-colors duration-300">
      <div className="boyer-container">
        
        {/* EN-TÊTE DE SECTION STYLE JONATHAN BOYER */}
        <div className="mb-14 text-left">
          <span className="section__top-title">
            {isEn ? "About Me" : "À propos"}
          </span>
          <h2 className="section__title">
            {isEn ? "My Journey & Philosophy" : "Mon Parcours & Philosophie"}
          </h2>
        </div>

        {/* PRÉSENTATION & STATS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <motion.div 
            className="lg:col-span-7 space-y-5 text-left text-slate-600 dark:text-[#9899a8] leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              {isEn ? (
                <>
                  Passionate about software engineering and modern interface design, I contribute to real-world production applications with experience at companies such as <strong className="text-slate-900 dark:text-white">Xarala Academy</strong> and <strong className="text-slate-900 dark:text-white">Primelec Services</strong>. My experience spans high-traffic e-learning platforms, commercial management systems (POS, stock), and full mobile applications.
                </>
              ) : (
                <>
                  Passionné par l’ingénierie logicielle et le développement d'interfaces modernes, j'interviens sur des applications concrètes en production acquises notamment au sein de <strong className="text-slate-900 dark:text-white">Xarala Academy</strong> et <strong className="text-slate-900 dark:text-white">Primelec Services</strong>, allant de plateformes e-learning à fort trafic à des systèmes de gestion commerciale (POS, stocks) et des applications mobiles complètes.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  My approach is centered around <strong className="text-slate-900 dark:text-white">TypeScript</strong>, <strong className="text-slate-900 dark:text-white">Next.js</strong>, and <strong className="text-slate-900 dark:text-white">NestJS</strong> to build robust architectures and responsive user experiences. I also design automated workflows and apply DevOps practices (Docker, GitLab).
                </>
              ) : (
                <>
                  Ma démarche repose sur une architecture robuste et maintenable articulée autour de <strong className="text-slate-900 dark:text-white">TypeScript</strong>, <strong className="text-slate-900 dark:text-white">Next.js</strong> et <strong className="text-slate-900 dark:text-white">NestJS</strong>, tout en garantissant une expérience utilisateur ergonomique et réactive. J'y intègre également la conception d'automatisations et les fondamentaux du DevOps (Docker, GitLab).
                </>
              )}
            </p>
          </motion.div>

          {/* COLONNE STATS & CHIFFRES CLÉS */}
          <motion.div 
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {[
              { num: "2+", label: isEn ? "Years of active coding" : "Années de pratique active" },
              { num: "7+", label: isEn ? "Shipped projects" : "Projets complets livrés" },
              { num: "100%", label: isEn ? "Client satisfaction" : "Engagement & rigueur" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-slate-50 dark:bg-[#313552] border border-slate-200 dark:border-[#ffc576]/25 p-6 rounded-sm text-left hover:border-[#d97706] dark:hover:border-[#ffc576] transition-colors group shadow-xs"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#b45309] dark:text-[#ffc576] group-hover:scale-105 transition-transform duration-300">
                  {stat.num}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-[#9899a8] mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
