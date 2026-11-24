export interface Project {
  title: string;
  description: string;
  badge: string;
  badgeType: 'blue' | 'teal' | 'amber' | 'purple';
  tags: string[];
  category: 'academic' | 'desktop' | 'microservices' | 'realtime' | 'mobile' | 'bots';
  image: string;
  longDescription: string;
  features: string[];
  challenges: string;
  duration: string;
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
  skills: Skill[];
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
    website?: string;
    websiteUrl?: string;
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

export const cvData: Record<'en' | 'fr' | 'ar', CVData> = {
  en: {
    name: "Mouadh",
    surname: "Bentarzi",
    fullName: "Bentarzi Mouadh",
    title: "Full-Stack & Backend Developer",
    subTitle: "Master 2 Software Engineering · .NET & REST API Specialist",
    avatarInitials: "BM",
    contact: {
      phone: "0542 05 93 90",
      email: "mouadh.dev@gmail.com",
      location: "El Marsa, Algiers",
      github: "github.com/MouadH-Dev7",
      githubUrl: "https://github.com/MouadH-Dev7",
      website: "bentarzimouadh.mouadh-dev.workers.dev",
      websiteUrl: "https://bentarzimouadh.mouadh-dev.workers.dev",
    },
    about: {
      description: "22-year-old computer engineer (Information Systems and Software Engineering) graduated from M'hamed Bougara University of Boumerdès (Bachelor 2025), currently pursuing a Master 2 in Software Engineering (2026/2027) after completing Master 1. Passionate about backend development, distributed architecture, and system integration. Strong mastery of C#/.NET Core, Java, Python/Django, and REST API design. National service status: Completed.",
      stats: [
        { value: "13", label: "Real Projects", color: "primary" },
        { value: "M2", label: "Software Eng.", color: "primary" },
        { value: "15+", label: "Key Skills", color: "purple" },
        { value: "22", label: "Years Old", color: "purple" },
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
        category: "Databases",
        icon: "database",
        skills: [
          { name: "SQL Server / T-SQL", level: 88 },
          { name: "MySQL", level: 75 },
          { name: "PostgreSQL", level: 78 }
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
        category: "Architecture & Tools",
        icon: "settings",
        skills: [
          { name: "Microservices & REST API", level: 85 },
          { name: "Docker & Containerization", level: 68 },
          { name: "Git / GitHub", level: 79 },
          { name: "Multi-Agent Systems (JADE)", level: 75 }
        ]
      }
    ],
    projects: [
      {
        title: "Real Estate Management & Sales System",
        description: "Complete real estate system comprising an ASP.NET Core Web API, a responsive website in HTML/CSS/JS, a C# WinForms desktop app for administration, and a Flutter mobile app. Complete API ↔ Web ↔ Desktop ↔ Mobile integration.",
        badge: "Featured",
        badgeType: "blue",
        tags: ["ASP.NET Core", "C# WinForms", "SQL Server", "HTML/CSS/JS", "Flutter"],
        category: "academic",
        image: "/projects/real_estate_management.png",
        longDescription: "This project represents my Graduation Project (PFE) for my Bachelor's degree. It is a complete integration platform connecting four environments: a robust backend API, an interactive client web portal, a C# WinForms desktop application for administrators and real estate agents, and a cross-platform mobile application in Flutter for rapid client search. The goal was to build a unified software ecosystem capable of managing the full real estate transaction cycle securely and dynamically.",
        features: [
          "Central REST API in ASP.NET Core Web API with layered architecture",
          "Desktop administration interface in C# WinForms (catalog, contracts, clients, statistics)",
          "Responsive client web portal (multicriteria search, booking, contact forms)",
          "Mobile application in Flutter for Android and iOS devices",
          "Role-based secure authentication and permissions",
          "Automated PDF report and invoice generation",
          "Interactive dashboard statistics for administrators"
        ],
        challenges: "The main challenge was designing a high-performance relational SQL Server database schema and ensuring fluid and secure real-time data synchronization between the desktop app, mobile app, and client web portal, orchestrated by the central REST API under concurrent updates.",
        duration: "4 months (Licence PFE 2025)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Restaurant ERP & POS System",
        description: "Multi-app ecosystem (Admin, POS, Kitchen, Server, Client) running on a NestJS + Redis backend. Standalone Windows installer (Inno Setup) with self-resilient service launcher; 0.82% error rate under high load.",
        badge: "Production",
        badgeType: "teal",
        tags: ["NestJS", "Next.js", "Prisma", "Redis", "PostgreSQL", "Inno Setup"],
        category: "microservices",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        longDescription: "An end-to-end software ecosystem designed for modern restaurants. It includes a web administration panel, a cash register POS terminal, real-time screen applications for kitchen and waiters, and a table-ordering client app. The NestJS backend leverages Redis for processing queue jobs and real-time message pub/sub. The local deployment uses an Inno Setup installer that registers a self-resilient background service launcher.",
        features: [
          "Modular Monorepo architecture using NestJS and Next.js",
          "Real-time event syncing via WebSockets and Redis cache layer",
          "Custom offline Windows installer (Inno Setup) with automatic service recovery",
          "Outstanding performance with a 0.82% error rate under concurrent loads (50+ active devices)",
          "Data modeling and migrations using Prisma ORM with PostgreSQL"
        ],
        challenges: "Ensuring zero-delay order synchronization between tables, kitchen, and cash registers under heavy traffic. Combining Redis Pub/Sub with NestJS BullMQ queues resolved bottleneck issues and provided robust system failover.",
        duration: "3 months (Production)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "DzStock ERP — Inventory & POS",
        description: "Desktop ERP tailored for the Algerian market (stock, purchases, POS, production). Clean/MVVM architecture, EF Core with DbContextFactory, and PL/pgSQL triggers/stored functions for automated tax calculations.",
        badge: "Desktop Enterprise",
        badgeType: "blue",
        tags: [".NET 10", "WPF", "C#", "EF Core", "PostgreSQL"],
        category: "desktop",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        longDescription: "DzStock ERP is a desktop business management application tailored specifically for commercial regulations in Algeria. It handles inventory control, vendor purchases, POS sales receipt printing, and simple production recipes. Developed in C# with WPF on .NET 10, it implements a Clean MVVM architecture connected to a PostgreSQL database.",
        features: [
          "Modern, user-friendly WPF UI with interactive sales charts",
          "17+ triggers and PL/pgSQL database functions for automatic VAT, stamp duty, and stock movements calculations",
          "Production tracking and Bill of Materials (BOM) management",
          "Thread-safe database operations utilizing EF Core's DbContextFactory",
          "Multi-user system with detailed audit logs and granular permissions"
        ],
        challenges: "Maintaining UI responsiveness during heavy database writes or generating large sales reports. Using async task programming combined with EF Core's DbContextFactory solved database context locking issues.",
        duration: "4 months",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Real Estate Platform — Microservices",
        description: "Redesign of the real estate platform into a distributed architecture with Django REST. Each business domain (listings, users, payments, search) is a microservice running in Docker with PostgreSQL.",
        badge: "Microservices",
        badgeType: "purple",
        tags: ["Django REST", "Python", "API Gateway", "Docker", "PostgreSQL", "JWT"],
        category: "microservices",
        image: "/projects/microservices_real_estate.png",
        longDescription: "As part of my Master 1 studies, I re-architected the monolithic real estate management system into decentralized microservices. Each core domain (announcements, user profiles, payments, elasticsearch) runs in its own Docker container with an independent database, ensuring isolated state, high availability, and horizontal scaling.",
        features: [
          "Decomposition into independent microservices with Django REST Framework",
          "Centralized API Gateway routing external client requests",
          "Single Sign-On (SSO) authentication secured by JWT tokens",
          "Isolated PostgreSQL databases per microservice to preserve database autonomy",
          "Full containerization of services using Docker and Docker Compose",
          "WPF C# administrator desktop portal communicating with microservices"
        ],
        challenges: "Handling data consistency across microservices and coordinating secure transactions. Utilizing an API Gateway combined with stateless JWT validation allowed secure routing without making heavy blocking database checks.",
        duration: "2 months (Master Project 2025)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Hospital Management System",
        description: "Comprehensive desktop hospital application for scheduling appointments, storing patient medical records, and coordinating practitioner schedules.",
        badge: "Desktop App",
        badgeType: "teal",
        tags: ["C# .NET Core", "SQL Server", "SSMS"],
        category: "desktop",
        image: "/projects/hospital_management.png",
        longDescription: "A C# desktop application built for clinical environments. It allows secretaries and doctors to register admissions, update confidential patient history files, schedule appointments using a shared visual calendar, and print medical prescriptions.",
        features: [
          "Complete CRUD management of patient records (histories, allergies, prescriptions)",
          "Shared visual calendar for doctor availability and consultations",
          "Invoicing module and automated receipt generation",
          "Printable prescription editor",
          "Optimized T-SQL queries and SQL Server stored procedures",
          "Clean desktop UI implemented with C# and .NET Core"
        ],
        challenges: "Optimizing search queries when matching patient names across large datasets. Implementing strict security roles (Doctor, Receptionist, Administrator) protected patient confidentiality.",
        duration: "1 month",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Car Rental Agency System",
        description: "Desktop car rental and sales application written in Java Swing with MySQL, tracking vehicle status, contracts, and clients.",
        badge: "Desktop App",
        badgeType: "amber",
        tags: ["Java Swing", "MySQL", "JDBC"],
        category: "desktop",
        image: "/projects/car_agency_management.png",
        longDescription: "Developed in Java with a Swing UI, this application manages fleet inventory (mileage, maintenance, availability), client accounts, rental booking calendars, and generates printable PDF rental agreements.",
        features: [
          "Real-time vehicle status tracking (Available, Rented, Maintenance, Sold)",
          "Client database management (licence checks, history, coordinates)",
          "Automatic billing calculator based on model rates and duration",
          "Automated rental contract printing",
          "Relational database design in MySQL with JDBC connection pooling",
          "Analytical graphs summarizing agency revenue"
        ],
        challenges: "Conceiving a robust concurrency lock to prevent double-booking of a single vehicle on identical dates, and styling Swing components to match modern UI design principles.",
        duration: "1 month",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Multi-Agent System (JADE)",
        description: "Market simulation of buyers and sellers using FIPA-ACL protocols (CFP, PROPOSE, ACCEPT) and a DF directory on JADE.",
        badge: "Master Project",
        badgeType: "purple",
        tags: ["JADE Framework", "FIPA-ACL", "Java"],
        category: "academic",
        image: "/projects/multi_agents_system.png",
        longDescription: "Developed during my Master 1 distributed artificial intelligence course, this project simulates a decentralized market. Autonomous buyer and seller agents communicate asynchronously using the JADE framework and FIPA-ACL negotiation protocols (Contract Net) to trade virtual resources.",
        features: [
          "Distributed software architecture based on autonomous software agents",
          "Asynchronous inter-agent messaging utilizing FIPA-ACL guidelines",
          "FIPA Contract Net protocol implementation (Request for Proposal, Propose, Accept, Reject)",
          "Directory Facilitator (DF) registry acting as yellow-pages directory",
          "Graphical monitoring GUI showing active agents and message pathways",
          "Intelligent decision-making routines embedded in agent behaviors"
        ],
        challenges: "Debugging race conditions in asynchronous negotiation phases where multiple buyers concurrently request bids from the same set of seller agents. Synchronizing agent state loops resolved deadlock issues.",
        duration: "3 weeks (Master Project 2026)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "E-Commerce App (Flutter)",
        description: "Sleek and modern cross-platform e-commerce app developed with Flutter and Dart, utilizing Firebase for real-time shopping cart and auth.",
        badge: "Mobile App",
        badgeType: "teal",
        tags: ["Flutter", "Dart", "Firebase", "State Management"],
        category: "mobile",
        image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
        longDescription: "A full-featured mobile commerce application running on iOS and Android. Built with Flutter, it features a clean Material 3 design and connects directly to Firebase services for data storage, client authentication, and real-time syncing.",
        features: [
          "Secure user authentication with Firebase Auth (Email & Google login)",
          "Real-time reactive shopping cart and checkout pipeline",
          "Database synchronization for products and inventory using Cloud Firestore",
          "Search queries and category filters",
          "Push notifications using Firebase Cloud Messaging for order tracking"
        ],
        challenges: "Optimizing state management for cart updates and screen transitions. Implementing Provider pattern resolved unnecessary re-renders, offering a 60fps scrolling experience.",
        duration: "2 months",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Notes App (Markdown)",
        description: "Local note-taking mobile application with Markdown support, folders organization, and offline storage.",
        badge: "Mobile App",
        badgeType: "amber",
        tags: ["Flutter", "Dart", "SQLite", "Hive Database"],
        category: "mobile",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
        longDescription: "A fast note-taking utility designed for mobile devices. Developed in Flutter, it supports offline writing in Markdown, tag labeling, color-coding, and local text indexing.",
        features: [
          "Rich Markdown editor supporting headers, lists, code, and previews",
          "Ultra-fast local database operations using Hive NoSQL",
          "Folder hierarchy and custom tags for file organization",
          "Global text search matching keywords instantly",
          "Dynamic dark/light mode toggle matching OS settings"
        ],
        challenges: "Optimizing write times and app launch latency with large sets of text documents. Choosing Hive (written in pure Dart) instead of standard SQLite yielded significantly higher read/write speeds.",
        duration: "3 weeks",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Telegram Chatbot",
        description: "Smart bot built for Telegram automating replies, parsing commands, and retrieving weather/news data from third-party APIs.",
        badge: "Telegram Bot",
        badgeType: "purple",
        tags: ["Node.js", "Telegram API", "NLP", "Axios"],
        category: "bots",
        image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80",
        longDescription: "An automated assistant bot deployed on Telegram. Written in Node.js, it monitors group chats, answers FAQs, filters spam links, and fetches real-time data from web APIs upon user query.",
        features: [
          "Interactive menus using Telegram's Inline keyboards and commands",
          "Auto-moderation tools checking message content for spam or prohibited words",
          "Third-party API integration using Axios to retrieve current data (weather, news)",
          "User database tracking bot commands history",
          "Asynchronous event loop for fast request handling"
        ],
        challenges: "Preventing rate-limiting issues when the bot is added to active groups with high traffic. Setting message queues and request throttling bypassed Telegram API restrictions.",
        duration: "2 weeks",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Telegram Movies Bot",
        description: "Telegram search bot retrieving movie descriptions, actor profiles, ratings, and YouTube trailers from the TMDB API.",
        badge: "Telegram Bot",
        badgeType: "blue",
        tags: ["Python", "Telegram API", "TMDB API", "Web Scraping"],
        category: "bots",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        longDescription: "A Python-based bot integrated with TMDB. Users query movie or show titles directly in Telegram, receiving structured cards with posters, synopses, cast lists, average scores, and direct trailer video links.",
        features: [
          "Search movies by keywords in multiple languages",
          "Personalized suggestion algorithm matching user genre filters",
          "Rich message responses formatting images and text markdown",
          "Personal watchlists stored inside a SQLite database",
          "Admin panels monitor user search counts"
        ],
        challenges: "Speeding up movie trailer video fetching without calling heavy scrapers. Storing TMDB trailer references inside a local Redis cache eliminated loading lag for popular queries.",
        duration: "3 weeks",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Bel Djazair — Algeria Tourism",
        description: "Modern travel web application promoting tourism in Algeria, featuring regional wilaya details, historical sites, hotels, and travel routes.",
        badge: "Web App",
        badgeType: "teal",
        tags: ["React", "Tailwind CSS", "Node.js", "REST API"],
        category: "academic",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        longDescription: "A showcase web platform highlighting Algeria's tourism. It maps out historical landmarks, scenic nature parks, local hotel directories, and tour routes. It implements search and filter options sorting spots by province (Wilaya) and category.",
        features: [
          "Responsive, pixel-perfect layout using Tailwind CSS",
          "Interactive maps linking coordinates to historical guides",
          "Photo galleries optimized with WebP compression and lazy-loading",
          "Advanced filter metrics checking cost, region, and ratings",
          "Node.js API serves coordinates and local statistics"
        ],
        challenges: "Optimizing high-resolution images to maintain fast page speeds. Converting media to WebP and configuring lazy-loading minimized initial load weight by 75%.",
        duration: "1 month (University Project)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "University Document Portal",
        description: "Administrative PHP portal allowing university students to log in and request transcripts, enrollment certificates, and school records online.",
        badge: "Web App",
        badgeType: "blue",
        tags: ["PHP", "MySQL", "Bootstrap", "AJAX"],
        category: "academic",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
        longDescription: "An administrative web system built in native PHP. It digitizes student requests for official papers like school certificates or transcript sheets. A separate administration dashboard allows academic registrars to approve, reject, or print PDF requests.",
        features: [
          "Secure student registration and login validation",
          "Dynamic document status tracking with AJAX updates",
          "Registrar administrative interface for verifying details and exporting PDF prints",
          "Automated email notifications when request status updates",
          "Relational MySQL database modeling student records securely"
        ],
        challenges: "Securing form uploads and SQL queries against injections and cross-site scripting (XSS). Using PHP PDO prepared statements and escaping inputs protected the system against data tampering.",
        duration: "1 month (University Project)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      }
    ],
    education: [
      {
        degree: "Master 2 — Software Engineering",
        institution: "M'hamed Bougara University of Boumerdès",
        year: "In progress — 2026 / 2027",
        icon: "school"
      },
      {
        degree: "Master 1 — Software Engineering",
        institution: "M'hamed Bougara University of Boumerdès",
        year: "Completed — 2025 / 2026",
        icon: "school"
      },
      {
        degree: "Bachelor's Degree — Computer Science (ISIL)",
        institution: "M'hamed Bougara University of Boumerdès",
        year: "Obtained in 2025",
        icon: "workspace_premium"
      }
    ],
    services: [
      {
        title: "Backend & API Development",
        icon: "api",
        description: "Creating secure, scalable, and modular REST APIs using ASP.NET Core, Node.js, and Django REST, connecting to highly optimized databases.",
        color: "primary"
      },
      {
        title: "Web & Desktop Applications",
        icon: "laptop_mac",
        description: "Building responsive frontend client websites using React, and robust offline desktop tools with C# (WPF/WinForms) and Java Swing.",
        color: "purple"
      },
      {
        title: "Microservices Architecture",
        icon: "hub",
        description: "Designing decentralized systems using Docker container orchestration, API Gateways, Redis caching, and JWT authentication.",
        color: "primary"
      }
    ]
  },
  fr: {
    name: "Mouadh",
    surname: "Bentarzi",
    fullName: "Bentarzi Mouadh",
    title: "Développeur Full-Stack & Backend",
    subTitle: "Master 2 Génie Logiciel · Spécialiste .NET & API REST",
    avatarInitials: "BM",
    contact: {
      phone: "0542 05 93 90",
      email: "mouadh.dev@gmail.com",
      location: "El Marsa, Alger",
      github: "github.com/MouadH-Dev7",
      githubUrl: "https://github.com/MouadH-Dev7",
      website: "bentarzimouadh.mouadh-dev.workers.dev",
      websiteUrl: "https://bentarzimouadh.mouadh-dev.workers.dev",
    },
    about: {
      description: "Ingénieur en informatique (Ingénierie des Systèmes d'Information et du Logiciel) âgé de 22 ans, diplômé de l'Université M'hamed Bougara de Boumerdès (Licence 2025) et actuellement en Master 2 Génie Logiciel (2026/2027) après avoir validé le Master 1. Passionné par le développement backend, la conception d'architectures distribuées et l'intégration des systèmes. Solide maîtrise de C#/.NET Core, Java, Python/Django et de la conception d'APIs REST. Situation vis-à-vis du service national : Dégagé (Titulaire de la carte de service).",
      stats: [
        { value: "13", label: "Vrais Projets", color: "primary" },
        { value: "M2", label: "Génie Logiciel", color: "primary" },
        { value: "15+", label: "Compétences clés", color: "purple" },
        { value: "22", label: "Ans", color: "purple" },
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
          { name: "PostgreSQL", level: 78 }
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
        title: "Système de gestion et vente immobilière",
        description: "Solution complète de vente et gestion immobilière comprenant une API REST en ASP.NET Core Web API, un site web responsive en HTML/CSS/JS, une application desktop C# d'administration et une application mobile Flutter. Intégration complète API ↔ Web ↔ Desktop ↔ Mobile.",
        badge: "Projet Phare",
        badgeType: "blue",
        tags: ["ASP.NET Core", "C# WinForms", "SQL Server", "HTML/CSS/JS", "Flutter"],
        category: "academic",
        image: "/projects/real_estate_management.png",
        longDescription: "Ce projet représente mon Projet de Fin d'Études (PFE) pour ma Licence. C'est une plateforme d'intégration complète reliant quatre mondes : une API backend robuste, une interface web interactive pour les clients, une application desktop WinForms pour les administrateurs et agents immobiliers, et une application mobile cross-platform en Flutter pour la consultation rapide. L'objectif était de créer un écosystème logiciel unifié capable de gérer le cycle complet d'une transaction immobilière de manière sécurisée, fluide et rapide.",
        features: [
          "API REST centrale en ASP.NET Core Web API avec architecture en couches",
          "Interface d'administration desktop en C# WinForms (gestion du catalogue, contrats, clients, statistiques)",
          "Portail web client responsive (recherche multicritères, prise de rendez-vous, formulaires de contact)",
          "Application mobile pour terminaux Android et iOS en Flutter pour le suivi",
          "Authentification sécurisée avec rôles et permissions",
          "Génération de rapports et factures PDF automatisée",
          "Statistiques et tableaux de bord interactifs pour l'administration"
        ],
        challenges: "Le défi majeur a été de concevoir une architecture de base de données SQL Server relationnelle performante et d'assurer une synchronisation fluide et sécurisée des données en temps réel entre l'application desktop WinForms, l'application mobile et l'application Web, le tout orchestré par l'API REST centrale avec une gestion optimale de la concurrence.",
        duration: "4 mois (PFE Licence 2025)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Système ERP & POS pour Restaurants",
        description: "Écosystème multi-applications (Admin, POS, Cuisine, Serveur, Client) sur backend NestJS + Redis. Installeur Windows autonome (Inno Setup) avec Service Launcher auto-résilient ; taux d'erreur 0.82% sous forte charge.",
        badge: "Production",
        badgeType: "teal",
        tags: ["NestJS", "Next.js", "Prisma", "Redis", "PostgreSQL", "Inno Setup"],
        category: "microservices",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        longDescription: "Un écosystème d'applications complet conçu pour la restauration moderne. Il comprend un tableau de bord d'administration, un terminal de point de vente (POS) pour la caisse, des écrans pour la cuisine et les serveurs en temps réel, et un portail client pour les commandes de table. Le backend NestJS utilise Redis pour la gestion des files d'attente de commandes et la publication de messages en temps réel. L'installation locale est simplifiée grâce à un installeur Windows Inno Setup intégrant un service launcher auto-résilient.",
        features: [
          "Architecture monorepo modulaire avec NestJS and Next.js",
          "Communication temps réel avec WebSockets et mise en cache avec Redis",
          "Installeur Windows personnalisé autonome (Inno Setup) avec service auto-résilient",
          "Taux d'erreur exceptionnellement bas (0.82%) sous forte charge de plus de 50 utilisateurs simultanés",
          "Accès aux données modélisé et sécurisé avec Prisma ORM et PostgreSQL"
        ],
        challenges: "La synchronisation instantanée des commandes cuisine/salle sous forte charge de travail. L'utilisation combinée de Redis Pub/Sub et de files d'attente NestJS/BullMQ a permis de maintenir une latence minimale et d'assurer une tolérance aux pannes robuste.",
        duration: "3 mois (Production)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "DzStock ERP — Gestion de Stock & POS",
        description: "ERP desktop pour le marché algérien (stock, achats, POS, production). Architecture Clean/MVVM, EF Core avec DbContextFactory, triggers et fonctions PL/pgSQL pour le calcul automatique TVA/TTC.",
        badge: "Desktop Enterprise",
        badgeType: "blue",
        tags: [".NET 10", "WPF", "C#", "EF Core", "PostgreSQL"],
        category: "desktop",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        longDescription: "DzStock ERP is a desktop business management application tailored specifically for commercial regulations in Algeria. It handles inventory control, vendor purchases, POS sales receipt printing, and simple production recipes. Developed in C# with WPF on .NET 10, it implements a Clean MVVM architecture connected to a PostgreSQL database.",
        features: [
          "Interface WPF moderne et ergonomique avec des graphiques de ventes interactifs",
          "Plus de 17 triggers et fonctions stockées PL/pgSQL pour automatiser le calcul des taxes (TVA, TTC, droit de timbre) et les stocks",
          "Gestion de la production et nomenclature des produits (BOM)",
          "Accès aux bases de données hautement performant avec EF Core (DbContextFactory pour le multithreading)",
          "Gestion multi-utilisateurs avec droits d'accès fins et journal d'audit"
        ],
        challenges: "Assurer la réactivité de l'interface graphique (UI) lors de requêtes de rapports lourdes ou de traitement de lots. L'implémentation de la programmation asynchrone multithreadée via DbContextFactory d'EF Core a permis de maintenir l'application fluide en toutes circonstances.",
        duration: "4 mois",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Plateforme immobilière — Architecture Microservices",
        description: "Refonte de la plateforme immobilière dans une architecture distribuée avec Django REST. Chaque domaine métier (annonces, utilisateurs, paiements, recherche) est déployé comme un microservice indépendant communiquant via une API Gateway, sécurisé par JWT.",
        badge: "Microservices",
        badgeType: "purple",
        tags: ["Django REST", "Python", "API Gateway", "Docker", "PostgreSQL", "JWT"],
        category: "microservices",
        image: "/projects/microservices_real_estate.png",
        longDescription: "Dans le cadre de mon Master 1, j'ai réalisé la refonte complète du système de gestion immobilière en passant d'une architecture monolithique à une architecture de microservices distribués. Chaque service (gestion des annonces, gestion des profils utilisateurs, système de paiement et service de recherche) a été isolé dans son propre conteneur Docker avec sa propre base de données PostgreSQL, garantissant une haute disponibilité et une scalabilité horizontale.",
        features: [
          "Découpage en microservices indépendants avec Django REST Framework",
          "API Gateway centralisée pour le routage des requêtes",
          "Authentification unifiée (Single Sign-On) et sécurisation des routes par jetons JWT",
          "Bases de données PostgreSQL isolées par microservice pour préserver l'autonomie",
          "Conteneurisation complète de l'application avec Docker et Docker Compose",
          "Interface d'administration complémentaire développée en C# WinForms"
        ],
        challenges: "La gestion de la cohérence des données entre les microservices et l'orchestration des conteneurs ont été des défis de taille. L'implémentation d'une API Gateway et d'un mécanisme de jetons JWT sécurisés et légers a permis de centraliser les accès tout en conservant des services indépendants.",
        duration: "2 mois (Projet Master 2025)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Restaurant Commandes Temps Réel",
        description: "Système de commande pour restaurant via QR Code avec gestion des commandes en temps réel sur réseau local. Conçu pour simplifier la prise de commandes et la communication entre les serveurs, la cuisine et la caisse.",
        badge: "Réseau Local",
        badgeType: "teal",
        tags: ["Réseau local", "Temps réel", "Web App", "Socket.io"],
        category: "realtime",
        image: "/projects/restaurant_qr_code.png",
        longDescription: "Ce projet est une solution web conçue pour fonctionner sur un réseau local au sein d'un restaurant. Les clients scannent un QR Code présent sur leur table pour accéder au menu digital et passer commande. La commande est instantanément transmise en temps réel à l'écran de la cuisine et de la caisse via des protocoles de communication bidirectionnels, éliminant ainsi le temps d'attente et limitant les erreurs de saisie.",
        features: [
          "Menu interactif accessible sur mobile via scan de QR Code",
          "Mise à jour en temps réel de l'état des commandes (Cuisine, Caisse, Serveur)",
          "Communication bidirectionnelle ultra-rapide via WebSockets / Socket.io",
          "Panneau d'administration de la cuisine pour valider et préparer les plats",
          "Console de caisse pour la facturation et le suivi du chiffre d'affaires",
          "Fonctionnement hors-ligne ou sur réseau local sans dépendance à Internet"
        ],
        challenges: "L'établissement d'une connexion WebSocket robuste et tolérante aux pannes de réseau local (déconnexions Wi-Fi fréquentes sur mobile) a nécessité la mise en place de mécanismes de reconnexion automatique et de mise en cache locale des commandes non envoyées.",
        duration: "3 semaines (Projet Personnel)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Gestion Hospitalière",
        description: "Application desktop complète de gestion hospitalière permettant de planifier les rendez-vous, gérer les dossiers médicaux des patients et coordonner le travail des médecins.",
        badge: "Desktop App",
        badgeType: "teal",
        tags: ["C# .NET Core", "SQL Server", "SSMS"],
        category: "desktop",
        image: "/projects/hospital_management.png",
        longDescription: "Une application de bureau conçue pour les établissements médicaux. Elle offre un système complet pour le secrétariat et les praticiens afin de gérer les fiches d'admission des patients, stocker l'historique médical de manière confidentielle, planifier les consultations via un calendrier partagé, et éditer des ordonnances types.",
        features: [
          "Gestion complète des dossiers patients (antécédents, allergies, consultations)",
          "Planification visuelle des rendez-vous par médecin et par spécialité",
          "Module de facturation et édition de reçus/factures",
          "Génération automatique d'ordonnances imprimables",
          "Base de données SQL Server avec requêtes optimisées et procédures stockées",
          "Interface ergonomique développée sous C# .NET Core"
        ],
        challenges: "L'optimisation des requêtes de recherche multicritères parmi des dossiers patients et la sécurisation des données médicales sensibles en mettant en place un système de rôles strict (Médecin, Secrétaire, Administrateur).",
        duration: "1 mois (Projet Académique)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Agence Automobile",
        description: "Application desktop de gestion d'une agence de location et vente automobile, permettant de suivre le parc de véhicules, gérer les clients et automatiser l'impression des contrats.",
        badge: "Desktop App",
        badgeType: "amber",
        tags: ["Java Swing", "MySQL", "JDBC"],
        category: "desktop",
        image: "/projects/car_agency_management.png",
        longDescription: "Développée en Java avec l'interface graphique Swing, cette application offre une solution clé en main pour les agences de location ou de vente de voitures. Elle intègre le suivi de l'état du parc de véhicules (kilométrage, entretien, disponibilité), la gestion des fiches clients avec historique de location, et un module d'impression de contrats de location et factures au format PDF.",
        features: [
          "Suivi du statut des véhicules (Disponible, Loué, En maintenance, Vendu)",
          "Gestion de la base clients (documents d'identité, permis, coordonnées)",
          "Calculateur automatique du coût de location basé sur la durée et le modèle",
          "Génération et édition automatique de contrats de location",
          "Base de données relationnelle MySQL avec connexion via JDBC",
          "Statistiques graphiques de rentabilité de l'agence"
        ],
        challenges: "Assurer une gestion rigoureuse des états de disponibilité des véhicules pour éviter les doubles réservations, et concevoir une interface Swing moderne et responsive malgré les limitations du framework graphique natif Java.",
        duration: "1 mois (Projet Universitaire)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Systèmes Multi-Agents",
        description: "Simulation d'un marché d'achat et vente décentralisé en utilisant le protocole Contract Net FIPA-ACL (CFP, PROPOSE, ACCEPT) et un registre DF pour l'annuaire des services.",
        badge: "Master Project",
        badgeType: "purple",
        tags: ["JADE Framework", "FIPA-ACL", "Java"],
        category: "academic",
        image: "/projects/multi_agents_system.png",
        longDescription: "Dans le cadre du cours sur l'Intelligence Artificielle Distribuée en Master 1, j'ai conçu et développé une simulation de marché décentralisé à l'aide du framework JADE (Java Agent Development Framework). Des agents acheteurs et vendeurs autonomes négocient de manière indépendante pour l'acquisition de ressources en respectant les spécifications FIPA-ACL de communication inter-agents.",
        features: [
          "Architecture logicielle distribuée basée sur les agents autonomes",
          "Communication inter-agents asynchrone utilisant FIPA-ACL",
          "Protocole de négociation Contract Net (appels d'offres, propositions, acceptations/rejets)",
          "Utilisation du Directory Facilitator (DF) comme annuaire de services (pages jaunes)",
          "Visualisation graphique du cycle de vie des agents et des échanges de messages",
          "Logique de décision intelligente intégrée dans les comportements des agents"
        ],
        challenges: "La synchronisation temporelle des comportements asynchrones des agents et la résolution des situations de blocage (deadlocks) lors des phases de négociation parallèles où plusieurs acheteurs sollicitent simultanément les mêmes vendeurs.",
        duration: "3 semaines (Projet Master 2026)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Application E-Commerce (Flutter)",
        description: "Application mobile de commerce électronique fluide et moderne développée avec Flutter, utilisant Firebase pour le backend et la gestion du panier en temps réel.",
        badge: "Mobile App",
        badgeType: "teal",
        tags: ["Flutter", "Dart", "Firebase", "State Management"],
        category: "mobile",
        image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
        longDescription: "Une application mobile cross-platform complète pour le commerce en ligne. Développée en Flutter avec le langage Dart, elle propose une interface fluide et réactive conforme aux directives Material Design, connectée à Firebase pour la gestion des utilisateurs, de la base de données de produits, et du stockage de fichiers.",
        features: [
          "Authentification sécurisée avec Firebase Auth (Email et Google Sign-in)",
          "Panier d'achat interactif et système de commande avec mise à jour en temps réel",
          "Paiement fictif intégré et suivi du statut de la commande",
          "Recherche avancée avec filtres par catégorie et prix",
          "Notifications Push envoyées aux utilisateurs pour le suivi de commande"
        ],
        challenges: "La gestion de l'état global de l'application (notamment le panier d'achat et le profil de l'utilisateur) a été résolue de manière performante en utilisant Provider, garantissant une synchronisation rapide sans latence visuelle.",
        duration: "2 mois (Projet Personnel)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Application de Notes (Notes App)",
        description: "Application de prise de notes rapide avec support du format Markdown, catégorisation par dossiers et stockage local sécurisé.",
        badge: "Mobile App",
        badgeType: "amber",
        tags: ["Flutter", "Dart", "SQLite", "Hive Database"],
        category: "mobile",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
        longDescription: "Une application mobile de bureau minimaliste et rapide de prise de notes. Conçue avec Flutter, elle permet aux utilisateurs de créer, modifier et organiser des mémos ou listes de tâches directement sur leur téléphone. Elle prend en charge l'édition au format Markdown et la catégorisation par couleurs.",
        features: [
          "Éditeur de texte riche supportant la mise en forme de base",
          "Stockage local hors-ligne ultra-rapide avec Hive (base NoSQL locale)",
          "Catégorisation des notes par dossiers et mots-clés (tags)",
          "Recherche instantanée plein texte dans toutes les notes",
          "Thème sombre et clair automatique basé sur les préférences système"
        ],
        challenges: "Assurer des performances de lecture et écriture fluides lors du chargement de centaines de notes. L'utilisation de Hive, une base de données clé-valeur écrite en Dart pur, a permis d'atteindre des temps d'accès extrêmement bas.",
        duration: "3 semaines (Projet Personnel)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Telegram Chatbot",
        description: "Bot Telegram intelligent pour l'automatisation de réponses et la gestion de groupes, intégrant des requêtes d'APIs tierces en temps réel.",
        badge: "Telegram Bot",
        badgeType: "purple",
        tags: ["Node.js", "Telegram API", "NLP", "Axios"],
        category: "bots",
        image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80",
        longDescription: "Un agent conversationnel déployé sur Telegram conçu pour répondre aux questions fréquentes des utilisateurs, effectuer des requêtes sur des APIs externes (météo, actualités, outils de conversion) et assister les administrateurs de canaux dans la modération automatique des messages indésirables.",
        features: [
          "Traitement et réponse automatique aux commandes utilisateur (/start, /help, etc.)",
          "Intégration d'APIs REST tierces pour extraire des informations en temps réel",
          "Système de filtrage de spams et de mots interdits dans les groupes de discussion",
          "Menu interactif avec boutons clavier (Reply Markup / Inline Keyboards)",
          "Déploiement asynchrone sur serveur Node.js avec journalisation des requêtes"
        ],
        challenges: "La gestion de la concurrence lors de la réception simultanée de centaines de messages dans de grands groupes de discussion. L'utilisation d'une file d'attente asynchrone et d'un traitement non bloquant a résolu le problème.",
        duration: "2 semaines (Projet Personnel)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Telegram Movies Bot",
        description: "Bot Telegram de recherche et suggestion de films, utilisant l'API TMDB pour récupérer les affiches, résumés, notes et bandes-annonces.",
        badge: "Telegram Bot",
        badgeType: "blue",
        tags: ["Python", "Telegram API", "TMDB API", "Web Scraping"],
        category: "bots",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        longDescription: "Développé en Python, ce bot permet aux cinéphiles de rechercher des films et séries directement sur Telegram. Il affiche les détails complets (acteurs, résumé, note moyenne, bande-annonce YouTube) et suggère des œuvres similaires basées sur les préférences de l'utilisateur.",
        features: [
          "Recherche de films et séries par mots-clés en plusieurs langues",
          "Suggestions personnalisées de films similaires ou tendances du jour",
          "Affichage riche contenant l'affiche, la note moyenne et le lien de la bande-annonce",
          "Sauvegarde de films dans une liste de favoris (Watchlist) personnalisée",
          "Statistiques d'utilisation globales pour l'administrateur"
        ],
        challenges: "L'optimisation du temps de réponse lors de la recherche et du scraping léger des bandes-annonces, résolue grâce à l'asynchronisme de la bibliothèque python-telegram-bot et l'implémentation d'un cache Redis pour les requêtes fréquentes.",
        duration: "3 semaines (Projet Personnel)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Bel Djazair — Tourisme Algérien",
        description: "Plateforme web moderne dédiée au tourisme en Algérie : présentation des wilayas, sites historiques, hôtels et circuits touristiques, avec recherche et filtres par région.",
        badge: "Web App",
        badgeType: "teal",
        tags: ["React", "Tailwind CSS", "Node.js", "REST API"],
        category: "academic",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        longDescription: "Un site web moderne et visuellement immersif dédié à la découverte de l'Algérie. Il présente le patrimoine historique, culturel et naturel du pays à travers des sections interactives, des galeries photos animées et une carte guidant l'utilisateur à travers les principales régions touristiques (Sahara, Kabylie, Côte, etc.).",
        features: [
          "Design responsive s'adaptant parfaitement aux mobiles, tablettes et ordinateurs",
          "Galerie d'images interactive avec effets de zoom et diaporamas fluides",
          "Carte géographique interactive mettant en avant les points d'intérêt",
          "Fiches descriptives pour chaque ville et monument historique",
          "Section conseils de voyage pour les touristes étrangers"
        ],
        challenges: "La création d'un design visuel premium avec de nombreuses images haute résolution sans impacter négativement la vitesse de chargement, résolue en optimisant les images (format WebP) et en implémentant le lazy loading.",
        duration: "1 mois (Projet Universitaire)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "Portail Documents Universitaires",
        description: "Plateforme web en PHP permettant aux étudiants de demander des documents administratifs (certificats de scolarité, relevés de notes) auprès de l'université.",
        badge: "Web App",
        badgeType: "blue",
        tags: ["PHP", "MySQL", "Bootstrap", "AJAX"],
        category: "academic",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
        longDescription: "Une solution web administrative développée en PHP natif pour simplifier les démarches des étudiants. Ce portail permet de soumettre des demandes en ligne pour divers documents universitaires (relevés de notes, attestations d'inscription, diplômes). Un espace administration permet au personnel de la scolarité de traiter et valider les demandes.",
        features: [
          "Espace étudiant sécurisé pour soumettre des demandes et suivre leur statut",
          "Panneau d'administration pour la scolarité (validation, rejet avec motif, impression)",
          "Mise à jour dynamique de l'état des demandes via requêtes AJAX",
          "Notifications par email lors du changement de statut de la demande",
          "Génération de rapports statistiques sur les demandes traitées"
        ],
        challenges: "Garantir l'intégrité et la sécurité des données et des fichiers joints (comme les justificatifs d'inscription) contre les failles d'injection SQL et XSS en sécurisant les formulaires et les requêtes SQL (utilisant PDO préparé).",
        duration: "1 mois (Projet Universitaire)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      }
    ],
    education: [
      {
        degree: "Master 2 — Génie Logiciel",
        institution: "Université M'hamed Bougara de Boumerdès",
        year: "En cours — 2026 / 2027",
        icon: "school"
      },
      {
        degree: "Master 1 — Génie Logiciel",
        institution: "Université M'hamed Bougara de Boumerdès",
        year: "Validé — 2025 / 2026",
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
  },
  ar: {
    name: "معاذ",
    surname: "بن ترزي",
    fullName: "بن ترزي معاذ",
    title: "مطور تطبيقات ويب متكاملة وخلفية (Full-Stack & Backend)",
    subTitle: "ماستر 2 هندسة البرمجيات · متخصص في .NET وواجهات البرمجة (API)",
    avatarInitials: "م ت",
    contact: {
      phone: "0542 05 93 90",
      email: "mouadh.dev@gmail.com",
      location: "المرسى، الجزائر العاصمة",
      github: "github.com/MouadH-Dev7",
      githubUrl: "https://github.com/MouadH-Dev7",
      website: "bentarzimouadh.mouadh-dev.workers.dev",
      websiteUrl: "https://bentarzimouadh.mouadh-dev.workers.dev",
    },
    about: {
      description: "مهندس في الإعلام الآلي (هندسة نظم المعلومات والبرمجيات)، عمري 22 سنة، خريج جامعة امحمد بوقرة بومرداس (ليسانس 2025). أتابع حالياً دراسة الماستر 2 هندسة البرمجيات (2026/2027) بعد إتمام الماستر 1. شغوف بتطوير الأنظمة الخلفية، وتصميم البنى التحتية الموزعة، وتكامل الأنظمة. أتمتع بتمكن قوي من لغات وتقنيات C#/.NET Core و Java و Python/Django وتصميم واجهات البرمجة REST API. الوضعية تجاه الخدمة الوطنية: معفى (حائز على بطاقة الخدمة).",
      stats: [
        { value: "13", label: "مشاريع حقيقية", color: "primary" },
        { value: "M2", label: "هندسة البرمجيات", color: "primary" },
        { value: "15+", label: "مهارات أساسية", color: "purple" },
        { value: "22", label: "سنة", color: "purple" },
      ]
    },
    typingPhrases: [
      "بناء وتطوير بنية الخدمات المصغرة (Microservices)",
      "تصميم واجهات برمجية قوية باستخدام ASP.NET Core API",
      "تطوير حلول برمجية لسطح المكتب بلغتي C# و Java",
      "تطوير أنظمة الشبكات المحلية في الوقت الحقيقي"
    ],
    skills: [
      {
        category: "تطوير الأنظمة الخلفية (Backend)",
        icon: "terminal",
        skills: [
          { name: "C# / .NET Core", level: 90 },
          { name: "ASP.NET Core Web API", level: 86 },
          { name: "Python / Django / DRF", level: 78 },
          { name: "Java / Swing", level: 80 }
        ]
      },
      {
        category: "قواعد البيانات",
        icon: "database",
        skills: [
          { name: "SQL Server / T-SQL", level: 88 },
          { name: "MySQL", level: 75 },
          { name: "PostgreSQL", level: 78 }
        ]
      },
      {
        category: "الواجهات الأمامية (Frontend)",
        icon: "code",
        skills: [
          { name: "HTML · CSS · JavaScript", level: 82 },
          { name: "React (Vite + TS)", level: 65 },
          { name: "Tailwind CSS", level: 78 }
        ]
      },
      {
        category: "الهندسة البرمجية والأدوات",
        icon: "settings",
        skills: [
          { name: "Microservices & REST API", level: 85 },
          { name: "Docker & Containerization", level: 68 },
          { name: "Git / GitHub", level: 79 },
          { name: "الأنظمة متعددة العملاء (JADE)", level: 75 }
        ]
      }
    ],
    projects: [
      {
        title: "نظام إدارة ومبيعات العقارات",
        description: "نظام عقاري متكامل يتكون من واجهة برمجة تطبيقات ASP.NET Core، وموقع ويب متجاوب بلغات HTML/CSS/JS، وتطبيق سطح مكتب C# WinForms للإدارة وتطبيق موبايل مبني بفلاتر. تكامل كامل للأنظمة API ↔ الويب ↔ سطح المكتب ↔ الهاتف المحمول.",
        badge: "مشروع رائد",
        badgeType: "blue",
        tags: ["ASP.NET Core", "C# WinForms", "SQL Server", "HTML/CSS/JS", "Flutter"],
        category: "academic",
        image: "/projects/real_estate_management.png",
        longDescription: "يمثل هذا المشروع عمل تخرجي (PFE) لنيل شهادة الليسانس. وهو عبارة عن منصة تكامل برمجية تربط بين أربعة بيئات عمل مختلفة: واجهة برمجة تطبيقات خلفية متينة، وبوابة ويب تفاعلية للعملاء، وتطبيق سطح مكتب C# WinForms للمديرين والوكلاء العقاريين، وتطبيق جوال متعدد المنصات بفلاتر للبحث السريع وتتبع الطلبات. كان الهدف هو بناء نظام برمجي موحد قادر على إدارة دورة المعاملات العقارية بالكامل بأمان وسرعة.",
        features: [
          "واجهة برمجة تطبيقات REST مركزية مبنية بـ ASP.NET Core بهندسة متعددة الطبقات",
          "تطبيق سطح مكتب لإدارة النظام بـ C# WinForms (إدارة الكتالوج، العقود، الزبائن، الإحصاءات)",
          "موقع ويب متجاوب للعملاء للبحث المتقدم وحجز المواعيد ونماذج التواصل",
          "تطبيق هاتف محمول بفلاتر يعمل على نظامي أندرويد و iOS لتتبع العمليات والتصفح السريع",
          "نظام مصادقة وصلاحيات متطور آمن مبني على أدوار المستخدمين",
          "توليد تقارير وفواتير PDF بشكل آلي كامل",
          "لوحة إحصائية تفاعلية متقدمة للمديرين لمتابعة الأداء"
        ],
        challenges: "كان التحدي الرئيسي هو تصميم قاعدة بيانات SQL Server علائقية عالية الأداء وتأمين مزامنة البيانات اللحظية والآمنة في الوقت الفعلي بين تطبيقات سطح المكتب والموبايل وموقع الويب دون التسبب في تضارب البيانات تحت ضغط الطلبات المتزامنة.",
        duration: "4 أشهر (مشروع التخرج ليسانس 2025)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "نظام ERP ونقاط البيع للمطاعم",
        description: "بيئة عمل برمجية للمطاعم (لوحة تحكم، كاشير، شاشة مطبخ، نادل، زبون) تعمل على نظام خلفي بـ NestJS ومخزن مؤقت Redis. برنامج تثبيت ويندوز مستقل ومقاوم للأعطال مع نسبة خطأ 0.82% تحت الضغط العالي.",
        badge: "إنتاج",
        badgeType: "teal",
        tags: ["NestJS", "Next.js", "Prisma", "Redis", "PostgreSQL", "Inno Setup"],
        category: "microservices",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        longDescription: "منظومة برمجية متكاملة مصممة لإدارة المطاعم الحديثة. تشمل لوحة تحكم ويب إدارية، ونقاط بيع متطورة للكاشير، وتطبيقات شاشات فورية للمطبخ والنادل لتنظيم الطلبات، وتطبيق ويب للزبائن للطلب الذاتي من الطاولة عبر كود QR. يعتمد نظام NestJS الخلفي على Redis لتنظيم طوابير الطلبات ومزامنة الأحداث فورياً. تم بناء ملف تثبيت ويندوز مستقل باستخدام Inno Setup لتثبيت التطبيق محلياً كخدمة خلفية ذاتية الإصلاح.",
        features: [
          "بنية مشروع Monorepo معيارية ومنظمة باستخدام NestJS و Next.js",
          "مزامنة الأحداث اللحظية عبر WebSockets ومخزن Redis السحابي المؤقت",
          "برنامج تثبيت مخصص للويندوز (Inno Setup) يثبت التطبيق كخدمة تعمل تلقائياً وتتعافى من الأخطاء ذاتياً",
          "أداء ممتاز مع نسبة خطأ ضئيلة جداً 0.82% تحت ضغط مكثف لأكثر من 50 جهازاً نشطاً في نفس الوقت",
          "بناء ونمذجة البيانات باستخدام Prisma ORM مع قاعدة بيانات PostgreSQL"
        ],
        challenges: "تحقيق مزامنة فورية خالية من التأخير للطلبات بين الطاولات والمطبخ ونظام الكاشير. ساعد دمج بروتوكول Redis Pub/Sub مع طوابير BullMQ في تفادي اختناق البيانات وضمان استمرارية عمل النظام في حال حدوث انقطاع مؤقت.",
        duration: "3 أشهر (مشروع إنتاجي)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "برنامج DzStock ERP لإدارة المخزون والمبيعات",
        description: "برنامج ERP لسطح المكتب موجه للسوق الجزائري (المخزون، المشتريات، نقاط البيع، الإنتاج). بنية Clean/MVVM، وتقنيات EF Core مع DbContextFactory، وتريغرات لعمل الحسابات التلقائية للضرائب والرسوم.",
        badge: "برنامج مؤسسات",
        badgeType: "blue",
        tags: [".NET 10", "WPF", "C#", "EF Core", "PostgreSQL"],
        category: "desktop",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        longDescription: "برنامج DzStock ERP هو تطبيق متكامل لسطح المكتب صمم خصيصاً لتلبية متطلبات الشركات والمحلات التجارية في السوق الجزائري. يدير المخزون وحركته لحظياً، المشتريات والموردين، المبيعات ونقاط البيع السريعة، وعمليات التصنيع البسيطة. تم تطويره بلغة C# وتقنيات WPF تحت منصة .NET 10 الحديثة مع ربطه بقاعدة بيانات PostgreSQL القوية.",
        features: [
          "واجهة مستخدم WPF حديثة ومنظمة مع لوحات إحصائية ورسوم بيانية تفاعلية للمبيعات والأرباح",
          "أكثر من 17 تريغراً (Trigger) ودالة PL/pgSQL داخل قاعدة البيانات لحساب الضرائب آلياً (TVA, TTC, الطابع المالي) وإدارة حركات المخزون",
          "متابعة دورة الإنتاج وتكلفة السلع مع قائمة المكونات (BOM)",
          "اتصال آمن وسريع جداً بقاعدة البيانات مع دعم الخيوط المتعددة (Multithreading) باستخدام DbContextFactory في EF Core",
          "نظام صلاحيات دقيق للمستخدمين مع سجل كامل لمراقبة وتتبع جميع العمليات (Audit Logs)"
        ],
        challenges: "الحفاظ على سرعة واجهة البرنامج وتفادي تجمد الشاشة عند إصدار التقارير الضخمة أو حفظ الفواتير المعقدة. تم حل هذه المشكلة بالاعتماد الكامل على البرمجة المتزامنة غير الحاصرة (Async/Await) والاتصالات المتعددة عبر DbContextFactory.",
        duration: "4 أشهر",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "منصة عقارية بنظام الخدمات المصغرة",
        description: "إعادة بناء البوابة العقارية بهندسة موزعة تعتمد على الخدمات المصغرة (Microservices) باستخدام Django REST. تشغيل كل خدمة (الإعلانات، المستخدمون، المدفوعات، البحث) في حاوية Docker مستقلة.",
        badge: "خدمات مصغرة",
        badgeType: "purple",
        tags: ["Django REST", "Python", "API Gateway", "Docker", "PostgreSQL", "JWT"],
        category: "microservices",
        image: "/projects/microservices_real_estate.png",
        longDescription: "كجزء من دراستي في الماستر 1، قمت بإعادة هيكلة النظام العقاري من كتلة برمجية واحدة (Monolith) إلى بنية خدمات مصغرة موزعة ومستقلة. تعمل كل خدمة (إدارة الإعلانات، ملفات المستخدمين، معالجة المدفوعات، محرك البحث) في حاوية Docker خاصة بها مع قاعدة بيانات PostgreSQL مستقلة، مما يضمن أمان البيانات واستقرار النظام وقابليته للتوسع الأفقي.",
        features: [
          "تفكيك النظام إلى خدمات مصغرة مستقلة تماماً ومبنية بـ Django REST Framework",
          "بوابة واجهة برمجة تطبيقات مركزية (API Gateway) لتوجيه طلبات التطبيقات الخارجية للخدمات المعنية",
          "نظام دخول موحد (Single Sign-On) مؤمن بالكامل عبر رموز وجذاذات JWT المشفرة",
          "قواعد بيانات PostgreSQL منفصلة لكل خدمة لضمان استقلالية البيانات التامة",
          "حاويات Docker متكاملة وإدارتها بالكامل عبر أداة Docker Compose",
          "برنامج سطح مكتب إداري بـ C# WPF يتصل بنظام الخدمات المصغرة ويعرض التقارير"
        ],
        challenges: "إدارة اتساق وتزامن البيانات بين الخدمات المنفصلة وتنسيق العمليات الموزعة بأمان. ساعد استخدام الـ API Gateway والتحقق اللامركزي من رموز JWT في تسريع معالجة الطلبات دون الحاجة للاستعلام المتكرر والمكثف من قواعد البيانات الرئيسية.",
        duration: "شهرين (مشروع ماستر 2025)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "نظام إدارة المستشفيات",
        description: "تطبيق لسطح المكتب لإدارة المستشفيات والعيادات الطبية، يتيح تنظيم مواعيد المرضى، وتخزين السجلات الطبية الحساسة وتنسيق جداول الأطباء.",
        badge: "تطبيق سطح مكتب",
        badgeType: "teal",
        tags: ["C# .NET Core", "SQL Server", "SSMS"],
        category: "desktop",
        image: "/projects/hospital_management.png",
        longDescription: "تطبيق متكامل لسطح المكتب مبني بلغة C# وموجه للبيئات الطبية. يسمح للممرضين والأطباء بتسجيل المرضى، وفتح وتحديث السجلات الطبية والتشخيصات الطبية بسرية تامة، وجدولة المواعيد عبر تقويم مرئي مشترك، مع إمكانية طباعة الوصفات الطبية بشكل آلي.",
        features: [
          "إدارة كاملة لسجلات المرضى (التاريخ الطبي، الحساسية، التشخيصات والوصفات)",
          "تقويم مرئي مشترك لتنظيم المواعيد ومتابعة حضور الأطباء وتوفرهم",
          "وحدة حسابية متطورة لإصدار فواتير الاستشارات الطبية وتوليد وصولات الاستلام",
          "محرر وصفات طبية ذكي جاهز للطباعة الفورية",
          "استعلامات T-SQL محسنة ومكتوبة كإجراءات مخزنة (Stored Procedures) لتسريع الأداء",
          "واجهة مستخدم لسطح المكتب واضحة ومرتبة مبنية بتقنيات .NET Core"
        ],
        challenges: "تحسين أداء وسرعة البحث عن ملفات المرضى وتحديث بياناتهم لحظياً عند التعامل مع آلاف السجلات. كما تم فرض نظام صلاحيات صارم ومؤمن (طبيب، موظف استقبال، مدير) لحماية سرية بيانات المرضى.",
        duration: "شهر واحد",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "نظام إدارة وكالة كراء السيارات",
        description: "تطبيق لإدارة كراء السيارات وبيعها لسطح المكتب مكتوب بلغة Java Swing مع قاعدة بيانات MySQL لمتابعة حالة السيارات والزبائن والعقود.",
        badge: "تطبيق سطح مكتب",
        badgeType: "amber",
        tags: ["Java Swing", "MySQL", "JDBC"],
        category: "desktop",
        image: "/projects/car_agency_management.png",
        longDescription: "تطبيق تم تطويره بلغة Java وواجهات Swing لإدارة وكالات كراء السيارات بشكل آلي كامل. يدير حظيرة السيارات (عداد الكيلومترات، الصيانة، التوفر)، وحسابات الزبائن وتاريخ الإيجار الخاص بهم، مع توليد عقود إيجار جاهزة للطباعة بصيغة PDF.",
        features: [
          "تتبع فوري لحالة السيارات (متوفرة، مؤجرة، تحت الصيانة، مباعة)",
          "قاعدة بيانات تفصيلية للزبائن مع إمكانية فحص رخصة السياقة وتاريخ المعاملات",
          "حاسبة تلقائية لتكلفة الكراء بناءً على نوع السيارة وفترة التأجير المحددة",
          "توليد وطباعة عقود الكراء والفواتير بشكل آلي بالكامل",
          "اتصال محسن بقاعدة بيانات MySQL باستخدام تقنيات JDBC ومستودع اتصال سريع",
          "رسوم بيانية تحليلية تلخص الأرباح والسيارات الأكثر طلباً لمساعدة الإدارة"
        ],
        challenges: "بناء قفل تزامن برمجي لمنع تأجير نفس السيارة لزبونين في نفس التواريخ المتداخلة، وتنسيق وتجميل واجهات Java Swing لتبدو حديثة ومتجاوبة وتواكب التصاميم العصرية للمواقع والتطبيقات.",
        duration: "شهر واحد",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "برمجة الأنظمة متعددة العملاء (JADE)",
        description: "محاكاة لسوق تجاري غير مركزي للبيع والشراء تعتمد على بروتوكولات FIPA-ACL وسجل DF للتعريف بالخدمات باستخدام إطار عمل JADE في جاوا.",
        badge: "مشروع ماستر",
        badgeType: "purple",
        tags: ["JADE Framework", "FIPA-ACL", "Java"],
        category: "academic",
        image: "/projects/multi_agents_system.png",
        longDescription: "مشروع تم تطويره في إطار مقياس الذكاء الاصطناعي الموزع لماستر 1. وهو عبارة عن محاكاة لسوق تداول لا مركزي، حيث تتواصل برمجيات ذكية مستقلة (عميل مشترٍ وعميل بائع) بشكل غير متزامن للتفاوض على شراء وبيع الموارد الافتراضية وفقاً لبروتوكول Contract Net ومواصفات FIPA-ACL.",
        features: [
          "بنية برمجية موزعة بالكامل تعتمد على عملاء برمجيين أذكياء ومستقلين (Agents)",
          "تواصل وتراسل غير متزامن بين العملاء مستند بالكامل إلى معايير FIPA-ACL العالمية",
          "تطبيق بروتوكول التفاوض FIPA Contract Net (طلب عرض، تقديم عرض، قبول، رفض)",
          "استخدام سجل الـ Directory Facilitator (DF) كبوابة صفراء لتعريف العملاء بخدمات بعضهم",
          "واجهة رسومية لمراقبة حركات الاتصال وتتبع دورة حياة العملاء البرمجيين ومسار الرسائل",
          "خوارزميات ذكاء مدمجة لتحديد قرارات الشراء والبيع وعرض الأسعار في سلوك العميل"
        ],
        challenges: "معالجة وتصحيح حالات التضارب والجمود (Deadlocks) في بيئة الاتصال غير المتزامنة عندما يطلب عدة مشترين عروض أسعار من نفس البائعين في نفس اللحظة. تم معالجة ذلك بتأمين دورات تفاوض زمنية منظمة.",
        duration: "3 أسابيع (مشروع ماستر 2026)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "تطبيق المتجر الإلكتروني (Flutter)",
        description: "تطبيق موبايل متجاوب وأنيق للتجارة الإلكترونية يعمل على نظامي أندرويد و iOS مبني بفلاتر، مع ربطه بنظام Firebase لإدارة السلة والدخول الفوري.",
        badge: "تطبيق جوال",
        badgeType: "teal",
        tags: ["Flutter", "Dart", "Firebase", "State Management"],
        category: "mobile",
        image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
        longDescription: "تطبيق تجارة إلكترونية متكامل للهواتف الذكية يعمل بكفاءة عالية على نظامي iOS وأندرويد. يتميز بواجهة مستخدم عصرية مستندة إلى إرشادات Material 3 وتصميم أنيق، متصل كلياً بخدمات Firebase لإدارة وتخزين البيانات السحابية ومصادقة المستخدمين ومزامنة حالة الشراء.",
        features: [
          "تسجيل دخول آمن للمستخدمين عبر بريدهم الإلكتروني أو حسابات Google باستخدام Firebase Auth",
          "سلة تسوق تفاعلية سريعة الاستجابة مع شاشة مخصصة لإتمام الشراء والطلب",
          "قاعدة بيانات سحابية متزامنة لحظياً للمنتجات والتصنيفات والمخزون في Cloud Firestore",
          "بحث متطور وسريع للمنتجات مع إمكانية التصفية بحسب النوع أو السعر",
          "نظام إشعارات فورية عبر خدمة FCM لإخطار المستخدمين بحالة طلباتهم وتحديثاتها"
        ],
        challenges: "تنظيم وإدارة حالة التطبيق بشكل كفء وخفيف وخاصة سلة المشتريات ومزامنة حالة الحساب. تم الاعتماد على نمط Provider لإدارة الحالة مما أدى لتسريع أداء التطبيق والحفاظ على حركة سلاسة تصفح عالية بمعدل 60 إطاراً في الثانية.",
        duration: "شهرين",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "تطبيق مذكرات شخصية متطور",
        description: "تطبيق موبايل سريع لتسجيل الملاحظات اليومية وتدوينها يدعم تنسيق نصوص Markdown وتنظيمها في مجلدات وتخزينها محلياً بأمان.",
        badge: "تطبيق جوال",
        badgeType: "amber",
        tags: ["Flutter", "Dart", "SQLite", "Hive Database"],
        category: "mobile",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
        longDescription: "تطبيق مذكرات ومفكرة شخصية مريح وخفيف للهواتف الذكية. تم تطويره باستخدام Flutter، ويدعم الكتابة بتنسيقات Markdown البرمجية، بالإضافة إلى تصنيف الملاحظات بالوسوم والألوان وترتيبها في مجلدات، ويعمل بالكامل بدون الحاجة للاتصال بالإنترنت.",
        features: [
          "محرر نصوص منسق يدعم كتابة وتعديل نصوص Markdown ومعاينتها فوراً",
          "سرعة عالية جداً في حفظ وقراءة الملاحظات محلياً باستخدام قاعدة بيانات Hive السريعة",
          "ترتيب وتنسيق الملاحظات في مجلدات وربطها بوسوم مخصصة للتصفية السريعة",
          "بحث سريع شامل في نصوص جميع المذكرات لحظياً",
          "تبديل تلقائي بين المظهرين الداكن والفاتح بحسب إعدادات الهاتف الرسمية"
        ],
        challenges: "الحفاظ على سرعة فتح التطبيق والبحث عند تخزين مئات النصوص الطويلة. تم اختيار قاعدة بيانات Hive (المكتوبة بلغة Dart بالكامل) بدلاً من قواعد SQL المعتادة مما حقق سرعة استجابة مذهلة.",
        duration: "3 أسابيع",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "روبوت المحادثة لـ Telegram",
        description: "روبوت ذكي ومؤمن لمنصة تليغرام يقوم بالرد التلقائي وإدارة المجموعات، مع استدعاء واجهات برمجة خارجية لعرض الطقس والأخبار.",
        badge: "بوت تليغرام",
        badgeType: "purple",
        tags: ["Node.js", "Telegram API", "NLP", "Axios"],
        category: "bots",
        image: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80",
        longDescription: "روبوت دردشة وإدارة ذكي يعمل على منصة Telegram ومطور بلغة Node.js. صمم البوت لمراقبة محادثات المجموعات والرد الفوري على أسئلة المستخدمين الشائعة، فلترة الروابط والرسائل المزعجة (Spam)، واستدعاء بيانات حية من الويب عبر استعلام واجهات البرمجة (APIs).",
        features: [
          "لوحة أزرار تفاعلية داخل التطبيق لتسهيل خيارات المستخدم (Inline keyboards & commands)",
          "نظام إشراف تلقائي وحظر الروابط المزعجة وحذف الكلمات غير اللائقة في المجموعات",
          "جلب الطقس والأخبار وأسعار العملات لحظياً باستخدام مكتبة Axios للاتصال بالـ APIs",
          "قاعدة بيانات لحفظ وتتبع إحصائيات تفاعل المستخدمين مع البوت",
          "معالجة غير حاصرة وسريعة جداً للرسائل لضمان عدم تأخر ردود البوت"
        ],
        challenges: "تفادي حظر الحساب أو إيقاف الردود عند تفعيل البوت في مجموعات ضخمة ذات رسائل مكثفة وسريعة. تم تجاوز ذلك بتهيئة طوابير رسائل برمجية لتنظيم تدفق الردود وجعلها تتناسب مع قيود تليغرام.",
        duration: "أسبوعين",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "روبوت البحث عن الأفلام وتلخيصها",
        description: "روبوت تليغرام للبحث عن تفاصيل الأفلام وتلخيص قصتها وعرض الممثلين والتقييمات، متصل بقاعدة بيانات TMDB العالمية.",
        badge: "بوت تليغرام",
        badgeType: "blue",
        tags: ["Python", "Telegram API", "TMDB API", "Web Scraping"],
        category: "bots",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        longDescription: "روبوت مخصص لمحبي السينما يعمل على تطبيق Telegram ومبني بلغة Python. يتصل الروبوت بقاعدة بيانات الأفلام العالمية TMDB، ويسمح للمستخدمين بالبحث الفوري عن أي فيلم أو مسلسل للحصول على معلوماته الكاملة (الملصق، التقييم، طاقم التمثيل، وتلخيص القصة مع روابط الإعلانات الرسمية على يوتيوب).",
        features: [
          "البحث عن الأفلام والمسلسلات بكلمات مفتاحية بعدة لغات",
          "خوارزمية اقتراحات ذكية تقترح أفلاماً مشابهة بناءً على اهتمامات المستخدم",
          "تنسيق غني وجذاب للرسائل يضم الصور والملصقات والنصوص المنسقة",
          "إمكانية حفظ قائمة الأفلام المفضلة للمستخدم لمشاهدتها لاحقاً (Watchlist) محلياً",
          "لوحة تحكم للمسؤولين لمتابعة عمليات البحث اليومية ونشاط المستخدمين"
        ],
        challenges: "تأخر جلب إعلانات يوتيوب ومعلومات الأفلام الشائعة. تم تسريع الاستجابة كلياً ببناء مخزن مؤقت باستخدام Redis لحفظ معلومات الأفلام الأكثر بحثاً وعرضها فورياً دون إعادة الاتصال بالخادم الخارجي في كل مرة.",
        duration: "3 أسابيع",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "بل دزاير — بوابة السياحة الجزائرية",
        description: "منصة ويب متكاملة وحديثة مخصصة لترويج السياحة في الجزائر، تعرض الولايات، المواقع التاريخية، الفنادق والمسارات السياحية مع البحث المتقدم.",
        badge: "موقع ويب",
        badgeType: "teal",
        tags: ["React", "Tailwind CSS", "Node.js", "REST API"],
        category: "academic",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        longDescription: "موقع ويب تعريفي سياحي حديث موجه للتعريف بالمقدرات السياحية للجزائر. يعرض المعالم التاريخية، المحميات الطبيعية، الفنادق المتاحة، مع إمكانية البحث والتصفية بحسب الولاية أو بحسب نوع النشاط السياحي المطلوب للرحلة.",
        features: [
          "تصميم ويب متجاوب وأنيق ومريح للعين مبني باستخدام Tailwind CSS",
          "ربط المعالم بخرائط تفاعلية لتسهيل وصول السياح للموقع الفعلي",
          "عرض صور المعالم والولايات بجودة عالية بعد ضغطها بصيغة WebP لتسريع التصفح",
          "نظام تصفية متقدم للبحث حسب المناطق الجغرافية والتقييمات وتكلفة الإقامة والتنقل",
          "خلفية برمجية بـ Node.js توفر إحصاءات الولايات ومعلومات المعالم السياحية بدقة"
        ],
        challenges: "تأثير الصور عالية الدقة للمعالم والولايات على سرعة تحميل الموقع للمستخدمين. تم حل هذه العقبة بتحويل جميع الصور إلى صيغة WebP الخفيفة وتفعيل خاصية التحميل الكسول (Lazy Loading) للصور غير المعروضة.",
        duration: "شهر واحد (مشروع جامعي)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      },
      {
        title: "بوابة استخراج الوثائق الجامعية الإدارية",
        description: "منصة إلكترونية إدارية بالـ PHP تتيح للطلبة تسجيل الدخول وطلب شهادات التسجيل، كشوف النقاط، والوثائق الجامعية وتتبعها إلكترونياً.",
        badge: "موقع ويب",
        badgeType: "blue",
        tags: ["PHP", "MySQL", "Bootstrap", "AJAX"],
        category: "academic",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
        longDescription: "نظام إداري إلكتروني للويب تم تطويره بلغة PHP ولتسهيل الخدمات الإدارية للطلاب في الجامعة. يمكن للطلاب تسجيل الدخول وطلب وثائقهم الأكاديمية (شهادة مدرسية، كشف نقاط، شهادة تخرج) ومتابعة حالة طلبهم عبر الإنترنت، بينما توفر لوحة الإدارة للموظفين مراجعة الطلبات وقبولها وطباعتها فورياً.",
        features: [
          "حساب زبون آمن ومحمي للطلاب لتقديم الطلبات ومتابعة خطوات معالجتها",
          "تحديث فوري وتفاعلي لحالة الطلب إلكترونياً باستخدام تقنيات AJAX دون الحاجة لتحديث الصفحة",
          "لوحة تحكم إدارية متكاملة لموظفي مصلحة الدراسة للتحقق من الملفات وتوليد الوثائق بصيغة PDF وتنزيلها",
          "نظام إشعارات يرسل رسائل بريد إلكتروني للطلاب بشكل تلقائي عند قبول طلبهم أو رفضه مع ذكر السبب",
          "تصميم علائقي لقاعدة البيانات MySQL ينظم بيانات الطلبة والوثائق الإدارية بفعالية وسرية تامة"
        ],
        challenges: "تأمين الملفات المرفوعة وحماية قاعدة البيانات والطلبات من هجمات الحقن البرمجي (SQL Injection) والاختراق (XSS). تم تأمين النظام بالكامل بالاعتماد على PDO واستعلامات SQL المجهزة مسبقاً وتطهير المدخلات قبل حفظها.",
        duration: "شهر واحد (مشروع جامعي)",
        codeUrl: "https://github.com/MouadH-Dev7",
        demoUrl: "https://github.com/MouadH-Dev7"
      }
    ],
    education: [
      {
        degree: "ماستر 2 — هندسة البرمجيات",
        institution: "جامعة امحمد بوقرة بومرداس",
        year: "قيد الدراسة — 2026 / 2027",
        icon: "school"
      },
      {
        degree: "ماستر 1 — هندسة البرمجيات",
        institution: "جامعة امحمد بوقرة بومرداس",
        year: "تم إتمامه — 2025 / 2026",
        icon: "school"
      },
      {
        degree: "ليسانس في الإعلام الآلي — تخصص هندسة نظم المعلومات والبرمجيات (ISIL)",
        institution: "جامعة امحمد بوقرة بومرداس",
        year: "تحصلت عليها في 2025",
        icon: "workspace_premium"
      }
    ],
    services: [
      {
        title: "تطوير الأنظمة الخلفية وواجهات البرمجة",
        icon: "api",
        description: "إنشاء واجهات برمجة تطبيقات (REST APIs) سريعة ومحمية ومتجاوبة باستخدام ASP.NET Core و Node.js و Django REST، مع ربطها بقواعد بيانات مهيأة ومحسنة.",
        color: "primary"
      },
      {
        title: "تطوير تطبيقات الويب وسطح المكتب",
        icon: "laptop_mac",
        description: "بناء مواقع ويب عصرية ومتجاوبة بالكامل باستخدام React و Tailwind، بالإضافة لتطوير برامج سطح مكتب قوية بلغة C# (WPF/WinForms) وجاوا (Swing).",
        color: "purple"
      },
      {
        title: "بنية الخدمات المصغرة (Microservices)",
        icon: "hub",
        description: "تصميم بنى برمجية موزعة ولامركزية تعتمد على حاويات Docker وبوابات APIs (Gateway Gateway) ومخازن التخزين المؤقت لـ Redis ومصادقات JWT.",
        color: "primary"
      }
    ]
  }
};
