import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaCode, FaDatabase, FaMobileAlt, FaEnvelope, FaWhatsapp, FaCloud, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-section" id="home">
      <div className="text-box">
        <h1>Welcome to My Portfolio</h1>
        <p className="intro-text">
          Hi, I'm Evance Ogola, an Electrical Engineer, Software, and Blockchain Developer based in Malindi, Kenya. Discover my projects, skills, and professional journey.
        </p>
        <div className="button-wrapper">
          <Link to="/about">
            <Button variant="primary">Learn More About Me</Button>
          </Link>
        </div>
      </div>

      {/* Skills & Services Section */}
      <div className="skills-services">
        <div className="icon-card">
          <FaCode />
          <h4>Software Development</h4>
          <p>I specialize in building robust web applications using modern technologies like React, Node.js, and Python.</p>
        </div>
        <div className="icon-card">
          <FaDatabase />
          <h4>Database Management</h4>
          <p>Experienced in managing and optimizing databases with MySQL, MongoDB, and PostgreSQL for scalable solutions.</p>
        </div>
        <div className="icon-card">
          <FaMobileAlt />
          <h4>Mobile Development</h4>
          <p>Creating responsive and user-friendly mobile apps with React Native, ensuring great performance across all devices.</p>
        </div>
        <div className="icon-card">
          <FaCloud />
          <h4>Cloud Solutions</h4>
          <p>Building and deploying applications on cloud platforms like AWS and Azure for optimal performance and scalability.</p>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="social-links">
          <a href="https://github.com/ogola5" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ogola-evance-51a30a1bb" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/ogolaevance5" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:ogolaevance5@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/+254799457182" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>

    </div>
  );
}

export default Home;
