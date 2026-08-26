import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Sparkles, 
  TrendingUp, 
  Compass, 
  Clock, 
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import '../styles/CurrentlyLearning.css';

const CurrentlyLearning = () => {
  const { currentlyLearning } = portfolioData;

  const getStatusColorClass = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'in progress':
        return 'status-inprogress';
      case 'exploring':
        return 'status-exploring';
      case 'practicing':
        return 'status-practicing';
      default:
        return 'status-continuous';
    }
  };

  return (
    <section id="learning" className="learning-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <TrendingUp size={14} />
            <span>Growth & Roadmaps</span>
          </div>
          <h2 className="section-title">
            What I'm <span className="gradient-text">Currently Learning</span>
          </h2>
          <p className="section-description">
            A snapshot of technologies, concepts, and algorithmic topics I am actively dedicating
            time to outside and inside college coursework.
          </p>
        </div>

        {/* Currently Learning Grid */}
        <div className="learning-grid">
          {currentlyLearning.map((item, idx) => (
            <div key={idx} className="learning-card glass-card">
              <div className="learning-card-top">
                <div className="learning-number">
                  <Lightbulb size={16} className="learning-icon" />
                </div>
                <span className={`learning-status-pill ${getStatusColorClass(item.status)}`}>
                  <span className="status-indicator-dot" />
                  {item.status}
                </span>
              </div>

              <h3 className="learning-topic">{item.topic}</h3>
              <p className="learning-detail">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Learning Commitment Footer */}
        <div className="learning-callout glass-card">
          <div className="learning-callout-inner">
            <Compass size={24} className="learning-compass-icon" />
            <p>
              <strong>Daily Routine:</strong> Solving DSA problems, studying AI/ML mathematical
              foundations, and building full-stack applications through structured project-based learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
