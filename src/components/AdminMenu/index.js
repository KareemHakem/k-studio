import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function AdminMenu({ logout, user }) {
  return (
    <div className="menu_container">
      <div className="menu_container scale-up-center">
        <ul className="dropdown_menu">
          <li className="dropdown_item-1">
            <Link className="menu-btn-user-menu" to="/">
              Portfolio
            </Link>
            <Link className="menu-btn-user-menu" to="about">
              About
            </Link>
            <Link className="menu-btn-user-menu" to="photo">
              Projects
            </Link>

            <Link to="/" className="menu-btn-user" onClick={logout}>
              logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
