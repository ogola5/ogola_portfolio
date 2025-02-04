// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, useInView } from 'framer-motion';
// import { FaCode, FaEthereum, FaRust, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
// import { SiSolidity, SiTypescript, SiMotoko } from 'react-icons/si';
// import { DiAptos } from 'react-icons/di';
// import { TbBrandSui } from 'react-icons/tb';
// import '../styles/home.css';

// const Home = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const blockchainPlatforms = [
//     { icon: <FaEthereum />, name: 'Ethereum', color: '#3C3C3D' },
//     { icon: <DiAptos />, name: 'Aptos', color: '#02858D' },
//     { icon: <TbBrandSui />, name: 'Sui', color: '#6FBCF0' },
//     { icon: <SiMotoko />, name: 'ICP', color: '#29ABE2' },
//   ];

//   const languages = [
//     { icon: <SiSolidity />, name: 'Solidity', color: '#363636' },
//     { icon: <FaRust />, name: 'Rust', color: '#F74C00' },
//     { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
//     { icon: <span className="move-logo">MOVE</span>, name: 'Move', color: '#64FFDA' },
//   ];

//   return (
//     <div className="home-section" id="home">
//       <motion.div 
//         className="hero-content"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1>Blockchain Architect</h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Building decentralized futures with cutting-edge protocols
//         </motion.p>
//       </motion.div>

//       <motion.div 
//         className="expertise-section"
//         ref={ref}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isInView ? 1 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="blockchain-platforms">
//           {blockchainPlatforms.map((platform, index) => (
//             <motion.div
//               key={platform.name}
//               className="platform-card"
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
//               transition={{ delay: index * 0.1 + 0.2 }}
//               style={{ backgroundColor: platform.color }}
//             >
//               {platform.icon}
//               <span>{platform.name}</span>
//             </motion.div>
//           ))}
//         </div>

//         <div className="languages-grid">
//           {languages.map((lang, index) => (
//             <motion.div
//               key={lang.name}
//               className="language-card"
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
//               transition={{ delay: index * 0.1 + 0.4 }}
//             >
//               <div className="lang-icon" style={{ color: lang.color }}>
//                 {lang.icon}
//               </div>
//               <h4>{lang.name}</h4>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       <motion.div 
//         className="bio-section"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//       >
//         <div className="gradient-border">
//           <div className="content-box">
//             <h2>Evance Ogola</h2>
//             <p>
//               Blockchain & Full-Stack Developer specializing in decentralized systems architecture.
//               Expertise in smart contract development and Web3 integration.
//             </p>
//             <Link to="/about">
//               <button className="cyber-button">
//                 Explore Portfolio
//                 <span className="glow"></span>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </motion.div>

//       <div className="social-links">
//         {[
//           { icon: <FaGithub />, link: 'https://github.com/ogola5' },
//           { icon: <FaLinkedin />, link: 'https://linkedin.com/in/ogola-evance' },
//           { icon: <FaTwitter />, link: 'https://twitter.com/ogolaevance5' },
//           { icon: <FaEnvelope />, link: 'mailto:ogolaevance5@gmail.com' },
//           { icon: <FaWhatsapp />, link: 'https://wa.me/+254799457182' }
//         ].map((social, index) => (
//           <motion.a
//             key={index}
//             href={social.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ y: -5 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             {social.icon}
//           </motion.a>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaEnvelope,
  FaWhatsapp,
  FaCloud,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-section" id="home">
      {/* Hero Section */}
      <div className="text-box" data-aos="fade-up">
        <h1>Welcome to My Portfolio</h1>
        <p className="intro-text">
          Hi, I'm Evance Ogola, an Electrical Engineer, Software, and Blockchain Developer based in Malindi, Kenya.
          Discover my expertise in Ethereum, ICP, Aptos, Sui, Solidity, Rust, TypeScript, Move, and Motoko.
        </p>
        <div className="button-wrapper">
          <Link to="/about">
            <Button variant="primary">Learn More About Me</Button>
          </Link>
        </div>
      </div>

      {/* Skills & Services Section */}
      <div className="skills-services" data-aos="fade-right">
        {[...Array(4)].map((_, index) => (
          <div className="gradient-border" key={index}>
            <div className="icon-card">
              {index === 0 && <FaCode />}
              {index === 1 && <FaDatabase />}
              {index === 2 && <FaMobileAlt />}
              {index === 3 && <FaCloud />}
              <h4>
                {[
                  'Blockchain Development',
                  'Smart Contract Auditing',
                  'Decentralized Applications',
                  'Cloud Solutions',
                ][index]}
              </h4>
              <p>
                {[
                  'I specialize in building secure and scalable blockchain applications using Ethereum, ICP, Aptos, and Sui.',
                  'Experienced in auditing smart contracts written in Solidity, Move, and Rust for vulnerabilities.',
                  'Creating decentralized applications (dApps) that leverage blockchain technology for transparency and trust.',
                  'Building and deploying applications on cloud platforms like AWS and Azure for optimal performance and scalability.',
                ][index]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Blockchain Specialization Section */}
      <div className="blockchain-section" data-aos="fade-left">
        <h2>My Blockchain Expertise</h2>
        <ul className="blockchain-list">
          <li>
            <strong>Ethereum:</strong> Smart contract development using Solidity.
          </li>
          <li>
            <strong>ICP (Internet Computer):</strong> Building dApps with Motoko.
          </li>
          <li>
            <strong>Aptos & Sui:</strong> Developing efficient blockchain solutions using Move.
          </li>
          <li>
            <strong>Rust & TypeScript:</strong> Crafting robust backend and frontend systems.
          </li>
        </ul>
      </div>

      {/* Social Links Section */}
      <div className="social-links" data-aos="fade-up">
        {[
          { icon: <FaGithub />, link: 'https://github.com/ogola5' },
          { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/ogola-evance-51a30a1bb' },
          { icon: <FaTwitter />, link: 'https://twitter.com/ogolaevance5' },
          { icon: <FaEnvelope />, link: 'mailto:ogolaevance5@gmail.com' },
          { icon: <FaWhatsapp />, link: 'https://wa.me/+254799457182' },
        ].map((social, index) => (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            data-aos="zoom-in"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;