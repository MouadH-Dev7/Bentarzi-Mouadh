import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../data/cvData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Formation', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-surface-glass/80 backdrop-blur-lg border-b border-border-subtle shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="flex justify-between items-center max-w-max-width mx-auto px-gutter">
        {/* Logo */}
        <a href="#hero" className="font-headline-md text-2xl font-bold text-primary tracking-tighter hover:opacity-90 transition-opacity">
          {cvData.name}
          <span className="text-accent-purple font-mono">.Dev</span>
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
          <a
            href="/CV_Bentarzi_Mouadh.pdf"
            download
            className="bg-primary-container/20 hover:bg-primary-container/30 border border-primary/30 text-primary px-5 py-2 rounded-xl font-bold transition-all hover:shadow-[0_0_15px_rgba(173,198,255,0.2)] flex items-center gap-2 active:scale-95"
          >
            <Download size={16} />
            Mon CV
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
              <a
                href="/CV_Bentarzi_Mouadh.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="bg-primary-container text-on-primary-container w-full text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2 mt-2"
              >
                <Download size={18} />
                Télécharger le CV (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
