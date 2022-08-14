import React from "react";

import AdminMenu from "../AdminMenu";

import "./style.css";

export default function NavbarMenu({ logout }) {
  return (
    <div>
      <AdminMenu logout={logout} />
    </div>
  );
}
