import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { data, language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  } as const;

  const aboutTranslations = {
    en: {
      title: 'About Me',
      subHeader: 'A passionate and disciplined 22-year-old developer, currently pursuing a Master 2 in Software Engineering after completing my Bachelor\'s and Master 1.'
    },
    fr: {
      title: 'À propos de moi',
      subHeader: 'Développeur passionné et rigoureux de 22 ans, je poursuis actuellement un Master 2 Génie Logiciel après avoir obtenu ma Licence en Informatique (ISIL) et validé mon Master 1.'
    },
    ar: {
      title: 'نبذة عني',
      subHeader: 'مطور برمجيات شغوف ودقيق، عمري 22 سنة، أتابع حالياً دراسة الماستر 2 هندسة البرمجيات بعد حيازتي شهادة الليسانس في الإعلام الآلي وإتمام الماستر 1.'
    }
  };

  const t = aboutTranslations[language];

  return (
    <section id="about" className="py-24 max-w-max-width mx-auto px-gutter relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center"
      >
        {/* Left Side: Summary Description */}
        <motion.div variants={itemVariants} className="space-y-6 lg:col-span-7 text-start">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple inline-block">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            {t.subHeader}
          </p>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            {data.about.description}
          </p>
          <div className="pt-2 text-primary font-mono text-sm text-start" dir="ltr">
            <code>{"const developer = { passion: 'clean_code', focus: ['backend', 'distributed_systems'] };"}</code>
          </div>
        </motion.div>

        {/* Right Side: Interactive Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-md lg:col-span-5 w-full">
          {data.about.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                scale: 1.05, 
                borderColor: stat.color === 'primary' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(251, 146, 60, 0.3)',
                boxShadow: stat.color === 'primary' ? '0 10px 30px -10px rgba(245, 158, 11, 0.15)' : '0 10px 30px -10px rgba(251, 146, 60, 0.15)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass-card p-6 md:p-8 rounded-2xl text-center border border-white/5 cursor-default group"
            >
              <div className={`text-4xl md:text-5xl font-bold font-display mb-2 transition-transform duration-300 group-hover:scale-110 ${
                stat.color === 'primary' ? 'text-primary' : 'text-accent-purple'
              }`}>
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold tracking-wider text-text-muted uppercase font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
