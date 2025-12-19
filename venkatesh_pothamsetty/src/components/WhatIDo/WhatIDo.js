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
        {/* CARD 1 */}
        <div className="service-card card-primary">
          <div className="icon">⚡</div>
          <h2>
            WordPress & Plugin
            <br />
            Development.
          </h2>
          <p>I’m expert in web & mobile related</p>

          <ul>
            <li>✔ Web Design</li>
            <li>✔ Front-End Coding</li>
            <li>✔ Mobile App Development</li>
            <li>✔ Programming</li>
          </ul>

          <div className="arrow">➜</div>
        </div>

        {/* CARD 2 */}
        <div className="service-card card-light">
          <div className="icon">💻</div>
          <h2>
            Web & Mobile App
            <br />
            Development
          </h2>
          <p>I’m expert in web & mobile related</p>

          <ul>
            <li>✔ Web Design</li>
            <li>✔ Front-End Coding</li>
            <li>✔ Mobile App Development</li>
            <li>✔ Programming</li>
          </ul>

          <div className="arrow">➜</div>
        </div>

        {/* CARD 3 */}
        <div className="service-card card-soft">
          <div className="icon">🎨</div>
          <h2>
            Interface Design &<br />
            Development.
          </h2>
          <p>I’m expert in web & mobile related</p>

          <ul>
            <li>✔ Web Design</li>
            <li>✔ Front-End Coding</li>
            <li>✔ Mobile App Development</li>
            <li>✔ Programming</li>
          </ul>

          <div className="arrow">➜</div>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
