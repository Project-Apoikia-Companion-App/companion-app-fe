import './App.css';
import React, { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const time = Date.now();
  const [endTimestamp, setEndTimestamp] = useState(time);

  const addTime = (ms) => {
    const time = Date.now() + ms;
    setEndTimestamp(time);
  }

  return (
    <div className="player-container">
      <h2>Apoikia</h2>
      <div className="timers">
        <div className="citizen-container">
          <h3 className="citizen">Citizen 1</h3>
          <Timer
            date={endTimestamp}
            addTime={addTime}
          />
        </div>
        <div className="citizen-container">
          <h3 className="citizen">Citizen 2</h3>
          <Timer
            date={endTimestamp}
            addTime={addTime}
          />
        </div>
        <div className="citizen-container">
          <h3 className="citizen">Citizen 3</h3>
          <Timer
            date={endTimestamp}
            addTime={addTime}
          />
        </div>
        <div className="citizen-container">
          <h3 className="citizen">Citizen 4</h3>
          <Timer
            date={endTimestamp}
            addTime={addTime}
          />
        </div>
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default App;