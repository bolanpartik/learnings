import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Parent count={count} setCount={setCount} />
    </div>
  )
}

function Parent({ count, setCount }) {
  return <>
    <Incrase count={count} setCount={setCount} />
    <Decrease count={count} setCount={setCount} />
    <Value count={count} setCount={setCount} />
  </>
}

function Decrease({ count, setCount }) {
  return <button onClick={() => setCount(count - 1)}>Decrease</button>
}

function Incrase({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increase</button>
}

function Value({ count }) {
  return <p>Count: {count}</p>
}


export default App
