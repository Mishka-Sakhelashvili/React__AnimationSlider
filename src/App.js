import React, { useState, useEffect } from "react";
import ReactPageScroller from "react-page-scroller";
import "./App.css";
import FirstScreen from "./pages/FirstPage/FirstPage";
import SecondScreen from "./pages/SecondPage/SecondPage";
import ThirdScreen from "./pages/ThirdPage/ThirdPage";
import FourthScreen from "./pages/FourthPage/FourthPage";
import MainContent from "./pages/MainContent/MainContent";
import SliderNavigation from "./components/SliderNavigation/SliderNavigation";
import { RemoveScroll } from "react-remove-scroll";

function App() {
  const [currentPage, setCurrentPage] = useState(null);
  const [beforePage, setBeforePage] = useState(0);
  const [startAnimation, setStartAnimation] = useState(null);
  const [lockScroll, setLockScroll] = useState(true);

  const blockScrollDown = () => {
    if (currentPage === 3) {
      setLockScroll(false);
    } else {
      setLockScroll(true);
    }
  };
  useEffect(() => {
    blockScrollDown();
  }, [blockScrollDown]);

  const pageOnChangeHandler = (num) => {  
    setCurrentPage(num);
    setStartAnimation(num);
  };

  const onBeforePageScrollHandler = (num) => {
    setBeforePage(num);
    setStartAnimation(num);
  };

  const sliderChangeNavigation = (num) => {
    setCurrentPage(num);
    setStartAnimation(num);
  };

  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <ReactPageScroller
          pageOnChange={pageOnChangeHandler}
          onBeforePageScroll={onBeforePageScrollHandler}
          customPageNumber={currentPage}
          animationTimerBuffer={200}
          animationTimer={1000}
        >
          <FirstScreen startAnimation={startAnimation} />
          <SecondScreen startAnimation={startAnimation} />
          <ThirdScreen startAnimation={startAnimation} />
          <FourthScreen startAnimation={startAnimation} />
        </ReactPageScroller>
        <SliderNavigation
          sliderChange={sliderChangeNavigation}
          currentPage={beforePage}
        />
      </div>
      <RemoveScroll enabled={lockScroll}>
        <MainContent />
      </RemoveScroll>
    </div>
  );
}

export default App;
