import { Code, Database, Smartphone, Globe, Server, Palette } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LangueContext } from '../context/langueContext';

export default function  Skills () {

  const context = useContext(ThemeContext);
  const theme = context?.theme ?? "light";

  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue

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
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Prisma', 'Mongoose', 'Firebase']
    },
    {
      icon: <Smartphone className="text-primary" size={32} />,
      title: 'Mobile',
      skills: ['React Native', 'Expo', 'React Navigation']
    },
    {
      icon: <Code className="text-primary" size={32} />,
      title: 'Outils & DevOps',
      skills: ['Git', 'Docker',  'Vercel', 'Netlify', 'CI/CD', ]
    },
    {
      icon: <Palette className="text-primary" size={32} />,
      title: 'Design & UX',
      skills: ['Figma', 'Responsive Design', 'UI/UX', 'Prototyping', 'Design Systems']
    }
  ];

  return (
    <section id="skills" className={`section-padding bg-gray-50 ${theme === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-800 text-gray-200"}`}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "light" ? "text-gray-900" : "text-gray-50"}`}>
            { langue === "fr" ?  "Stack Technique": "My Stack"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
             { langue === "fr" ?  "Technologies et outils que je maitrise pour créer des applications performantes et innovantes": "Technologies and tools that I master to create high-performance and innovative applications"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
