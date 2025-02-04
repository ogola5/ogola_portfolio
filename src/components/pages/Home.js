import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion'; // Remove Button from here
import { Button } from 'react-bootstrap'; // Add this line
import {
  FaCode,
  FaEthereum,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaCube,
} from 'react-icons/fa';
import { SiSolidity, SiTypescript } from 'react-icons/si';
import '../styles/home.css';
import {
  FaDatabase,
  FaMobileAlt,
  FaCloud,
} from 'react-icons/fa';
import { SiRust } from 'react-icons/si';
const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: <FaCode />,
      title: 'Software Development',
      text: 'Building robust applications with React, Node.js, and Python.',
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      text: 'Expert in MySQL, MongoDB, and PostgreSQL solutions.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      text: 'Creating cross-platform apps with React Native.',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      text: 'Deploying scalable solutions on AWS and Azure.',
    },
    {
      icon: <FaEthereum />,
      title: 'Blockchain Development',
      text: 'Building smart contracts and decentralized applications.',
    },
  ];

  const blockchainTech = [
    { icon: <FaEthereum />, name: 'Ethereum', color: '#3C3C3D' },
    { icon: <FaCube />, name: 'Internet Computer', color: '#29ABE2' },
    { icon: <FaCube />, name: 'Aptos', color: '#02858D' },
    { icon: <FaCube />, name: 'Sui', color: '#6FBCF0' },
  ];

  const blockchainLangs = [
    { icon: <SiSolidity />, name: 'Solidity', color: '#363636' },
    { icon: <SiRust />, name: 'Rust', color: '#F74C00' },
    { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <span className="move-logo">MOVE</span>, name: 'Move', color: '#64FFDA' },
  ];

  return (
    <div className="home-section" id="home">
      {/* Hero Section */}
      <motion.div
        className="hero-box"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Full-Stack & Blockchain Developer</h1>
        <p className="intro-text">
          Hi, I'm Evance Ogola, an Electrical Engineer and Software Developer specializing in
          blockchain solutions and full-stack development based in Malindi, Kenya.
        </p>
        <div className="button-wrapper">
          <Link to="/about">
            <Button variant="primary">Explore My Work</Button>
          </Link>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="gradient-border"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
            >
              <div className="icon-card">
                {skill.icon}
                <h4>{skill.title}</h4>
                <p>{skill.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Blockchain Specialization Section */}
      <motion.div
        className="blockchain-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2 className="section-title">Blockchain Expertise</h2>
        <div className="blockchain-grid">
          <div className="platforms">
            <h4>Platforms</h4>
            <div className="platform-list">
              {blockchainTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="tech-item"
                  whileHover={{ scale: 1.05 }}
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="languages">
            <h4>Languages</h4>
            <div className="lang-list">
              {blockchainLangs.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  className="lang-item"
                  whileHover={{ scale: 1.05 }}
                  style={{ borderColor: lang.color }}
                >
                  <div className="lang-icon" style={{ color: lang.color }}>
                    {lang.icon}
                  </div>
                  <span>{lang.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Links Section */}
      <motion.div
        className="social-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        <h2 className="section-title">Connect With Me</h2>
        <div className="link-container">
          {[
            { icon: <FaGithub />, link: 'https://github.com/ogola5' },
            { icon: <FaLinkedin />, link: 'https://linkedin.com/in/ogola-evance' },
            { icon: <FaTwitter />, link: 'https://twitter.com/ogolaevance5' },
            { icon: <FaEnvelope />, link: 'mailto:ogolaevance5@gmail.com' },
            { icon: <FaWhatsapp />, link: 'https://wa.me/+254799457182' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;