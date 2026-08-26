import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowUp, 
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from './SocialIcons';
import '../styles/Footer.css';

const Footer = () => {
  const { personal, footer, navLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
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
    <footer className="portfolio-footer">
      <div className="section-container footer-container">
        {/* Top Tier */}
        <div className="footer-top-row">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-brand-link" onClick={scrollToTop}>
              <Code2 size={22} className="footer-logo-icon" />
              <span className="footer-brand-name">{personal.name}</span>
            </a>
            <p className="footer-brand-bio">
              2nd-Year B.Tech Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Col */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Social Links</h4>
            <div className="footer-social-buttons">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="footer-social-btn"
                aria-label="Email Me"
              >
                <MailIcon size={18} />
              </a>
            </div>

            <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Tier */}
        <div className="footer-bottom-row">
          <p className="footer-copyright-text">{footer.text}</p>
          <p className="footer-tagline">
            Designed for GitHub, Resumes & Internship Applications
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
