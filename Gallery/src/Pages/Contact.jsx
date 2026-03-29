import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      <div className="contact-container">

        {/* LEFT IMAGE */}
        <div className="contact-image">
          <img 
            src="https://i.pinimg.com/736x/05/9c/ed/059ceda4262fd75b51bd65bf129faa89.jpg"
            alt="contact"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="contact-content">
          <h1>Get In Touch</h1>
          <p>Have questions or want to collaborate? Send us a message ✨</p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

    </div>
  );
}

export default Contact;