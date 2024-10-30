import { useEffect, useRef, useState } from "react"

export default function ScrollRef() {
    const [messages, setMessages] = useState(["Heloo", "Kya haal hai"])
    const [count, setCount] = useState(1)
    const scrollRef = useRef()

    const addMessage = () => {
        setMessages(prevMessages => [...prevMessages, `Adding message number ${count}`]);
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages])

    return (
        <div>
            <div
                ref={scrollRef}
                style={{ height: "100px", padding: "10px", overflowY: "scroll", border: "1px solid black" }}
            >
                {messages.map((msg, i) => (
                    <div key={i}>{msg}</div>
                ))}
            </div>
            <button onClick={addMessage}>Add Message</button>
        </div>
    )
}