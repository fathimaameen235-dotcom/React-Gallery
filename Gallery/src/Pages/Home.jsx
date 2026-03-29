import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
        <h1>Welcome to My Gallery</h1>
        <p>Explore beautiful images and collections.</p>
        <a href="/gallery" className="btn">Explore Gallery</a>
      </div>

      {/* IMAGE PREVIEW SECTION */}
      <div className="preview">
  <img src="https://i.pinimg.com/736x/29/95/fb/2995fb31782bfe512b70ca473790645b.jpg" alt="nature" />
  <img src="https://i.pinimg.com/1200x/e8/55/6f/e8556fd6235c2eaf365703896e812de8.jpg" alt="city" />
  <img src="https://i.pinimg.com/736x/f8/19/95/f819959cdc2285fa78f842c41f5909ba.jpg" alt="animals" />
</div>

    </div>
  );
}

export default Home;