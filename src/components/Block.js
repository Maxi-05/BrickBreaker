import React, { useEffect } from "react";
import "./Block.css";
import { useState } from "react";
function Block({ ballPos, id, setV, increment }) {
  const blockElement = document.getElementById(id);
  if (blockElement) {
    const { top, left } = blockElement.getBoundingClientRect();
    if (
      ballPos.y >= top / 10 &&
      ballPos.y - 10 <= top / 10 &&
      ballPos.x >= left / 10 &&
      ballPos.x <= left / 10 + 1.5
    ) {
      setV();
      increment();
      blockElement.style.visibility = "hidden";
    }
  }
  return <div id={id} className="block"></div>;
}

export default Block;
