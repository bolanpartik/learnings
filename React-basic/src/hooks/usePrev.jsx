import { useEffect, useRef } from "react";

export function usePrev(value) {
    const ref = useRef(null)

    // useEffect run after the function returns, so value gets updated but the function already returned with prev value
    useEffect(() => {
        ref.current = value
    }, [value])

    // return first
    return ref.current
}