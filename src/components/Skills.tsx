import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Skill } from '../data/cvData';

export const Skills: React.FC = () => {
  const { data, language } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal': return <Terminal className="text-accent-purple" size={24} />;
      case 'database': return <Database className="text-primary" size={24} />;
      case 'code': return <Code className="text-accent-purple" size={24} />;
      case 'settings': return <Settings className="text-primary" size={24} />;
      default: return <Terminal className="text-primary" size={24} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  } as const;

  const barVariants = (level: number) => ({
    hidden: { width: 0 },
    visible: { 
      width: `${level}%`, 
      transition: { duration: 1.2, ease: 'easeOut' as const, delay: 0.2 } 
    }
  });

  const skillsTranslations = {
    en: {
      title: 'Technical Arsenal',
      subtitle: 'The languages, frameworks, and tools I master and use regularly in my developments.'
    },
    fr: {
      title: 'Arsenal Technique',
      subtitle: 'Les langages, frameworks et outils que je maîtrise et utilise régulièrement dans mes projets.'
    },
    ar: {
      title: 'الترسانة التقنية',
      subtitle: 'اللغات وإطارات العمل والأدوات التي أتقنها وأستخدمها بانتظام في مشاريعي.'
    }
  };

  const t = skillsTranslations[language];

  return (
    <section id="skills" className="py-24 max-w-max-width mx-auto px-gutter relative">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple inline-block">
          {t.title}
        </h2>
        <p className="text-text-muted font-body-md max-w-xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-lg"
      >
        {data.skills.map((group, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.1)' }}
            className="glass-card p-8 rounded-3xl border border-white/5 space-y-6 flex flex-col justify-between"
          >
            {/* Group Header */}
            <div className="flex items-center gap-3 border-b border-border-subtle/20 pb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                {getIcon(group.icon)}
              </div>
              <h3 className="text-xl font-bold text-white font-display">{group.category}</h3>
            </div>

            {/* Skills List */}
            <div className="space-y-5 flex-grow">
              {(group.skills as Skill[]).map((skill, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-mono" dir="ltr">
                    <span className="text-on-surface-variant font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  
                  {/* Skill Track */}
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5" dir="ltr">
                    <motion.div
                      variants={barVariants(skill.level)}
                      className={`h-full rounded-full bg-gradient-to-r ${
                        idx % 2 === 0 
                          ? 'from-accent-purple to-pink-500' 
                          : 'from-primary to-blue-500'
                      }`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
