import { Calendar, Award, CheckCircle2 } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Education() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };

  // ... (Garde tes tableaux education et certifications inchangés)
   const education = [
    {
      degreeFr: 'Formation Développeur Fullstack & Mobile',
      degreeEn: 'Fullstack & Mobile Developer Training',
      school: 'Xarala Academy',
      location: 'En ligne / Sénégal',
      period: 'Février 2025 - Juillet 2025',
      descriptionFr: 'Formation intensive pour devenir développeur fullstack JavaScript et mobile avec projets pratiques.',
      descriptionEn: 'Intensive training to become a fullstack JavaScript and mobile developer with practical projects.',
      achievements: [
        'Réalisation de projets Web et Mobile',
        'Maîtrise des fondamentaux JavaScript, TypeScript',
        'Développement Frontend avec React / React Native / Next.js',
        'Développement Backend avec Node.js / NestJS / Prisma / MySQL',
        'Gestion de projets et déploiement d’applications'
      ],
      achievementsEn: [
        'Web and Mobile Project Implementation',
        'Mastery of JavaScript and TypeScript Fundamentals',
        'Frontend Development with React / React Native / Next.js',
        'Backend Development with Node.js / NestJS / Prisma / MySQL',
        'Project Management and Application Deployment'
      ]
    }
  ];


  const certifications = [
    {
      titleFr: 'Développeur Certifié Xarala Academy',
      titleEn: 'Xarala Academy Certified Developer',
      issuer: 'Xarala Academy',
      date: 'Juillet 2025',
      descriptionFr: 'Certification officielle après la formation fullstack JS et mobile avec projets pratiques.',
      descriptionEn: 'Official certification after fullstack JS & mobile training with practical projects.'
    },
    {
      titleFr: 'Comprendre le Web',
      titleEn: 'Understanding the Web',
      issuer: 'OpenClassrooms',
      date: '2023',
      descriptionFr: 'Certification sur le fonctionnement du web, les serveurs, clients, protocoles et rendu des pages.',
      descriptionEn: 'Certification on how the web works, servers, clients, protocols and page rendering.'
    },
    {
      titleFr: 'Apprenez à programmer avec JavaScript',
      titleEn: 'Learn to Program with JavaScript',
      issuer: 'OpenClassrooms',
      date: '2023',
      descriptionFr: 'Certification d’initiation à JavaScript avec les bases de la logique et de la programmation.',
      descriptionEn: 'Certification covering JavaScript fundamentals and programming logic.'
    },
    {
      titleFr: 'Créez des pages web dynamiques avec JavaScript',
      titleEn: 'Create Dynamic Web Pages with JavaScript',
      issuer: 'OpenClassrooms',
      date: '2023',
      descriptionFr: 'Certification sur la manipulation du DOM, les événements et l’interactivité web.',
      descriptionEn: 'Certification on DOM manipulation, events handling and interactive web features.'
    },
    {
      titleFr: 'Créez votre site web avec HTML5 et CSS3',
      titleEn: 'Build Your Website with HTML5 and CSS3',
      issuer: 'OpenClassrooms',
      date: '2022',
      descriptionFr: 'Certification sur les bases du HTML, CSS, structure de page et responsive design.',
      descriptionEn: 'Certification covering HTML, CSS, page structure and responsive design.'
    }
  ];


  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Minimaliste */}
        <div className="mb-20 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {langue === 'fr' ? 'Formation & Diplômes' : 'Education & Certifications'}
          </h2>
          <div className="w-12 h-1 bg-blue-900"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* ================= FORMATION (Col 7) ================= */}
          <div className="lg:col-span-7">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 flex items-center gap-2">
              <Calendar size={16} />
              {langue === 'fr' ? 'Parcours Académique' : 'Academic Path'}
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 border border-slate-100 rounded-sm bg-slate-50/30 relative overflow-hidden"
              >
                {/* Accent discret */}
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-900"></div>

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 leading-tight mb-1">
                      {langue === 'fr' ? edu.degreeFr : edu.degreeEn}
                    </h4>
                    <p className="text-blue-900 font-semibold">{edu.school}</p>
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-white border border-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                  {langue === 'fr' ? edu.descriptionFr : edu.descriptionEn}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(langue === 'fr' ? edu.achievements : edu.achievementsEn).map((ach, i) => (
                    <div key={i} className="flex gap-3 items-start text-xs text-gray-500 font-medium">
                      <CheckCircle2 size={14} className="text-blue-900 mt-0.5 shrink-0" />
                      {ach}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= CERTIFICATIONS (Col 5) ================= */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 flex items-center gap-2">
              <Award size={16} />
              {langue === 'fr' ? 'Certifications' : 'Certifications'}
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <div className="pr-4">
                    <h4 className="text-sm font-bold text-gray-800 group-hover:text-blue-900 transition-colors">
                      {langue === 'fr' ? cert.titleFr : cert.titleEn}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-tighter">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-slate-200 group-hover:bg-blue-900 transition-colors shrink-0"></div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}