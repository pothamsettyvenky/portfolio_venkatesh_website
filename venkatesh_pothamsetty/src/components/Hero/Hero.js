import React from "react";
import "./Hero.css";
import heroImg from "../../assets/Hero.png";

function Hero() {
  return (
    <section className="hero" id = "hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Venkatesh Pothamsetty</span>
        </h1>

        <h3>Full Stack Developer</h3>

        <p>
          I design, develop, and deploy full-stack web applications — delivering
          high-performance, responsive, and scalable digital solutions.
        </p>

        <button className="btn">Let’s Build Together</button>
      </div>

      <div className="hero-image">
        <div className="image-wrapper"></div>
        <img src={heroImg} alt="Venkatesh" />
      </div>
    </section>
  );
}

export default Hero;
