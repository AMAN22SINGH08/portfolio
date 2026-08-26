import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code, 
  Cpu, 
  Globe, 
  Wrench, 
  Layers, 
  CheckCircle, 
  Sparkles,
  Zap
} from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
  const { skills } = portfolioData;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code size={22} className="cat-icon-indigo" />;
      case 'Cpu':
        return <Cpu size={22} className="cat-icon-cyan" />;
      case 'Globe':
        return <Globe size={22} className="cat-icon-violet" />;
      case 'Wrench':
        return <Wrench size={22} className="cat-icon-emerald" />;
      default:
        return <Layers size={22} />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work & Learn With</span>
          </h2>
          <p className="section-description">
            A transparent overview of the programming languages, AI/ML libraries, frameworks,
            and developer tools I am actively using in academic coursework and personal projects.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="skills-grid">
          {skills.map((categoryGroup, idx) => (
            <div key={idx} className="skill-category-card glass-card">
              {/* Category Header */}
              <div className="category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(categoryGroup.iconName)}
                </div>
                <div>
                  <h3 className="category-title">{categoryGroup.category}</h3>
                  <p className="category-desc">{categoryGroup.description}</p>
                </div>
              </div>

              {/* Skills List / Tags */}
              <div className="skills-items-list">
                {categoryGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="skill-item-row">
                    <div className="skill-item-main">
                      <Zap size={14} className="skill-bullet-icon" />
                      <span className="skill-name">{item.name}</span>
                    </div>
                    <div className="skill-meta">
                      <span className="skill-note">{item.note}</span>
                      <span className={`skill-level-badge level-${item.level.toLowerCase()}`}>
                        {item.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honest Note Banner */}
        <div className="skills-disclaimer glass-card">
          <div className="disclaimer-icon">
            <Sparkles size={20} />
          </div>
          <div className="disclaimer-text">
            <h4>Continuous Growth Mindset</h4>
            <p>
              As a 2nd-year undergraduate, I prioritize deep foundational understanding over buzzwords.
              I regularly practice algorithms, read documentation, and apply newly learned concepts
              into real-world codebases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
