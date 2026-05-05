import React, { useState } from 'react';
import './ContactNav.css';
import SEO from '../SEO/SEO';
import Footer from '../Footer/Footer';


const ContactNav = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080/api/contact/send'
        : 'https://garuda-carrer-landing-page.onrender.com/api/contact/send';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          emailAddress: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to connect to the server. Please ensure the backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ct-contact-page">
      <SEO
        title="Contact Us – Garuda Career | Get Job Search Help & Support"
        description="Get in touch with the Garuda Career team. Visit our office in Dharmapuri, Tamil Nadu or reach us at support@hirenest.com. We're here to help with your career journey."
        canonical="/contactnav"
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://garudacareer.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://garudacareer.com/contactnav" }
          ]
        }}
      />


      <main className="ct-main-content">
        {/* ====== CONTACT HERO ====== */}
        <section className="ct-hero">
          <div className="ct-hero-bg"></div>
          <div className="ct-container">
            <span className="ct-sub-label">Get In Touch</span>
            <h1 className="ct-title">Let's start a <span className="ct-gradient-text">conversation</span></h1>
            <p className="ct-subtitle">Have questions? Our team is here to help you navigate your career journey.</p>
          </div>
        </section>

        {/* ====== CONTACT FORM & INFO SECTION ====== */}
        <section className="ct-contact-section">
          <div className="ct-container">
            <div className="ct-contact-grid">

              {/* Left: Contact Form */}
              <div className="ct-form-wrap">
                {submitted ? (
                  <div className="ct-success-card">
                    <div className="ct-success-icon"><i className="fa-solid fa-circle-check"></i></div>
                    <h2>Message Sent!</h2>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="ct-btn-secondary">Send another message</button>
                  </div>
                ) : (
                  <form className="ct-form" onSubmit={handleSubmit}>
                    <div className="ct-form-row">
                      <div className="ct-input-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="ct-input-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="ct-input-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    <div className="ct-input-group">
                      <label>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Tell us more about your inquiry..."
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="ct-btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                )}
              </div>

              {/* Right: Contact Info */}
              <div className="ct-info-wrap">
                <div className="ct-info-card">
                  <h3>Contact Information</h3>
                  <div className="ct-info-list">
                    <div className="ct-info-item">
                      <div className="ct-icon"><i className="fa-solid fa-location-dot"></i></div>
                      <div className="ct-text">
                        <strong>Our Office</strong>
                        <span>Oldpatti Harur(post or Tk) <br /> Dharmapuri (Dt) 636903.</span>
                      </div>
                    </div>
                    <div className="ct-info-item">
                      <div className="ct-icon"><i className="fa-solid fa-phone"></i></div>
                      <div className="ct-text">
                        <strong>Phone Number</strong>
                        <span> 6383612020</span>
                      </div>
                    </div>
                    <div className="ct-info-item">
                      <div className="ct-icon"><i className="fa-solid fa-envelope"></i></div>
                      <div className="ct-text">
                        <strong>Email Address</strong>
                        <span>garudacareer@gmail.com </span>
                      </div>
                    </div>
                  </div>

                  <div className="ct-social-links">
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
};

export default ContactNav;
