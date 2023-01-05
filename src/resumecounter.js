import React, { useState } from "react";

export default function Resumecounter() {
  let [timer, setTimer] = useState(0);
  let [timerRef, setTimerRef] = useState(null);
  let Start = () => {
    setTimerRef(setInterval(() => {
      setTimer(timer++);
    }, 1000));
  };

  let Stop = () => {
    clearInterval(timerRef)
  }

  return (
    <div className="container">
      <h1 className="count">{timer}</h1>
      <div className="button">
      <button onClick={Start} className="btn">START</button>
      <button onClick={Stop} className="btn">STOP</button>
      </div>
      
    </div>
  );
}
