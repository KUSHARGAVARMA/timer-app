import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    if (!timerId) {
      const newTimerId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);

      setTimerId(newTimerId);
    }
  };

  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  const resetTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
    setSeconds(0);
    setMinutes(0);
  };

  // Update the minutes whenever seconds reach 60
  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes(prevMinutes => prevMinutes + 1);
    }
  }, [seconds]);

  return (
    <>
      <h1>Timer App</h1>
      <button onClick={startTimer}>Start</button>
      <p>Minutes: {minutes}</p>
      <p>Seconds: {seconds}</p>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};

export default Timer;
