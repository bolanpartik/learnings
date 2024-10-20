import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    setInterval(()=>{
      setCount(count => count + 1)
    },1000)
  },[])


  return (
    <>
      <p>{count}</p>
    </>
  )
}

export default App