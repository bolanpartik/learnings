import { useState } from "react"
import { usePrev, usePrevUpdated } from "./hooks/usePrev"

function App() {
  const [count, setCount] = useState(0)
  const [something, setSomething] = useState()

  const prevVal = usePrev(count)
  const prevValUpdated = usePrevUpdated(count)

  // Do extra re-render
  const glitch = ()=> {
    setSomething(Math.random())
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={glitch}>Glitch</button>
      <p>Previous value is : {prevVal}</p>
      <p>Updated Previous value is  : {prevValUpdated}</p>
    </div>
  )
}

export default App
