import React from 'react';
import { Award, Smartphone, Palette, Shield, Brain, Wrench } from 'lucide-react';
import '../styles/Achievements.css';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <Smartphone size={24} />,
      title: 'Google Play Store Deployment',
      description: 'Successfully deployed Regenerative Wellness App to Google Play Store',
      category: 'Mobile Development'
    },
    {
      icon: <Palette size={24} />,
      title: 'AI-Integrated Dashboards',
      description: 'Developed AI-integrated web dashboards, improving data visualization for 500+ users',
      category: 'AI Integration'
    },
    {
      icon: <Shield size={24} />,
      title: 'Reusable Django Components',
      description: 'Created reusable Django components, reducing development time for financial products',
      category: 'Backend Development'
    },
    {
      icon: <Brain size={24} />,
      title: 'AI-Powered Features',
      description: 'Built AI-powered features using OpenAI APIs for enhanced user experience',
      category: 'Artificial Intelligence'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Blockchain Integration',
      description: 'Integrated blockchain-based KYC and stablecoin systems for enhanced security',
      category: 'Blockchain'
    },
    {
      icon: <Award size={24} />,
      title: 'Intern to Full-Time Promotion',
      description: 'Promoted to full-time role after successful internship performance',
      category: 'Career Growth'
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Milestones</h2>
          <p className="section-subtitle">
            Key accomplishments and recognition in my development journey
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon-wrapper">
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
              </div>
              <div className="achievement-content">
                <span className="achievement-category">{achievement.category}</span>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-summary">
          <div className="summary-card">
            <div className="summary-content">
              <h3 className="summary-title">Professional Highlights</h3>
              <div className="highlights-list">
                <div className="highlight-item">
                  <span className="highlight-number">1</span>
                  <span className="highlight-text">Android app on Play Store</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">5+</span>
                  <span className="highlight-text">Dashboard interfaces designed</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">10+</span>
                  <span className="highlight-text">AI integrations completed</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">3</span>
                  <span className="highlight-text">Major Django systems built</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;