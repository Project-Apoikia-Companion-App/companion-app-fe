import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp, autoStart }) => {
    const {
        seconds,
        minutes,
        isRunning,
        start,
        restart,
    } = useTimer({ expiryTimestamp, autoStart, onExpire: () => console.warn('onExpire called') });

    const [repeatFlag, setRepeatFlag] = useState(false);

    const repeat = () => {

    }

    const addTen = () => {
        expiryTimestamp += 10;
    }

    const addFifteen = () => {
        expiryTimestamp += 15;
    }

    const addThirty = () => {
        expiryTimestamp += 30;
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>react-timer-hook </h1>
            <p>Timer Demo</p>
            <div style={{ fontSize: '100px' }}>
                {minutes > 0 && <span>{minutes}:</span>}
                <span>{seconds.toString().padStart(2, "0")}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            <button onClick={start}>Start</button>
            <button onClick={() => {
                // Restarts to 5 minutes timer
                const time = new Date();
                time.setSeconds(time.getSeconds());
                restart(time, false)
            }}>Reset</button>
            <button onClick={repeat}>Repeat</button>
        </div>
    );
};

export default Timer;