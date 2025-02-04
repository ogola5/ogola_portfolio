import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPython, FaJsSquare, FaGem, FaEthereum, FaRust, FaFileAlt, FaGraduationCap } from 'react-icons/fa';
import '../styles/about.css'; // Ensure the CSS file is linked

const AboutMe = () => {
  return (
    <Container className="about-me-section">
      <Row className="align-items-center">
        <Col md={5} className="image-col">
          <Image src="images/DSC_0149-2-2.jpg" roundedCircle className="profile-image"/>
        </Col>
        <Col md={7} className="text-col">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Evance Ogola</strong>, an <strong>Electrical Engineer, Software, and Blockchain Developer</strong> based in Malindi, Kenya.
            With a passion for engineering and technology, I specialize in <strong>electrical installations, computer diagnostics, repair and maintenance, software development, and blockchain technology</strong>.
            I have over three years of experience in these fields and thrive on challenging projects that require innovative solutions.
          </p>
          <p>When not engrossed in technology, I enjoy <em>reading, walking along the beach, swimming, and storytelling.</em></p>

          <h3>Skills & Languages</h3>
          <ul className="skills-list">
            <li><FaJsSquare className="icon" /> JavaScript</li>
            <li><FaPython className="icon" /> Python</li>
            <li><FaGem className="icon" /> Ruby</li>
            <li><FaEthereum className="icon" /> Solidity</li>
            <li><FaRust className="icon" /> Rust</li>
          </ul>

          <div className="buttons-container">
            <Link to="/certificates" className="btn-custom btn-primary">
              <FaFileAlt className="btn-icon" /> Certificates
            </Link>
            <Link to="/education" className="btn-custom btn-secondary">
              <FaGraduationCap className="btn-icon" /> Education
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
