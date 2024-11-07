import { useState } from "react"
import { usePrev } from "./hooks/usePrev"

function App() {
  const [count, setCount] = useState(0)
  const prevVal = usePrev(count)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <p>Previous value is : {prevVal}</p>
    </div>
  )
}

export default App
