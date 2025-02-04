import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/education.css';
const educationHistory = [
  {
    degree: "Bachelor of Science in Electrical and Electronics Engineering",
    school: "Technical University of Mombasa",
    year: "Graduated July 2022",
    details: "Gained a solid foundation in electrical and electronics engineering principles, systems, and practices."
  },
  {
    degree: "Software Engineering Course",
    school: "Moringa School",
    year: "Completion Date", // Replace with the actual completion date if known
    details: "Acquired practical skills in software development with a focus on building robust web applications."
  },
  // ... add more educational entries here if needed
];

const Education = () => {
  return (
    <Container className="education-section">
      <h2>Education</h2>
      {educationHistory.map((edu, index) => (
        <Row key={index} className="mb-3">
          <Col md={12}>
            <h3>{edu.degree}</h3>
            <p><strong>{edu.school}</strong> - {edu.year}</p>
            <p>{edu.details}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Education;
