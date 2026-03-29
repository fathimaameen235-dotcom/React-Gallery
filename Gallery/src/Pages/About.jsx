import React from "react";
import "./About.css";
import panda from "../assets/panda.png"; // correct path

function About() {
  return (
    <div className="about">
      <h1>About Us 🐼</h1>

      {/* 🐼 Panda Image */}
      <img src={panda} alt="panda" className="panda-img" />

      <p>
        Welcome to <b>EchoFrame</b>! A place where beautiful moments come alive
        through images. From nature to creative vibes, everything is here.
      </p>

      <p>
        We focus on simple design, smooth experience, and a visually pleasing
        gallery for everyone to enjoy.
      </p>

      <p>
        Built using React ❤️ — this project highlights clean UI and modern layout.
      </p>
    </div>
  );
}

export default About;