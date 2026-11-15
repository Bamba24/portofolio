import { useContext } from 'react';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Writing() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const articles = [
    {
      titleFr: "Next.js App Router, SSG & Optimisation SEO Moderne",
      titleEn: "Next.js App Router, SSG & Modern SEO Optimization",
      descFr: "Structurer une application Next.js pour un pré-rendu statique optimal, des métadonnées OpenGraph dynamiques et une indexation rapide.",
      descEn: "How to structure a Next.js application for optimal static pre-rendering, dynamic OpenGraph metadata, and fast indexing.",
      date: "2026",
      readTime: "6 min",
      tags: ["Next.js", "SEO", "TypeScript"],
      url: "https://bamba-dev.vercel.app/en/posts"
    },
    {
      titleFr: "Architecture d'APIs Modulaires avec NestJS, TypeScript & Prisma",
      titleEn: "Modular API Architecture with NestJS, TypeScript & Prisma",
      descFr: "Principes de clean architecture, séparation des responsabilités et validation stricte des schémas avec DTOs et ORM relationnel.",
      descEn: "Clean architecture principles, separation of concerns, and strict schema validation with DTOs and relational ORMs.",
      date: "2026",
      readTime: "8 min",
      tags: ["NestJS", "Backend", "Prisma"],
      url: "https://bamba-dev.vercel.app/en/posts"
    },
    {
      titleFr: "Conteneurisation Docker & Intégration Continue avec GitLab CI",
      titleEn: "Docker Containerization & Continuous Integration with GitLab CI",
      descFr: "Mettre en place un pipeline de livraison reproductible pour garantir la stabilité et la rapidité des déploiements en production.",
      descEn: "Setting up a reproducible delivery pipeline to ensure deployment stability, automated checks, and speed in production.",
      date: "2026",
      readTime: "5 min",
      tags: ["Docker", "GitLab CI", "DevOps"],
      url: "https://bamba-dev.vercel.app/en/posts"
    }
  ];

  return (
    <section id="writing" className="py-20 border-t border-zinc-200 dark:border-white/10 transition-colors">
      <div className="portfolio-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Colonne gauche (4 cols) : Intro éditoriale */}
          <div className="lg:col-span-4 space-y-4">
            <span className="section-tag">
              <BookOpen size={12} />
              {isEn ? "Technical Writing" : "Veille & Écriture"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              {isEn ? "Writing on bamba.dev" : "Notes & Articles sur bamba.dev"}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {isEn
                ? "I write bilingual articles about fullstack architecture, Next.js performance, NestJS backends, and DevOps workflows."
                : "Je partage mes retours d'expérience bilingues sur l'architecture fullstack, Next.js, NestJS et l'automatisation DevOps."}
            </p>
            <div className="pt-2">
              <a
                href="https://bamba-dev.vercel.app/en/posts"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary !py-2 !px-4 !text-xs"
              >
                <span>{isEn ? "Read all articles on bamba.dev" : "Lire tous les articles sur bamba.dev"}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Colonne droite (8 cols) : Liste éditoriale style Lee Robinson */}
          <div className="lg:col-span-8 bento-card divide-y divide-zinc-200/80 dark:divide-white/10 overflow-hidden">
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-zinc-50/80 dark:hover:bg-white/[0.02] transition-colors cursor-pointer block"
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-zinc-400">
                      {article.date}
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-700">•</span>
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                    {isEn ? article.titleEn : article.titleFr}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {isEn ? article.descEn : article.descFr}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-center shrink-0">
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:border-amber-500/40 transition-all">
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
