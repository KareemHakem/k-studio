import React from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import Image from "../../assets/images/logo1.jpeg";

export default function ChipAvatar() {
  return (
    <Stack style={{}} direction="row" spacing={5}>
      {/* <Chip
        style={{
          height: 40,
          fontWeight: 600,
        }}
        avatar={ */}
      <Avatar
        style={{
          height: 40,
          width: 40,
          borderRadius: "50%",
        }}
        src={Image}
        alt="ibrahim"
      />
      {/* }
        label="Ibrahim Omar"
        variant="outlined"
      /> */}
    </Stack>
  );
}
