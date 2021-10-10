import React, { useState,useEffect } from 'react'

function HookCounterOne() {
    const[ count, setCount ] = useState(0)
    const[ name , setName ] = useState("")

    useEffect(() => {
        console.log("updating name in HookCounter")
        document.title = `${count} times Clicked`
    },[count])


    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click  {count}</button>
        </div>
    )
}

export default HookCounterOne
