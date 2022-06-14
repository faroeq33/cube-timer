import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const toggleTime = () => setRunning(!running);

  const numbersStyle = "text-9xl text-red-500 ";
  const handleKey = (e) => {
    console.log("works");
    toggleTime();
  };

  const getStartorStop = () => {
    if (running) {
      return "stop";
    }
    return "start";
  };

  return (
    <div className="stopwatch text-white text-center">
      <div className="numbers capitalize">
        {/* <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> */}
        <span className={` ${numbersStyle}`}>
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </span>
        <span className={` ${numbersStyle}`}>
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
      <div className="buttons p-4">
        <button className={`capitalize m-4`} type="text" onClick={handleKey}>
          {getStartorStop()}
        </button>
        {/* <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button> */}
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
