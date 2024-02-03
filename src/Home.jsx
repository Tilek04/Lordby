import React from "react";
import img from "./assets/illustration.png";
import './home.css'

function Home() {
  return (
    <div>
      <div className="home_container">
        <h2>Welcome back !</h2>
        <p>Lorby - your personal tutor !</p>
        <img className="home_img" src={img} alt="main image" />
        <span>Log Out</span>
      </div>
    </div>
  );
}

export default Home;
