import React from "react";
import "./ScoreCard.css";
function ScoreCard({ score }) {
  return <div className="score_card">Score: {score}</div>;
}

export default ScoreCard;
