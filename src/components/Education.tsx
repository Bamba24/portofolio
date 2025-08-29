import { GraduationCap, Award, Calendar } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LangueContext } from '../context/langueContext';

export default function Education() {
  const { theme } = useContext(ThemeContext) || { theme: 'light' };
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
    }
  ];

  return (
    <section id="education" className={`section-padding ${theme === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-gray-50"}`}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-gray-50'}`}>
            {langue === 'fr' ? 'Formation & Certifications' : 'Education & Certifications'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {langue === 'fr' ? "Mon parcours académique et les certifications obtenues" : "My academic background and obtained certifications"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formation */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="text-primary" size={32} />
              {langue === 'fr' ? 'Formation Académique' : 'Academic Education'}
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-hover animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        {langue === 'fr' ? edu.degreeFr : edu.degreeEn}
                      </h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <p className="text-gray-600 dark:text-gray-300">{edu.location}</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {langue === 'fr' ? edu.descriptionFr : edu.descriptionEn}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">
                      {langue === 'fr' ? 'Compétences & Réalisations :' : 'Skills & Achievements:'}
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Award className="text-primary" size={32} />
              {langue === 'fr' ? 'Certifications' : 'Certifications'}
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-hover animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold mb-1">
                        {langue === 'fr' ? cert.titleFr : cert.titleEn}
                      </h4>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                    </div>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {langue === 'fr' ? cert.descriptionFr : cert.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
