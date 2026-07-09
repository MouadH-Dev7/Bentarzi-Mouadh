import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, institution, description, icon, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8">
      {/* Timeline Circle with Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-primary/40 bg-surface-deep text-primary shadow-lg shadow-primary/10 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Timeline Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl border border-white/5 text-start space-y-3 hover:border-primary/20 transition-all duration-300"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="text-start">
            <h3 className="text-lg font-bold text-white font-display leading-tight">{title}</h3>
            <span className="text-sm text-primary font-medium">{institution}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full text-text-muted shrink-0">
            <Calendar size={12} />
            {year}
          </span>
        </div>
        <p className="text-text-muted text-sm leading-relaxed text-start">{description}</p>
      </motion.div>
    </div>
  );
};

export const Experience: React.FC = () => {
  const { language } = useLanguage();

  const experienceTranslations = {
    en: {
      title: 'Academic Path',
      subtitle: 'My higher education journey and key learning milestones in computer science and software engineering.',
      timeline: [
        {
          year: "2025 - 2026",
          title: "Master 1 — Software Engineering (In Progress)",
          institution: "M'hamed Bougara University of Boumerdès",
          description: "Advanced studies in software architecture, distributed systems, microservices, and artificial intelligence (multi-agent systems). Accomplished complex projects including a microservices redesign and multi-agent system simulations.",
          icon: <GraduationCap size={20} />
        },
        {
          year: "2025",
          title: "Graduation Project (Bachelor's PFE)",
          institution: "M'hamed Bougara University of Boumerdès",
          description: "Design and development of a full real estate management and sales system connecting an ASP.NET Core REST API, a C# WinForms desktop administration app, and an interactive client web portal.",
          icon: <Award size={20} />
        },
        {
          year: "2022 - 2025",
          title: "Bachelor's Degree in Computer Science (ISIL)",
          institution: "M'hamed Bougara University of Boumerdès",
          description: "Specialized in Information Systems and Software Engineering. Acquired solid foundations in database design, software engineering, algorithmics, as well as desktop (C#, Java) and web development.",
          icon: <BookOpen size={20} />
        }
      ]
    },
    fr: {
      title: 'Parcours Académique',
      subtitle: "Mon parcours d'études supérieures et mes étapes clés d'apprentissage en informatique et génie logiciel.",
      timeline: [
        {
          year: "2025 - 2026",
          title: "Master 1 — Génie Logiciel (En cours)",
          institution: "Université M'hamed Bougara de Boumerdès",
          description: "Approfondissement en architecture logicielle, développement distribué, microservices et intelligence artificielle (systèmes multi-agents). Réalisation de projets complexes dont la refonte microservices et les systèmes multi-agents.",
          icon: <GraduationCap size={20} />
        },
        {
          year: "2025",
          title: "Projet de Fin d'Études (PFE Licence)",
          institution: "Université M'hamed Bougara de Boumerdès",
          description: "Conception et développement d'un système complet de gestion et vente immobilière reliant une API REST ASP.NET Core, une application d'administration desktop en C# WinForms et une interface web interactive.",
          icon: <Award size={20} />
        },
        {
          year: "2022 - 2025",
          title: "Licence en Informatique (Spécialité ISIL)",
          institution: "Université M'hamed Bougara de Boumerdès",
          description: "Spécialité Ingénierie des Systèmes d'Information et du Logiciel. Acquisition de compétences solides en conception de bases de données, génie logiciel, algorithmique, ainsi qu'en développement d'applications desktop (C#, Java) et web.",
          icon: <BookOpen size={20} />
        }
      ]
    },
    ar: {
      title: 'المسار الأكاديمي',
      subtitle: 'مسيرتي في التعليم العالي وأهم المراحل التعليمية في مجالات علوم الحاسوب وهندسة البرمجيات.',
      timeline: [
        {
          year: "2025 - 2026",
          title: "ماستر 1 — هندسة البرمجيات (قيد الدراسة)",
          institution: "جامعة امحمد بوقرة بومرداس",
          description: "دراسة متقدمة في بنية البرمجيات، النظم الموزعة، الخدمات المصغرة، والذكاء الاصطناعي (الأنظمة متعددة العملاء). إنجاز مشاريع معقدة تشمل إعادة بناء بنية خدمات مصغرة ومحاكاة أنظمة متعددة العملاء.",
          icon: <GraduationCap size={20} />
        },
        {
          year: "2025",
          title: "مشروع نهاية الدراسة (ليسانس PFE)",
          institution: "جامعة امحمد بوقرة بومرداس",
          description: "تصميم وتطوير نظام متكامل لإدارة ومبيعات العقارات يربط بين واجهة برمجة تطبيقات ASP.NET Core REST وتطبيق سطح مكتب لإدارتها بـ C# WinForms وبوابة ويب تفاعلية.",
          icon: <Award size={20} />
        },
        {
          year: "2022 - 2025",
          title: "ليسانس في الإعلام الآلي (تخصص هندسة نظم المعلومات والبرمجيات - ISIL)",
          institution: "جامعة امحمد بوقرة بومرداس",
          description: "تخصص هندسة نظم المعلومات والبرمجيات. اكتساب مهارات متينة في تصميم قواعد البيانات، هندسة البرمجيات، الخوارزميات، بالإضافة إلى تطوير تطبيقات سطح المكتب (C#, Java) والويب.",
          icon: <BookOpen size={20} />
        }
      ]
    }
  };

  const t = experienceTranslations[language];

  return (
    <section id="experience" className="py-24 max-w-max-width mx-auto px-gutter relative">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple inline-block">
          {t.title}
        </h2>
        <p className="text-text-muted font-body-md max-w-xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative space-y-4 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
        {t.timeline.map((item, idx) => (
          <TimelineItem
            key={idx}
            index={idx}
            year={item.year}
            title={item.title}
            institution={item.institution}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};
