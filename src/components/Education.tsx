import { CheckCircle2, GraduationCap, Calendar, MapPin } from 'lucide-react';
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
      descriptionFr: 'Formation intensive et professionnalisante axée sur le développement d\'applications d\'entreprise robustes avec Java Spring Boot pour le backend et Next.js pour le frontend.',
      descriptionEn: 'Intensive professional training focused on developing robust enterprise applications with Java Spring Boot for backend and Next.js for frontend.',
      achievements: [
        'Conception d\'architectures backend d\'entreprise et APIs REST avec Java Spring Boot',
        'Développement d\'interfaces frontend réactives et modernes avec Next.js & TypeScript',
        'Persistance des données, sécurité et bonnes pratiques de clean architecture'
      ],
      achievementsEn: [
        'Designing enterprise backend architectures and REST APIs with Java Spring Boot',
        'Building modern and reactive frontend interfaces with Next.js & TypeScript',
        'Data persistence, application security, and clean architecture best practices'
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
        'Maîtrise approfondie des structures de données et de la programmation orientée objet',
        'Conception d\'APIs et de scripts backend en Python',
        'Résolution de problèmes algorithmiques et automatisation'
      ],
      achievementsEn: [
        'In-depth mastery of Python data structures and object-oriented programming',
        'Designing Python backend APIs and automation scripts',
        'Algorithmic problem-solving and automation'
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
        'Full implementation of production-grade Web and Mobile projects',
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
      className="py-24 bg-slate-100/70 dark:bg-[#313552] text-slate-900 dark:text-white border-t border-slate-200 dark:border-[#ffc576]/15 relative transition-colors duration-300"
    >
      <div className="boyer-container">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="mb-16 text-left">
          <span className="section__top-title">
            {isEn ? "Academics & Certifications" : "Formations & Certifications"}
          </span>
          <h2 className="section__title !mb-3">
            {isEn ? "Education & Specializations" : "Formations d'Excellence"}
          </h2>
          <p className="text-slate-600 dark:text-[#cbd5e1] text-base sm:text-lg max-w-xl">
            {isEn
              ? "Comprehensive software engineering programs, specialized training, and tech certifications."
              : "Parcours de formations intensives et certifiantes en ingénierie logicielle."}
          </p>
        </div>

        {/* GRILLE DES FORMATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-slate-200 dark:border-[#ffc576]/30 bg-white dark:bg-[#1f2235]/70 hover:bg-white dark:hover:bg-[#1f2235] hover:border-[#d97706] dark:hover:border-[#ffc576] transition-all duration-300 rounded-sm text-left flex flex-col justify-between group shadow-sm dark:shadow-lg"
            >
              <div>
                {/* Icône & École */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-slate-50 dark:bg-[#313552] rounded-xs border border-slate-200 dark:border-[#ffc576]/30 text-[#d97706] dark:text-[#ffc576] group-hover:scale-105 transition-transform">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#b45309] dark:text-[#ffc576] flex items-center gap-1.5 bg-slate-100 dark:bg-[#313552] px-3 py-1 rounded-xs border border-slate-200 dark:border-white/5">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                </div>

                {/* Nom de la formation (Playfair Display) */}
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#b45309] dark:group-hover:text-[#ffc576] transition-colors leading-snug">
                  {isEn ? item.degreeEn : item.degreeFr}
                </h3>

                {/* Institution & Localisation */}
                <div className="flex items-center gap-2 text-sm text-[#b45309] dark:text-[#ffc576] mb-5 font-semibold">
                  <span>{item.school}</span>
                  <span className="text-slate-300 dark:text-white/20">•</span>
                  <span className="text-slate-500 dark:text-[#9899a8] font-normal flex items-center gap-1">
                    <MapPin size={13} />
                    {item.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-[#9899a8] leading-relaxed mb-6">
                  {isEn ? item.descriptionEn : item.descriptionFr}
                </p>

                {/* Compétences acquises */}
                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-white/5">
                  {(isEn ? item.achievementsEn : item.achievements).map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#d97706] dark:text-[#ffc576] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 dark:text-[#cbd5e1] leading-relaxed">
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
