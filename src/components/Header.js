import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles/header.css';

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top" className="cyber-navbar">
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar.Brand as={Link} to="/" className="neuro-brand">
            <span className="glitch-text">EVANCE</span>
            <span className="cyber-underline"></span>
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle aria-controls="nav-menu" className="hologram-toggle" />

        <Navbar.Collapse id="nav-menu" className="justify-content-end">
          <Nav className="neuro-links">
            {['About', 'Experience', 'Gallery', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Nav.Link 
                  as={Link} 
                  to={`/${item.toLowerCase()}`} 
                  className="neuro-link"
                >
                  <span className="link-text">{item}</span>
                  <span className="link-hover"></span>
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;