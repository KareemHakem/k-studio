import React from "react";
import { useNavigate } from "react-router-dom";

import { Icons } from "../../assets/icons";
import Button from "@mui/material/Button";

import "./style.css";

export default function PhotosContainer({
  card,
  handleDeleteCard,
  user,
  setOpenModal,
}) {
  const navigation = useNavigate();
  return (
    <div className="flex_page">
      <div className="ibr_card_photo_container">
        <img src={card.image} alt="images" />
        <div className="ibr_card_photo_detail_time_data">
          <p>---</p>
          <p>{card.date}</p>
          <p>---</p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icons.LocationOnIcon style={{ marginBottom: 8 }} />
            {card.location}
          </p>
        </div>
        <div className="ibr_line_card" />
        <div className="ibr_card_photo_detail_name">
          <h2>{card.name}</h2>
          <p>{card.description}</p>
        </div>
        <div className="ibr_btn_post">
          <Button
            onClick={() =>
              user ? navigation(`/editCard/${card.id}`) : setOpenModal(true)
            }
            className="ibr_btn_card_Post"
          >
            <Icons.EditIcon style={{ color: "#00adb5", marginRight: 5 }} />
            Edit
          </Button>
          <Button
            onClick={() => handleDeleteCard(card.id)}
            className="ibr_btn_card_Post"
          >
            <Icons.DeleteIcon style={{ color: "#FF0000", marginRight: 5 }} />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
