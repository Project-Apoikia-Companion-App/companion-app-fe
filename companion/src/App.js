import './App.css';
import React from "react";
import Timer from "./components/Timer"

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  return (
    <div>
      <Timer expiryTimestamp={time} autoStart={false} />
    </div>
  );
}

export default App;