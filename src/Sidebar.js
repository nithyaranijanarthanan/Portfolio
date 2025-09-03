import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaHome,
  FaUser,
  FaEnvelope,
  FaWhatsapp,
  FaCode,
  FaBriefcase,
  // FaDownload,
  FaProjectDiagram
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="data:image/jpeg;base64,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" alt="Profile" className="profile-img" />
      <h2 className="profile-name">Nithyarani Janarthanan</h2>
      <div className="social-icons">
    <a href="https://www.instagram.com/nithyaarani/profilecard/?igsh=MTVpaXdrcHdwNGZ3cg=="><FaInstagram /></a>    
       <a href="https://github.com/nithyaranijanarthanan"><FaGithub /></a> 
       <a href="https://www.linkedin.com/in/nithya-rani-j-645a6b237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a> 
       <a href="Https://wa.me/919361618502? text"><FaWhatsapp /> </a>

      </div>
      <nav className="nav-menu">
        <a href="#home"><FaHome /> Home</a>
        <a href="#about"><FaUser /> About</a>
        <a href="#skills"><FaCode /> Skills</a>
        <a href="#experience"><FaBriefcase /> Experience</a>
          <a href="#projects"><FaProjectDiagram /> Projects</a>
        <a href="#contact"><FaEnvelope /> Contact</a>
      </nav>
       {/* <div className="download-resume">
        <a href="/resume.pdf" download>
          <button className="resume-btn"><FaDownload /> Download Resume</button>
        </a>
      </div> */}
    </div>
  );
};

export default Sidebar;
