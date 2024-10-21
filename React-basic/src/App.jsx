import { useEffect, useState } from 'react'
import Counter from './Counter'

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



function NotificationCounter() {
  const [notifications, setNotifications] = useState(0)

  function handle() {
    setNotifications(notifications + 1)
  }

  return <div >
    <div >
      <img src="https://cdn-icons-png.flaticon.com/512/3239/3239958.png" alt="" />
      <span>{notifications}</span>
    </div>

    <button onClick={handle}>Increase</button>

  </div>
}

export default App