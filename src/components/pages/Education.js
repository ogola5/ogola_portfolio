import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
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
    year: "2023",
    details: "Acquired practical skills in software development with a focus on building robust web applications."
  },
];

const Education = () => {
  return (
    <Container className="education-section" id="education">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Academic Journey
      </motion.h2>

      <div className="timeline">
        {educationHistory.map((edu, index) => (
          <motion.div 
            key={index}
            className="timeline-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="card-glow"></div>
            <div className="card-content">
              <h3>{edu.degree}</h3>
              <div className="school-info">
                <span className="school">{edu.school}</span>
                <span className="year">{edu.year}</span>
              </div>
              <p>{edu.details}</p>
            </div>
          </motion.div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </Container>
  );
}

export default Education;