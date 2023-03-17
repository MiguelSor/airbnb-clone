import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="photo-grid">
        <img src="../images/photo-grid.png" className="hero-photo" />
      </div>
      <div className="hero-info">
        <h2 className="hero-title">Online Experiences</h2>
        <h4 className="hero-p">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h4>
      </div>
    </div>
  );
}
