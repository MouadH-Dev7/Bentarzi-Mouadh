import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, data } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTranslations = {
    en: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Education',
      contact: 'Contact',
      cvLabel: 'My CV'
    },
    fr: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Formation',
      contact: 'Contact',
      cvLabel: 'Mon CV'
    },
    ar: {
      about: 'حول',
      skills: 'المهارات',
      projects: 'المشاريع',
      experience: 'التعليم',
      contact: 'اتصال',
      cvLabel: 'السيرة الذاتية'
    }
  };

  const t = navTranslations[language];

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.skills, href: '#skills' },
    { name: t.projects, href: '#projects' },
    { name: t.experience, href: '#experience' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-surface-glass/80 backdrop-blur-lg border-b border-border-subtle shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="flex justify-between items-center max-w-max-width mx-auto px-gutter">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <svg className="w-10 h-10 min-w-[40px] relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
              stroke="url(#logo-grad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="origin-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />
            <path
              d="M32 42 L22 50 L32 58 M68 42 L78 50 L68 58"
              stroke="#A855F7"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="50"
              y="56"
              fill="#adc6ff"
              fontSize="18"
              fontWeight="900"
              fontFamily="'Inter', sans-serif"
              textAnchor="middle"
              className="tracking-tighter"
            >
              {language === 'ar' ? 'م ت' : 'BM'}
            </text>
            <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#adc6ff" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-headline-md text-2xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">
            {data.name}
            <span className="text-accent-purple font-mono font-medium">.Dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-lg items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-all duration-300 font-body-md text-body-md relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Language Switcher Pill */}
          <div className="flex bg-surface-deep/80 border border-white/5 rounded-full p-0.5 mx-2">
            {(['en', 'fr', 'ar'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2.5 py-1 text-xs font-mono rounded-full font-bold uppercase transition-all ${
                  language === lang
                    ? 'bg-primary text-slate-950 shadow-md shadow-primary/20 font-black'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <a
            href="/CV_Bentarzi_Mouadh.pdf?v=2026"
            download
            className="bg-primary-container/20 hover:bg-primary-container/30 border border-primary/30 text-primary px-5 py-2 rounded-xl font-bold transition-all hover:shadow-[0_0_15px_rgba(173,198,255,0.2)] flex items-center gap-2 active:scale-95"
          >
            <Download size={16} />
            {t.cvLabel}
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface-deep/95 border-b border-border-subtle backdrop-blur-xl"
          >
            <div className="flex flex-col px-gutter py-6 gap-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-on-surface-variant hover:text-primary transition-all py-2 text-lg border-b border-border-subtle/30"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex bg-surface-deep/80 border border-white/5 rounded-full p-0.5 justify-around mt-4">
                {(['en', 'fr', 'ar'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsOpen(false);
                    }}
                    className={`w-full py-2 text-xs font-mono rounded-full font-bold uppercase transition-all text-center ${
                      language === lang
                        ? 'bg-primary text-slate-950 shadow-md shadow-primary/20'
                        : 'text-text-muted hover:text-white'
                    }`}
                  >
                    {lang === 'en' ? 'English' : lang === 'fr' ? 'Français' : 'العربية'}
                  </button>
                ))}
              </div>

              <a
                href="/CV_Bentarzi_Mouadh.pdf?v=2026"
                download
                onClick={() => setIsOpen(false)}
                className="bg-primary-container text-on-primary-container w-full text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2 mt-2"
              >
                <Download size={18} />
                {t.cvLabel} (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
