import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  User, 
  Brain, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  FileText,
  Download
} from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const { about, personal } = portfolioData;

  // Icon lookup map
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Brain':
        return <Brain size={22} className="card-icon-cyan" />;
      case 'GraduationCap':
        return <GraduationCap size={22} className="card-icon-indigo" />;
      case 'Briefcase':
        return <Briefcase size={22} className="card-icon-violet" />;
      case 'Code2':
        return <Code2 size={22} className="card-icon-emerald" />;
      default:
        return <Sparkles size={22} />;
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About <span className="gradient-text">AI, Code & Problem Solving</span>
          </h2>
          <p className="section-description">
            A dedicated Computer Science Engineering undergraduate striving to bridge foundational
            theory with practical software applications.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Left Bio Card */}
          <div className="about-bio-card glass-card">
            <h3 className="bio-card-title">Professional Summary</h3>
            <div className="bio-paragraphs">
              {about.summary.map((para, idx) => (
                <p key={idx} className="bio-text">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Competencies Focus Area */}
            <div className="about-focus-container">
              <h4 className="focus-heading">Currently Building Strong Competencies In:</h4>
              <div className="focus-pills-grid">
                {about.focusAreas.map((area, idx) => (
                  <div key={idx} className="focus-pill">
                    <CheckCircle2 size={16} className="pill-check-icon" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Resume Link & Action CTAs */}
            <div className="about-cta-row">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Amanpreet_Singh_Resume.pdf"
                className="btn btn-primary btn-sm"
                title="Download or View Resume / CV"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>

              <a href="#projects" className="btn btn-secondary btn-sm">
                <span>Explore Projects</span>
                <ArrowUpRight size={14} />
              </a>

              <a href="#contact" className="btn btn-secondary btn-sm">
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="about-highlights-column">
            {about.highlights.map((item, idx) => (
              <div key={idx} className="highlight-card glass-card">
                <div className="highlight-icon-wrapper">
                  {getIcon(item.iconName)}
                </div>
                <div className="highlight-content">
                  <span className="highlight-label">{item.title}</span>
                  <h4 className="highlight-value">{item.value}</h4>
                </div>
              </div>
            ))}

            {/* Quick Academic Profile Snapshot */}
            <div className="academic-snapshot-card glass-card">
              <div className="snapshot-header">
                <GraduationCap size={20} className="snapshot-icon" />
                <span className="snapshot-title">Undergraduate Profile</span>
              </div>
              <div className="snapshot-body">
                <div className="snapshot-row">
                  <span className="row-key">Program:</span>
                  <span className="row-val">B.Tech in Computer Science</span>
                </div>
                <div className="snapshot-row">
                  <span className="row-key">Year of Study:</span>
                  <span className="row-val">2nd Year (Sophomore)</span>
                </div>
                <div className="snapshot-row">
                  <span className="row-key">Specialization:</span>
                  <span className="row-val highlight-val">Artificial Intelligence & ML</span>
                </div>
                <div className="snapshot-row">
                  <span className="row-key">Status:</span>
                  <span className="row-val status-open">Seeking Summer 2025/2026 Internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
