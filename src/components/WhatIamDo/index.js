import React from "react";
import "./style.css";

export default function WhatIamDo() {
  return (
    <div className="what-i-do">
      <h1>What I DO</h1>
      <div className="what-kar-do-container">
        <div className="card-kar-what-do">
          <h2>Responsive websites</h2>
          <p>
            Building Responsive website by React js
            (Html5,Css3,Bootstrap,Javascript...).
          </p>
        </div>
        <div className="card-kar-what-do">
          <h2>React js Development</h2>
          <p>
            Building Responsive website by React js Framework with react Hook
            and router-dom.
          </p>
        </div>
        <div className="card-kar-what-do">
          <h2>Css3 Animation</h2>
          <p>Create amazing sites animation using Css Animation.</p>
        </div>
      </div>
    </div>
  );
}
