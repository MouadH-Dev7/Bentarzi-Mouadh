import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const labels = {
    en: 'Back to top',
    fr: 'Retour en haut',
    ar: 'العودة إلى الأعلى',
  } as const;

  return (
    <button
      type="button"
      aria-label={labels[language]}
      title={labels[language]}
      onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}
      className={`fixed bottom-6 end-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-surface-container/90 text-primary shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-surface-container ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
};
