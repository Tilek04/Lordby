import React from "react";
import img from "./assets/illustration.png";

function Home() {
  return (
    <div>
      <div>
        <h2>Welcome back</h2>
        <p>Lorby - your personal tutor</p>
        <img className="home_img" src={img} alt="main image" />
        <button>Log Out</button>
      </div>
    </div>
  );
}

export default Home;
