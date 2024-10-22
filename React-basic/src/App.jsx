import { useState } from 'react'

function App() {
  const [currTab, setCurrTab] = useState('home')

  return <div>

    <button
      onClick={() => setCurrTab('home')}
      style={{ backgroundColor: currTab === 'home' ? 'skyblue' : 'inherit' }}>Home
    </button>

    <button
      onClick={() => setCurrTab('notifications')}
      style={{ backgroundColor: currTab === 'notifications' ? 'skyblue' : 'inherit' }}>Notifications
    </button>

    <button
      onClick={() => setCurrTab('jobs')}
      style={{ backgroundColor: currTab === 'jobs' ? 'skyblue' : 'inherit' }}>Jobs
    </button>

    <button
      onClick={() => setCurrTab('contact')}
      style={{ backgroundColor: currTab === 'contact' ? 'skyblue' : 'inherit' }}>Contact
    </button>

  </div>
}




export default App