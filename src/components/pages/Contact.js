import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="contact-header"
        >
          <h2>Get in Touch</h2>
          <p>Let's create something remarkable together</p>
        </motion.div>

        <Row className="contact-methods">
          <Col md={6} className="contact-card-wrapper">
            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-glow"></div>
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Based in Malindi, Kenya</h3>
              <p>Available for local and remote collaborations</p>
            </motion.div>
          </Col>

          <Col md={6} className="contact-card-wrapper">
            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="card-glow"></div>
              <FaEnvelope className="contact-icon" />
              <h3>Email Directly</h3>
              <a href="mailto:ogolaevance5@gmail.com" className="contact-link">
                ogolaevance5@gmail.com
              </a>
            </motion.div>
          </Col>
        </Row>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://wa.me/+254799457182" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="https://twitter.com/ogolaevance5" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ogola-evance-51a30a1bb" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="contact-form"
        >
          <div className="form-group">
            <input type="text" placeholder="Your Name" className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" className="form-input" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="4" className="form-input"></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </motion.form>
      </Container>
    </section>
  );
};

export default Contact;