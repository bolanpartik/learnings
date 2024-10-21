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
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/3239/3239958.png" alt="" style={{ width: 30 }} />
      <span style={{ fontSize: 20,color:'red' }}>{notifications}</span>
    </div>

    <button onClick={handle} style={{marginTop:10}}>Increase</button>

  </div>
}

export default App