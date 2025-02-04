import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/footer.css';
import { useEffect } from 'react';
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="mt-5" data-aos="fade-up">
      <Container fluid>
        {/* Social Links Section */}
        <Row className="border-top justify-content-between p-3">
          <Col md={6} className="d-flex justify-content-center flex-column">
            <h4 className="footer-title">Connect With Me</h4>
            <div className="icon-container d-flex justify-content-center flex-wrap">
              <a
                href="mailto:ogolaevance5@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
              <a
                href="https://wa.me/+254799457182"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+254711695232"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaPhone />
                <span>Phone</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ogola-evance-51a30a1bb"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ogola5"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://twitter.com/ogolaevance5"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaTwitter />
                <span>Twitter</span>
              </a>
            </div>
          </Col>
          <Col md={6} className="text-center d-flex flex-column align-items-center">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="quick-links list-unstyled d-flex flex-wrap justify-content-center">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="footer-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <div className="copy-right">
              © {new Date().getFullYear()} Evance Ogola. All Rights Reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;