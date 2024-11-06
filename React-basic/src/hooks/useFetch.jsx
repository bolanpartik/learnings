import { useEffect, useState } from "react"

export function useFetch(url) {
    const [data, setData] = useState(null)

    async function fetchData() {
        const response = await fetch(url)
        const parseRes = await response.json()
        setData(parseRes)
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data }
}