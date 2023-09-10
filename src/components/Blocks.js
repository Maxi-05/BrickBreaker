import React from "react";
import Block from "./Block";
import Pad from "./Pad";
import "./Blocks.css";
import Ball from "./Ball";
import { useState, useEffect } from "react";
import ScoreCard from "./ScoreCard";
function Blocks({ score, increment }) {
  const [padPos, setPadPos] = useState(0);
  const padPosHandler = (pos) => {
    setPadPos(pos);
  };
  const [ballPos, setBallPos] = useState({ x: 0, y: 0 });
  const ballposHandler = (ballpos) => {
    setBallPos(ballpos);
  };
  const [horStep, setHorStep] = useState(1);
  const [verStep, setVerStep] = useState(1);
  const setV = () => {
    setVerStep((prevVerStep) => -prevVerStep);
  };
  const setH = () => {
    setHorStep((prevHorStep) => -prevHorStep);
  };
  const ids = [
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "b10",
    "b11",
    "b12",
    "b13",
    "b14",
    "b15",
    "b16",
  ];
  return (
    <>
      <ScoreCard score={score}></ScoreCard>
      <div className="blocks">
        {ids.map((idd) => {
          return (
            <Block
              ballPos={ballPos}
              id={idd}
              setV={setV}
              increment={increment}
            />
          );
        })}
        <Ball
          padpos={padPos}
          ballPosHandler={ballposHandler}
          setV={setV}
          setH={setH}
          hor={horStep}
          ver={verStep}
        />
        <Pad posHandler={padPosHandler} />
      </div>
    </>
  );
}

export default Blocks;
