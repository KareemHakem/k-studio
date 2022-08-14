import React from "react";

import { Icons } from "../../assets/icons";

import "./style.css";

export default function GalleryPhotosSlider({
  handleNavigationToPhotos,
  scrollRef,
  scroll,
  cards,
}) {
  return (
    <div className="ibr_gallery_photos_container">
      <div className="ibr_gallery_photos_left_side">
        <h3>OUR SERVICES</h3>
        <h1>What I Do</h1>
        <p>
          This All my Pest Photos Ever that I Take It By My Camera For Most
          Famous Places In Egypt
        </p>
        <button className="ibr_btn_slider" onClick={handleNavigationToPhotos}>
          To All Photos
        </button>
      </div>
      {cards.length === 0 ? (
        <div className="ibr__gallery-images"></div>
      ) : (
        <div className="ibr__gallery-images">
          <div className="ibr__gallery-images_container" ref={scrollRef}>
            {cards.map((image, index) => (
              <div
                className="ibr__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image.image} alt="images" />
              </div>
            ))}
          </div>
          <div className="ibr__gallery-images_arrows">
            <Icons.KeyboardArrowLeftIcon
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <Icons.KeyboardArrowRightIcon
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      )}
    </div>
  );
}
