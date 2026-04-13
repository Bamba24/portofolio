import { Code, Database, Smartphone, Globe, Server, Palette } from 'lucide-react';
import { useContext } from 'react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function Skills() {
  const contextLangue = useContext(LangueContext);
  const langue = contextLangue?.langue ?? "fr";

  const skillCategories = [
    {
      icon: <Globe size={22} />,
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'TailwindCSS']
    },
    {
      icon: <Server size={22} />,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'JWT']
    },
    {
      icon: <Database size={22} />,
      title: langue === "fr" ? 'Base de données' : 'Database',
      skills: ['MySQL', 'PostgreSQL', 'Prisma', 'Firebase', 'Supabase', 'Neon']
    },
    {
      icon: <Smartphone size={22} />,
      title: 'Mobile',
      skills: ['React Native', 'Expo', 'React Navigation']
    },
    {
      icon: <Code size={22} />,
      title: 'DevOps & Tools',
      skills: ['Git', 'Vercel', 'Netlify', 'CI/CD', 'Docker', 'Railway', "n8n", "Bolt.new", "lovable", "claude code"]
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER : Plus sobre */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {langue === "fr" ? "Stack Technique" : "Technical Stack"}
          </h2>
          <p className="text-gray-500 max-w-xl text-lg">
            {langue === "fr"
              ? "Un aperçu des outils et technologies que je maîtrise pour donner vie à vos projets."
              : "An overview of the tools and technologies I master to bring your projects to life."}
          </p>
        </div>

        {/* GRID : Bordures fines et espacement aéré */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 hover:bg-slate-50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-blue-900">
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-gray-700 text-base font-medium"
                  >
                    {skill}
                    {skillIndex < category.skills.length - 1 && (
                      <span className="ml-4 text-slate-200">|</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}