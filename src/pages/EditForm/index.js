import React, { useState } from "react";

import { doc, updateDoc } from "firebase/firestore";

import EditInputForm from "../../components/EditInputForm";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-config";

export default function EditForm({ user, cards }) {
  const [editImage, setEditImage] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const { id } = useParams();
  const card = cards.filter((card) => card.id === id);

  const handleUpdateCard = async () => {
    const newFields = {
      image: editImage || card.image,
      date: editDate || card.date,
      location: editLocation || card.location,
      name: editName || card.name,
      description: editDescription || card.description,
    };
    const cardDoc = doc(db, "cards", id);
    await updateDoc(cardDoc, newFields);
  };

  return (
    <div>
      <EditInputForm
        user={user}
        handleUpdateCard={handleUpdateCard}
        card={card}
        setEditImage={setEditImage}
        setEditDate={setEditDate}
        setEditLocation={setEditLocation}
        setEditName={setEditName}
        setEditDescription={setEditDescription}
      />
    </div>
  );
}
