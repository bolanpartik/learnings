import { useEffect, useRef } from "react";

export function usePrev(value) {
    const ref = useRef(null)

    // useEffect run after the function returns, so value gets updated but the function already returned with prev value
    useEffect(()=>{
        ref.current = value
    },[value])

    // return first
    return ref.current
}

// slightly better approach because if we do extra render with above code then the value will get upgraded 
export function usePrevUpdated(newVal, initial) {
    const ref = useRef({ value: newVal, prevVal: initial })

    // check if the value is updated, then run this 
    if (ref.current.value !== newVal) {
        ref.current.prevVal = ref.current.value
        ref.current.value = newVal
    }

    return ref.current.prevVal
}