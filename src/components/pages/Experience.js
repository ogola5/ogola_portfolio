import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaTasks } from 'react-icons/fa';
import '../styles/experience.css';

const experienceData = [
  {
    role: "Software Developer",
    company: "SIKEPAY",
    years: "January 2023 - Present",
    details: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and React.",
      "Managed integration of third-party services such as payment gateways and CRM systems.",
      "Software development and testing using Python, Django, Ruby on Rails, and JavaScript.",
      "Networking installation and troubleshooting.",
      "Plan interpretation and mathematical analysis."
    ]
  },
  {
    role: "Electrical Engineer Intern",
    company: "County Government of Mombasa",
    years: "January 2021 - April 2021",
    details: [
      "Repair of electrical and electronic parts.",
      "Electrical installation and plan design and interpretation.",
      "Installation maintenance and design of street lights.",
      "Troubleshooting of traffic lights and programming the SCADA and PLC system."
    ]
  },
  {
    role: "Electrical Attaché",
    company: "Abindu Autoparts Lwanda K’Otieno",
    years: "January 2017 - September 2017",
    details: [
      "Electrical installation and plan design and interpretation.",
      "Troubleshooting and repair of electrical and electronic parts."
    ]
  },
  {
    role: "Electrical Engineer",
    company: "Elimu Resource Center",
    years: "2023",
    details: [
      "Designed and tested electrical systems for residential and commercial structures.",
      "Collaborated with cross-functional teams to improve designs and reduce costs."
    ]
  }
];

const Experience = () => {
  return (
    <Container className="experience-section">
      <h2>Professional Experience</h2>
      {experienceData.map((job, index) => (
        <Row key={index} className="job-entry">
          <Col md={12}>
            <h3>
              <FaBriefcase /> {job.role} - {job.company}
            </h3>
            <p className="text-muted">
              <FaCalendarAlt /> {job.years}
            </p>
            <ul>
              {job.details.map((detail, detailIndex) => (
                <li key={detailIndex}>
                  <FaTasks /> {detail}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Experience;
