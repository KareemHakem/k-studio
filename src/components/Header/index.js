import React from "react";
import Typical from "react-typical";

import Image from "../../assets/images/kareem.JPG";
import { HomeArrowAnimationBottom } from "../Animation";
// import Images from "../../assets/images/pexel1.jpg";

import "./style.css";

export default function Header({ handleNavigationToAbout }) {
  return (
    <div className="flex_page">
      <div className="ibr_header_sides_container">
        <div className="ibr_left_side">
          <img src={Image} alt="ibr_image" />
        </div>
        <div className="ibr_right_side">
          <h1 className="ibr_left_side_name"> Kareem Mohamed </h1>
          <div className="ibr_right_side_text ml12">
            <Typical
              steps={[
                "I am get all your happy moments and frozen it in photo",
                9000,
              ]}
             
            />
            <div className="ibr_right_side_small_text">
              <Typical
                steps={[
                  "Success is nothing more than a",
                  1000,
                  "Success is nothing more  than a few simple decisions practiced every day!",
                  800,
                ]}
                loop={Infinity}
                
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ibr_heder_btn_animation">
        <button onClick={handleNavigationToAbout} className="btn_animation">
          Go To Now Me
          <div className="animation_button">
            <HomeArrowAnimationBottom />
          </div>
        </button>
      </div>
    </div>
  );
}
