import { useFetch } from "./hooks/useFetch"

function App() {

  const { data, loading, error } = useFetch('https://dummyjson.com/todos/1')
  if (error) {
    return <div>{error}</div>
  }
  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data.todo}</p>}
    </div>
  )
}

export default App
