import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPython, FaReact, FaDatabase, FaCode, FaLaptopCode, FaLinkedin, FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="contact-info">
              <h2>Contact Me</h2>
              <p>Feel free to reach out to me for any inquiries or collaborations. Below are some of my key projects.</p>
            </div>
          </Col>
        </Row>

        {/* Python Projects Section */}
        <Row className="justify-content-center mt-5">
          <Col md={4} className="project-item">
            <div className="project-icon">
              <FaPython size={50} color="#306998" />
            </div>
            <h3>Python Projects</h3>
            <p>Explore my Python projects, including automation scripts, web scraping, data analysis, and more.</p>
            <Button variant="outline-primary" href="https://github.com/ogola5/python-projects" target="_blank">
              View Python Projects
            </Button>
          </Col>
          <Col md={4} className="project-item">
            <div className="project-icon">
              <FaDatabase size={50} color="#4db8ff" />
            </div>
            <h3>Data Science</h3>
            <p>I build Python-based data analysis tools using Pandas, NumPy, and visualization libraries like Matplotlib and Seaborn.</p>
            <Button variant="outline-primary" href="https://github.com/ogola5/data-science" target="_blank">
              View Data Science Projects
            </Button>
          </Col>
        </Row>

        {/* React Projects Section */}
        <Row className="justify-content-center mt-5">
          <Col md={4} className="project-item">
            <div className="project-icon">
              <FaReact size={50} color="#61dafb" />
            </div>
            <h3>React Projects</h3>
            <p>Developed interactive web applications using React, including e-commerce platforms, blogs, and dashboards.</p>
            <Button variant="outline-primary" href="https://github.com/ogola5/react-projects" target="_blank">
              View React Projects
            </Button>
          </Col>
          <Col md={4} className="project-item">
            <div className="project-icon">
              <FaCode size={50} color="#333" />
            </div>
            <h3>Full-Stack Development</h3>
            <p>Worked on full-stack applications, combining React frontend with Node.js, Express, and MongoDB for the backend.</p>
            <Button variant="outline-primary" href="https://github.com/ogola5/full-stack-projects" target="_blank">
              View Full-Stack Projects
            </Button>
          </Col>
        </Row>

        {/* Additional Skills Section */}
        <Row className="justify-content-center mt-5">
          <Col md={4} className="project-item">
            <div className="project-icon">
              <FaLaptopCode size={50} color="#2e2e2e" />
            </div>
            <h3>Web Development</h3>
            <p>Experience with HTML, CSS, JavaScript, and frameworks like React and Bootstrap for building responsive websites.</p>
            <Button variant="outline-primary" href="https://github.com/ogola5/web-development" target="_blank">
              View Web Dev Projects
            </Button>
          </Col>
        </Row>

        {/* Social Media and Contact Links */}
        <Row className="justify-content-center mt-5">
          <Col className="text-center">
            <div className="contact-links">
              <a href="mailto:ogolaevance5@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaEnvelope size={30} color="#d14836" />
                <p>Email</p>
              </a>
              <a href="https://wa.me/+254799457182" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaWhatsapp size={30} color="#25D366" />
                <p>WhatsApp</p>
              </a>
              <a href="https://twitter.com/ogolaevance5" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaTwitter size={30} color="#1DA1F2" />
                <p>Twitter</p>
              </a>
              <a href="https://www.linkedin.com/in/ogola-evance-51a30a1bb" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaLinkedin size={30} color="#0077b5" />
                <p>LinkedIn</p>
              </a>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default Contact;
