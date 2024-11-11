import { useRef, useState } from "react"

export default function TimerRef() {
    const [timer, setTimer] = useState(0)
    // better approach because we are not displaying the interval id on UI so it is good to store it in the ref
    const timerRef = useRef(null)

    function startTimer() {
        const id = setInterval(() => {
            setTimer(t => t + 1)
        }, 1000)

        // doesn't trigger re-render
        timerRef.current = id
    }
    function stopTimer() {
        clearInterval(timerRef.current)
        timerRef.current = null
    }
    return (
        <div>
            <div>Timer: {timer}</div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>

        </div>
    )

}