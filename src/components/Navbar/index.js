import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import NavbarMenu from "../NavbarMenu";
import NavbarRightSide from "../NavbarRightSide";

import "./style.css";

export default function Navbar({ logout, user }) {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="ibr_navbar">
      <div className="ibr_navbar_sides_container">
        <div className="ibr_navbar_left_container">
          <Link className="ibr_navbar_logo_link" to="/">
            STOKAR
          </Link>
          <div className="ibr_center_link_navbar">
            <Link className="ibr_navbar_link_Portfolio" to="/">
              Portfolio
            </Link>
            <Link className="ibr_navbar_link" to="about">
              ABOUT
            </Link>
            <Link className="ibr_navbar_link" to="photo">
              PHOTO
            </Link>
          </div>
        </div>
        {user?.email ? (
          <div>
            <Button className="navbar-btn-user" onClick={handleToggle}>
              {user?.email}
            </Button>
          </div>
        ) : (
          <NavbarRightSide />
        )}
      </div>
      <div className="ibr_menu_display">
        {displayMenu && <NavbarMenu logout={logout} />}
      </div>
    </div>
  );
}
