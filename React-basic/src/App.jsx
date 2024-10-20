import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function clickHandler() {
    setCount(count + 1)
  }

  return (
    <>
      <p>{count}</p>
      <Button clickHandler={clickHandler} />
    </>
  )
}

function Button(props) {
  return <button onClick={props.clickHandler}>Increment</button>
}

export default App