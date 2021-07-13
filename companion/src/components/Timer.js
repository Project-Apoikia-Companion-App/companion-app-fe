import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const Timer = ({ date, addTime }) => {
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
            />
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => addFifteen()}>:15</button>
                <button onClick={() => addThirty()}>:30</button>
                <button onClick={() => addSixty()}>:60</button>
            </div>
            <div style={{ textAlign: 'center' }}>
                <button>Start</button>
            </div>
        </React.Fragment>
    );
};

export default Timer;