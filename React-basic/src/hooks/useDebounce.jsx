import { useEffect, useRef, useState } from "react";

export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(null)
    const timerRef = useRef()

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        return function () {
            clearTimeout(timerRef.current)
        }
    }, [value])

    return debouncedValue
}