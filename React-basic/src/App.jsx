import { useEffect, useState } from 'react'
import Counter from './Counter'
import NotificationCounter from './NotificationCounter'

function App() {
  const [showClock, setShowClock] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setShowClock(showClock => !showClock)
    }, 5000)
  }, []) // empty dependency array(means runs only once when component render or mount)

  return (
    <>
      <NotificationCounter/>
      {/* conditional rendering of counter */}
      {/* {showClock && <Counter />} */}
    </>
  )
}

export default App