import React from 'react';
import { ExternalLink, Github, Smartphone, Shield, DollarSign } from 'lucide-react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Regenerative Wellness Booking App',
      description: 'A mobile app for booking 60-day therapy sessions with dynamic vehicle scheduling and optimized allocation algorithms.',
      icon: <Smartphone size={24} />,
      technologies: ['React Native', 'Next.js', 'Django', 'CockroachDB'],
      features: [
        '60-day therapy program management',
        'Dynamic vehicle scheduling system',
        'Optimized vehicle allocation algorithms',
        'Reduced scheduling conflicts by 25%',
        'Real-time booking management'
      ],
      status: 'Live on Play Store',
      category: 'Mobile App'
    },
    {
      title: 'Blockchain KYC Platform',
      description: 'A secure identity verification system built on SUI Blockchain with fiat-to-NFT conversion capabilities.',
      icon: <Shield size={24} />,
      technologies: ['React', 'Django', 'SUI Blockchain', 'Move Language'],
      features: [
        'Secure identity verification on SUI Blockchain',
        'Fiat-to-NFT conversion functionality',
        'JWT authentication system',
        'Enhanced security protocols',
        'Blockchain-based verification'
      ],
      status: 'Live on Play Store',
      category: 'Blockchain'
    },
    {
      title: 'Stablecoin Payment Platform',
      description: 'A global platform for receiving, storing, converting, issuing, and spending stablecoins with comprehensive financial features.',
      icon: <DollarSign size={24} />,
      technologies: ['React', 'Django', 'Blockchain APIs'],
      features: [
        'Receive and store stablecoins securely',
        'Convert between different stablecoins',
        'Issue new stablecoin tokens',
        'Spend stablecoins globally',
        'Comprehensive financial management'
      ],
      status: 'Production Ready',
      category: 'FinTech'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Innovative solutions spanning mobile apps, blockchain, and FinTech
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className={`project-status ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {/* <button className="project-btn primary">
                  <ExternalLink size={16} />
                  View Details
                </button>
                <button className="project-btn secondary">
                  <Github size={16} />
                  Source Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;