import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

// Array of project data for easy management
const projectData = [
  {
  title: "Weather Dashboard | JavaScript",
  description:
    "A responsive web application that provides real-time weather updates for any city using API integration. Features include dynamic UI updates, search functionality, and user-friendly design.",
  imgSrc: "/pic4.jpg",
  githubLink: "https://github.com/nithyaranijanarthanan/weather-app",
  tech: "JavaScript",
},
  {
    title: "Frontend Food App",
    description:
      "A clean and responsive frontend food application built with React.js, providing smooth navigation and user-friendly design for exploring food items.",
    imgSrc: "/pic1.jpg",
    githubLink: "https://github.com/nithyaranijanarthanan/food-app-frontend",
    tech: "React.js",
  },
  {
    title: "MERN Stack Food Delivery App",
    description:
      "Fullstack food delivery app using MongoDB, Express, React, Node.js, featuring secure authentication and order management with smooth frontend-backend integration.",
    imgSrc: "/pic2.jpg",
    githubLink: "https://github.com/nithyaranijanarthanan/e-commerce-food-delivery-app",
    tech: "MERN Stack",
  },

];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-content">
        {projectData.map((project, index) => (
          <div className="project-card horizontal" key={index}>
            <img
              src={project.imgSrc}
              alt={project.title}
              className="project-img"
            />
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  <FaGithub /> Code
                </a>
                <span className="project-tech">{project.tech}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
