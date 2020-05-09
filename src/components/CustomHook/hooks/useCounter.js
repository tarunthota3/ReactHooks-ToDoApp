import {useState} from 'react';

function useCounter(initialCount = 0, value) {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => setCount(prevCount + value))
    }
    const decrement = () => {
        setCount(prevCount => setCount(prevCount - value))
    }

    const reset = () => {
        setCount(initialCount)
    }    
    return [count, increment, decrement, reset]
}

export default useCounter;