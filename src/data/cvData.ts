export interface Project {
  title: string;
  description: string;
  badge: string;
  badgeType: 'blue' | 'teal' | 'amber' | 'purple';
  tags: string[];
  category: 'academic' | 'desktop' | 'microservices' | 'realtime';
  demoUrl?: string;
  codeUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // percentage
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[] | string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  icon: string;
}

export interface CVData {
  name: string;
  surname: string;
  fullName: string;
  title: string;
  subTitle: string;
  avatarInitials: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    github: string;
    githubUrl: string;
  };
  about: {
    description: string;
    stats: {
      value: string;
      label: string;
      color: 'primary' | 'purple';
    }[];
  };
  typingPhrases: string[];
  skills: SkillGroup[];
  projects: Project[];
  education: Education[];
  services: {
    title: string;
    icon: string;
    description: string;
    color: 'primary' | 'purple';
  }[];
}

export const cvData: CVData = {
  name: "Mouadh",
  surname: "Bentarzi",
  fullName: "Bentarzi Mouadh",
  title: "Full-Stack & Backend Developer",
  subTitle: "Master 1 Génie Logiciel · Spécialiste .NET & API REST",
  avatarInitials: "BM",
  contact: {
    phone: "0542 05 93 90",
    email: "mouadh.dev@gmail.com",
    location: "El Marsa, Alger",
    github: "github.com/MouadH-Dev7",
    githubUrl: "https://github.com/MouadH-Dev7",
  },
  about: {
    description: "Ingénieur en Informatique (Ingénierie des Systèmes d'Information et du Logiciel) diplômé de l'Université M'hamed Bougara de Boumerdès (Licence 2025), et actuellement en Master 1 Génie Logiciel (2025/2026). Passionné par le développement backend, la conception d'architectures distribuées et l'intégration des systèmes. Solide maîtrise de C#/.NET Core, Java, Python/Django et de la conception d'APIs REST.",
    stats: [
      { value: "6+", label: "Vrais Projets", color: "primary" },
      { value: "M1", label: "Génie Logiciel", color: "primary" },
      { value: "15+", label: "Compétences clés", color: "purple" },
      { value: "100%", label: "Code Propre", color: "purple" },
    ]
  },
  typingPhrases: [
    "Building scalable microservices architectures",
    "Designing robust ASP.NET Core APIs",
    "Developing desktop solutions in C# and Java",
    "Implementing real-time local network systems"
  ],
  skills: [
    {
      category: "Backend",
      icon: "terminal",
      skills: [
        { name: "C# / .NET Core", level: 90 },
        { name: "ASP.NET Core Web API", level: 86 },
        { name: "Python / Django / DRF", level: 78 },
        { name: "Java / Swing", level: 80 }
      ]
    },
    {
      category: "Bases de données",
      icon: "database",
      skills: [
        { name: "SQL Server / T-SQL", level: 88 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      category: "Frontend",
      icon: "code",
      skills: [
        { name: "HTML · CSS · JavaScript", level: 82 },
        { name: "React (Vite + TS)", level: 65 },
        { name: "Tailwind CSS", level: 78 }
      ]
    },
    {
      category: "Architecture & Outils",
      icon: "settings",
      skills: [
        { name: "Microservices & REST API", level: 85 },
        { name: "Docker & Containerization", level: 68 },
        { name: "Git / GitHub", level: 79 },
        { name: "Systèmes Multi-Agents (JADE)", level: 75 }
      ]
    }
  ],
  projects: [
    {
      title: "Système de Gestion & Vente Immobilière (PFE Licence)",
      description: "Solution complète de vente et gestion immobilière comprenant une API REST en ASP.NET Core Web API, un site web responsive en HTML/CSS/JS et une application desktop en C# WinForms pour l'administration. Intégration complète API ↔ Web ↔ Desktop.",
      badge: "Projet Phare",
      badgeType: "blue",
      tags: ["ASP.NET Core", "C# WinForms", "SQL Server", "HTML/CSS/JS"],
      category: "academic"
    },
    {
      title: "Plateforme Immobilière (Architecture Microservices - Master)",
      description: "Refonte de la plateforme immobilière dans une architecture distribuée avec Django. Chaque domaine métier (annonces, utilisateurs, paiements, recherche) est déployé comme un microservice indépendant communiquant via une API Gateway, sécurisé par JWT.",
      badge: "Microservices",
      badgeType: "purple",
      tags: ["Django REST", "Python", "API Gateway", "Docker", "PostgreSQL", "JWT"],
      category: "microservices"
    },
    {
      title: "Restaurant Commandes Temps Réel (QR Code)",
      description: "Système de commande pour restaurant via QR Code avec gestion des commandes en temps réel sur réseau local. Conçu pour simplifier la prise de commandes et la communication entre les serveurs, la cuisine et la caisse.",
      badge: "Réseau Local",
      badgeType: "teal",
      tags: ["Réseau local", "Temps réel", "Web App", "Socket.io"],
      category: "realtime"
    },
    {
      title: "Système de Gestion Hospitalière",
      description: "Application desktop complète de gestion hospitalière permettant de planifier les rendez-vous, gérer les dossiers médicaux des patients et coordonner le travail des médecins.",
      badge: "Desktop App",
      badgeType: "teal",
      tags: ["C# .NET Core", "SQL Server", "SSMS"],
      category: "desktop"
    },
    {
      title: "Gestion d'Agence Automobile",
      description: "Application desktop de gestion d'une agence de location et vente automobile, permettant de suivre le parc de véhicules, gérer les clients et automatiser l'impression des contrats.",
      badge: "Desktop App",
      badgeType: "amber",
      tags: ["Java Swing", "MySQL", "JDBC"],
      category: "desktop"
    },
    {
      title: "Systèmes Multi-Agents (Achat/Vente JADE)",
      description: "Simulation d'un marché d'achat et vente décentralisé en utilisant le protocole Contract Net FIPA-ACL (CFP, PROPOSE, ACCEPT) et un registre DF pour l'annuaire des services.",
      badge: "Master Project",
      badgeType: "purple",
      tags: ["JADE Framework", "FIPA-ACL", "Java"],
      category: "academic"
    }
  ],
  education: [
    {
      degree: "Master 1 — Génie Logiciel",
      institution: "Université M'hamed Bougara de Boumerdès",
      year: "En cours — 2025 / 2026",
      icon: "school"
    },
    {
      degree: "Licence — Informatique, Spécialité ISIL",
      institution: "Université M'hamed Bougara de Boumerdès",
      year: "Obtenue en 2025",
      icon: "workspace_premium"
    }
  ],
  services: [
    {
      title: "Développement d'API & Backend",
      icon: "api",
      description: "Création d'APIs REST robustes, sécurisées par JWT, connectées à des bases de données relationnelles optimisées.",
      color: "primary"
    },
    {
      title: "Développement Web & Desktop",
      icon: "laptop_mac",
      description: "Applications web responsives avec React ou HTML5/JS, et applications desktop robustes en C# (WinForms/.NET) ou Java (Swing).",
      color: "purple"
    },
    {
      title: "Architecture Microservices",
      icon: "hub",
      description: "Conception de systèmes distribués et communicants basés sur Docker, Django REST et API Gateways.",
      color: "primary"
    }
  ]
};
