import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CardDataService from "../../services/cardServices";
import CreateCardForm from "../../components/CreateCardForm";

export default function CreateCard(user) {
  const [newImage, setNewImage] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const navigation = useNavigate();

  const handleCreateCard = async () => {
    await CardDataService.addCards({
      image: newImage,
      date: newDate,
      link: newLink,
      name: newName,
      description: newDescription,
    });

    navigation("/photo");
  };

  return (
    <div>
      <CreateCardForm
        user={user}
        setNewImage={setNewImage}
        setNewDate={setNewDate}
        setNewLink={setNewLink}
        setNewName={setNewName}
        setNewDescription={setNewDescription}
        handleCreateCard={handleCreateCard}
      />
    </div>
  );
}
