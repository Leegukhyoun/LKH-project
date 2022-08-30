import { useState, useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import "./App.scss";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";

const DIVIDER_HEIGHT = 5;

function App() {
  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          //현재 4페이지
          console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          //현재 5페이지
          console.log("현재 5페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT * 5,
            left: 0,
            behavior: "smooth",
          });
        }  else {
          // 현재 6페이지
          console.log("현재 6페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT * 5,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          //현재 4페이지
          console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          //현재 5페이지
          console.log("현재 5페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // 현재 6페이지
          console.log("현재 6페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={outerDivRef} className="outer">
      <Fade cascade duration={1000}>
        <Page1/>
      </Fade>
      <div className="divider"></div>
      <Fade cascade duration={1000} delay={500}>
        <Page2/>
      </Fade>
      <div className="divider"></div>
      <Fade cascade duration={1000} delay={500}>
        <Page3/>
      </Fade>
      <div className="divider"></div>
      <Fade cascade duration={1000} delay={500}>
        <Page4/>
      </Fade>
      <div className="divider"></div>
      <Fade cascade duration={1000} delay={500}>
        <Page5/>
      </Fade>
      <div className="divider"></div>
      <Fade cascade duration={1000} delay={500}>
        <Page6/>
      </Fade>
    </div>
  );
}

export default App;