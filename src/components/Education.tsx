import { Calendar, Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Education() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };
  const isEn = langue === 'en';

  const education = [
    {
      degreeFr: 'Formation Développeur Fullstack & Mobile',
      degreeEn: 'Fullstack & Mobile Developer Certification',
      school: 'Xarala Academy',
      location: 'Dakar / En ligne, Sénégal',
      period: 'Février 2025 – Juillet 2025',
      descriptionFr: 'Formation d\'excellence intensive axée sur la maîtrise de l\'écosystème JavaScript, TypeScript, React, Next.js, Node.js, NestJS et React Native.',
      descriptionEn: 'Intensive excellence training focused on mastering JavaScript, TypeScript, React, Next.js, Node.js, NestJS, and React Native.',
      achievements: [
        'Réalisation complète de projets Web et Mobile',
        'Maîtrise de JavaScript, TypeScript et des fondamentaux web',
        'Développement Frontend avec React, Next.js & TailwindCSS',
        'Développement Backend avec Node.js, NestJS, Prisma & MySQL',
        'Développement Mobile multiplateforme avec React Native & Expo'
      ],
      achievementsEn: [
        'Full implementation of Web and Mobile projects',
        'Mastery of JavaScript, TypeScript, and web core fundamentals',
        'Frontend Development with React, Next.js & TailwindCSS',
        'Backend Development with Node.js, NestJS, Prisma & MySQL',
        'Cross-platform Mobile Development with React Native & Expo'
      ]
    }
  ];

  const certifications = [
    {
      titleFr: 'Développeur Certifié Xarala Academy',
      titleEn: 'Xarala Academy Certified Developer',
      issuer: 'Xarala Academy',
      date: 'Juillet 2025',
      descriptionFr: 'Certification officielle validant les compétences en développement Fullstack JS et Mobile.',
      descriptionEn: 'Official certification validating Fullstack JS & Mobile development skills.'
    },
    {
      titleFr: 'Comprendre le Web',
      titleEn: 'Understanding the Web',
      issuer: 'OpenClassrooms',
      date: '2023',
      descriptionFr: 'Certification sur les serveurs, protocoles HTTP, clients et architecture web.',
      descriptionEn: 'Certification covering servers, HTTP protocols, clients, and web architecture.'
    },
    {
      titleFr: 'Apprenez à programmer avec JavaScript',
      titleEn: 'Learn to Program with JavaScript',
      issuer: 'OpenClassrooms',
      date: '2023',
      descriptionFr: 'Certification sur les algorithmes, la logique de programmation et les bases de JavaScript.',
      descriptionEn: 'Certification covering algorithms, programming logic, and JavaScript fundamentals.'
    },
    {
      titleFr: 'Créez des pages web dynamiques avec JavaScript',
      titleEn: 'Create Dynamic Web Pages with JavaScript',
      issuer: 'OpenClassrooms',
      date: '2023',
      descriptionFr: 'Certification sur la manipulation du DOM, les événements et l\'interactivité web.',
      descriptionEn: 'Certification covering DOM manipulation, event handling, and web interactivity.'
    },
    {
      titleFr: 'Créez votre site web avec HTML5 et CSS3',
      titleEn: 'Build Your Website with HTML5 and CSS3',
      issuer: 'OpenClassrooms',
      date: '2022',
      descriptionFr: 'Certification sur la sémantique HTML5, le CSS3 et le responsive design.',
      descriptionEn: 'Certification covering HTML5 semantics, CSS3, and responsive design.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Section : Style jonathan-boyer.fr */}
        <div className="mb-12 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
            {isEn ? "Diplomas & Credentials" : "Diplômes & Certifications"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isEn ? "Education & Certifications" : "Formation & Diplômes"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* PARCOURS ACADEMIQUE (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <GraduationCap size={16} className="text-blue-900 dark:text-blue-400" />
              <span>{isEn ? 'Academic Training' : 'Parcours Académique'}</span>
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-7 bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-md relative overflow-hidden space-y-4 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-800 pb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {isEn ? edu.degreeEn : edu.degreeFr}
                    </h4>
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-400">
                      {edu.school} • <span className="text-slate-400 font-normal">{edu.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-sm w-fit">
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {isEn ? edu.descriptionEn : edu.descriptionFr}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {isEn ? "Acquired Skills:" : "Compétences clés acquises :"}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {(isEn ? edu.achievementsEn : edu.achievements).map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CERTIFICATIONS (Col 5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <Award size={16} className="text-blue-900 dark:text-blue-400" />
              <span>{isEn ? 'Certifications' : 'Certifications'}</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-md flex items-center justify-between hover:border-blue-900/30 dark:hover:border-blue-500/30 transition-all shadow-xs"
                >
                  <div className="pr-4 space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {isEn ? cert.titleEn : cert.titleFr}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      {cert.issuer} • <span className="text-blue-900 dark:text-blue-400">{cert.date}</span>
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-blue-900 dark:bg-blue-400 shrink-0"></div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}