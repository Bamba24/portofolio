import { CheckCircle2, GraduationCap, Calendar } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Education() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const education = [
    {
      degreeFr: 'Formation Concepteur Développeur Java Spring Boot & Next.js',
      degreeEn: 'Fullstack Java Spring Boot & Next.js Developer Training',
      school: 'Force-N',
      location: 'Sénégal / En ligne',
      period: isEn ? 'In progress (2026)' : 'En cours (2026)',
      descriptionFr: 'Formation intensive axée sur le développement d\'applications d\'entreprise robustes avec Java Spring Boot pour le backend et Next.js pour le frontend.',
      descriptionEn: 'Intensive professional training focused on developing enterprise applications with Java Spring Boot backend and Next.js frontend.',
      achievements: [
        'Conception d\'architectures backend d\'entreprise et APIs REST avec Java Spring Boot',
        'Développement d\'interfaces frontend réactives et modernes avec Next.js & TypeScript',
        'Persistance des données, sécurité et bonnes pratiques de clean architecture'
      ],
      achievementsEn: [
        'Designing enterprise backend architectures and REST APIs with Java Spring Boot',
        'Building modern reactive frontend interfaces with Next.js & TypeScript',
        'Data persistence, security, and clean architecture best practices'
      ]
    },
    {
      degreeFr: 'Formation Développeur Python',
      degreeEn: 'Python Developer Training',
      school: 'Force-N',
      location: 'Sénégal / En ligne',
      period: isEn ? 'In progress (2026)' : 'En cours (2026)',
      descriptionFr: 'Formation spécialisée sur le langage Python, la programmation orientée objet, l\'algorithmie, les frameworks web et le traitement de données.',
      descriptionEn: 'Specialized training covering Python programming, object-oriented design, algorithms, web frameworks, and data processing.',
      achievements: [
        'Maîtrise des structures de données et de la programmation orientée objet',
        'Conception d\'APIs et de scripts backend en Python',
        'Résolution de problèmes algorithmiques et automatisation'
      ],
      achievementsEn: [
        'Data structures and object-oriented programming',
        'Designing Python backend APIs and automation scripts',
        'Algorithmic problem-solving and task automation'
      ]
    },
    {
      degreeFr: 'Certification Développeur Fullstack & Mobile',
      degreeEn: 'Fullstack & Mobile Developer Certification',
      school: 'Xarala Academy',
      location: 'Dakar / En ligne, Sénégal',
      period: 'Février 2025 – Juillet 2025',
      descriptionFr: 'Formation d\'excellence intensive axée sur la maîtrise de l\'écosystème JavaScript, TypeScript, React, Next.js, Node.js, NestJS et React Native.',
      descriptionEn: 'Intensive excellence training focused on mastering JavaScript, TypeScript, React, Next.js, Node.js, NestJS, and React Native.',
      achievements: [
        'Réalisation complète de projets Web et Mobile d\'envergure',
        'Maîtrise de JavaScript, TypeScript et des fondamentaux web modernes',
        'Développement Frontend avec React, Next.js & TailwindCSS',
        'Développement Backend avec Node.js, NestJS, Prisma & MySQL',
        'Développement Mobile multiplateforme avec React Native & Expo'
      ],
      achievementsEn: [
        'Full implementation of production-grade Web and Mobile applications',
        'Mastery of JavaScript, TypeScript, and modern web foundations',
        'Frontend Development with React, Next.js & TailwindCSS',
        'Backend Development with Node.js, NestJS, Prisma & MySQL',
        'Cross-platform Mobile Development with React Native & Expo'
      ]
    }
  ];

  return (
    <section 
      id="education" 
      className="py-24 border-t border-zinc-200 dark:border-white/10 transition-colors"
    >
      <div className="portfolio-container">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="mb-12 text-left">
          <span className="section-tag">
            <GraduationCap size={12} />
            {isEn ? "Academics & Certifications" : "Formations & Certifications"}
          </span>
          <h2 className="section-heading">
            {isEn ? "Education & Specializations" : "Formations & Certifications"}
          </h2>
          <p className="section-desc">
            {isEn
              ? "Comprehensive software engineering programs, specialized training, and tech certifications."
              : "Parcours de formations intensives et certifiantes en ingénierie logicielle."}
          </p>
        </div>

        {/* GRILLE DES FORMATIONS BENTO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bento-card p-7 text-left flex flex-col justify-between group"
            >
              <div>
                {/* Icône & École */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-lg border border-zinc-200 dark:border-white/10 text-amber-500 dark:text-amber-400 group-hover:scale-105 transition-transform">
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded-full font-mono">
                    <Calendar size={11} />
                    {item.period}
                  </span>
                </div>

                {/* Nom de la formation */}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                  {isEn ? item.degreeEn : item.degreeFr}
                </h3>
                
                <div className="text-xs font-semibold text-amber-500 dark:text-amber-400 mb-3">
                  {item.school} • <span className="text-zinc-500 dark:text-zinc-400 font-normal">{item.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {isEn ? item.descriptionEn : item.descriptionFr}
                </p>

                {/* Liste des acquis */}
                <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-white/10">
                  {(isEn ? item.achievementsEn : item.achievements).map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
