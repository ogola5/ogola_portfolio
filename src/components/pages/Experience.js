import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
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
    <Container className="experience-section" id="experience">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Journey
      </motion.h2>

      <div className="experience-timeline">
        {experienceData.map((job, index) => (
          <motion.div 
            key={index}
            className="experience-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <div className="card-glow"></div>
            <div className="card-header">
              <FaBriefcase className="main-icon" />
              <div className="title-group">
                <h3>{job.role}</h3>
                <div className="company-timeline">
                  <span className="company"><FaBuilding /> {job.company}</span>
                  <span className="timeline"><FaCalendarAlt /> {job.years}</span>
                </div>
              </div>
            </div>
            
            <div className="card-content">
              <ul>
                {job.details.map((detail, detailIndex) => (
                  <motion.li 
                    key={detailIndex}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaTasks className="task-icon" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="timeline-connector"></div>
          </motion.div>
        ))}
        <div className="timeline-progress"></div>
      </div>
    </Container>
  );
}

export default Experience;