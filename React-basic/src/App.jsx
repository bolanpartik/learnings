import { useRef } from "react"

function App() {
  const inputRef = useRef()

  function inputFocus() {
    inputRef.current.focus()
  }

  return (
    <div>
      Login
      <input type="text" ref={inputRef} />
      <input type="text" />
      <button onClick={inputFocus}>Sumbit</button>
    </div>
  )
}

export default App