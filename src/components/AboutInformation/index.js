import React from "react";

import Image from "../../assets/images/kareem1.jpg";

import "./style.css";

export default function AboutInformation() {
  return (
    <div className="kar_about_information_container">
      <div className="kar_description_information_left_side">
        <div className="kar_text_hed_description">
          <h3>MY MISSION</h3>
        </div>

        <h1> HELLO! My Name Is Kareem Mohamed </h1>

        <div className="kar_text_description">
          <p>
            👨 24 <br /> 📞 01203441100 <br />
            💻 self-taught frontend web Developer. 👨‍💻learn to code |
            ☀️JavaScript | ⚛️ React.JS. <br />
            📍Alexandria Egypt
            <br /> #reactjs #javascript #dev #coffee
          </p>
        </div>
        <div className="kar_text_description">
          <p>
            Software developer who is responsible to develop Websites and Mobile
            app using
            <a className="text-box">JavaScript</a>
          </p>
        </div>
      </div>
      <div className="kar_about_information_right_side">
        <img className="kar_primary_img" src={Image} alt="images" />
        <img className="kar_secondary_img" src={Image} alt="images" />
      </div>
    </div>
  );
}
