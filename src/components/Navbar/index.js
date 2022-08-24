import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import NavbarMenu from "../NavbarMenu";
import NavbarRightSide from "../NavbarRightSide";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./style.css";

export default function Navbar({ logout, user }) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="ka_navbar">
      <div className="ka_navbar_sides_container">
        <div className="ka_navbar_left_container">
          <Link className="ka_navbar_logo_link" to="/">
            K-STUDIO
          </Link>
        </div>
        <div className="ka_center_link_navbar">
          <Link className="ka_navbar_link_Portfolio" to="/">
            Portfolio
          </Link>
          <Link className="ka_navbar_link" to="about">
            About
          </Link>
          <Link className="ka_navbar_link" to="photo">
            Projects
          </Link>
        </div>
        {user?.email ? (
          <div>
            <Button className="navbar-btn-user" onClick={handleToggle}>
              Menu
            </Button>
          </div>
        ) : (
          <div className="navbar-right-side-container">
            <div className="navbar-right-side-components">
              <NavbarRightSide />
            </div>
            <div>
              <div className="app__navbar-smallscreen">
                <MenuIcon onClick={() => setToggleMenu(true)} />

                {toggleMenu && (
                  <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                    <CloseIcon
                      className="overlay__close"
                      onClick={() => setToggleMenu(false)}
                    />
                    <ul className="app__navbar-smallscreen_links">
                      <li className="p__opensans">
                        <Link className="ka_navbar_link_Portfolio" to="/">
                          Portfolio
                        </Link>
                      </li>
                      <li className="p__opensans">
                        <Link className="ka_navbar_link" to="about">
                          About
                        </Link>
                      </li>
                      <li className="p__opensans">
                        <Link className="ka_navbar_link" to="photo">
                          Projects
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="ka_menu_display">
        {displayMenu && <NavbarMenu user={user} logout={logout} />}
      </div>
    </div>
  );
}
