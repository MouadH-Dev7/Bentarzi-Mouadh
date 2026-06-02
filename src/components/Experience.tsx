import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

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
        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl border border-white/5 text-left space-y-3 hover:border-primary/20 transition-all duration-300"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white font-display leading-tight">{title}</h3>
            <span className="text-sm text-primary font-medium">{institution}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full text-text-muted">
            <Calendar size={12} />
            {year}
          </span>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

export const Experience: React.FC = () => {
  const timelineData = [
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
  ];

  return (
    <section id="experience" className="py-24 max-w-max-width mx-auto px-gutter relative">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple inline-block">
          Parcours Académique
        </h2>
        <p className="text-text-muted font-body-md max-w-xl mx-auto">
          Mon parcours d'études supérieures et mes étapes clés d'apprentissage en informatique et génie logiciel.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative space-y-4 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
        {timelineData.map((item, idx) => (
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
