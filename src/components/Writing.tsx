import { useContext } from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar, Sparkles } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Writing() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const articles = [
    {
      titleFr: "Next.js App Router, SSG & Optimisation SEO Moderne",
      titleEn: "Next.js App Router, SSG & Modern SEO Optimization",
      descFr: "Comment structurer une application Next.js pour un pré-rendu statique optimal, des métadonnées dynamiques et une indexation parfaite.",
      descEn: "How to structure a Next.js application for optimal static pre-rendering, dynamic OpenGraph metadata, and flawless indexing.",
      date: "2026",
      readTime: "6 min",
      tags: ["Next.js", "SEO", "TypeScript"],
      url: "https://bamba-dev.vercel.app/en/posts"
    },
    {
      titleFr: "Architecture d'APIs Modulaires avec NestJS, TypeScript & Prisma",
      titleEn: "Modular API Architecture with NestJS, TypeScript & Prisma",
      descFr: "Bonnes pratiques de clean architecture, séparation des responsabilités et validation stricte avec DTOs et ORM relationnel.",
      descEn: "Clean architecture best practices, separation of concerns, and strict schema validation with DTOs and relational ORMs.",
      date: "2026",
      readTime: "8 min",
      tags: ["NestJS", "Backend", "Prisma"],
      url: "https://bamba-dev.vercel.app/en/posts"
    },
    {
      titleFr: "Conteneurisation Docker & Intégration Continue avec GitLab CI",
      titleEn: "Docker Containerization & Continuous Integration with GitLab CI",
      descFr: "Mettre en place un pipeline de livraison reproductible pour garantir la stabilité et la rapidité des déploiements en production.",
      descEn: "Setting up a reproducible delivery pipeline to ensure deployment stability, testing, and speed in production environments.",
      date: "2026",
      readTime: "5 min",
      tags: ["Docker", "GitLab CI", "DevOps"],
      url: "https://bamba-dev.vercel.app/en/posts"
    }
  ];

  return (
    <section id="writing" className="py-24 border-t border-zinc-200 dark:border-white/10 transition-colors">
      <div className="portfolio-container">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <span className="section-tag">
              <BookOpen size={12} />
              {isEn ? "Technical Writing" : "Veille & Écriture"}
            </span>
            <h2 className="section-heading">
              {isEn ? "Engineering Blog & Insights" : "Articles & Retours d'Expérience"}
            </h2>
            <p className="section-desc">
              {isEn
                ? "I share hands-on learnings, architectural patterns, and production takeaways on my engineering blog."
                : "Je documente mes apprentissages concrets, choix d'architecture et bonnes pratiques d'ingénierie logicielle."}
            </p>
          </div>

          <a
            href="https://bamba-dev.vercel.app/en/posts"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary self-start md:self-end"
          >
            <span>{isEn ? "Visit bamba.dev" : "Explorer bamba.dev"}</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bento-card p-6 flex flex-col justify-between text-left group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors mb-3 leading-snug">
                  {isEn ? article.titleEn : article.titleFr}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {isEn ? article.descEn : article.descFr}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-all shrink-0 ml-2">
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
