import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Blocks,
  Briefcase,
  Calendar,
  Code,
  Database,
  Download,
  Github,
  GraduationCap,
  HandCoins,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  Smartphone,
  X,
  type LucideIcon,
} from 'lucide-react';
import './styles/App.css';

type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  technologies: string[];
  features: string[];
  status: string;
  category: string;
  accent: string;
  span: string;
};

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/shivaprasad-g-b1683a22b/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://github.com/shivaprasadGow',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'mailto:shivaprasadgowda9380@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];

const highlights = [
  {
    icon: Blocks,
    title: 'Product-Focused Development',
    description: 'Turning business needs into reliable workflows, clean interfaces, and production-ready systems.',
  },
  {
    icon: Landmark,
    title: 'FinTech Platforms',
    description: 'Payments, stablecoin flows, financial dashboards, transaction systems, and secure data handling.',
  },
  {
    icon: Code,
    title: 'Full-Stack Delivery',
    description: 'React, Next.js, Django, Python, PostgreSQL, CockroachDB, APIs, and deployment-ready delivery.',
  },
  {
    icon: Smartphone,
    title: 'Mobile and Blockchain',
    description: 'React Native apps, SUI blockchain, KYC workflows, NFT minting, and wallet-connected features.',
  },
];

const skillCategories = [
  {
    title: 'Frontend',
    description: 'Polished web and mobile interfaces that are responsive, usable, and easy to maintain.',
    items: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend and APIs',
    description: 'Secure services, reusable backend components, API integrations, and practical backend design.',
    items: ['Python', 'Django', 'Django REST Framework', 'RESTful APIs', 'JWT Authentication', 'SQL'],
  },
  {
    title: 'Blockchain and AI',
    description: 'Applied blockchain and AI features built around real product workflows and user needs.',
    items: ['SUI Network', 'Move Language', 'NFT Minting', 'OpenAI API', 'AI Dashboards'],
  },
  {
    title: 'Cloud and Data',
    description: 'Databases, infrastructure, tooling, and deployment practices that keep products stable.',
    items: ['PostgreSQL', 'CockroachDB', 'Docker', 'GCP', 'Git', 'Postman'],
  },
];

const projects: Project[] = [
  {
    id: 'edge-native-financial-platform',
    title: 'Edge-Native Financial Platform',
    description: 'A FinTech operating platform for payments, financial data, receivables, and compliance workflows.',
    longDescription:
      'A cross-border financial platform designed as a unified system for managing payments, receivables, financial data, and compliance workflows. The platform supports structured payment flows, system-level transaction tracking, and integration with external financial services while keeping scalability, modularity, and reliability at the center.',
    icon: Shield,
    technologies: ['FastAPI', 'PostgreSQL', 'GCP', 'Xflow APIs', 'Microservices', 'React', 'Next.js', 'CockroachDB'],
    features: [
      'Cross-border payment integration',
      'Financial data and transaction management',
      'Receivables and payout workflows',
      'Compliance-aware platform design',
      'Microservices-oriented architecture',
    ],
    status: 'In Development',
    category: 'FinTech',
    accent: '99, 102, 241',
    span: 'project-wide',
  },
  {
    id: 'wellness-booking',
    title: 'Regenerative Wellness Booking App',
    description: 'A mobile app for 60-day therapy booking with dynamic scheduling and real-time booking management.',
    longDescription:
      'A React Native wellness booking product built around long-running therapy journeys. It combines booking flows, scheduling logic, availability management, and real-time updates to support structured care delivery.',
    icon: Smartphone,
    technologies: ['React Native', 'Next.js', 'Django', 'CockroachDB'],
    features: [
      '60-day therapy program management',
      'Dynamic vehicle scheduling system',
      'Optimized allocation logic',
      'Reduced scheduling conflicts',
      'Real-time booking management',
    ],
    status: 'Live on Play Store',
    category: 'Mobile App',
    accent: '59, 130, 246',
    span: 'project-tall',
  },
  {
    id: 'blockchain-kyc',
    title: 'Blockchain KYC Platform',
    description: 'A secure identity verification system built on SUI blockchain with fiat-to-NFT capabilities.',
    longDescription:
      'A blockchain-backed identity and KYC platform focused on secure verification, authentication, document safety, and compliance visibility. The product uses practical blockchain workflows while keeping the user experience direct and understandable.',
    icon: Shield,
    technologies: ['React', 'Django', 'SUI Blockchain', 'Move Language', 'JWT Authentication'],
    features: [
      'Secure identity verification',
      'Fiat-to-NFT conversion workflow',
      'JWT authentication',
      'Blockchain-based verification',
      'Compliance dashboard support',
    ],
    status: 'Live on Play Store',
    category: 'Blockchain',
    accent: '168, 85, 247',
    span: '',
  },
  {
    id: 'stablecoin-payments',
    title: 'Stablecoin Payment Platform',
    description: 'A global platform for receiving, storing, converting, issuing, and spending stablecoins.',
    longDescription:
      'A FinTech platform focused on stablecoin payments and financial workflows. The system supports secure storage, conversion, issuance, transaction history, and payment movement through an interface designed for real-world use.',
    icon: HandCoins,
    technologies: ['React', 'Django', 'Blockchain APIs', 'PostgreSQL'],
    features: [
      'Receive and store stablecoins',
      'Convert between stablecoins',
      'Issue new stablecoin tokens',
      'Global spending workflows',
      'Secure transaction handling',
    ],
    status: 'Production Ready',
    category: 'FinTech',
    accent: '34, 197, 94',
    span: '',
  },
];

