import React from "react";
import "./styles.css";

function LoadingAnimation() {
  return (
    <div className="LoadingBody">
      <div className="LoadingLoader">
        <span></span>
        <span></span>
        <span></span>
        <h2>Loading...</h2>
      </div>
    </div>
  );
}

export default LoadingAnimation;
