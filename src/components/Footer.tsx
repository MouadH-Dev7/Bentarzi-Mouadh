import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { data, language } = useLanguage();

  const footerTranslations = {
    en: {
      madeWith: 'Made with precision and passion.',
      about: 'About',
      projects: 'Projects'
    },
    fr: {
      madeWith: 'Fait avec précision et passion.',
      about: 'À propos',
      projects: 'Projets'
    },
    ar: {
      madeWith: 'صُنع بدقة وشغف.',
      about: 'حول',
      projects: 'المشاريع'
    }
  };

  const t = footerTranslations[language];

  return (
    <footer className="bg-surface-deep/90 border-t border-border-subtle/20 w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-max-width mx-auto px-gutter items-center">
        <div className="text-start space-y-2">
          <div className="flex items-center gap-2 group justify-start">
            <svg className="w-8 h-8 min-w-[32px] relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
                stroke="url(#footer-logo-grad)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="origin-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              />
              <path
                d="M32 42 L22 50 L32 58 M68 42 L78 50 L68 58"
                stroke="#FB923C"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="50"
                y="56"
                fill="#F59E0B"
                fontSize="18"
                fontWeight="900"
                fontFamily="'IBM Plex Sans', 'Noto Sans Arabic', sans-serif"
                textAnchor="middle"
                className="tracking-tighter"
              >
                {language === 'ar' ? 'م ت' : 'BM'}
              </text>
              <defs>
                <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#FB923C" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-headline-md text-xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors">
              {data.name}
              <span className="text-accent-purple font-mono font-medium">.Dev</span>
            </span>
          </div>
          <p className="font-body-md text-sm text-text-muted">
            © {new Date().getFullYear()} {data.fullName}. {t.madeWith}
          </p>
        </div>
        <div className="flex gap-md md:justify-end text-xs font-mono justify-start">
          <a href="#about" className="text-text-muted hover:text-white transition-colors">{t.about}</a>
          <a href="#projects" className="text-text-muted hover:text-white transition-colors">{t.projects}</a>
          <a href={data.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
