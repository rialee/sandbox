import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-use-gesture";
import { ReactSVG } from "react-svg";
import "./App.css";

import Bone from "./assets/fish_bone.svg"
import Bin from "./assets/bin_closed.svg"

// const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
// const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

document.addEventListener("gesturestart", (e) => e.preventDefault());
document.addEventListener("gesturechange", (e) => e.preventDefault());

function Game() {
  const binRef = useRef();
  const domTarget = useRef(null);

  const [{ x, y }, setXy] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const [dropRect, setDropRect] = useState({})

  const [drag, setDrag] = useState(false);

  useEffect(

    () => {

      document.onreadystatechange = () => {

        if (binRef.current) {
          // console.log(binRef.current.getBoundingClientRect())
          setDropRect(binRef.current.getBoundingClientRect())
        }
      }
    }, []

  )


  useGesture(
    {
      onDragStart: () => setDrag(true),
      onDrag: ({ offset: [x, y], xy: [ClientX, ClientY] }) => {

        setXy({ x, y })

        // check drop zone
        if (dropRect.width) {


          if ((ClientY >= dropRect.top && ClientY <= dropRect.bottom && ClientX >= dropRect.left && ClientX <= dropRect.right)) {
            console.log("dropped!")

            // setDropState 

            // if correct ()

          }
        }
      },

      onDragEnd: () => setDrag(false),
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <>
      <animated.div
        ref={domTarget}
        className={`${drag ? "dragging" : ""}`}
        style={{ x, y }}
      >
        <ReactSVG src={Bone} />

      </animated.div>
      <img alt="bin" src={Bin} ref={binRef} />
    </>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));
