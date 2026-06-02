import React from 'react';
import { motion } from 'framer-motion';
import { Server, Laptop, Network } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'api': return <Server className="text-primary" size={40} />;
      case 'laptop_mac': return <Laptop className="text-accent-purple" size={40} />;
      case 'hub': return <Network className="text-primary" size={40} />;
      default: return <Server className="text-primary" size={40} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  } as const;

  return (
    <section className="py-24 bg-surface-container-lowest/30 relative border-t border-b border-border-subtle/10">
      <div className="max-w-max-width mx-auto px-gutter">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple inline-block">
            Services & Solutions
          </h2>
          <p className="text-text-muted font-body-md max-w-xl mx-auto">
            Voici les domaines d'intervention clés dans lesquels je peux concevoir et développer des solutions informatiques de qualité.
          </p>
        </div>

        {/* Services Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-lg"
        >
          {cvData.services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                borderColor: service.color === 'primary' ? 'rgba(173,198,255,0.2)' : 'rgba(168,85,247,0.2)',
                boxShadow: service.color === 'primary' ? '0 15px 35px -10px rgba(173,198,255,0.1)' : '0 15px 35px -10px rgba(168,85,247,0.1)'
              }}
              className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 text-center space-y-6 flex flex-col items-center justify-between"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                {getServiceIcon(service.icon)}
              </div>

              {/* Service Details */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white font-display">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="pt-2">
                <span className={`h-1 w-12 rounded-full block ${
                  service.color === 'primary' ? 'bg-primary' : 'bg-accent-purple'
                }`}></span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
