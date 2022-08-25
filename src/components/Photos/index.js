import React from "react";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LanguageIcon from "@mui/icons-material/Language";

import Button from "@mui/material/Button";

import "./style.css";

export default function PhotosContainer({
  card,
  handleDeleteCard,
  user,
  setOpenModal,
}) {
  const navigation = useNavigate();
  const handleClick = (link) => {
    window.location.href = link;
  };
  return (
    <div className="flex_page">
      <div className="ibr_card_photo_container">
        <img src={card.image} alt="images" />
        <div className="ibr_card_photo_detail_time_data">
          <p> Date: {card.date}</p>
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
            <EditIcon style={{ color: "#00adb5", marginRight: 5 }} />
            Edit
          </Button>
          <Button
            onClick={() => handleClick(card.link)}
            className="ibr_btn_card_Post"
          >
            <LanguageIcon style={{ color: "#00adb5", marginRight: 5 }} />
            Go Live
          </Button>
          <Button
            onClick={() => handleDeleteCard(card.id)}
            className="ibr_btn_card_Post"
          >
            <DeleteIcon style={{ color: "#FF0000", marginRight: 5 }} />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
