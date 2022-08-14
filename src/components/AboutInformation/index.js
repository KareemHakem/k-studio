import React from "react";

import Image from "../../assets/images/ibrahim.jpg";

import "./style.css";

export default function AboutInformation() {
  return (
    <div className="ibr_about_information_container">
      <div className="ibr_description_information_left_side">
        <div className="ibr_text_hed_description">
          <h3>MY MISSION</h3>
        </div>

        <h1> HELLO! My Name Is Ibrahim Omar </h1>

        <div className="ibr_text_description">
          <p>
            Confident and dedicated photographer with experience in both
            professional and freelance photography
          </p>
        </div>
        <div className="ibr_text_description">
          <p>
            Holds nearly 5 years of working experience with great variety in
            order to tackle any photography job quickly and effectively
          </p>
        </div>
      </div>
      <div className="ibr_about_information_right_side">
        <img className="ibr_primary_img" src={Image} alt="images" />
        <img className="ibr_secondary_img" src={Image} alt="images" />
      </div>
    </div>
  );
}
