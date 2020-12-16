import React, { useState } from "react";
import TextAnimation from "../../components/TextAnimation/TextAnimation";
import Image from "../../assets/image/bike.jpg";

const SecondScreen = (props) => {
  const [zoomOut, setZoomOut] = useState(null);
  const textHoverEnter = () => {
    setZoomOut("BGHover");
  };
  const textHoverLeavse = () => {
    setZoomOut(null);
  };

  let content = null;
  if (props.startAnimation === 1) {
    content = (
      <div
        style={{ cursor: "pointer" }}
        onMouseEnter={textHoverEnter}
        onMouseLeave={textHoverLeavse}
      >
        <div className="SlideInUp">
          <TextAnimation delay={0}>
            <h1>BIKE</h1>
          </TextAnimation>
        </div>
        <TextAnimation delay={200}>
          <h2>
            {" "}
            A new way of <br /> working out <em>indoors</em>
          </h2>
        </TextAnimation>
        <TextAnimation delay={500}>
          <h3>DISCOVER FUORIPISTA BIKE</h3>
          <em>animation</em>
        </TextAnimation>
      </div>
    );
  }
  return (
    <div className="SliderPageContainer">
      <img src={Image} alt="BG" className={`BGImage + ${zoomOut}`} />
      {content}
    </div>
  );
};

export default SecondScreen;
