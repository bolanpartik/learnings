import { useEffect, useState } from 'react'

function App() {
  const [showClock, setShowClock] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setShowClock(showClock => !showClock)
    }, 5000)
  }, []) // empty dependency array(means runs only once when component render or mount)

  return (
    <>
      {/* conditional rendering of counter */}
      {showClock && <Counter />}
    </>
  )
}

// mount and un-mount every 5 seconds
function Counter() {
  const [count, setCount] = useState(0)

  // runs on every mount once
  useEffect(() => {
    const clock = setInterval(() => {
      console.log('inside clock')
      setCount(count => count + 1)
    }, 1000)

    // runs when the component un-mount because empty dependency array
    return function () {
      clearInterval(clock)
    }
  }, [])

  return <div>
    {count}
  </div>
}

export default App