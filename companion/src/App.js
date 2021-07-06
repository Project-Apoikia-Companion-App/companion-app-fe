import './App.css';
import React, { useState } from "react";
import Timer from "./components/Timer"

function App() {
  const [endTimestamp, setEndTimestamp] = useState(new Date());

  const addTime = (seconds) => {
    const time = new Date(endTimestamp.getTime());
    time.setSeconds(time.getSeconds() + seconds);
    setEndTimestamp(time);
  }

  return (
    <div>
      <Timer
        expiryTimestamp={endTimestamp}
        addTime={addTime}
      />
    </div>
  );
}

export default App;