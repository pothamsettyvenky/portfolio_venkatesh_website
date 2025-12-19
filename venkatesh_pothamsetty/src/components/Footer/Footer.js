import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-col">
          <p className="footer-label">Contact</p>
          <a
            href="mailto:pothamsettyvenky003@gmail.com"
            className="footer-email"
          >
            pothamsettyvenky003@gmail.com
          </a>
        </div>

        {/* CENTER */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-col">
          <h4>Follow</h4>
          <ul className="footer-social">
            <li>
              <a
                href="https://www.linkedin.com/in/venkatesh-pothamsetty-546581162/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="social-icon" />
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/pothamsettyvenky"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="social-icon" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Venkatesh Pothamsetty. All rights reserved.
      </div>
    </footer>
  );
}
