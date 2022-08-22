import React from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import Image from "../../assets/images/logo.jpg";
import { Chip } from "@mui/material";

import "./style.css";

export default function ChipAvatar() {
  return (
    <Stack direction="row" spacing={5}>
      <Chip
        className="chip-nav"
        avatar={<Avatar className="avatar-nav" src={Image} alt="ibrahim" />}
        variant="outlined"
      />
    </Stack>
  );
}
