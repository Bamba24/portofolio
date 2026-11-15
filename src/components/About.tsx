import { Code, Zap, CheckCircle2, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function About() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const values = [
    {
      icon: <Code size={20} className="text-amber-500 dark:text-amber-400" />,
      title: isEn ? 'Clean Code & Architecture' : 'Code Propre & Architecture',
      desc: isEn 
        ? 'Modular, maintainable, and typed code following SOLID principles, design patterns, and clean separation of concerns.' 
        : 'Architectures modulaires, typées et maintenables dans le respect des principes SOLID et des bonnes pratiques de clean code.'
    },
    {
      icon: <Zap size={20} className="text-amber-500 dark:text-amber-400" />,
      title: isEn ? 'Performance & Vitals' : 'Performance & Vitesse',
      desc: isEn 
        ? 'Instant rendering, bundle optimization, SSR/SSG caching, and smooth, responsive interaction flows.' 
        : 'Temps de chargement minimaux, optimisation des bundles, SSR/SSG et fluidité totale des interactions utilisateur.'
    },
    {
      icon: <Layers size={20} className="text-amber-500 dark:text-amber-400" />,
      title: isEn ? 'Fullstack & Mobile Delivery' : 'Polyvalence Web & Mobile',
      desc: isEn 
        ? 'From relational schemas and REST/GraphQL APIs to reactive Next.js frontends and cross-platform React Native apps.' 
        : 'De la modélisation de bases relationnelles et APIs NestJS jusqu’aux interfaces réactives Next.js et applications mobiles React Native.'
    },
    {
      icon: <ShieldCheck size={20} className="text-amber-500 dark:text-amber-400" />,
      title: isEn ? 'Production Rigor & CI/CD' : 'Rigueur & Déploiement',
      desc: isEn 
        ? 'GitLab/GitHub version control discipline, Docker containerization, automated testing, and reliable cloud deployments.' 
        : 'Discipline de versioning GitLab/GitHub, conteneurisation Docker, vérifications strictes et déploiements reproductibles en production.'
    }
  ];

  const highlights = [
    isEn ? "Fullstack development with TypeScript, Next.js & NestJS" : "Développement Fullstack avec TypeScript, Next.js & NestJS",
    isEn ? "Cross-platform mobile apps with React Native & Expo" : "Développement mobile multiplateforme avec React Native & Expo",
    isEn ? "Workflow & task automation" : "Conception d'automatisations de processus & scripts",
    isEn ? "DevOps fundamentals with Docker & GitLab CI" : "Fondamentaux DevOps avec Docker & GitLab CI",
    isEn ? "Relational databases & ORMs (PostgreSQL, MySQL, Prisma)" : "Bases de données relationnelles & ORMs (PostgreSQL, MySQL, Prisma)"
  ];

  return (
    <section id="about" className="py-24 border-t border-zinc-200 dark:border-white/10 transition-colors">
      <div className="portfolio-container">
        
        {/* En-tête de section */}
        <div className="mb-14 text-left">
          <span className="section-tag">
            {isEn ? "Background & Philosophy" : "Parcours & Philosophie"}
          </span>
          <h2 className="section-heading">
            {isEn ? "Engineering Approach & Mindset" : "Mon Parcours & Philosophie"}
          </h2>
          <p className="section-desc">
            {isEn
              ? "Combining technical rigor, product vision, and production engineering to deliver high-impact software."
              : "Allier rigueur technique, sensibilité produit et exigence d'ingénierie pour concevoir des applications durables."}
          </p>
        </div>

        {/* Présentation & Valeurs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          <motion.div 
            className="lg:col-span-7 space-y-5 text-left text-zinc-600 dark:text-zinc-400 leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              {isEn ? (
                <>
                  Passionate about software engineering and modern interface design, I contribute to real-world production applications with experience at companies such as <strong className="text-zinc-900 dark:text-white font-semibold">Xarala Academy</strong> and <strong className="text-zinc-900 dark:text-white font-semibold">Primelec Services</strong>. My experience spans high-traffic e-learning platforms, commercial management systems (POS, stock), and full mobile applications.
                </>
              ) : (
                <>
                  Passionné par l’ingénierie logicielle et le développement d'interfaces modernes, j'interviens sur des applications concrètes en production acquises notamment au sein de <strong className="text-zinc-900 dark:text-white font-semibold">Xarala Academy</strong> et <strong className="text-zinc-900 dark:text-white font-semibold">Primelec Services</strong>, allant de plateformes e-learning à fort trafic à des systèmes de gestion commerciale (POS, stocks) et des applications mobiles complètes.
                </>
              )}
            </p>
            <p>
              {isEn ? (
                <>
                  My approach is centered around <strong className="text-zinc-900 dark:text-white font-semibold">TypeScript</strong>, <strong className="text-zinc-900 dark:text-white font-semibold">Next.js</strong>, and <strong className="text-zinc-900 dark:text-white font-semibold">NestJS</strong> to build robust architectures and responsive user experiences. I also design automated workflows and apply DevOps practices (Docker, GitLab CI).
                </>
              ) : (
                <>
                  Ma démarche repose sur une architecture robuste et maintenable articulée autour de <strong className="text-zinc-900 dark:text-white font-semibold">TypeScript</strong>, <strong className="text-zinc-900 dark:text-white font-semibold">Next.js</strong> et <strong className="text-zinc-900 dark:text-white font-semibold">NestJS</strong>, tout en garantissant une expérience utilisateur ergonomique et réactive. J'y intègre également la conception d'automatisations et les fondamentaux du DevOps (Docker, GitLab CI).
                </>
              )}
            </p>

            {/* Checklist des atouts clés */}
            <div className="pt-2 space-y-2.5">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Grille des 4 piliers d'ingénierie (Bento Style) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bento-card p-5 text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3 text-zinc-800 dark:text-zinc-200">
                  {val.icon}
                </div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1.5">
                  {val.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
