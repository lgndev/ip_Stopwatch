import { useState, useRef } from "react";

const App = () => {
  // build a stopwatch app
  // start | pause | reset buttons
  // display elapsed time in seconds
  const [elapsedTime, setElapsedTime] = useState(0);
  const elapsedTimeInterval = useRef<number | null>(null);

  // start
  const startHandler = () => {
    if (elapsedTimeInterval.current != null) {
      clearInterval(elapsedTimeInterval.current);
    }
    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        return (prev += 1);
      });
    }, 1000);

    elapsedTimeInterval.current = interval;
  };

  // stop
  const stopHandler = () => {
    if (elapsedTimeInterval.current != null) {
      clearInterval(elapsedTimeInterval.current);
      elapsedTimeInterval.current = null;
    }
  };

  //reset
  const resetHandler = () => {
    if (elapsedTimeInterval.current != null) {
      clearInterval(elapsedTimeInterval.current);
      elapsedTimeInterval.current = null;
    }
    setElapsedTime(0);
  };

  return (
    <>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <div>{elapsedTime}</div>
    </>
  );
};

export default App;
