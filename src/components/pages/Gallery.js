import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
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
    <Container className="gallery-section">
      <h2>Gallery</h2>
      <Row>
        {images.map((img, index) => (
          <Col md={4} sm={6} key={index} className="mb-3">
            <Image src={`/images/${img}`} thumbnail fluid />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
