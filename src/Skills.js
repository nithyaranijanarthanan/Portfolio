import React, { useEffect, useRef } from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "ReactJs", level: 80 },
  { name: "NextJs", level: 70 },
  { name: "NodeJs", level: 80},
];

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target.querySelector(".skill-bar-fill");
            bar.style.setProperty("--fill-width", `${bar.dataset.level}%`);
            bar.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-box"
            key={index}
            ref={el => (skillRefs.current[index] = el)}
          >
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                data-level={skill.level}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
