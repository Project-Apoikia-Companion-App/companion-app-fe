import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp, addTime }) => {
    const timer = useTimer({ expiryTimestamp, autoStart: false });

    const [repeatFlag, setRepeatFlag] = useState(false);

    return (
        <React.Fragment>
            <div style={{ textAlign: 'center' }}>
                <h1>react-timer-hook </h1>
                <p>Timer Demo</p>
                <div style={{ fontSize: '100px' }}>
                    {timer.minutes > 0 && <span>{timer.minutes}:</span>}
                    <span>{timer.seconds.toString().padStart(2, "0")}</span>
                </div>
                <p>{timer.isRunning ? 'Running' : 'Not running'}</p>
                <p>{repeatFlag ? "Repeating" : "Not repeating"}</p>
                <button onClick={timer.start}>Start</button>
                <button onClick={() => {
                    const time = new Date();
                    timer.restart(time, false);
                }}>Reset</button>
                <button onClick={() => setRepeatFlag(!repeatFlag)}>Repeat</button>
            </div>
            <div style={{ textAlign: "center" }}>
                <button onClick={() => addTime(10)}>+10s</button>
                <button onClick={() => addTime(15)}>+15s</button>
                <button onClick={() => addTime(30)}>+30s</button>
            </div>
        </React.Fragment>
    );
};

export default Timer;