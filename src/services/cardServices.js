import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";

const cardCollectionRef = collection(db, "cards");

class CardDataService {
  addCards = (newCard) => {
    return addDoc(cardCollectionRef, newCard);
  };

  updateCard = (id, updatedCard) => {
    const cardDoc = doc(db, "cards", id);
    return updateDoc(cardDoc, updatedCard);
  };

  deleteBook = (id) => {
    const cardDoc = doc(db, "cards", id);
    return deleteDoc(cardDoc);
  };

  getAllCards = () => {
    return getDocs(cardCollectionRef);
  };

  getBook = (id) => {
    const cardDoc = doc(db, "cards", id);
    return getDoc(cardDoc);
  };
}

export default new CardDataService();
