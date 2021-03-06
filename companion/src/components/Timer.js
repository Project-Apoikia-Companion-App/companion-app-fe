import React, { useRef } from "react";
import Countdown, { zeroPad } from "react-countdown";
import "../styles/Timer.css";

const Timer = ({ date, addTime }) => {
    const countdownRef = useRef();

    const start = () => {
        countdownRef.current.start();
    }

    const reset = () => {
        addTime(0);
    }

    const addFifteen = () => {
        addTime(15000);
    }

    const addThirty = () => {
        addTime(30000);
    }

    const addSixty = () => {
        addTime(60000);
    }

    const renderer = ({ minutes, seconds }) => {
        return (
            <div onClick={() => start()} style={{ textAlign: 'center', fontSize: 60 }}>
                <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className="timer-container">
                <div className="increment container">
                    <button onClick={() => addFifteen()}>:15</button>
                    <button onClick={() => addThirty()}>:30</button>
                    <button onClick={() => addSixty()}>:60</button>
                </div>
                <Countdown
                    date={date}
                    renderer={renderer}
                    controlled={false}
                    ref={countdownRef}
                    autoStart={false}
                />
                <div className="control container">
                    <button onClick={() => countdownRef.current.pause()}>Pause</button>
                    <button onClick={() => reset()}>Reset</button>
                </div>
            </div>
        </React.Fragment >
    );
};

export default Timer;