import { useEffect, useState } from "react";

export function useIsOnline() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    function updateStatus() {
        setIsOnline(navigator.onLine)
    }
    useEffect(() => {

        window.addEventListener('online', updateStatus)
        window.addEventListener('offline', updateStatus)

        return () => {
            window.removeEventListener('online', updateStatus)
            window.removeEventListener('offline', updateStatus)
        }
    }, [])

    return isOnline
}