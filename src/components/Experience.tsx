import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  const experience = {
    company: 'GTPL',
    role: 'Full-Stack Developer',
    duration: 'Sep 2023 – Present',
    location: 'Bangalore, India',
    type: 'Full-Time (Promoted from Intern)',
    responsibilities: [
      'Developed secure, scalable web applications using React and Django',
      'Integrated blockchain-based KYC and stablecoin systems for enhanced security',
      'Built AI-powered features using OpenAI APIs to improve user experience',
      'Implemented JWT-based authentication for secure API access across platforms',
      'Promoted to full-time role after successful internship, delivering reusable Django components',
      'Built practical FinTech features with secure API and backend workflows'
    ],
    achievements: [
      'Promoted from intern to full-time developer within 6 months',
      'Deployed Regenerative Wellness App to Google Play Store',
      'Developed AI-integrated web dashboards, improving data visualization for 500+ users',
      'Created reusable Django components, reducing development time for financial products'
    ]
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Professional journey and career milestones
          </p>
        </div>

        <div className="experience-content">
          <div className="experience-card">
            <div className="experience-header">
              <div className="company-info">
                <h3 className="company-name">{experience.company}</h3>
                <h4 className="role-title">{experience.role}</h4>
                <p className="role-type">{experience.type}</p>
              </div>
              <div className="experience-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{experience.duration}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            <div className="experience-details">
              <div className="responsibilities">
                <h5 className="detail-title">Key Responsibilities</h5>
                <ul className="responsibility-list">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="responsibility-item">
                      <ChevronRight size={16} />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="achievements">
                <h5 className="detail-title">Key Achievements</h5>
                <div className="achievement-list">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <div className="achievement-icon">✨</div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="career-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Full-Time Developer</h4>
                <p>Promoted based on performance</p>
                <span className="timeline-date">Mar 2024 – Present</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Software Developer Intern</h4>
                <p>Started internship at GTPL</p>
                <span className="timeline-date">Sep 2023 – Feb 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
