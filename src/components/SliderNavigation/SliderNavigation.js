import React from "react";

const SliderNavigation = (props) => {
  let activeOne;
  if (props.currentPage === 0) {
    activeOne = "active";
  }

  let activeTwo;
  if (props.currentPage === 1) {
    activeTwo = "active";
  }

  let activeThree;
  if (props.currentPage === 2) {
    activeThree = "active";
  }

  let activeFour;
  if (props.currentPage === 3) {
    activeFour = "active";
  }

  return (
    <div className="SliderNavigation">
      <div
        onClick={() => props.sliderChange(0)}
        className={`SliderDot ${activeOne}`}
      ></div>
      <div
        onClick={() => props.sliderChange(1)}
        className={`SliderDot ${activeTwo}`}
      ></div>
      <div
        onClick={() => props.sliderChange(2)}
        className={`SliderDot ${activeThree}`}
      ></div>
      <div
        onClick={() => props.sliderChange(3)}
        className={`SliderDot ${activeFour}`}
      ></div>
    </div>
  );
};

export default SliderNavigation;
