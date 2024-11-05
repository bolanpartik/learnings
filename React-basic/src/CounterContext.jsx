import { createContext, useContext, useState } from 'react'

const CountContext = createContext()
export default function CounterContext() {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Parent />
    </CountContext.Provider>
  )
}

function Parent() {
  return <>
    <Incrase />
    <Decrease />
    <Value />
  </>
}

function Decrease() {
  const { setCount } = useContext(CountContext)
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>
}

function Incrase() {
  const { setCount } = useContext(CountContext)
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>
}

function Value() {
  const { count } = useContext(CountContext)
  return <p>Count: {count}</p>
}
