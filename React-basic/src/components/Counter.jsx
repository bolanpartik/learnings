// mount and un-mount every 5 seconds
export default function Counter() {
  const [count, setCount] = useState(0)

  // runs on every mount once
  useEffect(() => {
    const clock = setInterval(() => {
      console.log('inside clock')
      setCount(count => count + 1)
    }, 1000)

    // runs when the component un-mount because empty dependency array
    return function () {
      clearInterval(clock)
    }
  }, [])

  return <div>
    {count}
  </div>
}