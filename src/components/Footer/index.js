import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../assets/icons";
import Logo from "../../assets/images/500logo.png";
import Logo2 from "../../assets/images/shoterlogo.png";
import Logo3 from "../../assets/images/pexels.png";
import "./style.css";

export default function Footer({ handleGoTop }) {
  return (
    <div className="ibr_footer_container">
      <div className="ibr_footer_lift_side_container">
        <a
          className="ibr_footer_lift_side_container_link"
          href="https://www.instagram.com/ibrahimstokar/"
        >
          <Icons.YouTubeIcon style={{ color: "#000", fontSize: 35 }} />
        </a>
        <a
          className="ibr_footer_lift_side_container_a"
          href="https://www.instagram.com/ibrahimstokar/"
        >
          <Icons.InstagramIcon style={{ color: "#000", fontSize: 35 }} />
        </a>
        <a
          className="ibr_footer_lift_side_container_a"
          href="https://www.facebook.com/ibrahimstokar6"
        >
          <Icons.FacebookIcon style={{ color: "#000", fontSize: 35 }} />
        </a>

        <a
          className="ibr_footer_lift_side_container_a"
          href="https://www.instagram.com/ibrahimstokar/"
        >
          <Icons.EmailIcon style={{ color: "#000", fontSize: 35 }} />
        </a>
      </div>

      <div className="ibr_footer_center_side_container">
        <Link className="ibr_footer_logo_a" onClick={handleGoTop} to="/">
          <h3>STOKAR</h3>
        </Link>
      </div>

      <div className="ibr_footer_right_side_container">
        <a
          className="ibr_footer_lift_side_container_a"
          href="https://500px.com/p/ibrahimstokar?view=photos"
        >
          <img src={Logo} alt="logo" />
        </a>
        <a
          className="ibr_footer_lift_side_container_a"
          href="https://www.shutterstock.com/g/ibrahim+srokar?rid=269100424&utm_medium=email&utm_source=ctrbreferral-link"
        >
          <img src={Logo2} alt="logo" />
        </a>

        <a
          className="ibr_footer_lift_side_container_a_pixel"
          href="https://www.pexels.com/@ibrahim-srokar-997345/?onboarding=completed"
        >
          <img src={Logo3} alt="logo" />
        </a>
      </div>
    </div>
  );
}
