import { useState } from "react"

export default function TimerState() {
    const [timer, setTimer] = useState(0)
    // one extra re-render due to storing intervalId in the state
    const [intervalId, setIntervalId] = useState(null)

    function startClock() {
        const id = setInterval(() => {
            setTimer(t => t + 1)
        }, 1000)
        // here goes extra re-render
        setIntervalId(id)
    }
    function stopClock() {
        clearInterval(intervalId)
        // here also one extra re-render
        setIntervalId(null)
    }

    return (
        <div>
            <div>Timer: {timer}</div>
            <button onClick={startClock}>Start</button>
            <button onClick={stopClock}>Stop</button>
        </div>
    )
}