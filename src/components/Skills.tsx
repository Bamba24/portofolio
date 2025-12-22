import { Code, Database, Smartphone, Globe, Server, Palette } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import {motion} from "framer-motion"

export default function  Skills () {

  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue


 const itemVariants = {
  hidden: { opacity: 0, y: -20 }, // Commencer plus bas
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } // Animation plus simple
  },
};

  const skillCategories = [
    {
      icon: <Globe className="text-primary" size={32} />,
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'TailwindCSS']
    },
    {
      icon: <Server className="text-primary" size={32} />,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'JWT',]
    },
    {
      icon: <Database className="text-primary" size={32} />,
      title: 'Base de données',
      skills: [ 'MySQL', 'PostgreSQL', 'Prisma', 'Firebase']
    },
    {
      icon: <Smartphone className="text-primary" size={32} />,
      title: 'Mobile',
      skills: ['React Native', 'Expo', 'React Navigation']
    },
    {
      icon: <Code className="text-primary" size={32} />,
      title: 'Outils & DevOps',
      skills: ['Git',  'Vercel', 'Netlify', 'CI/CD', ]
    },
    {
      icon: <Palette className="text-primary" size={32} />,
      title: 'Design & UX',
      skills: ['Figma', 'Responsive Design', 'UI/UX', 'Prototyping']
    }
  ];

  return (
    <section id="skills" className={`section-padding bg-gray-50  text-gray-900`}>
      <motion.div className="container-max"
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1 , y:0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}
      >
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-primary`}>
            { langue === "fr" ?  "Stack Technique": "My Stack"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
             { langue === "fr" ?  "Technologies et outils que je maitrise pour créer des applications performantes et innovantes": "Technologies and tools that I master to create high-performance and innovative applications"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              className="bg-white rounded-2xl p-8 card-hover "
              key={index} 
              style={{ animationDelay: `${index * 0.1}s` }}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-100 rounded-full p-3 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
