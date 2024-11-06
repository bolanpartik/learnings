import { useEffect, useState } from "react"

export function useFetch(url) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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
    }, [url])

    return {
        data,
        loading,
        error
    }
}