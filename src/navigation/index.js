import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import AdminEditProfile from "../pages/AdminEditProfile";
import Profile from "../pages/Profile";
import EditForm from "../pages/EditForm";
import CreateCard from "../pages/CreateCard";
import Upload from "../pages/Upload";

import { onAuthStateChanged, signOut } from "firebase/auth";
import CardDataService from "../services/cardServices";
import { auth } from "../firebase-config";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Navigation() {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const data = await CardDataService.getAllCards();
      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCards();
  }, []);

  console.log(cards, "cardssssss");

  console.log(user, "user");

  const logout = async () => {
    await signOut(auth);
    navigation("/");
  };

  const handleGoTop = () => {
    window.scroll({
      top: document.body.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar logout={logout} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About cards={cards} />} />
        <Route path="/photo" element={<Profile user={user} cards={cards} />} />
        <Route path="/adminEditProfile" element={<AdminEditProfile />} />
        <Route
          path="/editCard/:id"
          element={<EditForm cards={cards} user={user} />}
        />
        <Route path="/createCard" element={<CreateCard user={user} />} />
        <Route path="/uploadPhoto" element={<Upload />} />
      </Routes>
      <Footer handleGoTop={handleGoTop} />
    </div>
  );
}
