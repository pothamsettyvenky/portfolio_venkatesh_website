// src/App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import Resume from "./components/Resume/Resume"
import Creation from "./components/Creations/Creation"
import "./App.css";
import GalleryCollage from "./components/GalleryCollage/GalleryCollage";
import { galleryPhotos } from "./data/galleryPhotos"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
     <div className="navbar-wrapper">
  <Navbar />
  <div className="underline"></div>
</div>
      <Hero />
      <WhatIDo />
      <Resume />
      <Creation />
      <GalleryCollage photos={galleryPhotos} title = "Gallery"/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
