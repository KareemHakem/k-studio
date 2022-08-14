import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import AOS from "aos";

import { Icons } from "../../assets/icons";
import { HomeArrowAnimationBottom } from "../Animation";

import "aos/dist/aos.css";
import "./style.css";

const trans = (x, y, s) =>
  `perspective(5000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

export default function CardPhotos({
  location,
  description,
  name,
  image,
  handleNavigationToAbout,
}) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 100, friction: 70 },
  }));

  return (
    <div className="ibr_card_photo_detail_container">
      <p className="ibr_card_photo_detail_container_title">
        Location
        <Icons.LocationOnIcon style={{ color: "#00adb5", fontSize: 30 }} />:
        <div style={{ marginLeft: 10 }}>{location}</div>
      </p>
      <div className="ibr_card_photo">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hangout-club.web.app"
          >
            <animated.img
              className="ibr_card_img"
              src={image}
              alt="indacoin Project"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{
                transform: props.xys.interpolate(trans),
              }}
            />
          </a>
        </div>
      </div>
      <div className="ibr_card_photo_detail_container_description">
        <h1 style={{ color: "#00adb5" }}>{name}</h1>
        <h2 style={{ color: "#000", marginTop: 20 }}>{description}</h2>
      </div>
      <div className="ibr_heder_btn_animation">
        <button onClick={handleNavigationToAbout} className="btn_animation">
          Go To Now Me
          <div className="animation_button">
            <HomeArrowAnimationBottom />
          </div>
        </button>
      </div>
    </div>
  );
}
