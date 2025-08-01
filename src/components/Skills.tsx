import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 92 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 82 },
        { name: 'React Native', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 92 },
        { name: 'Django REST Framework', level: 90 },
        { name: 'SQL Development', level: 85 }
      ]
    },
    {
      title: 'Blockchain & Database',
      skills: [
        { name: 'SUI Network', level: 85 },
        { name: 'Move Language', level: 80 },
        { name: 'NFT Minting', level: 82 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'CockroachDB', level: 75 }
      ]
    },
    {
      title: 'AI & Tools',
      skills: [
        { name: 'OpenAI API', level: 85 },
        { name: 'JWT Authentication', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Google Cloud Platform', level: 80 }
      ]
    }
  ];

  const tools = [
    'Git', 'Docker', 'Postman', 'Google Cloud Platform', 
    'JWT Authentication', 'SQL Queries', 'RESTful APIs'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-tag">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;