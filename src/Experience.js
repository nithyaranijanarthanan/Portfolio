import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="experience-title">Professional Experience</h2>

      <div className="experience-content">
        <div className="experience-right">
          <div className="experience-box">
            <h4>Junior Executive</h4>
            <h5>2023 - 2025</h5>
            <p className="experience-location">Madurai, Tamil Nadu</p>
            <ul className="experience-list">
              <li>Handled client communications and ensured timely updates on project progress.</li>
              <li>Maintained accurate documentation and followed a detail-oriented approach in all tasks.</li>
              <li>Collaborated closely with team members to coordinate project activities and meet deadlines efficiently.</li>
            </ul>
          </div>

          <div className="experience-box">
            <h4>Next.js Developer Intern</h4>
            <h5>2025 (2 Months)</h5>
            <p className="experience-location">Cron 24 Technologies, Madurai, Tamil Nadu</p>
            <ul className="experience-list">
              <li>Built responsive and dynamic web pages using Next.js for real-time client applications.</li>
              <li>Integrated GraphQL APIs for efficient data fetching and improved performance.</li>
              <li>Worked with Node.js backend for handling API routes and server-side logic.</li>
              <li>Collaborated with the development team to test and deploy components in a production-like environment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
