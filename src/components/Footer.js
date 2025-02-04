import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container fluid>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0 d-flex justify-content-center" md={6}>
            <div className="icon-container">
              <a href="mailto:ogolaevance5@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope /><span>Email</span>
              </a>
              <a href="https://wa.me/+254799457182" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /><span>WhatsApp</span>
              </a>
              <a href="tel:+254711695232" target="_blank" rel="noopener noreferrer">
                <FaPhone /><span>Phone</span>
              </a>
              <a href="https://www.linkedin.com/in/ogola-evance-51a30a1bb" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /><span>LinkedIn</span>
              </a>
              <a href="https://github.com/ogola5" target="_blank" rel="noopener noreferrer">
                <FaGithub /><span>GitHub</span>
              </a>
              <a href="https://twitter.com/ogolaevance5" target="_blank" rel="noopener noreferrer">
                <FaTwitter /><span>Twitter</span>
              </a>
            </div>
          </Col>
        </Row>
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
}

export default Footer;