const education = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    institution: 'Don Bosco Institute of Technology',
    year: '2022',
    grade: 'CGPA 6.83',
    location: 'Bangalore, India',
  },
  {
    degree: 'Senior Secondary',
    institution: 'Bellary Independent PU College',
    year: '2018',
    grade: '67.8%',
    location: 'Bellary, India',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Viswamanava Res High School',
    year: '2016',
    grade: '73.76%',
    location: 'Guttinadu, India',
  },
];

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? null;
  const SelectedProjectIcon = selectedProject?.icon;

  useEffect(() => {
    if (!selectedProjectId) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProjectId(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProjectId]);

  return (
    <div className="portfolio-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="nav-brand" href="#home">
          ShivaPrasad G
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content section-inner">
            <div className="hero-copy reveal">
              <div className="eyebrow-row">
                <p>Hello I&apos;m</p>
                <span>
                  <MapPin size={16} />
                  Bangalore, India
                </span>
              </div>
              <h1>Shivaprasad G</h1>
              <h2>
                Full-Stack <span>Developer</span>
              </h2>
              <p className="hero-description">
                I build scalable FinTech, blockchain, AI-integrated, and mobile products with clean backend
                systems, practical interfaces, and production-minded execution.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#contact">
                  Let&apos;s Talk
                  <ArrowRight size={18} />
                </a>
                <a className="ghost-action" href="/Shivaprasad_G.pdf" download="Shivaprasad_G.pdf">
                  Download Resume
                  <Download size={18} />
                </a>
              </div>
              <div className="hero-socials" aria-label="Social profiles">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                      <Icon size={21} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="section-inner about-grid about-grid-single">
            <div className="section-copy reveal delay-1">
              <p className="section-kicker">About Me</p>
              <h2>
                Engineering practical products into <span>polished production experiences</span>.
              </h2>
              <h3>Building systems that are secure, scalable, and useful in the real world.</h3>
              <p>
                I&apos;m a motivated Full-Stack Developer with 2+ years of experience building scalable FinTech,
                blockchain, and AI-integrated solutions. My work spans React, Next.js, React Native, Django,
                PostgreSQL, CockroachDB, and secure API integrations.
              </p>
              <p>
                At GTPL, I&apos;ve worked on web and mobile applications, blockchain KYC systems, stablecoin
                workflows, AI-powered dashboards, and reusable backend components for faster product delivery.
              </p>
              <div className="focus-list">
                {['FinTech Platforms', 'Blockchain KYC', 'Mobile Apps', 'AI Dashboards', 'Backend APIs'].map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="section-inner highlight-grid">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;

              return (
                <article key={highlight.title} className={`glass-card reveal delay-${index % 4}`}>
                  <div className="card-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className="section-inner">
            <div className="section-heading reveal">
              <p className="section-kicker">Technical Arsenal</p>
              <h2>
                A practical stack for building <span>full-stack products</span>.
              </h2>
              <p>
                Technologies I use to build product-focused FinTech, blockchain, AI, backend, and mobile systems.
              </p>
            </div>
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <article key={category.title} className={`skill-card reveal delay-${index % 4}`}>
                  <span>0{index + 1}</span>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <div>
                    {category.items.map((skill) => (
                      <em key={skill}>{skill}</em>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="content-section">
          <div className="section-inner">
            <div className="section-heading reveal">
              <p className="section-kicker">Experience</p>
              <h2>
                Professional growth through <span>real product delivery</span>.
              </h2>
            </div>
            <div className="experience-layout">
              <article className="experience-card reveal delay-1">
                <div className="experience-top">
                  <div>
                    <p className="section-kicker">GTPL</p>
                    <h3>Full-Stack Developer</h3>
                    <span>Full-Time, promoted from intern</span>
                  </div>
                  <div className="meta-stack">
                    <span>
                      <Calendar size={16} />
                      Sep 2023 - Present
                    </span>
                    <span>
                      <MapPin size={16} />
                      Bangalore, India
                    </span>
                  </div>
                </div>
                <div className="experience-points">
                  {[
                    'Developed secure, scalable web applications using React and Django.',
                    'Integrated blockchain-based KYC and stablecoin systems for enhanced security.',
                    'Built AI-powered features using OpenAI APIs to improve user experience.',
                    'Implemented JWT authentication for secure API access across platforms.',
                    'Created reusable Django components for financial products.',
                  ].map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </article>
              <div className="timeline reveal delay-2">
                <div>
                  <Briefcase size={20} />
                  <h3>Full-Time Developer</h3>
                  <p>Promoted based on performance and project delivery.</p>
                  <span>Mar 2024 - Present</span>
                </div>
                <div>
                  <Code size={20} />
                  <h3>Software Developer Intern</h3>
                  <p>Started internship at GTPL and contributed to reusable backend systems.</p>
                  <span>Sep 2023 - Feb 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-inner">
            <div className="section-heading reveal">
              <p className="section-kicker">Selected Works</p>
              <h2>
                Product-focused builds with <span>depth, scale, and delivery</span>.
              </h2>
              <p>FinTech, mobile, blockchain, and platform work shaped by real-world product constraints.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => {
                const Icon = project.icon;

                return (
                  <button
                    key={project.id}
                    type="button"
                    className={`project-card reveal delay-${index % 4} ${project.span}`}
                    style={{ '--accent': project.accent } as React.CSSProperties}
                    onClick={() => setSelectedProjectId(project.id)}
                  >
                    <div className="project-card-top">
                      <span>{project.category}</span>
                      <div>
                        <Icon size={22} />
                      </div>
                    </div>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="tech-row">
                      {project.technologies.slice(0, 4).map((technology) => (
                        <em key={technology}>{technology}</em>
                      ))}
                    </div>
                    <span className="explore-pill">Explore</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="education" className="content-section">
          <div className="section-inner">
            <div className="section-heading reveal">
              <p className="section-kicker">Education</p>
              <h2>
                Academic foundation and <span>professional background</span>.
              </h2>
            </div>
            <div className="education-grid">
              {education.map((item, index) => (
                <article key={item.degree} className={`education-card reveal delay-${index % 4}`}>
                  <div className="card-icon">
                    <GraduationCap size={20} />
                  </div>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <div className="education-meta">
                    <span>{item.year}</span>
                    <span>{item.grade}</span>
                    <span>{item.location}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="section-inner contact-grid">
            <div className="section-heading reveal">
              <p className="section-kicker">Contact</p>
              <h2>
                Let&apos;s build something <span>useful and scalable</span>.
              </h2>
              <p>
                Open to discussing FinTech, blockchain, AI-integrated, backend, and mobile product opportunities.
              </p>
            </div>
            <div className="contact-card reveal delay-1">
              <a href="mailto:shivaprasadgowda9380@gmail.com">
                <Mail size={20} />
                shivaprasadgowda9380@gmail.com
              </a>
              <a href="tel:+919380660939">
                <Phone size={20} />
                +91 9380660939
              </a>
              <span>
                <MapPin size={20} />
                Bangalore, India
              </span>
              <div className="contact-socials">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Shivaprasad G. Built with React and TypeScript.</p>
      </footer>

      {selectedProject ? (
        <div className="modal-layer" role="presentation" onClick={() => setSelectedProjectId(null)}>
          <article
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-title-${selectedProject.id}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <p>Project Details</p>
              <button type="button" onClick={() => setSelectedProjectId(null)} aria-label="Close project details">
                <ArrowLeft size={16} />
                Back
                <X size={16} />
              </button>
            </div>
            <div className="modal-body">
              <div className="modal-intro">
                <div className="modal-icon">{SelectedProjectIcon ? <SelectedProjectIcon size={30} /> : null}</div>
                <span>{selectedProject.category}</span>
                <h3 id={`project-title-${selectedProject.id}`}>{selectedProject.title}</h3>
                {selectedProject.status ? <p>{selectedProject.status}</p> : null}
              </div>
              <div className="modal-details">
                <p className="section-kicker">Project Overview</p>
                <p>{selectedProject.longDescription}</p>
                <p className="section-kicker">Key Features</p>
                <div className="feature-list">
                  {selectedProject.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
                <p className="section-kicker">Technology Stack</p>
                <div className="tech-row modal-tech">
                  {selectedProject.technologies.map((technology) => (
                    <em key={technology}>{technology}</em>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </div>
  );
}

export default App;
