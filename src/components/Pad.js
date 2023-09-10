import React, { useState, useEffect } from "react";
import "./Pad.css";

function Pad({ posHandler }) {
  const [position, setPosition] = useState(5);
  const moveBlock = (direction) => {
    const step = 2;
    if (position === 5 && direction === "ArrowLeft") {
      return;
    }
    if (position === 79 && direction === "ArrowRight") {
      return;
    }
    switch (direction) {
      case "ArrowLeft":
        setPosition((prevPosition) => prevPosition - step);
        break;
      case "ArrowRight":
        setPosition((prevPosition) => prevPosition + step);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      moveBlock(event.key);
    };
    posHandler(position);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [position]);

  return <div className="pad" style={{ left: `${position}vw` }}></div>;
}

export default Pad;
