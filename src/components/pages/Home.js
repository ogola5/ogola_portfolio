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
        {[...Array(4)].map((_, index) => (
          <div className="gradient-border" key={index}>
            <div className="icon-card">
              {index === 0 && <FaCode />}
              {index === 1 && <FaDatabase />}
              {index === 2 && <FaMobileAlt />}
              {index === 3 && <FaCloud />}
              <h4>{
                ['Software Development', 'Database Management', 
                 'Mobile Development', 'Cloud Solutions'][index]
              }</h4>
              <p>{
                [
                  'I specialize in building robust web applications using modern technologies like React, Node.js, and Python.',
                  'Experienced in managing and optimizing databases with MySQL, MongoDB, and PostgreSQL for scalable solutions.',
                  'Creating responsive and user-friendly mobile apps with React Native, ensuring great performance across all devices.',
                  'Building and deploying applications on cloud platforms like AWS and Azure for optimal performance and scalability.'
                ][index]
              }</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links Section */}
      <div className="social-links">
        {[
          {icon: <FaGithub />, link: 'https://github.com/ogola5'},
          {icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/ogola-evance-51a30a1bb'},
          {icon: <FaTwitter />, link: 'https://twitter.com/ogolaevance5'},
          {icon: <FaEnvelope />, link: 'mailto:ogolaevance5@gmail.com'},
          {icon: <FaWhatsapp />, link: 'https://wa.me/+254799457182'}
        ].map((social, index) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;