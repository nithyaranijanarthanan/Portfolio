import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-desc">
        I am Nithyarani Janarthanan, an aspiring full stack developer with a Master’s degree in Chemistry and professional experience in civil engineering. I recently completed a full stack development program, gaining proficiency in HTML, CSS, JavaScript, React, and Node.js. I combine analytical thinking with creativity to build innovative, user-friendly web applications.
      </p>
     
     <div className="education-content">
  <div className="education-box">
    <h4>Master of Science</h4>
    <h5>2020 - 2022</h5>
    <p className="education-location">Thiagarajar College of Arts and Science</p>
  </div>
  <div className="education-box">
    <h4>Bachelor of Science</h4>
    <h5>2017 - 2020</h5>
    <p className="education-location">Thiagarajar College of Arts and Science</p>
  </div>
</div>


    </section>
  );
};

export default About;
