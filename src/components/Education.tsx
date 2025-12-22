"use client";
import {Calendar } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from 'framer-motion';

export default function Education() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };

  const education = [
    {
      degreeFr: 'Formation Développeur Fullstack & Mobile',
      degreeEn: 'Fullstack & Mobile Developer Training',
      school: 'Xarala Academy',
      location: 'En ligne / Sénégal',
      period: 'Février 2025 - Août 2025',
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
      date: 'Août 2025',
      descriptionFr: 'Certification officielle après la formation fullstack JS et mobile avec projets pratiques.',
      descriptionEn: 'Official certification after fullstack JS & mobile training with practical projects.'
    },
    {
      titleFr: 'Comprendre le Web',
      titleEn: 'Understanding the Web',
      issuer: 'OpenClassrooms',
      date: '2024',
      descriptionFr: 'Certification sur le fonctionnement du web, les serveurs, clients, protocoles et rendu des pages.',
      descriptionEn: 'Certification on how the web works, servers, clients, protocols and page rendering.'
    },
    {
      titleFr: 'Apprenez à programmer avec JavaScript',
      titleEn: 'Learn to Program with JavaScript',
      issuer: 'OpenClassrooms',
      date: '2024',
      descriptionFr: 'Certification d’initiation à JavaScript avec les bases de la logique et de la programmation.',
      descriptionEn: 'Certification covering JavaScript fundamentals and programming logic.'
    },
    {
      titleFr: 'Créez des pages web dynamiques avec JavaScript',
      titleEn: 'Create Dynamic Web Pages with JavaScript',
      issuer: 'OpenClassrooms',
      date: '2024',
      descriptionFr: 'Certification sur la manipulation du DOM, les événements et l’interactivité web.',
      descriptionEn: 'Certification on DOM manipulation, events handling and interactive web features.'
    },
    {
      titleFr: 'Créez votre site web avec HTML5 et CSS3',
      titleEn: 'Build Your Website with HTML5 and CSS3',
      issuer: 'OpenClassrooms',
      date: '2024',
      descriptionFr: 'Certification sur les bases du HTML, CSS, structure de page et responsive design.',
      descriptionEn: 'Certification covering HTML, CSS, page structure and responsive design.'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="section-padding bg-gray-50 text-primary">
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {langue === 'fr' ? 'Formation & Certifications' : 'Education & Certifications'}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {langue === 'fr'
              ? "Mon parcours académique et les certifications obtenues"
              : "My academic background and obtained certifications"}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formation */}
          {education.map((edu, index) => (
            <motion.div
              key={`edu-${index}`}
              className="bg-white rounded-2xl p-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold mb-1">
                    {langue === 'fr' ? edu.degreeFr : edu.degreeEn}
                  </h4>
                  <p className="font-medium">{edu.school}</p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                {langue === 'fr' ? edu.descriptionFr : edu.descriptionEn}
              </p>

              <div>
                <h5 className="font-semibold text-gray-900 mb-2">
                  {langue === 'fr' ? 'Compétences & Réalisations :' : 'Skills & Achievements:'}
                </h5>
                <ul className="space-y-1">
                  {(langue === 'fr' ? edu.achievements : edu.achievementsEn).map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-600">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Certifications */}
          {certifications.map((cert, index) => (
            <motion.div
              key={`cert-${index}`}
              className="bg-white rounded-2xl p-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (education.length + index) * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    {langue === 'fr' ? cert.titleFr : cert.titleEn}
                  </h4>
                  <p className="font-medium">{cert.issuer}</p>
                </div>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {cert.date}
                </span>
              </div>
              <p className="text-gray-800">
                {langue === 'fr' ? cert.descriptionFr : cert.descriptionEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
