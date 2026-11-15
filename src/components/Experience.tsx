import { useContext } from 'react';
import { MapPin, ExternalLink, Calendar, Briefcase, GraduationCap, Download, CheckCircle2 } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export interface ExperienceItem {
  id: number;
  titleFr: string;
  titleEn: string;
  company: string;
  url?: string;
  location: string;
  period: string;
  duration?: string;
  type: 'Stage' | 'Projet';
  logoText: string;
  logoImage?: string;
  descriptionFr: string;
  descriptionEn: string;
  missions: string[];
  missionsEn: string[];
  stack: string[];
}

export default function Experience() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const experiences: ExperienceItem[] = [
    {
      id: 2,
      titleFr: "Stagiaire Développeur Web & Mobile Fullstack",
      titleEn: "Web & Mobile Fullstack Developer Intern",
      company: "Xarala Academy",
      url: "https://xarala.co",
      location: "Dakar / Remote, Sénégal",
      period: "Juin 2026 – Octobre 2026",
      duration: "5 mois",
      type: "Stage",
      logoText: "XA",
      logoImage: "/images/xarala.png",
      descriptionFr:
        "Immersion complète au sein de l'équipe technique de Xarala Academy, avec participation active sur des applications concrètes en production dont la plateforme e-learning et le CRM de gestion commerciale.",
      descriptionEn:
        "Full technical immersion within Xarala Academy's engineering team, actively contributing to production applications including the e-learning platform and the business management CRM.",
      missions: [
        "Développement frontend de l'application CRM de gestion de stock et de ventes (POS) avec Next.js, GraphQL, TanStack Query, Zustand et Zod",
        "Contribution au développement de nouvelles fonctionnalités et amélioration de l'UI sur la plateforme e-learning Xarala Academy",
        "Collaboration d'équipe en méthodologie agile Scrum, revues de code et intégration continue via GitLab",
        "Intégration et consommation d'APIs sécurisées avec TypeScript, validation des données et requêtes GraphQL / REST"
      ],
      missionsEn: [
        "Frontend development for the Stock & Sales Management CRM (POS) using Next.js, GraphQL, TanStack Query, Zustand, and Zod",
        "Feature development and UI improvements on the production Xarala Academy e-learning platform",
        "Agile Scrum team collaboration, peer code reviews, and CI workflows on GitLab",
        "Secure API integration and data handling with TypeScript, schema validation, and GraphQL / REST endpoints"
      ],
      stack: ["Next.js", "React", "TypeScript", "Python", "GraphQL", "PostgreSQL", "Zod", "Zustand", "TanStack Query", "GitLab"]
    },
    {
      id: 1,
      titleFr: "Stagiaire Développeur Fullstack & Mobile",
      titleEn: "Fullstack & Mobile Developer Intern",
      company: "Primelec Services",
      url: "https://primelec-services.com",
      location: "France / Remote",
      period: "Janvier 2026 – Mars 2026",
      duration: "3 mois",
      type: "Stage",
      logoText: "PS",
      logoImage: "/images/primelec.png",
      descriptionFr:
        "Stage en développement fullstack JavaScript et mobile au sein de Primelec Services avec participation active à des projets d'entreprises réels.",
      descriptionEn:
        "Internship in fullstack JavaScript and mobile development at Primelec Services, contributing to real-world corporate projects.",
      missions: [
        "Développement d’interfaces web dynamiques avec React & Next.js",
        "Participation au développement d'applications mobiles avec React Native & Expo",
        "Correction de bugs, optimisation des performances et refonte UI",
        "Collaboration en équipe en méthode agile sur des projets clients"
      ],
      missionsEn: [
        "Frontend web development with React & Next.js",
        "Participation in mobile application development using React Native & Expo",
        "Bug fixing, performance optimization, and UI refactoring",
        "Agile team collaboration on live client projects"
      ],
      stack: ["React", "Next.js", "React Native", "TypeScript", "TailwindCSS"]
    }
  ];

  const education = [
    {
      degreeFr: "Certification Développeur Fullstack & Mobile",
      degreeEn: "Fullstack & Mobile Developer Certification",
      school: "Xarala Academy",
      location: "Dakar / En ligne",
      period: "Fév. 2025 – Juil. 2025",
      status: "Certifié",
      statusEn: "Certified",
      highlightsFr: [
        "Projets Web & Mobile complets en production",
        "React, Next.js, TypeScript, Node.js, NestJS, Prisma & MySQL",
        "Développement Mobile multiplateforme React Native & Expo"
      ],
      highlightsEn: [
        "End-to-end production Web & Mobile applications",
        "React, Next.js, TypeScript, Node.js, NestJS, Prisma & MySQL",
        "Cross-platform Mobile Development with React Native & Expo"
      ]
    },
    {
      degreeFr: "Concepteur Développeur Java Spring Boot & Next.js",
      degreeEn: "Java Spring Boot & Next.js Developer Training",
      school: "Force-N",
      location: "Sénégal / En ligne",
      period: isEn ? "In progress (2026)" : "En cours (2026)",
      status: "En cours",
      statusEn: "In progress",
      highlightsFr: [
        "Architectures backend d'entreprise & APIs REST Spring Boot",
        "Interfaces frontend réactives Next.js & TypeScript"
      ],
      highlightsEn: [
        "Enterprise backend architectures & Spring Boot REST APIs",
        "Reactive Next.js & TypeScript frontend interfaces"
      ]
    },
    {
      degreeFr: "Formation Développeur Python",
      degreeEn: "Python Developer Training",
      school: "Force-N",
      location: "Sénégal / En ligne",
      period: isEn ? "In progress (2026)" : "En cours (2026)",
      status: "En cours",
      statusEn: "In progress",
      highlightsFr: [
        "Programmation orientée objet, structures de données & scripts d'automatisation"
      ],
      highlightsEn: [
        "Object-oriented programming, data structures & automation scripts"
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 border-t border-zinc-200 dark:border-white/10 transition-colors"
    >
      <div className="portfolio-container">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="mb-12 text-left">
          <span className="section-tag">
            <Briefcase size={12} />
            {isEn ? "Career & Academic Track" : "Parcours & Formations"}
          </span>
          <h2 className="section-heading">
            {isEn ? "Experience & Certifications" : "Expériences & Certifications"}
          </h2>
          <p className="section-desc">
            {isEn
              ? "My professional engineering timeline alongside my specialized technical certifications."
              : "Mon parcours en entreprise sur des produits réels, accompagné de mes certifications techniques."}
          </p>
        </div>

        {/* GRILLE ASYMÉTRIQUE 2 COLONNES : EXPÉRIENCES (7 COLS) + FORMATIONS (5 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
          
          {/* COLONNE GAUCHE (7 COLS) : EXPÉRIENCES PROFESSIONNELLES */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <Briefcase size={14} className="text-amber-500" />
                {isEn ? "Professional Experience" : "Expériences en Entreprise"}
              </h3>
              <span className="text-[11px] font-mono text-zinc-400">
                Xarala • Primelec
              </span>
            </div>

            <div className="relative pl-6 border-l border-zinc-200 dark:border-zinc-800 space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative bento-card p-6"
                >
                  {/* Point sur la timeline verticale */}
                  <span className="absolute -left-[31px] top-7 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-[#fafafa] dark:ring-[#09090b]" />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center justify-center shrink-0 p-1.5 overflow-hidden shadow-2xs">
                        {exp.logoImage ? (
                          <img
                            src={exp.logoImage}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="font-bold text-amber-500 text-xs">
                            {exp.logoText}
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                          {isEn ? exp.titleEn : exp.titleFr}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                          {exp.url ? (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold text-zinc-900 dark:text-zinc-200 hover:text-amber-500 dark:hover:text-amber-400 inline-flex items-center gap-1"
                            >
                              <span>{exp.company}</span>
                              <ExternalLink size={11} />
                            </a>
                          ) : (
                            <span className="font-semibold">{exp.company}</span>
                          )}
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900 text-[11px] font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 rounded-md self-start shrink-0">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    {isEn ? exp.descriptionEn : exp.descriptionFr}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {(isEn ? exp.missionsEn : exp.missions).map((mission, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold text-xs leading-relaxed">•</span>
                        <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {mission}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3.5 border-t border-zinc-100 dark:border-white/5 flex flex-wrap gap-1.5">
                    {exp.stack.map((tech, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COLONNE DROITE (5 COLS) : FORMATIONS, CERTIFICATIONS & CV */}
          <div id="education" className="lg:col-span-5 space-y-5">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                <GraduationCap size={14} className="text-amber-500" />
                {isEn ? "Education & Certifications" : "Formations & Certifications"}
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bento-card p-5"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {item.school}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-200 dark:border-white/5">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white mb-3 leading-snug">
                    {isEn ? item.degreeEn : item.degreeFr}
                  </h4>

                  <div className="space-y-1.5">
                    {(isEn ? item.highlightsEn : item.highlightsFr).map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Carte CTA Téléchargement CV Complet */}
              <div className="bento-card p-5 bg-gradient-to-br from-amber-500/5 via-transparent to-emerald-500/5 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {isEn ? "Full Resume / CV" : "Curriculum Vitae Complet"}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {isEn
                      ? "Download the printable PDF version with full details."
                      : "Version PDF détaillée prête pour le recrutement."}
                  </p>
                </div>
                <a
                  href="/cv-bamba.pdf"
                  download="CV_Mouhamadou_Bamba_Diagne.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary !py-2 !px-3.5 !text-xs shrink-0"
                >
                  <Download size={13} />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
