import React from 'react';
import { Code, Database, Smartphone, Brain } from 'lucide-react';
import '../styles/About.css';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Full-Stack Development',
      description: 'Expert in React, Django, and modern web technologies'
    },
    {
      icon: <Database size={24} />,
      title: 'Blockchain Integration',
      description: 'SUI Network, Move Language, and NFT development'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'React Native applications with real-time features'
    },
    {
      icon: <Brain size={24} />,
      title: 'AI Solutions',
      description: 'OpenAI API integrations and intelligent workflows'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating innovative solutions that bridge technology and business
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a motivated Full-Stack Developer with 2+ years of experience building scalable 
              FinTech, blockchain, and AI-integrated solutions. My journey has been focused on 
              delivering secure and efficient web and mobile applications using cutting-edge 
              technologies like React, Django, and SUI Blockchain.
            </p>
            
            <p className="about-description">
              Adept at writing clean, maintainable code and collaborating in Agile teams to drive 
              innovation. My experience at GTPL has allowed me to develop secure, scalable web 
              applications and integrate blockchain-based systems with AI-powered features.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Technologies Mastered</span>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <div className="highlight-content">
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;