import React from "react";
import { Animated } from "react-animated-css";

const TextAnimation = (props) => {
  // fadeInUp
  // slideInUp
  return (
    <Animated
      animationIn="fadeInUp"
      animationInDuration={1000}
      animationInDelay={props.delay}
      animationOut="fadeOut"
    >
      {props.children}
    </Animated>
  );
};

export default TextAnimation;
