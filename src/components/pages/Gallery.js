import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/gallery.css';
// Array of image filenames from the public/images folder
const images = [
  "AI.png",
  "DSC_0139-2-2.jpg",
  "DSC_0142-2-2.jpg",
  "DSC_0146-2-2.jpg",
  "DSC_0147-2-2.jpg",
  "DSC_0149-2-2.jpg",
  "DSC_3433-2.jpg",
  "DSC_3664-2.jpg",
  "DSC_3666-2.jpg",
  "DSC_3667-2.jpg",
  "DSC_3672-2.jpg",
  "DSC_3700-2.jpg",
  "IMG_3322.jpg",
  "IMG_3325.jpg",
  "IMG_3356.jpg",
  "IMG_3364.jpg",
  // ... add more image files if needed
];

const Gallery = () => {
  return (
    <Container className="gallery-section" id="gallery">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        Visual Journey
      </motion.h2>

      <Row className="gallery-grid">
        {images.map((img, index) => (
          <Col 
            md={4} 
            sm={6} 
            key={index} 
            className="gallery-item"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="image-container">
                <Image 
                  src={`/images/${img}`} 
                  fluid
                  className="hover-shadow"
                />
                <div className="image-overlay"></div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;