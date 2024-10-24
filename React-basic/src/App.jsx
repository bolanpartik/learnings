import { useState } from "react"

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false)

  return <div>
    <button onClick={() => setIsModelOpen(true)}>Open Model</button>
    <Model isOpen={isModelOpen} onClose={() => setIsModelOpen(false)}>
      <h3>New Recipe Idea! 🍽️</h3>
      <p>I'm excited to try a new dish this week. Any favorite recipes?</p>
      <p>Looking for something quick and delicious!</p>
    </Model>

  </div>
}

function Model({ isOpen, onClose, children }) {
  return (isOpen ?
    <div style={{
      border: '1px solid grey',
      borderRadius: '15px',
      padding: '20px',
      margin: '20px',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
      position: 'relative'
    }}>
      <button style={{
        position: 'absolute',
        right: 10,
        top: 10,
        border: 'none',
        background: 'inherit'
      }}
        onClick={onClose}>Close
      </button>
      {children}
    </div> : null)
}

export default App