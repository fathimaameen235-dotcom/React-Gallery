import React from "react";
import "./Gallery.css";

function Gallery() {

  const images = [
  {
    img: "https://i.pinimg.com/736x/2a/98/2a/2a982a8f0b9c709a8df62c848f5adaae.jpg",
    size: "tall",
    title: "Dream Light"
  },
  {
    img: "https://i.pinimg.com/736x/3c/33/8a/3c338a1ed4ec76598ceccebcc728a643.jpg",
    size: "tall",
    title: "Nature Bliss"
  },
  {
    img: "https://i.pinimg.com/736x/4b/93/5b/4b935b56adca42f08a137bb513d005a2.jpg",
    size: "tall",
    title: "Soft Glow"
  },
  {
    img: "https://i.pinimg.com/736x/93/4c/3f/934c3f4f6f4d493af2d2c7b9d8a61785.jpg",
    size: "tall",
    title: "Evening Sky"
  },
  {
    img: "https://i.pinimg.com/736x/8b/b4/3b/8bb43b1d11e9583d92bc03aead114f1e.jpg",
    size: "small",
    title: "Cute Vibes"
  },
  {
    img: "https://i.pinimg.com/1200x/04/55/2f/04552fda0587a3ebd5b5af5990a00bbe.jpg",
    size: "big",
    title: "Golden Hour"
    
  },
  {
    img: "https://i.pinimg.com/1200x/ed/19/88/ed1988b672da48c38561f6ecb221f1b7.jpg",
    size: "big",
    title: "Luxury Mood"
  },
  {
    img: "https://i.pinimg.com/736x/78/55/d3/7855d3050b43fe6b942d000bda519b2f.jpg",
    size: "small",
    title: "Chill Vibes"
  },
  {
    img: "https://i.pinimg.com/736x/b0/bf/7f/b0bf7f79a7dd8af26b4f2954e37f4a9d.jpg",
    size: "tall",
    title: "Cool Frame"
  },
  {
    img: "https://i.pinimg.com/736x/a9/4e/e3/a94ee38318ae528ffab77593752dff45.jpg",
    size: "small",
    title: "Color Splash"
  },
  {
    img: "https://i.pinimg.com/736x/30/11/14/3011141f4b697eedd518685fab3109c6.jpg",
    size: "big",
    title: "Art Mood"
  },
  {
    img: "https://i.pinimg.com/736x/20/5c/34/205c34ca0d070b0bbf8fb0b035a761dd.jpg",
    size: "small",
    title: "Golden Glow"
  },

  // 🔥 NEW ADDITIONS
  {
    img: "https://i.pinimg.com/736x/b5/a3/61/b5a361642f5f2ddffcba39e165cfdc19.jpg",
    size: "small",
    title: "Calm Mood"
  },
  {
    img: "https://i.pinimg.com/736x/c3/4a/cf/c34acf7dae3e6015d25061494333f52b.jpg",
    size: "small",
    title: "Soft Moments"
  },
  
  {
  img: "https://i.pinimg.com/736x/7e/cb/c0/7ecbc0a22809ba6219f08585ff26f745.jpg",
  size: "small",
  title: "Dark Aesthetic"
},

{
  img: "https://i.pinimg.com/736x/da/74/17/da74179da1924043432dcb0136f12b9b.jpg",
  size: "tall",
  title: "Deep Mood"
},

{
  img: "https://i.pinimg.com/736x/3b/27/15/3b2715c0c8c2af6e6d982057e606b812.jpg",
  size: "small",
  title: "Soft Touch"
}

  ];

  return (
    <div className="gallery">
      <h1>EchoAura</h1>

      <div className="masonry">
        {images.map((item, index) => (
          <div className={`item ${item.size}`} key={index}>
            <img src={item.img} alt={item.title} />
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;