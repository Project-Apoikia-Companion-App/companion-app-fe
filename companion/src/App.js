import './App.css';
import React, { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const time = Date.now();
  const [endTimestamp, setEndTimestamp] = useState(time);

  const addTime = (ms) => {
    const time = Date.now() + ms;
    setEndTimestamp(time);
    console.log(endTimestamp);
  }

  return (
    <div>
      <Timer
        date={endTimestamp}
        addTime={addTime}
      />
    </div>
  );
}

export default App;