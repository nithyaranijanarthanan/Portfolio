import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-content">
        {/* Project Card */}
        <div className="project-card horizontal">
          <img src="/pic1.jpg" alt="Frontend Food App" className="project-img" />
          <div className="project-info">
            <h4>Frontend Food App</h4>
            <p>
              A clean and responsive frontend food application built with React.js, providing
              smooth navigation and user-friendly design for exploring food items.
            </p>
            <div className="project-buttons">
              <a
                href="https://github.com/nithyaranijanarthanan"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                <FaGithub /> Code
              </a>
              <a
                href="#"
                className="project-tech"
              >
                React.js
              </a>
            </div>
          </div>
        </div>

        {/* Another Project Card */}
        <div className="project-card horizontal">
          <img src="/pic2.jpg" alt="MERN Food Delivery App" className="project-img" />
          <div className="project-info">
            <h4>MERN Stack Food Delivery App</h4>
            <p>
              Fullstack food delivery app using MongoDB, Express, React, Node.js, featuring secure
              authentication and order management with smooth frontend-backend integration.
            </p>
            <div className="project-buttons">
              <a
                href="https://github.com/nithyaranijanarthanan"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                <FaGithub /> Code
              </a>
              <a
                href="#"
                className="project-tech"
              >
                MERN Stack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
