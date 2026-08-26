import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  BookOpen, 
  Cpu, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import '../styles/Education.css';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="section-description">
            My formal engineering education grounding me in core computer science, mathematics,
            and machine intelligence principles.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline Indicator */}
              <div className="timeline-marker">
                <div className="marker-dot">
                  <GraduationCap size={18} />
                </div>
                <div className="marker-line" />
              </div>

              {/* Timeline Content Card */}
              <div className="timeline-card glass-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="degree-badge">
                      <Cpu size={13} />
                      <span>{edu.specialization}</span>
                    </span>
                    <h3 className="degree-title">{edu.degree}</h3>
                    <h4 className="degree-field">{edu.field}</h4>
                  </div>

                  <div className="timeline-date-chip">
                    <Calendar size={14} />
                    <span>{edu.status}</span>
                  </div>
                </div>

                <p className="degree-description">{edu.description}</p>

                {/* Key Coursework */}
                <div className="coursework-section">
                  <div className="coursework-header">
                    <BookOpen size={16} className="coursework-icon" />
                    <span>Relevant Coursework & Core Modules:</span>
                  </div>
                  <div className="coursework-grid">
                    {edu.coursework.map((course, cIdx) => (
                      <div key={cIdx} className="course-chip">
                        <CheckCircle2 size={13} className="course-check" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="academic-footer-bar">
                  <div className="academic-highlight">
                    <Award size={15} className="highlight-award-icon" />
                    <span>Specialization: <strong>Artificial Intelligence & Machine Learning</strong></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
