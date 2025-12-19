import React from "react";
import "./Creation.css";

import pedalPatchImg from "../../assets/Pedal_Patch.png";
import streetSightImg from "../../assets/street_sight.png";
import kyntraImg from "../../assets/Kyntra.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Creations() {
  const projects = [
    {
      title: "Pedal Patch",
      subtitle: "Music Pedal Configurator App",
      image: pedalPatchImg,
      url: "#",
    },
    {
      title: "StreetSight",
      subtitle: "Billboard & Outdoor Ads Platform",
      image: streetSightImg,
      url: "https://streetsight.ca",
    },
    {
      title: "Kyntra",
      subtitle: "E-Commerce Fashion Store",
      image: kyntraImg,
      url: "https://kyntra.wmdd.ca",
    },
  ];

  const Card = ({ project, reverse }) => (
    <div className={`creation-card ${reverse ? "reverse" : ""}`}>
      <div className="creation-text">
        <p className="project-type">{project.subtitle}</p>
        <div className = "project-title">
          <h2>{project.title}</h2>

          <a href={project.url} target="_blank" rel="noreferrer">
            <button className="arrow-btn">↗</button>
          </a>
        </div>
      </div>

      <div className="creation-img-wrapper">
        <img src={project.image} alt={project.title} className="creation-img" />
      </div>
    </div>
  );

  return (
    <section className="creations-section" id="projects">
      <div className="creations-header">
        <h1>Explore My Top Creations</h1>
        <a href="#projects" className="explore-btn">
          Explore All →
        </a>
      </div>

      {/* Desktop layout (your current design) */}
      <div className="creations-list desktop-only">
        {projects.map((project, idx) => (
          <Card key={idx} project={project} reverse={idx % 2 === 1} />
        ))}
      </div>

      {/* Mobile swipe layout (Swiper) */}
      <div className="mobile-only">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          loop={true}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <Card project={project} reverse={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Creations;
