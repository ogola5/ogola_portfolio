import React from 'react';
import { motion } from 'framer-motion';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPython, FaJsSquare, FaGem, FaEthereum, FaRust, FaFileAlt, FaGraduationCap } from 'react-icons/fa';
import '../styles/about.css';

const AboutMe = () => {
  return (
    <Container className="about-me-section" id="about">
      <motion.div 
        className="holographic-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid-line vertical"></div>
        <div className="grid-line horizontal"></div>
        <div className="grid-glow"></div>
      </motion.div>

      <div className="content-wrapper">
        <motion.div 
          className="profile-container"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-hologram">
            <Image 
              src="images/DSC_0149-2-2.jpg" 
              className="profile-image"
            />
            <div className="hologram-effect"></div>
          </div>
        </motion.div>

        <motion.div 
          className="bio-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>
            <span className="gradient-text">Evance Ogola</span>
            <div className="title-glitch">Developer & Engineer</div>
          </h2>
          
          <div className="bio-content">
            <p className="lead-text">
              Electrical systems architect turned code artisan, merging hardware precision with software innovation. 
              <span className="highlight"> Blockchain developer </span> crafting decentralized futures from Kenya's coast.
            </p>

            <div className="cyber-divider"></div>

            <div className="skills-grid">
              {[FaJsSquare, FaPython, FaGem, FaEthereum, FaRust].map((Icon, index) => (
                <motion.div 
                  key={index}
                  className="skill-card"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="skill-icon" />
                </motion.div>
              ))}
            </div>

            <div className="cta-group">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/certificates" className="neu-btn">
                  <FaFileAlt className="btn-icon" />
                  <span>Credentials</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/education" className="neu-btn secondary">
                  <FaGraduationCap className="btn-icon" />
                  <span>Education</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

export default AboutMe;