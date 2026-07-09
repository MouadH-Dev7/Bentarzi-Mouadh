import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Workflow, QrCode, Heart, Car, Bot, GraduationCap, X, Calendar, CheckCircle2, AlertCircle, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Project } from '../data/cvData';

export const Projects: React.FC = () => {
  const { data, language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'academic' | 'desktop' | 'microservices' | 'realtime' | 'mobile' | 'bots'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsTranslations = {
    en: {
      title: 'Completed Projects',
      subtitle: 'A selection of my academic work and personal projects demonstrating my expertise in backend, desktop, and distributed architectures.',
      codeSource: 'Source Code',
      liveDemo: 'Live Demo',
      projectDesc: 'Project Description',
      keyFeatures: 'Key Features',
      challenges: 'Technical Challenges & Solutions',
      techUsed: 'Technologies Used',
      alertMsg: 'This project is part of my university portfolio. Feel free to contact me for more details or a live demo.',
      filters: {
        all: 'All',
        microservices: 'Microservices',
        mobile: 'Mobile',
        bots: 'Bots',
        realtime: 'Real-Time',
        desktop: 'Desktop',
        academic: 'Academic'
      }
    },
    fr: {
      title: 'Projets Réalisés',
      subtitle: 'Une sélection de mes travaux académiques et projets personnels démontrant mon expertise en backend, desktop et architecture distribuée.',
      codeSource: 'Code Source',
      liveDemo: 'Live Demo',
      projectDesc: 'Description du projet',
      keyFeatures: 'Fonctionnalités Clés',
      challenges: 'Défis Techniques & Solutions',
      techUsed: 'Technologies utilisées',
      alertMsg: "Ce projet fait partie de mon portfolio universitaire. N'hésitez pas à me contacter pour plus de détails ou une démo.",
      filters: {
        all: 'Tous',
        microservices: 'Microservices',
        mobile: 'Mobile',
        bots: 'Bots',
        realtime: 'Temps Réel',
        desktop: 'Desktop',
        academic: 'Académique'
      }
    },
    ar: {
      title: 'المشاريع المنجزة',
      subtitle: 'مجموعة مختارة من أعمالي الأكاديمية ومشاريعي الشخصية التي توضح خبرتي في البرمجيات الخلفية، تطبيقات سطح المكتب، وهندسة النظم الموزعة.',
      codeSource: 'الكود المصدري',
      liveDemo: 'عرض حي',
      projectDesc: 'وصف المشروع',
      keyFeatures: 'الميزات الرئيسية',
      challenges: 'التحديات والحلول التقنية',
      techUsed: 'التقنيات المستخدمة',
      alertMsg: 'هذا المشروع جزء من أعمالي الأكاديمية والجامعية. لا تتردد في الاتصال بي للحصول على تفاصيل إضافية أو عرض مباشر للمشروع.',
      filters: {
        all: 'الكل',
        microservices: 'الخدمات المصغرة',
        mobile: 'تطبيقات الجوال',
        bots: 'البوتات',
        realtime: 'الوقت الحقيقي',
        desktop: 'سطح المكتب',
        academic: 'أكاديمي'
      }
    }
  };

  const t = projectsTranslations[language];

  const filterOptions = [
    { label: t.filters.all, value: 'all' },
    { label: t.filters.microservices, value: 'microservices' },
    { label: t.filters.mobile, value: 'mobile' },
    { label: t.filters.bots, value: 'bots' },
    { label: t.filters.realtime, value: 'realtime' },
    { label: t.filters.desktop, value: 'desktop' },
    { label: t.filters.academic, value: 'academic' },
  ] as const;

  const filteredProjects = data.projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const getProjectIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('pfe') || titleLower.includes('licence') || titleLower.includes('vente immobilière') || titleLower.includes('immobilier') || titleLower.includes('tourisme') || titleLower.includes('documents universitaires') || titleLower.includes('portail') || titleLower.includes('عقارات') || titleLower.includes('جامع')) return <GraduationCap className="text-blue-400" size={24} />;
    if (titleLower.includes('microservices')) return <Workflow className="text-purple-400" size={24} />;
    if (titleLower.includes('qr code') || titleLower.includes('restaurant') || titleLower.includes('مطعم')) return <QrCode className="text-emerald-400" size={24} />;
    if (titleLower.includes('hospital') || titleLower.includes('médicaux') || titleLower.includes('gestion hospitalière') || titleLower.includes('مستشفى')) return <Heart className="text-rose-400" size={24} />;
    if (titleLower.includes('automobile') || titleLower.includes('véhicules') || titleLower.includes('agence automobile') || titleLower.includes('سيارات')) return <Car className="text-amber-400" size={24} />;
    if (titleLower.includes('chatbot') || titleLower.includes('movies bot') || titleLower.includes('bot') || titleLower.includes('agents') || titleLower.includes('jade') || titleLower.includes('بوت')) return <Bot className="text-indigo-400" size={24} />;
    if (titleLower.includes('flutter') || titleLower.includes('e-commerce') || titleLower.includes('notes app') || titleLower.includes('notes') || titleLower.includes('مذكرات') || titleLower.includes('متجر')) return <Smartphone className="text-teal-400" size={24} />;
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
        <div className="text-start space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple inline-block">
            {t.title}
          </h2>
          <p className="text-text-muted font-body-md max-w-xl">
            {t.subtitle}
          </p>
        </div>
        
        {/* Category Selector/Filter */}
        <div className="flex flex-wrap gap-2 justify-start md:justify-end max-w-full md:max-w-[60%]">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all duration-300 border shrink-0 ${
                filter === opt.value
                  ? 'bg-primary text-slate-950 border-primary shadow-[0_4px_20px_rgba(173,198,255,0.25)]'
                  : 'bg-white/5 border-white/5 hover:border-primary/30 text-text-muted hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid containing projects */}
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
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.1)' }}
              className="glass-card rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Project Card Image cover */}
              <div className="relative h-48 w-full overflow-hidden bg-surface-deep">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
                
                {/* Float Category Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#020617]/85 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-md">
                  {getProjectIcon(project.title)}
                </div>
              </div>

              {/* Card Body content */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-primary/70 uppercase tracking-widest">// {project.category}</span>
                    <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${getBadgeColors(project.badgeType)}`}>
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 font-display line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-text-muted bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono text-primary px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/10">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Expanded Project Detail Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop cover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl h-[90vh] md:h-[75vh] bg-[#0b1326] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              {/* Close float button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#020617]/80 hover:bg-rose-500/20 text-white hover:text-rose-400 border border-white/10 flex items-center justify-center transition-all duration-300"
              >
                <X size={16} />
              </button>

              {/* Left Column: Media & Actions */}
              <div className="w-full md:w-5/12 bg-[#020617]/40 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                <div className="relative h-48 md:h-full min-h-[220px] md:min-h-0 overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0b1326]"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border backdrop-blur-md ${getBadgeColors(selectedProject.badgeType)}`}>
                      {selectedProject.badge}
                    </span>
                    <span className="text-[10px] font-mono text-white bg-[#020617]/60 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1">
                      <Calendar size={10} />
                      {selectedProject.duration}
                    </span>
                  </div>
                </div>

                {/* Actions (Code & Demo) */}
                <div className="p-6 grid grid-cols-2 gap-3 bg-[#060e20]/60 border-t border-white/5">
                  <a
                    href={selectedProject.codeUrl || data.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 text-white px-4 py-3 rounded-2xl font-bold font-mono text-sm transition-all active:scale-95 text-center"
                  >
                    <Code size={16} /> {t.codeSource}
                  </a>
                  <a
                    href={selectedProject.demoUrl || "#"}
                    onClick={(e) => {
                      if (!selectedProject.demoUrl || selectedProject.demoUrl === "#") {
                        e.preventDefault();
                        alert(t.alertMsg);
                      }
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent-purple text-surface-deep px-4 py-3 rounded-2xl font-bold font-mono text-sm hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] hover:scale-[1.02] transition-all active:scale-95 text-center"
                  >
                    <ExternalLink size={16} /> {t.liveDemo}
                  </a>
                </div>
              </div>

              {/* Right Column: Detailed Info */}
              <div className="w-full md:w-7/12 p-6 md:p-8 overflow-y-auto flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Category & Title */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">// {selectedProject.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-display leading-tight pr-8 text-start">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Long Description */}
                  <div className="space-y-2 text-start">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">// {t.projectDesc}</h4>
                    <p className="text-text-muted text-sm md:text-base leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 text-start">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">// {t.keyFeatures}</h4>
                    <ul className="space-y-2.5">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed">
                          <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Challenges */}
                  <div className="space-y-3 border-t border-white/5 pt-4 text-start">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <AlertCircle className="text-amber-400" size={14} /> {t.challenges}
                    </h4>
                    <p className="text-text-muted text-xs md:text-sm leading-relaxed bg-amber-500/5 border border-amber-500/10 p-4 rounded-2xl italic">
                      "{selectedProject.challenges}"
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="mt-8 border-t border-white/5 pt-4 text-start">
                  <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider font-mono mb-3">{t.techUsed}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-mono px-3 py-1 rounded-xl bg-white/5 text-primary border border-white/5 hover:border-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
