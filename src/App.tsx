import React, { useEffect, useState } from 'react';
import { Stream } from "xstream";
import './App.css';

interface Props {
    currentTime$: Stream<number>;
}

function App(props: Props) {
    const [current, setCurrent] = useState<number>(0)

    useEffect(() => {
        // On component mount, set up a side effect that subscribes to
        // the stream, and let `setCurrent` be called for new values:
        const sub = props.currentTime$.subscribe({
            next: setCurrent,
        });
        // Unsubscribe on component tear down:
        return () => sub.unsubscribe();
    });

    // Helper function to format time
    const formatTime = (timeInSeconds: number) => {
        let hours = Math.floor(timeInSeconds / 3600);
        let minutes = Math.floor((timeInSeconds % 3600) / 60);
        let seconds = Math.floor(timeInSeconds % 60);

        // Pad hours, minutes, and seconds with leading zeros if necessary
        let hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
        let minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
        let secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${hoursStr}:${minutesStr}:${secondsStr}`;
    }
    return (
    <div className="App">
        <header className="App-header">
        <p>
          Welcome ! This is an example of using streams in React with Hooks.
        </p>

            <time>{formatTime(current)}</time>

        </header>
    </div>
    );
}

export default App;
