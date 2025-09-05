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
      <img src="/pic5.jpeg" alt="profile" className="profile-img"/>
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
