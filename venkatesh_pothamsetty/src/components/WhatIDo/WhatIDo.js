import React from "react";
import "./WhatIDo.css";

function WhatIDo() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h1>
          All kind of coding
          <br />
          solution.
        </h1>
         <a href="#projects" className="explore-btn">
          Explore All →
        </a>
      </div>

      <div className="services-container">
        {/* CARD 1 – FRONTEND */}
        <div className="service-card card-primary">
          <div className="icon">🎨</div>
          <h2>
            Front-End
            <br />
            Development
          </h2>
          <p>Building responsive and user-focused interfaces</p>

          <ul>
            <li>✔ React.js & JavaScript (ES6+)</li>
            <li>✔ HTML5, CSS3, Responsive Design</li>
            <li>✔ Component-based UI Architecture</li>
            <li>✔ Performance & Accessibility</li>
          </ul>

        </div>

        {/* CARD 2 – BACKEND */}
        <div className="service-card card-light">
          <div className="icon">⚙️</div>
          <h2>
            Back-End
            <br />
            Development
          </h2>
          <p>Creating scalable and secure server-side systems</p>

          <ul>
            <li>✔ Node.js & Express.js</li>
            <li>✔ REST APIs & Authentication</li>
            <li>✔ MongoDB & Database Design</li>
            <li>✔ API Integration & Data Handling</li>
          </ul>

         
        </div>

        {/* CARD 3 – TOOLS */}
        <div className="service-card card-soft">
          <div className="icon">🚀</div>
          <h2>
            Tools &
            <br />
            Deployment
          </h2>
          <p>Efficient development workflow and cloud deployment</p>

          <ul>
            <li>✔ Git, GitHub & Version Control</li>
            <li>✔ Vercel, Netlify & Cloud Hosting</li>
            <li>✔ API Testing & Debugging</li>
            <li>✔ CI/CD & Performance Optimization</li>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
