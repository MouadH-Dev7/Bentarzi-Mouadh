import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Copy, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { data, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${data.contact.email}`;
    }
  };

  const contactTranslations = {
    en: {
      title: 'Contact Me',
      subtitle: 'Have an internship, apprenticeship, job opportunity or just want to talk about tech? Feel free to contact me via any of these channels.',
      email: 'EMAIL',
      phone: 'PHONE',
      location: 'LOCATION',
      website: 'WEBSITE',
      githubLabel: 'OR FIND ME ON GITHUB',
      copyEmail: 'Copy email',
      copied: 'Copied!'
    },
    fr: {
      title: 'Me Contacter',
      subtitle: "Vous avez une opportunité de stage, d'alternance, d'emploi ou simplement envie de discuter de technique ? N'hésitez pas à me contacter par l'un de ces moyens.",
      email: 'EMAIL',
      phone: 'TÉLÉPHONE',
      location: 'LOCALISATION',
      website: 'SITE WEB',
      githubLabel: 'OU RETROUVEZ-MOI SUR GITHUB',
      copyEmail: "Copier l'e-mail",
      copied: 'Copié !'
    },
    ar: {
      title: 'اتصل بي',
      subtitle: 'لديك فرصة تربص، عمل، أو ترغب ببساطة في مناقشة موضوع تقني؟ لا تتردد في الاتصال بي عبر أحد هذه الوسائل.',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع الجغرافي',
      website: 'الموقع الشخصي',
      githubLabel: 'أو تجدني على موقع GITHUB',
      copyEmail: 'نسخ البريد الإلكتروني',
      copied: 'تم النسخ!'
    }
  };

  const t = contactTranslations[language];

  return (
    <section id="contact" className="py-24 max-w-max-width mx-auto px-gutter relative text-center">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple inline-block">
            {t.title}
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between text-center space-y-4 hover:border-primary/20 hover:shadow-[0_10px_25px_-10px_rgba(245,158,11,0.1)] transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors mx-auto">
              <Mail size={20} />
            </div>
            <div className="space-y-1">
              <p className="text-text-muted text-xs font-mono">// {t.email}</p>
              <a href={`mailto:${data.contact.email}`} className="text-white hover:text-primary transition-colors font-semibold break-all text-sm block">
                {data.contact.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={t.copyEmail}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-accent-purple transition-colors"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? t.copied : t.copyEmail}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between text-center space-y-4 hover:border-accent-purple/20 hover:shadow-[0_10px_25px_-10px_rgba(251,146,60,0.1)] transition-all group">
            <div className="w-12 h-12 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple/20 transition-colors mx-auto">
              <Phone size={20} />
            </div>
            <div className="space-y-1">
              <p className="text-text-muted text-xs font-mono mb-1">// {t.phone}</p>
              <a href={`tel:${data.contact.phone.replace(/\s/g, '')}`} className="text-white hover:text-accent-purple transition-colors font-semibold text-sm block" dir="ltr">
                {data.contact.phone}
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between text-center space-y-4 hover:border-primary/20 hover:shadow-[0_10px_25px_-10px_rgba(245,158,11,0.1)] transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors mx-auto">
              <MapPin size={20} />
            </div>
            <div className="space-y-1">
              <p className="text-text-muted text-xs font-mono mb-1">// {t.location}</p>
              <span className="text-white font-semibold text-sm block">{data.contact.location}</span>
            </div>
          </div>

          {/* Website Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between text-center space-y-4 hover:border-accent-purple/20 hover:shadow-[0_10px_25px_-10px_rgba(251,146,60,0.1)] transition-all group">
            <div className="w-12 h-12 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple/20 transition-colors mx-auto">
              <Globe size={20} />
            </div>
            <div className="space-y-1">
              <p className="text-text-muted text-xs font-mono mb-1">// {t.website}</p>
              {data.contact.website && data.contact.websiteUrl && (
                <a href={data.contact.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-purple transition-colors font-semibold break-all text-sm block" dir="ltr">
                  {data.contact.website}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* GitHub / Socials */}
        <div className="flex flex-col items-center gap-4 pt-6 border-t border-white/5">
          <p className="text-xs font-mono text-text-muted">// {t.githubLabel}</p>
          <a
            href={data.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 text-white px-6 py-3 rounded-2xl font-bold font-mono text-sm transition-all hover:scale-105 active:scale-95"
            dir="ltr"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>{data.contact.github}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
