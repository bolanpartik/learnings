import { useIsOnline } from "./hooks/useIsOnline"

function App() {

  const isOnline = useIsOnline()

  return (
    <>
      <p>user is : {isOnline ? 'online' : 'offline'}</p>
    </>
  )
}

export default App
