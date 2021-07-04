import './App.css';
import React from "react";
import Timer from "./components/Timer"

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds());
  return (
    <div>
      <Timer expiryTimestamp={time} />
    </div>
  );
}

export default App;