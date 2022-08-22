import React from "react";

import AdminMenu from "../AdminMenu";

import "./style.css";

export default function NavbarMenu({ logout, user }) {
  return (
    <div>
      <AdminMenu user={user} logout={logout} />
    </div>
  );
}
