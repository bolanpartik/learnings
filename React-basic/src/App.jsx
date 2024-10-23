import { useState } from 'react'

function App() {
  const [currTab, setCurrTab] = useState(1)

  useEffect(() => {
    console.log('sending request to backend to get data for tab ' + currTab)
  }, [currTab])

  return <div>

    <button
      onClick={() => setCurrTab(1)}
      style={{ backgroundColor: currTab === 1 ? 'skyblue' : 'inherit' }}>todo1
    </button>

    <button
      onClick={() => setCurrTab(2)}
      style={{ backgroundColor: currTab === 2 ? 'skyblue' : 'inherit' }}>todo2
    </button>

    <button
      onClick={() => setCurrTab(3)}
      style={{ backgroundColor: currTab === 3 ? 'skyblue' : 'inherit' }}>todo3
    </button>

    <button
      onClick={() => setCurrTab(4)}
      style={{ backgroundColor: currTab === 4 ? 'skyblue' : 'inherit' }}>todo4
    </button>
  </div>
}




export default App