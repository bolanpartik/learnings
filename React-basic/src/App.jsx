import { useFetch } from "./hooks/useFetch"

function App() {

  const { data } = useFetch('https://dummyjson.com/todos/2')

  return (
    <div>
      {data.todo}
    </div>
  )
}

export default App
