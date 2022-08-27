import React from "react";
import { Link } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

import Image1 from "../../assets/images/discord.png";
import Image2 from "../../assets/images/Wuzz.png";
import Image3 from "../../assets/images/logo.jpg";
import "./style.css";

export default function Footer({ handleGoTop }) {
  return (
    <div className="kare_footer_container">
      <div className="kare_footer_lift_side_container">
        <a
          className="kare_footer_lift_side_container_link"
          href="https://github.com/KareemHakem"
        >
          <GitHubIcon style={{ color: "#fff", fontSize: 35 }} />
        </a>
        <a
          className="kare_footer_lift_side_container_a"
          href="https://www.instagram.com/kareem_mohamed91/"
        >
          <InstagramIcon style={{ color: "#fff", fontSize: 35 }} />
        </a>
        <a
          className="kare_footer_lift_side_container_a twitter"
          href="https://twitter.com/KareemM42423808"
        >
          <TwitterIcon style={{ color: "#fff", fontSize: 35 }} />
        </a>

        <a
          className="kare_footer_lift_side_container_a facebook"
          href="https://www.facebook.com/profile.php?id=100012833622272"
        >
          <FacebookIcon style={{ color: "#fff", fontSize: 35 }} />
        </a>
      </div>

      <div className="kare_footer_center_side_container">
        <Link className="kare_footer_logo_a" onClick={handleGoTop} to="/">
          <img src={Image3} alt="logo" />
        </Link>
      </div>

      <div className="kare_footer_right_side_container">
        <a
          className="kare_footer_lift_side_container_a"
          href="https://discord.com/channels/@me"
        >
          <img src={Image1} alt="logo" />
        </a>
        <a
          className="kare_footer_lift_side_container_a"
          href="https://wuzzuf.net/profile"
        >
          <img src={Image2} alt="logo" />
        </a>

        <a
          className="kare_footer_lift_side_container_a"
          href="https://www.linkedin.com/in/kareem-mohamed-21a110221/"
        >
          <LinkedInIcon style={{ color: "#fff", fontSize: 35 }} />
        </a>

        <a
          className="kare_footer_lift_side_container_a"
          href="https://mail.google.com/mail/u/0/#inbox"
        >
          <EmailIcon style={{ color: "#fff", fontSize: 35 }} />
        </a>
      </div>
    </div>
  );
}
