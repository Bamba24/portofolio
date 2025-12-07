import { User, Heart, Code, Zap } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import {motion} from "framer-motion"

export default function About() {
  const { langue } = useContext(LangueContext) || { langue: 'fr' };

  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // délai entre chaque carte
    },
  },
};

    const item = {
      hidden: { opacity: 0, y: 40 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
        ease: [0.17, 0.55, 0.55, 1]
      },
    };


  const values = [
    {
      icon: <Code className="text-primary" size={32} />,
      titleFr: 'Code de qualité',
      descriptionFr: 'Je respecte les bonnes pratiques et développe des applications maintenables.',
      titleEn: 'Quality Code',
      descriptionEn: 'I follow best practices and develop maintainable applications.'
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      titleFr: 'Performance',
      descriptionFr: 'Applications web et mobiles rapides et optimisées pour une expérience fluide.',
      titleEn: 'Performance',
      descriptionEn: 'Fast and optimized web & mobile applications for a smooth experience.'
    },
    {
      icon: <Heart className="text-primary" size={32} />,
      titleFr: 'Passion',
      descriptionFr: 'Une passion pour le développement, l’innovation et l’apprentissage continu.',
      titleEn: 'Passion',
      descriptionEn: 'Passionate about development, innovation and continuous learning.'
    },
    {
      icon: <User className="text-primary" size={32} />,
      titleFr: 'Collaboration',
      descriptionFr: 'Travail efficace en équipe et communication avec toutes les parties prenantes.',
      titleEn: 'Collaboration',
      descriptionEn: 'Effective teamwork and communication with all stakeholders.'
    }
  ];

  const technologies = [
    'JavaScript/TypeScript', 'React', 'React Native', 'Next.js', 'Node.js',
    'NestJS', 'Express.js', 'MySQL', 'MongoDB', 'Prisma', 'TailwindCSS',
    'Firebase', 'Stripe', 'Framer Motion'
  ];

  return (
    <section id="about" className="section-padding bg-white ">
      <motion.div className="container-max"
       initial={{opacity:0, y:-20}}
       whileInView={{opacity:1, y:0}}
       viewport={{once: true}}
       transition={{duration: 1}}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary ">
              {langue === 'fr' ? 'À propos de moi' : 'About Me'}
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-600 mb-6">
              {langue === 'fr'
                ? "Développeur fullstack et mobile formé chez Xarala Academy (février - août 2025), j'ai travaillé sur plusieurs projets web et mobiles et acquis une maîtrise complète de l'écosystème JavaScript."
                : "Fullstack and mobile developer trained at Xarala Academy (Feb - Aug 2025), I worked on multiple web and mobile projects and gained complete mastery of the JavaScript ecosystem."
              }
            </p>
            <p className="text-lg text-gray-300 dark:text-gray-600 mb-8">
              {langue === 'fr'
                ? "J'aime relever des défis techniques et transformer des idées en applications performantes et modernes. Mon approche allie expertise technique, créativité et souci du détail."
                : "I enjoy tackling technical challenges and turning ideas into high-performing modern applications. My approach combines technical expertise, creativity, and attention to detail."
              }
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="bg-gray-800 dark:bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <img src="/images/profil.jpg" alt="Profil Bamba" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
        
        <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="text-center"
                >
                  <div className="bg-gray-700 dark:bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white dark:text-black mb-2">
                    {langue === 'fr' ? value.titleFr : value.titleEn}
                  </h3>

                  <p className="text-gray-300 dark:text-gray-700">
                    {langue === 'fr' ? value.descriptionFr : value.descriptionEn}
                  </p>
                </motion.div>
              ))}
          </motion.div>
      </motion.div>
    </section>
  );
}
