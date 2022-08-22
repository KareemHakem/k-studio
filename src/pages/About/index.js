import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AboutInformation from "../../components/AboutInformation";
import GalleryPhotosSlider from "../../components/GalleryPhotosSlider";
import "./style.css";

export default function About({ cards }) {
  const scrollRef = useRef(null);
  const navigation = useNavigate();

  const handleNavigationToPhotos = () => {
    navigation("/photo");
    window.scroll({
      top: document.body.offsetTop,
      behavior: "smooth",
    });
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="ibr_about_page">
      <AboutInformation />

      <GalleryPhotosSlider
        handleNavigationToPhotos={handleNavigationToPhotos}
        scroll={scroll}
        scrollRef={scrollRef}
        cards={cards}
      />
    </div>
  );
}
