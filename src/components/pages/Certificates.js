import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCertificate, FaUniversity, FaCalendarAlt, FaLink } from 'react-icons/fa';
import '../styles/certificates.css';
import rust from '../images/rust.png'; // Import Rust image
import ai from '../images/AI.png'; // Import AI image
import typescript from '../images/typesript.png'; // Import TypeScript image

const certificates = [
  {
    title: "Certified Electrical and Electronics Engineer",
    issuer: "Technical University of Mombasa",
    date: "2023",
    description: "Bachelor of Science in Electrical and Electronics Engineering",
    logo: "/images/tum.png", // Replace with your image path
    link: "https://drive.google.com/file/d/1TTP6S_1JYh0WEWaHMdi3UneiV_c4_506/view?usp=sharing"
  },
  {
    title: "TypeScript Smart Contract 101",
    issuer: "Dacade",
    date: "Date of Completion",
    description: "Completed the TypeScript Smart Contract 101 course on Dacade.",
    logo: typescript, // Use the imported TypeScript image
    link: "https://drive.google.com/file/d/1VqeMqpBXiUPgiu6elZTMuZcoz_iFD0Ir/view?usp=sharing"
  },
  {
    title: "AI Web App Development 101",
    issuer: "Dacade",
    date: "2023",
    description: "Completed the AI Web App Development 101 course on Dacade.",
    logo: ai, // Use the imported AI image
    link: "https://drive.google.com/file/d/1OLKg1bV4vIpR3D7ym61KkN9105loTK8p/view?usp=sharing"
  },
  {
    title: "Rust Smart Contract 101",
    issuer: "Dacade",
    date: "2023",
    description: "Completed the Rust Smart Contract 101 course on Dacade.",
    logo: rust, // Use the imported Rust image
    link: "https://drive.google.com/file/d/1zuWxlMMjj5gSBrJ11-_d8teVybKrXrUh/view?usp=sharing"
  },
  // ... Add more certificates as needed
];

const Certificates = () => {
  return (
    <Container className="certificates-container">
      <h2><FaCertificate /> Certifications</h2>
      <Row>
        {certificates.map((cert, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={cert.logo} />
              <Card.Body>
                <Card.Title><FaCertificate /> {cert.title}</Card.Title>
                <Card.Text>
                  <FaUniversity /> Issued by: {cert.issuer} <br />
                  <FaCalendarAlt /> Date: {cert.date} <br />
                  {cert.description}
                </Card.Text>
                <Card.Link href={cert.link} target="_blank" rel="noopener noreferrer">
                  <FaLink /> View Certificate
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Certificates;