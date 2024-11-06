import { useEffect, useRef, useState } from "react"

export function useFetch(url, refetchDelay) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const interValId = useRef()

    async function fetchData() {
        try {
            setLoading(true)
            const response = await fetch(url)
            const parseRes = await response.json()
            setData(parseRes)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
        if (refetchDelay) {
            interValId.current = setInterval(fetchData, refetchDelay)
        }
        return () => clearInterval(interValId.current)
    }, [url, refetchDelay])

    return {
        data,
        loading,
        error
    }
}