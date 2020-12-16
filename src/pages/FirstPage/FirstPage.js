import React from "react";
import Image from "../../assets/image/firstPage.jpg";
import TextAnimation from "../../components/TextAnimation/TextAnimation";

const FirstPage = (props) => {
  let content = null;

  if (props.startAnimation === 0) {
    content = (
      <div>
        <div className="SlideInUp">
          <TextAnimation delay={0}>
            <h1>FiTness</h1>
          </TextAnimation>
        </div>
        <div className="SlideInUp" style={{ marginBottom: "30px" }}>
          <TextAnimation delay={0}>
            <h1>MEETS DESIGN</h1>
          </TextAnimation>
        </div>
        <TextAnimation delay={200}>
          <h2>
            {" "}
            A <em style={{ margin: "0 20px 0 10px" }}>project</em> of Adriano
            Design and Elite{" "}
          </h2>
        </TextAnimation>
      </div>
    );
  }

  return (
    <div className="SliderPageContainer FirstPageContainer">
      <img
        src={Image}
        alt="BG"
        className="ImageBG"
        style={{ width: "100%", opacity: "0.5", position: "absolute" }}
      />
      {content}
    </div>
  );
};

export default FirstPage;
