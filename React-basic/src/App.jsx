import { useRef, useState } from "react"

function App() {
  const [timer, setTimer] = useState(0)
  const timerRef = useRef(null)

  function startTimer() {
    const id = setInterval(() => {
      setTimer(t => t + 1)
    }, 1000)
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

export default App