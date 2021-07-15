import './App.css';
import React, { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const time = Date.now() + 1000;
  const [endTimestamp, setEndTimestamp] = useState(time);

  const addTime = (ms) => {
    const time = Date.now() + ms;
    setEndTimestamp(time);
    console.log(endTimestamp);
  }

  return (
    <div className="character container">
      <Timer
        date={endTimestamp}
        addTime={addTime}
      />
      <Timer
        date={endTimestamp}
        addTime={addTime}
      />
      <Timer
        date={endTimestamp}
        addTime={addTime}
      />
      <Timer
        date={endTimestamp}
        addTime={addTime}
      />
    </div>
  );
}

export default App;