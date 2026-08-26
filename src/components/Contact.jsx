import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  User, 
  AtSign,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from './SocialIcons';
import '../styles/Contact.css';

const Contact = () => {
  const { personal } = portfolioData;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (formError) setFormError('');
  };

  // Copy Email to Clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please complete all fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    // Simulate sending time (since no backend is needed)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect & Collaborate</span>
          </h2>
          <p className="section-description">
            Whether you have an internship opportunity, project collaboration, or just want
            to chat about AI, algorithms, or software development, feel free to reach out!
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-card">
              <h3 className="info-card-title">Contact Channels</h3>
              <p className="info-card-subtitle">
                Feel free to email me directly or connect through my social profiles.
              </p>

              <div className="contact-channels-list">
                {/* Email Channel */}
                <div className="channel-item">
                  <div className="channel-icon-box">
                    <MailIcon size={20} className="channel-icon-primary" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-type">Email Address</span>
                    <a href={`mailto:${personal.email}`} className="channel-link">
                      {personal.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="copy-btn"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* GitHub Channel */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item interactive-channel"
                >
                  <div className="channel-icon-box">
                    <GithubIcon size={20} className="channel-icon-primary" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-type">GitHub Profile</span>
                    <span className="channel-link">Explore Repositories & Code</span>
                  </div>
                </a>

                {/* LinkedIn Channel */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item interactive-channel"
                >
                  <div className="channel-icon-box">
                    <LinkedinIcon size={20} className="channel-icon-primary" />
                  </div>
                  <div className="channel-details">
                    <span className="channel-type">LinkedIn Network</span>
                    <span className="channel-link">Connect Professionally</span>
                  </div>
                </a>
              </div>

              {/* Status Note */}
              <div className="quick-response-badge">
                <span className="online-indicator" />
                <span>Currently active & checking messages regularly</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <h3 className="form-card-title">Send a Message</h3>
              <p className="form-card-subtitle">
                Fill out the details below and I'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={38} className="success-icon" />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you for reaching out, I've received your note and will reply soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {formError && (
                    <div className="form-error-banner">
                      <AlertCircle size={16} />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <div className="input-wrapper">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Johnson"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <div className="input-wrapper">
                      <AtSign size={18} className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@example.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Amanpreet, I came across your portfolio and would like to discuss..."
                      className="form-textarea"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
