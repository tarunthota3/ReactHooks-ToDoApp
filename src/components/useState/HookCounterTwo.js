import React, { useState } from 'react';

function HookCounterTwo() {
    const initialCount  = 0
    const [count , setCount] = useState(initialCount)

    const increment5 = () =>{
        for(let i = 1; i <= 5; i++){
            setCount(previousCount => previousCount + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(previousCount => setCount(previousCount + 1))}>Increment</button>
            <button onClick={() => setCount(previousCount => setCount(previousCount - 1))}>Decrement</button>
            <button onClick={increment5}>Increment 5</button>
        </div>
    );
}

export default HookCounterTwo;