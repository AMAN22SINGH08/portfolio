import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  FolderGit2, 
  Send, 
  Sparkles, 
  Terminal,
  Code2,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from './SocialIcons';
import '../styles/Hero.css';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const target = document.querySelector(sectionId);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="section-container hero-container">
        {/* Left / Main Content */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="badge-pulse" />
            <span className="badge-text">{personal.statusBadge}</span>
          </div>

          {/* Main Greeting & Name */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>

          {/* Subtitle / Role */}
          <h2 className="hero-role">{personal.role}</h2>

          {/* Short Introduction */}
          <p className="hero-bio">{personal.bio}</p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, '#projects')}
            >
              <FolderGit2 size={18} />
              <span>View My Projects</span>
              <ArrowRight size={16} className="btn-arrow" />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              <Send size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="socials-label">Connect with me:</span>
            <div className="social-links-row">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="social-btn"
                aria-label="Send Email"
                title="Email"
              >
                <MailIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right / Visual Code Terminal Card */}
        <div className="hero-visual">
          <div className="code-terminal-card glass-card">
            {/* Terminal Window Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="terminal-title">
                <Terminal size={14} />
                <span>student.json</span>
              </div>
              <span className="terminal-status">Node.js</span>
            </div>

            {/* Terminal Code Body */}
            <div className="terminal-body">
              <pre className="terminal-code">
                <code>
                  <span className="code-keyword">const</span> <span className="code-var">developer</span> = &#123;{'\n'}
                  {'  '}<span className="code-prop">name</span>: <span className="code-string">"{personal.name}"</span>,{'\n'}
                  {'  '}<span className="code-prop">education</span>: <span className="code-string">"B.Tech Computer Science"</span>,{'\n'}
                  {'  '}<span className="code-prop">year</span>: <span className="code-number">2</span>,{'\n'}
                  {'  '}<span className="code-prop">specialization</span>: <span className="code-string">"AI & ML"</span>,{'\n'}
                  {'  '}<span className="code-prop">interests</span>: [<span className="code-string">"AI/ML"</span>, <span className="code-string">"DSA"</span>, <span className="code-string">"Web Dev"</span>],{'\n'}
                  {'  '}<span className="code-prop">seeking</span>: <span className="code-string">"Summer Internships"</span>,{'\n'}
                  {'  '}<span className="code-prop">passion</span>: <span className="code-string">"Building practical solutions"</span>{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>

            {/* Terminal Footer Highlights */}
            <div className="terminal-footer">
              <div className="term-stat">
                <Code2 size={16} className="stat-icon-indigo" />
                <span>Problem Solver</span>
              </div>
              <div className="term-stat">
                <Cpu size={16} className="stat-icon-cyan" />
                <span>AI Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
