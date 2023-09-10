import React, { useState, useEffect } from "react";
import "./Ball.css";
import { useNavigate } from "react-router-dom";
function Ball({ padpos, ballPosHandler, setV, setH, hor, ver }) {
  const [position, setPosition] = useState({ x: 10, y: 30 });
  const navigate = useNavigate();
  const [mycount, setMycount] = useState(0);
  const moveBall = () => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      x: prevPosition.x + hor,
      y: prevPosition.y + ver,
    }));
  };
  useEffect(() => {
    const intervalId = setInterval(moveBall, 15);
    return () => {
      clearInterval(intervalId);
    };
  }, [hor, ver]);

  useEffect(() => {
    if (position.x > 100 || position.x < 0) {
      // Reverse horizontal direction
      setH();
    }
    if (position.y > 90) {
      setV(); // Reverse vertical direction
    }
    if (position.y < 5) {
      navigate("/end");
    }
    if (padpos <= position.x && position.x <= padpos + 25 && position.y < 8) {
      setV();
    }
    ballPosHandler(position);
  }, [position]);
  return (
    <div
      className="ball"
      style={{ left: `${position.x}vw`, bottom: `${position.y}vh` }}
    ></div>
  );
}

export default Ball;
