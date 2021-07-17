import './App.css';
import React, { useState } from "react";
import Timer from "./components/Timer";

const App = () => {
  const time = Date.now();
  const [endTimestamps, setEndTimestamps] = useState([time, time, time, time]);

  const addTime = (i) => (ms) => {
    const timestamps = [...endTimestamps];
    timestamps[i] = Date.now() + ms;
    setEndTimestamps(timestamps);
  }

  return (
    <div className="player-container">
      <h2>Apoikia</h2>
      <div className="timers">
        <div className="citizen-container">
          <h3 className="citizen">Citizen 1</h3>
          <Timer
            date={endTimestamps[0]}
            addTime={addTime(0)}
          />
        </div>
        <div className="citizen-container">
          <h3 className="citizen">Citizen 2</h3>
          <Timer
            date={endTimestamps[1]}
            addTime={addTime(1)}
          />
        </div>
        <div className="citizen-container">
          <h3 className="citizen">Citizen 3</h3>
          <Timer
            date={endTimestamps[2]}
            addTime={addTime(2)}
          />
        </div>
        <div className="citizen-container">
          <h3 className="citizen">Citizen 4</h3>
          <Timer
            date={endTimestamps[3]}
            addTime={addTime(3)}
          />
        </div>
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default App;