import React, { useRef } from "react";
import Countdown, { zeroPad } from "react-countdown";

const Timer = ({ date, addTime }) => {
    const countdownRef = useRef();

    const start = () => {
        countdownRef.current.start();
    }

    const addFifteen = () => {
        addTime(15000);
        start();
        console.log(countdownRef.current.isCompleted());
    }

    const addThirty = () => {
        addTime(30000);
        start();
    }

    const addSixty = () => {
        addTime(60000);
        start();
    }

    const renderer = ({ minutes, seconds }) => {
        return (
            <div style={{ textAlign: 'center', fontSize: 100 }}>
                <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
            </div>
        )
    }

    return (
        <React.Fragment>
            <Countdown
                date={date}
                renderer={renderer}
                controlled={false}
                ref={countdownRef}
            />
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => countdownRef.current.pause()}>Pause</button>
            </div>
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => addFifteen()}>:15</button>
                <button onClick={() => addThirty()}>:30</button>
                <button onClick={() => addSixty()}>:60</button>
            </div>
        </React.Fragment >
    );
};

export default Timer;