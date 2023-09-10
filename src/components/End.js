import React from "react";
import "./End.css";
import ScoreCard from "./ScoreCard";
import { useNavigate } from "react-router-dom";
function End({ score, reset }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
    reset();
  };
  return (
    <div className="main">
      <ScoreCard score={score} />
      <div className="end">End</div>
      <button className="button" onClick={clickHandler}>
        Restart
      </button>
    </div>
  );
}

export default End;
