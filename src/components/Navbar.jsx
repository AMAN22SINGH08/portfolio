import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, Sun, Moon, Sparkles, Terminal } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { personal, navLinks } = portfolioData;

  // Handle scroll events for navbar blur background & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="brand-icon">
            <Terminal size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-name">{personal.name}</span>
            <span className="brand-badge">AI & ML</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                    {isActive && <span className="nav-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Actions: Theme Toggle & Contact Quick Button */}
        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark/light theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a
            href="#contact"
            className="btn btn-primary btn-sm nav-cta-btn"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <Sparkles size={14} />
            <span>Connect</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setIsOpen(false)} />
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="brand-text">
              <span className="brand-name">{personal.name}</span>
              <span className="brand-badge">2nd Year CSE</span>
            </div>
            <button
              className="close-drawer-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="mobile-active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href="#contact"
              className="btn btn-primary btn-block"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <Sparkles size={16} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
