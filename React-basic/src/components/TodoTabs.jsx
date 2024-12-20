import { useEffect, useState } from "react"

export default function TodoTabs() {

    const [currTab, setCurrTab] = useState(1)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        console.log('sending request to backend to get data for tab ' + currTab)
        fetch('https://jsonplaceholder.typicode.com/todos/' + currTab)
            .then(async res => {
                const response = await res.json()
                console.log(response)
                setData(response)
                setLoading(false)
            })
    }, [currTab])

    return <div>

        <button
            onClick={() => setCurrTab(1)}
            style={{ backgroundColor: currTab === 1 ? 'skyblue' : 'inherit' }}>todo1
        </button>

        <button
            onClick={() => setCurrTab(2)}
            style={{ backgroundColor: currTab === 2 ? 'skyblue' : 'inherit' }}>todo2
        </button>

        <button
            onClick={() => setCurrTab(3)}
            style={{ backgroundColor: currTab === 3 ? 'skyblue' : 'inherit' }}>todo3
        </button>

        <button
            onClick={() => setCurrTab(4)}
            style={{ backgroundColor: currTab === 4 ? 'skyblue' : 'inherit' }}>todo4
        </button>
        <br />
        {loading ? ' Loading...' : JSON.stringify(data)}
    </div>
}