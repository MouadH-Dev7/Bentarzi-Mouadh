import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 max-w-max-width mx-auto px-gutter relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 text-left space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple inline-block">
              Me Contacter
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Vous avez un projet en tête, une opportunité de stage, d'alternance ou simplement envie de discuter technique ? N'hésitez pas à me laisser un message.
            </p>
          </div>

          <div className="space-y-5">
            {/* Email Card */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl glass-card border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-text-muted text-xs font-mono">// EMAIL</p>
                <a href={`mailto:${cvData.contact.email}`} className="text-white hover:text-primary transition-colors font-semibold">
                  {cvData.contact.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl glass-card border border-white/5 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple/10 transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-text-muted text-xs font-mono">// TÉLÉPHONE</p>
                <a href={`tel:${cvData.contact.phone.replace(/\s/g, '')}`} className="text-white hover:text-accent-purple transition-colors font-semibold">
                  {cvData.contact.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl glass-card border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-text-muted text-xs font-mono">// LOCALISATION</p>
                <span className="text-white font-semibold">{cvData.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <a
              href={cvData.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-card rounded-xl border border-white/5 flex items-center justify-center hover:text-primary hover:border-primary/30 transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden text-left"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Message Envoyé !</h3>
                <p className="text-text-muted max-w-sm text-sm">
                  Merci pour votre message. Je vous recontacterai par e-mail dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[11px] font-bold tracking-wider text-text-muted uppercase font-mono block mb-2">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-surface-deep/80 border border-white/5 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white text-sm"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold tracking-wider text-text-muted uppercase font-mono block mb-2">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-surface-deep/80 border border-white/5 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white text-sm"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold tracking-wider text-text-muted uppercase font-mono block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Comment puis-je vous aider ?"
                    className="w-full bg-surface-deep/80 border border-white/5 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-white text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-primary to-accent-purple text-surface-deep font-bold py-4 rounded-2xl hover:shadow-[0_0_25px_rgba(173,198,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <span className="w-5 h-5 rounded-full border-2 border-surface-deep border-t-transparent animate-spin"></span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Envoyer le Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
