import React from "react";
import Lottie from "react-lottie";
import animation from "../../assets/Json/arrowAnimation.json";
import animation2 from "../../assets/Json/arrowAnimationButtom.json";
import empty from "../../assets/Json/empty.json";

export const HomeArrowAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };
  return (
    <div className="homePageAnimation">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export const HomeArrowAnimationBottom = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation2,
  };
  return (
    <div className="homePageAnimation">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export const EmptyAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: empty,
  };
  return (
    <div className="homePageAnimation">
      <Lottie options={defaultOptions} />
    </div>
  );
};
