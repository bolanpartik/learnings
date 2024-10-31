import { useState } from "react"

function App() {
  const [timer, setTimer] = useState(0)
  const [intervalId, setIntervalId] = useState(null)

  function startClock() {
    const id = setInterval(() => {
      setTimer(t => t + 1)
    }, 1000)
    setIntervalId(id)
  }
  function stopClock() {
    clearInterval(intervalId)
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

export default App