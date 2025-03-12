import React from "react";
import "./WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="what-i-do">
      <h1 className="section-title">What I Do</h1>
      <div className="content">
        <h2 className="subtitle">Web Development</h2>
        <p className="description">
          Using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> with pre-processors and build tools such as Webpack and Babel.
        </p>
      </div>
    </div>
  );
};

export default WhatIDo;