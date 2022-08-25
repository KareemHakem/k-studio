import React from "react";
import { Button, TextField } from "@mui/material";
import Input from "../../commons/Input";
import "./style.css";

export default function CreateCardForm({
  user,
  setNewImage,
  setNewDate,
  setNewLink,
  setNewName,
  setNewDescription,
  handleCreateCard,
}) {
  return (
    <div className="card-Create-form-container">
      <div className="card-form-container">
        <h2>{`Create your Card ${user?.user?.email} `}</h2>
        <Input
          color="success"
          className="input-field"
          width={300}
          placeholder="image"
          onChange={(e) => {
            setNewImage(e.target.value);
          }}
        />

        <Input
          color="success"
          className="input-field"
          width={300}
          placeholder="Date"
          onChange={(e) => {
            setNewDate(e.target.value);
          }}
        />
        <Input
          color="success"
          className="input-field"
          width={300}
          placeholder="location"
          onChange={(e) => {
            setNewLink(e.target.value);
          }}
        />
        <Input
          color="success"
          className="input-field"
          width={300}
          placeholder="name"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <Input
          color="success"
          className="input-field"
          width={300}
          placeholder="description"
          onChange={(e) => {
            setNewDescription(e.target.value);
          }}
        />
        <Button
          onClick={handleCreateCard}
          variant="contained"
          className="button-Create-form"
        >
          Create
        </Button>
      </div>
    </div>
  );
}
