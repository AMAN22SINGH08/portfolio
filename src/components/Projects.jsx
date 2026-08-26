import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import '../styles/Projects.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">
            Projects I've <span className="gradient-text">Built & Contributed To</span>
          </h2>
          <p className="section-description">
            Hands-on software and machine learning applications showcasing practical problem
            solving, clean architecture, and modern full-stack development.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={project.id || idx} className="project-card glass-card">
              {/* Project Card Header */}
              <div className="project-card-header">
                <div className="project-badge-row">
                  <span className="project-category-badge">
                    <Sparkles size={12} />
                    {project.badge}
                  </span>
                  <span className="project-index">0{idx + 1}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              {/* Project Key Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="project-highlights">
                  <span className="highlights-title">Key Highlights:</span>
                  <ul className="highlights-list">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="highlight-item">
                        <CheckCircle2 size={14} className="highlight-bullet" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Used */}
              <div className="project-tech-section">
                <span className="tech-heading">
                  <Layers size={13} />
                  <span>Tech Stack</span>
                </span>
                <div className="project-tech-tags">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-footer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm project-action-btn"
                  title="View Source Code on GitHub"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repo</span>
                </a>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm project-action-btn"
                  title="View Live Application Demo"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout Banner */}
        <div className="projects-github-callout glass-card">
          <div className="callout-content">
            <div className="callout-icon">
              <GithubIcon size={26} />
            </div>
            <div className="callout-text">
              <h3>Looking for more code repositories & experiments?</h3>
              <p>
                Visit my GitHub profile for coursework repositories, algorithmic solutions, and active mini-projects.
              </p>
            </div>
          </div>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>Explore GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
