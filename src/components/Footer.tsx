import React from 'react';
import { cvData } from '../data/cvData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-deep/90 border-t border-border-subtle/20 w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-max-width mx-auto px-gutter items-center">
        <div className="text-left space-y-2">
          <div className="font-headline-md text-xl font-bold text-white tracking-tighter">
            {cvData.name}
            <span className="text-accent-purple font-mono">.Dev</span>
          </div>
          <p className="font-body-md text-sm text-text-muted">
            © {new Date().getFullYear()} {cvData.fullName}. Fait avec précision et passion.
          </p>
        </div>
        <div className="flex gap-md md:justify-end text-xs font-mono">
          <a href="#about" className="text-text-muted hover:text-white transition-colors">À propos</a>
          <a href="#projects" className="text-text-muted hover:text-white transition-colors">Projets</a>
          <a href={cvData.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
