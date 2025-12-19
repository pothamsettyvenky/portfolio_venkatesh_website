import React, { useState } from "react";
import "./Contact.css";
import connectImg from "../../assets/connect.png"; // keep your image path

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Let's Connect");
    const body = encodeURIComponent(
      `Hi Venkatesh,\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n\n` +
      `Looking forward to connecting.\n`
    );

    window.location.href =
      `mailto:pothamsettyvenky003@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      {/* TOP CENTER */}
      <div className="contact-header">
        <h2>Anything in mind?</h2>
        <h1>Let’s Talk</h1>
        <p>
          Have an opportunity, idea, or role in mind?  
          Leave a message and I’ll get back to you.
        </p>
      </div>

      {/* CONTENT */}
      <div className="contact-content">
        {/* LEFT IMAGE */}
        <div className="contact-image">
          <img src={connectImg} alt="Let's talk" />
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Your Name</label>
          </div>

          <div className="field">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Your Email</label>
          </div>

          {/* ✅ MESSAGE BOX */}
          <div className="field textarea-field">
            <textarea
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label>Your Message</label>
          </div>

          <button type="submit">
            Let’s Connect <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
