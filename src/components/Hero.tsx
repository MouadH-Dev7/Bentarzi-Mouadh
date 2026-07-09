import React, { useState, useEffect } from 'react';
import { FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { data, language } = useLanguage();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset typings when language shifts
  useEffect(() => {
    setPhraseIndex(0);
    setDisplayedText('');
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    let timer: any;
    const phrases = data.typingPhrases;
    if (!phrases || phrases.length === 0) return;
    const currentPhrase = phrases[phraseIndex % phrases.length];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex(prev => (prev + 1) % phrases.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        if (displayedText.length === currentPhrase.length) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
        }
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, data.typingPhrases]);

  const heroTranslations = {
    en: {
      status: 'Available for Internship · Apprenticeship · Job',
      greeting: 'Hi, I am',
      description: 'Software Engineering Master Student. Passionate about distributed systems architecture, microservices, and designing robust, high-performance APIs.',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me',
      loc: 'LOC: Algiers, DZ',
      mil: 'MIL: Exempt (Card)',
      statusLabel: 'STATUS: Ready',
      sysLabel: 'SYS: .NET / Django',
    },
    fr: {
      status: 'Disponible pour Stage · Alternance · Emploi',
      greeting: 'Salut, je suis',
      description: "Étudiant en Master 1 Génie Logiciel. Passionné par l'architecture des systèmes distribués, les microservices et le développement d'APIs robustes et performantes.",
      downloadCV: 'Télécharger mon CV',
      contactMe: 'Me Contacter',
      loc: 'LOC: Alger, DZ',
      mil: 'MIL: Dégagé (Carte)',
      statusLabel: 'STATUS: Ready',
      sysLabel: 'SYS: .NET / Django',
    },
    ar: {
      status: 'متاح للتربص · التمهين · العمل',
      greeting: 'مرحباً، أنا',
      description: 'طالب ماستر 1 هندسة برمجيات. شغوف ببناء الخدمات المصغرة (Microservices)، وتصميم واجهات البرمجة القوية عالية الأداء.',
      downloadCV: 'تحميل السيرة الذاتية',
      contactMe: 'اتصل بي',
      loc: 'البلد: الجزائر العاصمة',
      mil: 'الخدمة العسكرية: معفى',
      statusLabel: 'الحالة: جاهز',
      sysLabel: 'الأنظمة: .NET / Django',
    }
  };

  const t = heroTranslations[language];

  return (
    <section id="hero" className="min-h-screen flex items-center max-w-max-width mx-auto px-gutter py-24 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center w-full z-10">
        
        {/* Text Area */}
        <div className="space-y-6 lg:col-span-7 text-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            {t.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight font-display"
          >
            {t.greeting} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
              {data.name} {data.surname}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-16 flex items-center"
          >
            <p className="text-xl md:text-2xl text-text-muted font-mono typing-cursor">
              {displayedText}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-text-muted max-w-xl leading-relaxed"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-md pt-4"
          >
            <a
              href="/CV_Bentarzi_Mouadh.pdf?v=2026"
              download
              className="bg-gradient-to-r from-primary to-accent-purple text-surface-deep font-bold px-8 py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(173,198,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <FileText size={18} />
              {t.downloadCV}
            </a>
            <a
              href="#contact"
              className="border border-border-subtle bg-white/5 text-on-surface px-8 py-4 rounded-2xl font-bold hover:bg-white/10 hover:border-primary/50 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Mail size={18} />
              {t.contactMe}
            </a>
          </motion.div>
        </div>

        {/* Visual Card / Avatar Area */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            {/* Outer Glows */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent-purple rounded-3xl blur-2xl opacity-35 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Main Glowing Card */}
            <div className="relative w-80 h-96 md:w-96 md:h-[450px] rounded-3xl glass-card flex flex-col justify-between p-8 overflow-hidden border border-white/10">
              {/* Card top logo decoration */}
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-primary/70">// developer_profile</span>
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              </div>

              {/* Central initials avatar */}
              <div className="flex flex-col items-center justify-center flex-grow py-8">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-primary/20 to-accent-purple/20 border-2 border-primary/30 flex items-center justify-center shadow-[0_0_50px_rgba(173,198,255,0.15)] mb-6 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple tracking-widest font-display">
                    {language === 'ar' ? 'م ت' : data.avatarInitials}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display text-center">{data.fullName}</h3>
                <p className="text-sm text-primary font-mono mt-1 text-center">{data.subTitle}</p>
              </div>

              {/* Card bottom info */}
              <div className="border-t border-border-subtle/40 pt-4 flex justify-between items-center text-xs text-text-muted font-mono">
                <div className="text-start">
                  <p>{t.loc}</p>
                  <p>{t.mil}</p>
                </div>
                <div className="text-end">
                  <p>{t.statusLabel}</p>
                  <p>{t.sysLabel}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-purple/10 blur-3xl rounded-full -z-10"></div>
    </section>
  );
};
