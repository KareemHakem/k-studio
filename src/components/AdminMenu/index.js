import { Button } from "@mui/material";
import React from "react";
import "./style.css";

export default function AdminMenu({ logout }) {
  return (
    <div className=" menu_container">
      <div className=" menu_container scale-up-center">
        <ul className="dropdown_menu">
          <li className="dropdown_item-1">
            <Button className="navbar-btn-user" onClick={logout}>
              logout
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
