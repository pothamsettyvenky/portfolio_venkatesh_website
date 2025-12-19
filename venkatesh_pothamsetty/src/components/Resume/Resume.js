import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume-section">

      {/* LEFT COLUMN */}
      <div className="resume-left">
        <h1 className="resume-title">My Resume</h1>

        <p className="resume-intro">
          I’m expanding my skill set in full-stack development. I’m proficient in
          JavaScript, React, Node.js, Express, MongoDB, REST APIs, Deployment (AWS EC2 / Render),
          UI design fundamentals, and building scalable full-stack applications.
        </p>

        <div className="skills-block">
          <h2>Skills</h2>

          <div className="skill">
            <span className="skill-title">React JS</span>
            <p className="skill-desc">
              Build interactive UI using hooks, routing, component architecture and optimized rendering.
            </p>
          </div>

          <div className="skill">
            <span className="skill-title">Node JS</span>
            <p className="skill-desc">
              Create backend services, APIs, middleware and server-side logic.
            </p>
          </div>

          <div className="skill">
            <span className="skill-title">Express JS</span>
            <p className="skill-desc">
              Develop REST APIs, authentication layers, middleware pipelines and routing.
            </p>
          </div>

          <div className="skill">
            <span className="skill-title">MongoDB</span>
            <p className="skill-desc">
              Schema design, indexing, queries and integration with Mongoose ORM.
            </p>
          </div>

          <div className="skill">
            <span className="skill-title">JavaScript</span>
            <p className="skill-desc">
              ES6+, async programming, event-driven logic and DOM manipulation.
            </p>
          </div>

          <div className="skill">
            <span className="skill-title">HTML / CSS</span>
            <p className="skill-desc">
              Semantic markup, responsive layouts, animations and modern styling.
            </p>
          </div>

          <div className="skill">
            <span className="skill-title">REST APIs</span>
            <p className="skill-desc">
              Create API endpoints, JSON processing, integrations and best practices.
            </p>
          </div>

          <div className="skill">
            <span className="skill-title">AWS EC2 / Deployment</span>
            <p className="skill-desc">
              Linux setup, NGINX, PM2, server hosting and domain configuration.
            </p>
          </div>

          <div className="skill">
            <span className="skill-title">UI / UX Basics</span>
            <p className="skill-desc">
              User flows, wireframes, Figma usage and usability testing.
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="resume-right">

        <div className="resume-block">
          <h2>Education</h2>
          <p>
            <strong>May 2024 – December 2025</strong><br />
            Post-Degree Diploma – Web & Mobile App Development<br />
            Langara College, Vancouver, BC
          </p>

          <p>
            <strong>April 2017 – August 2021</strong><br />
            Bachelor of Technology – Computer Science<br />
            KITS, Andhra Pradesh, India
          </p>
        </div>

        <div className="resume-block">
          <h2>Experience</h2>
          <p>
            <strong>February 2021 – December 2025</strong><br />
            Full Stack Developer (JavaScript / MERN)<br />
            Tata Consultancy Services (TCS), India
          </p>

          <p>
            <strong>July 2024 – Present</strong><br />
            Full Stack Developer (JavaScript / MERN)<br />
            Freelancer, India
          </p>
        </div>

        <div className="resume-block">
          <h2>Awards</h2>
          <p>
            <strong>April 2025 – Academic</strong><br />
            Best Design Award – Langara College<br />
            2nd Runner-Up – Langara College
          </p>

          <p>
            <strong>December 2024 – Academic</strong><br />
            Best Technical Award – Langara College
          </p>
        </div>

        <a href="/venkatesh_pothamsetty.pdf" download className="resume-btn">
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default Resume;
