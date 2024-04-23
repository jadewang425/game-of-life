import { useEffect, useRef } from "react";

// custom hook
export default function useInterval(callback, delay) {
    const saveCB = useRef(callback)

    useEffect(() => {
        saveCB.current = callback
    }, [callback])

    useEffect(() => {
        if (delay === null) {
            return
        }

        const id = setInterval(() => saveCB.current(), delay)

        return () => clearInterval(id)
    }, [delay])
}