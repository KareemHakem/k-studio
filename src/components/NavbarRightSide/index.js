import React from "react";
import ChipAvatar from "../../commons/ChipAvatar";

export default function NavbarRightSide({ handleOpenMenu }) {
  return (
    <div onClick={handleOpenMenu}>
      <ChipAvatar />
    </div>
  );
}
