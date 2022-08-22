import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase-config";


import PhotosContainer from "../../components/Photos";
import AuthModal from "../../components/AuthModal";
import { Button } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { EmptyAnimation } from "../../components/Animation";

export default function Profile({ user, cards }) {
  const [openModal, setOpenModal] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  console.log(user);

  const navigation = useNavigate();

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      setOpenModal(!openModal);
    } catch (error) {
      console(error);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      setOpenModal(!openModal);
    } catch (error) {
      console(error);
    }
  };

  const handleNavigationCreateCard = () => {
    user ? navigation("/createCard") : setOpenModal(true);
  };

  const handleNavigationLoginModal = () => {
    setOpenModal(true);
  };

  const handleDeleteCard = async (id) => {
    const cardDoc = doc(db, "cards", id);
    user ? await deleteDoc(cardDoc) : setOpenModal(true);
  };

  const handToggleModal = () => setOpenModal(!openModal);

  return (
    <div>
      {user ? (
        <div className="Create-card">
          <h2> To create New Post Click </h2>
          <Button onClick={handleNavigationCreateCard} className="create-btn">
            Create Card
          </Button>
        </div>
      ) : null}

      {cards.length === 0 ? (
        <div className="no-cards-page">
          {user ? null : (
            <div className="login-Create-card">
              <h2> Login To Create Post </h2>
              <Button
                onClick={handleNavigationLoginModal}
                className="login-btn"
              >
                Login
              </Button>
            </div>
          )}

          <div className="empty-animation">
            <EmptyAnimation />
          </div>
          <h1>No Posts Yet</h1>
        </div>
      ) : (
        <div>
          {cards?.map((card) => (
            <PhotosContainer
              key={card.id}
              card={card}
              handleDeleteCard={handleDeleteCard}
              user={user}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
      )}

      <AuthModal
        setRegisterEmail={setRegisterEmail}
        setRegisterPassword={setRegisterPassword}
        setLoginEmail={setLoginEmail}
        setLoginPassword={setLoginPassword}
        handleCloseModal={handToggleModal}
        openModal={openModal}
        register={register}
        login={login}
      />
    </div>
  );
}
