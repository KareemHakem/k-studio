import { Button } from "@mui/material";
import React from "react";
import Input from "../../commons/Input";
import "./style.css";

export default function EditInputForm({
  user,
  handleUpdateCard,
  setEditImage,
  setEditDate,
  setEditLocation,
  setEditName,
  setEditDescription,
  card,
}) {
  return (
    <div className="card-edit-form-container">
      <div className="card-form-container">
        <h2>{`Edit your Card ${user?.email} `}</h2>
        <Input
          className="input-field"
          width={300}
          placeholder="image"
          onChange={(e) => setEditImage(e.target.value)}
        />
        <Input
          className="input-field"
          width={300}
          placeholder="date"
          onChange={(e) => setEditDate(e.target.value)}
        />
        <Input
          className="input-field"
          width={300}
          placeholder="location"
          onChange={(e) => setEditLocation(e.target.value)}
        />
        <Input
          className="input-field"
          width={300}
          placeholder="name"
          onChange={(e) => setEditName(e.target.value)}
        />
        <Input
          className="input-field"
          width={300}
          placeholder="description"
          onChange={(e) => setEditDescription(e.target.value)}
        />
        <Button
          onClick={() => handleUpdateCard(card.id)}
          variant="contained"
          className="button-edit-form"
        >
          Edit
        </Button>
      </div>
    </div>
  );
}
