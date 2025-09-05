import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h2 className="home-welcome">Welcome!</h2>
        <p className="home-intro">
          I am an aspiring Full Stack Developer passionate about building modern,
          responsive web applications with React and Node.js.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
<a href="/resume.pdf" download="NithyaJanarthanan_Resume.pdf" className="btn-secondary">
  Download Resume
</a>
        </div>

        <div className="about-stats">
          <div>
            <h4>∞</h4>
            <p>Passion for Learning</p>
          </div>
          <div>
            <h4>20+</h4>
            <p>Tech Stack Tools Explored</p>
          </div>
          <div>
            <h4>100%</h4>
            <p>Adaptability & Quick Learning</p>
          </div>
          <div>
            <h4>1.5 Years</h4>
            <p>Professional Experience</p>
          </div>
        </div>
      </div>

      {/* Decorative wave bubbles */}
      <div className="bubble small"></div>
      <div className="bubble medium"></div>
      <div className="bubble large"></div>
      <div className="bubble small"></div>
      <div className="bubble medium"></div>
      <div className="bubble large"></div>
    </section>
  );
};

export default Home;
