import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Workflow, QrCode, Heart, Car, Bot, GraduationCap } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'desktop' | 'microservices' | 'realtime'>('all');

  const filterOptions = [
    { label: 'Tous', value: 'all' },
    { label: 'Microservices', value: 'microservices' },
    { label: 'Temps Réel', value: 'realtime' },
    { label: 'Desktop', value: 'desktop' },
    { label: 'Académique', value: 'academic' },
  ] as const;

  const filteredProjects = cvData.projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const getProjectIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('pfe') || titleLower.includes('licence')) return <GraduationCap className="text-blue-400" size={24} />;
    if (titleLower.includes('microservices')) return <Workflow className="text-purple-400" size={24} />;
    if (titleLower.includes('qr code') || titleLower.includes('restaurant')) return <QrCode className="text-emerald-400" size={24} />;
    if (titleLower.includes('hospital') || titleLower.includes('médicaux')) return <Heart className="text-rose-400" size={24} />;
    if (titleLower.includes('automobile') || titleLower.includes('véhicules')) return <Car className="text-amber-400" size={24} />;
    if (titleLower.includes('agents') || titleLower.includes('jade')) return <Bot className="text-indigo-400" size={24} />;
    return <Code className="text-primary" size={24} />;
  };

  const getBadgeColors = (badgeType: string) => {
    switch (badgeType) {
      case 'blue': return 'bg-blue-500/10 border-blue-500/30 text-blue-400';
      case 'teal': return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
      case 'amber': return 'bg-amber-500/10 border-amber-500/30 text-amber-400';
      case 'purple': return 'bg-purple-500/10 border-purple-500/30 text-purple-400';
      default: return 'bg-primary/10 border-primary/20 text-primary';
    }
  };

  return (
    <section id="projects" className="py-24 max-w-max-width mx-auto px-gutter relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="text-left space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple inline-block">
            Projets Réalisés
          </h2>
          <p className="text-text-muted font-body-md max-w-xl">
            Une sélection de mes travaux académiques et projets personnels démontrant mon expertise en backend, desktop et architecture distribuée.
          </p>
        </div>
        
        {/* GitHub Link */}
        <a 
          href={cvData.contact.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent-purple transition-colors font-mono text-sm self-start md:self-end border border-primary/20 hover:border-primary/50 bg-primary/5 px-4 py-2.5 rounded-xl"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>Voir tout sur GitHub</span>
        </a>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-border-subtle/20 pb-6 justify-start">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 relative ${
              filter === opt.value
                ? 'text-surface-deep bg-primary font-bold shadow-[0_0_20px_rgba(173,198,255,0.4)]'
                : 'text-text-muted hover:text-white hover:bg-white/5'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/5 group flex flex-col justify-between"
            >
              {/* Graphic Card Header instead of standard Image placeholder */}
              <div className="h-44 bg-gradient-to-br from-surface-container-high/40 to-surface-container/60 p-6 flex flex-col justify-between relative overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-purple/5 blur-2xl rounded-full"></div>
                
                {/* Visual Category Indicator */}
                <div className="flex justify-between items-start z-10 w-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md">
                    {getProjectIcon(project.title)}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getBadgeColors(project.badgeType)}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Tech Tags Mini */}
                <div className="z-10 flex gap-2 overflow-hidden w-full select-none">
                  <span className="text-[10px] font-mono text-primary/70">// {project.category.toUpperCase()}</span>
                </div>
              </div>

              {/* Project Info Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between text-left">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-display leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-on-surface-variant border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 border-t border-border-subtle/20 pt-4 text-xs font-mono">
                    <button
                      onClick={() => window.open(cvData.contact.githubUrl, '_blank')}
                      className="text-primary hover:text-accent-purple font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Code</span>
                    </button>
                    <button 
                      onClick={() => alert("Ce projet fait partie de mon portfolio universitaire. N'hésitez pas à me contacter pour plus de détails ou une démo.")}
                      className="text-text-muted hover:text-white font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink size={14} /> Démo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
