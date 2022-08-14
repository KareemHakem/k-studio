import React from "react";
import Typical from "react-typical";

import { HomeArrowAnimation } from "../Animation";
import Image from "../../assets/images/ibrahim5.jpg";
import Images from "../../assets/images/pexel1.jpg";

import CardPhotos from "../CardPhotos";

import "./style.css";


export default function Header({ handleNavigationToAbout }) {
  return (
    <div className="flex_page">
      <div className="ibr_header_sides_container">
        <div className="ibr_left_side">
          <img src={Image} alt="ibr_image" />
        </div>
        <div className="ibr_right_side">
          <h1 className="ibr_left_side_name"> ibrahim stokar </h1>
          <div className="ibr_right_side_text ml12">
            <Typical
              steps={[
                "I am get all your happy moments and frozen it in photo",
                9000,
              ]}
              wrapper="h1"
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
                wrapper="h4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ibr_animation_header_page">
        <HomeArrowAnimation />
      </div>
      <div>
        <CardPhotos
          image={Images}
          location="Cairo,Egypt"
          name="Ibrahim photo"
          description="Ibrahim Omar photo to camera shotting him in local place whit cam"
          handleNavigationToAbout={handleNavigationToAbout}
        />
      </div>
    </div>
  );
}
