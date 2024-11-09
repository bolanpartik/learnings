import { useEffect, useState } from "react"
import { usePrev, usePrevUpdated } from "./hooks/usePrev"
import { useDebounce } from "./hooks/useDebounce"

function App() {
  const [value, setValue] = useState(null)
  const debouncedValue = useDebounce(value, 200)

  // In actual send request to backend url to get data
  function getData(){
    console.log('fetching data from db')
  }

  useEffect(()=>{
    getData()
  },[debouncedValue])

  return (
    <div>
      <input type="text" onChange={(e)=> setValue(e.target.value)} />
      <button>Search</button>
    </div>
  )
}

export default App
